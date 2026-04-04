'use client';

import { useState } from 'react';
import { sections, quizzes } from '@/lib/quizData';
import { sectionContent } from '@/lib/sectionContent';
import { PASS_THRESHOLD } from '@/lib/constants';
import NavBar from './NavBar';
import QuestionCard from './QuestionCard';
import { useQuiz } from '../hooks/useQuiz';

export default function SectionView({ currentView, onNavigate, quizScores, setQuizScores, onReset }) {
  const { currentQuestionIndex, setCurrentQuestionIndex, selectedAnswers, selectAnswer, resetQuiz, scoreQuiz, getMissedQuestions } = useQuiz();
  const [currentSection, setCurrentSection] = useState(1);
  const [isStudyMode, setIsStudyMode] = useState(true);

  const section = sections.find(s => s.number === currentSection);
  const content = sectionContent[currentSection]?.keyPoints || [];
  const quiz = quizzes[currentSection] || [];
  const currentQuestion = quiz[currentQuestionIndex];

  function switchSection(num) {
    setCurrentSection(num);
    setIsStudyMode(true);
    resetQuiz();
  }

  function switchMode(study) {
    setIsStudyMode(study);
    resetQuiz();
  }

  function handleSubmitQuiz() {
    const pct = scoreQuiz(quiz);
    setQuizScores(prev => ({ ...prev, [currentSection]: pct }));
  }

  const missed = getMissedQuestions(quiz);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar currentView={currentView} onNavigate={onNavigate} onReset={onReset} />
      <header className="bg-blue-900 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Section {section?.number}: {section?.title}</h1>
          <p className="text-blue-200">{section?.description}</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6 flex gap-2 flex-wrap">
          {sections.slice(0, 9).map(s => (
            <button
              key={s.number}
              onClick={() => switchSection(s.number)}
              className={`py-2 px-4 rounded font-semibold transition ${
                currentSection === s.number ? 'bg-blue-600 text-white' : 'bg-white text-blue-900 hover:bg-gray-100 border border-blue-200'
              }`}
            >
              {s.number}. {s.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => switchMode(true)}
              className={`py-2 px-6 rounded font-bold transition ${isStudyMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Study Mode
            </button>
            <button
              onClick={() => switchMode(false)}
              className={`py-2 px-6 rounded font-bold transition ${!isStudyMode ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Quiz Mode ({quiz.length} questions)
            </button>
          </div>

          {isStudyMode ? (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Study Material</h2>
              <div className="space-y-6">
                {content.map((block, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{block.heading}</h3>
                    <p className="text-gray-700 leading-relaxed">{block.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : currentQuestion ? (
            <div>
              <p className="text-gray-600 mb-2">Question {currentQuestionIndex + 1} of {quiz.length}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}></div>
              </div>
              <QuestionCard
                question={currentQuestion}
                selectedAnswer={selectedAnswers[currentQuestionIndex]}
                onSelectAnswer={(idx) => selectAnswer(currentQuestionIndex, idx)}
                showFeedback={true}
              />
              <div className="flex gap-4 justify-between">
                <button onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} className="bg-gray-400 hover:bg-gray-500 disabled:opacity-50 text-white font-bold py-2 px-6 rounded transition">Previous</button>
                {currentQuestionIndex === quiz.length - 1 ? (
                  <button onClick={handleSubmitQuiz} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition">
                    Submit Quiz
                  </button>
                ) : (
                  <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">Next</button>
                )}
              </div>
              {quizScores[currentSection] !== undefined && currentQuestionIndex === quiz.length - 1 && (
                <div className={`mt-6 p-6 rounded-lg text-center ${quizScores[currentSection] >= PASS_THRESHOLD ? 'bg-green-50 border-2 border-green-400' : 'bg-orange-50 border-2 border-orange-400'}`}>
                  <p className="text-2xl font-bold mb-2">{quizScores[currentSection]}%</p>
                  <p className="text-gray-700">{quizScores[currentSection] >= PASS_THRESHOLD ? 'Great work! You passed this section.' : `Review the study material and try again. You need ${PASS_THRESHOLD}% to pass.`}</p>
                  {missed.length > 0 && (
                    <div className="mt-4 text-left">
                      <p className="font-bold text-gray-800 mb-2">Questions to review:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {missed.map(q => <li key={q.id}>• {q.question}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

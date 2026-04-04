'use client';

import { sections } from '@/lib/quizData';
import { PASS_THRESHOLD, LOW_TIME_WARNING_SECONDS } from '@/lib/constants';
import NavBar from './NavBar';
import QuestionCard from './QuestionCard';
import { useExam } from '../hooks/useExam';

export default function ExamView({ currentView, onNavigate, onReset }) {
  const {
    examQuestions, examAnswers, examTimeLeft, examStarted, examFinished, examResults,
    currentQuestionIndex, setCurrentQuestionIndex, startExam, submitExam, selectAnswer, formatTime,
  } = useExam();

  // ── Results ──
  if (examFinished && examResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar currentView={currentView} onNavigate={onNavigate} onReset={onReset} />
        <header className={`${examResults.passed ? 'bg-green-700' : 'bg-red-700'} text-white py-6 shadow-md`}>
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold">{examResults.passed ? 'Congratulations!' : 'Keep Studying'}</h1>
            <p className="text-white/80">{examResults.passed ? 'You passed the practice exam.' : `You did not reach the ${PASS_THRESHOLD}% pass mark this time.`}</p>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8 text-center">
            <p className={`text-6xl font-bold mb-2 ${examResults.passed ? 'text-green-600' : 'text-red-600'}`}>{examResults.percentage}%</p>
            <p className="text-gray-600 text-lg">{examResults.correct} correct out of {examResults.total} questions</p>
            <p className="text-gray-500">Pass mark: {PASS_THRESHOLD}% (42 out of 60)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Score by Section</h2>
            <div className="space-y-3">
              {Object.keys(examResults.sectionBreakdown).sort((a, b) => a - b).map(sNum => {
                const s = examResults.sectionBreakdown[sNum];
                const pct = Math.round((s.correct / s.total) * 100);
                const sectionTitle = sections.find(x => x.number === parseInt(sNum))?.title || `Section ${sNum}`;
                return (
                  <div key={sNum} className="flex items-center gap-4">
                    <span className="w-48 text-sm font-semibold text-gray-700 truncate">S{sNum}: {sectionTitle}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div className={`h-4 rounded-full transition-all ${pct >= PASS_THRESHOLD ? 'bg-green-500' : 'bg-orange-400'}`} style={{ width: `${pct}%` }}></div>
                    </div>
                    <span className="text-sm font-bold w-20 text-right">{s.correct}/{s.total} ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Review Incorrect Answers</h2>
            <div className="space-y-4">
              {examQuestions.map((q, idx) => {
                if (examAnswers[idx] === q.correctIndex) return null;
                const sTitle = sections.find(x => x.number === q.sectionNum)?.title || '';
                return (
                  <div key={idx} className="border-l-4 border-red-400 pl-4 py-2">
                    <p className="text-xs text-gray-400 mb-1">Section {q.sectionNum}: {sTitle}</p>
                    <p className="font-semibold text-gray-800 mb-1">{q.question}</p>
                    <p className="text-red-600 text-sm">Your answer: {examAnswers[idx] !== undefined ? q.options[examAnswers[idx]] : 'No answer'}</p>
                    <p className="text-green-700 text-sm font-semibold">Correct: {q.options[q.correctIndex]}</p>
                    <p className="text-gray-500 text-sm mt-1">{q.explanation}</p>
                    {q.reference && (
                      <p className="text-xs text-gray-400 mt-1 italic">📖 {q.reference}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button onClick={startExam} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Take Another Exam
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ── Pre-exam ──
  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar currentView={currentView} onNavigate={onNavigate} onReset={onReset} />
        <header className="bg-green-800 text-white py-6 shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold">Practice Exam</h1>
            <p className="text-green-200">Simulates the ROC(M) written examination</p>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">ROC(M) Practice Written Exam</h2>
            <div className="space-y-3 text-gray-600 mb-8 text-left max-w-md mx-auto">
              <p><span className="font-bold">Questions:</span> 60 multiple choice (randomly selected from all 9 sections)</p>
              <p><span className="font-bold">Time limit:</span> 60 minutes</p>
              <p><span className="font-bold">Pass mark:</span> {PASS_THRESHOLD}% (42 out of 60 correct)</p>
              <p><span className="font-bold">Format:</span> Same structure as the real exam</p>
            </div>
            <p className="text-sm text-gray-400 mb-6">The real ROC(M) exam also includes an oral component testing phonetic alphabet and distress call procedures. Use the Phonetic Trainer and Distress Call Builder to prepare for that portion.</p>
            <button onClick={startExam} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg transition text-lg">
              Start Practice Exam
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ── Exam in progress ──
  const currentQ = examQuestions[currentQuestionIndex];
  const answeredCount = Object.keys(examAnswers).length;
  const isLowTime = examTimeLeft < LOW_TIME_WARNING_SECONDS;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`sticky top-0 z-50 ${isLowTime ? 'bg-red-700' : 'bg-green-800'} text-white py-3 shadow-md`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <span className="font-bold">Question {currentQuestionIndex + 1} of {examQuestions.length}</span>
            <span className="ml-4 text-sm opacity-80">{answeredCount} answered</span>
          </div>
          <div className="flex items-center gap-6">
            <span className={`font-mono text-xl font-bold ${isLowTime ? 'animate-pulse' : ''}`}>{formatTime(examTimeLeft)}</span>
            <button onClick={() => { if (confirm('Are you sure you want to submit? Unanswered questions will be marked incorrect.')) submitExam(); }} className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded font-bold transition text-sm">
              Submit Exam
            </button>
          </div>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-wrap gap-1">
            {examQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-8 h-8 rounded text-xs font-bold transition ${
                  idx === currentQuestionIndex ? 'bg-blue-600 text-white'
                  : examAnswers[idx] !== undefined ? 'bg-green-200 text-green-800'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {currentQ && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-xs text-gray-400 mb-4">Section {currentQ.sectionNum}: {sections.find(s => s.number === currentQ.sectionNum)?.title}</p>
            <QuestionCard
              question={currentQ}
              selectedAnswer={examAnswers[currentQuestionIndex]}
              onSelectAnswer={(idx) => selectAnswer(currentQuestionIndex, idx)}
              showFeedback={false}
            />
            <div className="flex justify-between">
              <button onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} className="bg-gray-400 hover:bg-gray-500 disabled:opacity-50 text-white font-bold py-2 px-6 rounded transition">Previous</button>
              {currentQuestionIndex < examQuestions.length - 1 ? (
                <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">Next</button>
              ) : (
                <button onClick={() => { if (confirm('Submit your exam? Unanswered questions will be marked incorrect.')) submitExam(); }} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition">Submit Exam</button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

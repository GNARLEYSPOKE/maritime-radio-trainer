'use client';

import { useState } from 'react';
import { sections, quizzes } from '@/lib/quizData';
import { sectionContent } from '@/lib/sectionContent';
import { PASS_THRESHOLD } from '@/lib/constants';
import { viewThemes, palette, ui } from '@/lib/theme';
import Layout from './Layout';
import QuestionCard from './QuestionCard';
import { HeaderGeo } from './GeoShapes';
import { useQuiz } from '../hooks/useQuiz';

const SUB_TOPIC_ORDER = ['antennas', 'ais', 'batteries', 'channels', 'mfhf', 'alternatives'];

export default function SectionView({ currentView, onNavigate, quizScores, setQuizScores, onReset }) {
  const { currentQuestionIndex, setCurrentQuestionIndex, selectedAnswers, selectAnswer, resetQuiz, scoreQuiz, getMissedQuestions } = useQuiz();
  const [currentSection, setCurrentSection] = useState(1);
  const [isStudyMode, setIsStudyMode] = useState(true);
  const [activeSubTopic, setActiveSubTopic] = useState('antennas');
  const t = viewThemes.section;

  const section = sections.find(s => s.number === currentSection);
  const sectionData = sectionContent[currentSection];
  const isReference = currentSection === 10;
  const content = isReference
    ? sectionData?.subTopics?.[activeSubTopic]?.keyPoints || []
    : sectionData?.keyPoints || [];
  const quiz = quizzes[currentSection] || [];
  const currentQuestion = quiz[currentQuestionIndex];

  function switchSection(num) {
    setCurrentSection(num);
    setIsStudyMode(true);
    resetQuiz();
    if (num === 10) setActiveSubTopic('antennas');
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
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      <header className={`${t.headerBg} ${t.headerText} py-8 relative overflow-hidden`}>
        <HeaderGeo variant="study" className="w-full h-full absolute inset-0" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className={`text-xs uppercase tracking-[0.15em] ${t.headerSubtext} mb-2 font-medium`}>
            {isReference ? 'Supplementary' : `Section ${section?.number}`}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {isReference
              ? (sectionData?.subTopics?.[activeSubTopic]?.title || 'Supplementary Reference')
              : section?.title}
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Section selector */}
        <div className="mb-8 flex gap-2 flex-wrap">
          {sections.map(s => (
            <button
              key={s.number}
              onClick={() => switchSection(s.number)}
              className={`py-2 px-4 rounded text-sm font-medium transition ${
                currentSection === s.number
                  ? `bg-[${palette.navy}] text-white`
                  : `${ui.card} hover:border-[${palette.stone}]`
              }`}
            >
              {s.number === 10 ? 'Reference' : `${s.number}. ${s.title}`}
            </button>
          ))}
        </div>

        {/* Section 10: Sub-topic picker */}
        {isReference && (
          <div className="mb-8 flex gap-2 flex-wrap">
            {SUB_TOPIC_ORDER.map(key => {
              const topic = sectionData?.subTopics?.[key];
              if (!topic) return null;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSubTopic(key)}
                  className={`py-2 px-4 rounded text-sm font-medium transition ${
                    activeSubTopic === key
                      ? `bg-[${palette.teal}] text-white`
                      : `border border-[${palette.border}] text-[${palette.textDark}] hover:bg-[${palette.cream}]`
                  }`}
                >
                  {topic.title}
                </button>
              );
            })}
          </div>
        )}

        <div className={`${ui.card} ${ui.cardPadding}`}>
          {/* Mode toggle — only for sections 1-9 */}
          {!isReference && (
            <div className="flex gap-3 mb-8">
              <button
                onClick={() => switchMode(true)}
                className={`py-2.5 px-6 rounded text-sm font-medium transition ${
                  isStudyMode ? `bg-[${palette.navy}] text-white` : `border border-[${palette.border}] text-[${palette.textDark}] hover:bg-[${palette.cream}]`
                }`}
              >
                Study Mode
              </button>
              <button
                onClick={() => switchMode(false)}
                className={`py-2.5 px-6 rounded text-sm font-medium transition ${
                  !isStudyMode ? `bg-[${palette.navy}] text-white` : `border border-[${palette.border}] text-[${palette.textDark}] hover:bg-[${palette.cream}]`
                }`}
              >
                Quiz Mode ({quiz.length} questions)
              </button>
            </div>
          )}

          {/* Section 10 non-examinable notice */}
          {isReference && (
            <div className={`mb-8 px-4 py-3 rounded bg-[${palette.cream}] border border-[${palette.border}]`}>
              <p className={`text-xs text-[${palette.textMuted}]`}>
                <span className="font-medium">Reference material</span> — this content is non-examinable but useful for practical seamanship and radio operation.
              </p>
            </div>
          )}

          {/* Study content (sections 1-9 study mode OR section 10) */}
          {(isStudyMode || isReference) ? (
            <div>
              <h2 className={`text-xl font-semibold ${ui.heading} mb-8`}>
                {isReference ? sectionData?.subTopics?.[activeSubTopic]?.title : 'Study Material'}
              </h2>
              <div className="space-y-8">
                {content.map((block, idx) => (
                  <div key={idx} className={`border-l-2 border-[${palette.navyMuted}]/30 pl-6`}>
                    <h3 className={`text-base font-semibold text-[${palette.textDark}] mb-2`}>{block.heading}</h3>
                    <p className={`text-[${palette.textMuted}] leading-relaxed`}>{block.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : currentQuestion ? (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className={ui.label}>Question {currentQuestionIndex + 1} of {quiz.length}</p>
              </div>
              <div className={`w-full bg-[${palette.cream}] rounded-full h-1 mb-8`}>
                <div className={`bg-[${palette.navy}] h-1 rounded-full transition-all duration-500`} style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}></div>
              </div>
              <QuestionCard
                question={currentQuestion}
                selectedAnswer={selectedAnswers[currentQuestionIndex]}
                onSelectAnswer={(idx) => selectAnswer(currentQuestionIndex, idx)}
                showFeedback={true}
              />
              <div className="flex gap-4 justify-between">
                <button onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} className={`${ui.btnSecondary} disabled:opacity-30`}>Previous</button>
                {currentQuestionIndex === quiz.length - 1 ? (
                  <button onClick={handleSubmitQuiz} className={ui.btnPrimary}>Submit Quiz</button>
                ) : (
                  <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className={ui.btnPrimary}>Next</button>
                )}
              </div>
              {quizScores[currentSection] !== undefined && currentQuestionIndex === quiz.length - 1 && (
                <div className={`mt-8 p-8 rounded-lg text-center border ${quizScores[currentSection] >= PASS_THRESHOLD ? 'bg-[#EFF5F1] border-[#C9E0D2]' : 'bg-[#F7EFEF] border-[#E8C9C9]'}`}>
                  <p className={`text-3xl font-semibold mb-2 ${quizScores[currentSection] >= PASS_THRESHOLD ? 'text-[#3B5A4A]' : 'text-[#7A3B3B]'}`}>{quizScores[currentSection]}%</p>
                  <p className={`text-[${palette.textMuted}]`}>{quizScores[currentSection] >= PASS_THRESHOLD ? 'Great work. You passed this section.' : `Review the study material and try again. You need ${PASS_THRESHOLD}% to pass.`}</p>
                  {missed.length > 0 && (
                    <div className="mt-6 text-left">
                      <p className={`font-medium text-[${palette.textDark}] mb-3 text-sm`}>Questions to review:</p>
                      <ul className={`space-y-1 text-sm text-[${palette.textMuted}]`}>
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
    </Layout>
  );
}

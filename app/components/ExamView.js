'use client';

import { sections } from '@/lib/quizData';
import { PASS_THRESHOLD, LOW_TIME_WARNING_SECONDS } from '@/lib/constants';
import { viewThemes, palette, ui } from '@/lib/theme';
import Layout from './Layout';
import { HeaderGeo, DotGrid } from './GeoShapes';
import { WaveDivider } from './WaveDivider';
import QuestionCard from './QuestionCard';
import { useExam } from '../hooks/useExam';

export default function ExamView({ currentView, onNavigate, onReset }) {
  const {
    examQuestions, examAnswers, examTimeLeft, examStarted, examFinished, examResults,
    currentQuestionIndex, setCurrentQuestionIndex, startExam, submitExam, selectAnswer, formatTime,
  } = useExam();

  const t = viewThemes.exam;

  // ── Results ──
  if (examFinished && examResults) {
    const passed = examResults.passed;
    return (
      <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
        <header className={`${passed ? 'bg-[#3B5A4A]' : 'bg-[#7A3B3B]'} text-white pt-14 pb-0 relative overflow-hidden`}>
          <HeaderGeo variant="exam" className="w-full h-full absolute inset-0" />
          <DotGrid cols={8} rows={4} gap={24} dotSize={1.5} color="#ffffff" opacity={0.03} className="absolute top-6 right-12" />
          <div className="max-w-5xl mx-auto px-6 relative z-10 pb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3 font-medium">Exam Complete</p>
            <h1 className="text-4xl font-semibold tracking-tight">{passed ? 'Congratulations' : 'Keep Studying'}</h1>
          </div>
          <WaveDivider />
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className={`${ui.card} p-10 mb-8 text-center`}>
            <p className={`text-5xl font-semibold mb-2 ${passed ? 'text-[#3B5A4A]' : 'text-[#7A3B3B]'}`}>{examResults.percentage}%</p>
            <p className={`text-[${palette.textMuted}]`}>{examResults.correct} correct out of {examResults.total} questions</p>
            <p className={`text-sm text-[${palette.textLight}] mt-1`}>Pass mark: {PASS_THRESHOLD}% (42 out of 60)</p>
          </div>

          <div className={`${ui.card} ${ui.cardPadding} mb-8`}>
            <h2 className={`text-lg font-semibold ${ui.heading} mb-6`}>Score by Section</h2>
            <div className="space-y-4">
              {Object.keys(examResults.sectionBreakdown).sort((a, b) => a - b).map(sNum => {
                const s = examResults.sectionBreakdown[sNum];
                const pct = Math.round((s.correct / s.total) * 100);
                const sectionTitle = sections.find(x => x.number === parseInt(sNum))?.title || `Section ${sNum}`;
                return (
                  <div key={sNum} className="flex items-center gap-4">
                    <span className={`w-48 text-sm font-medium text-[${palette.textDark}] truncate`}>S{sNum}: {sectionTitle}</span>
                    <div className={`flex-1 bg-[${palette.cream}] rounded-full h-2`}>
                      <div className={`h-2 rounded-full transition-all duration-500 ${pct >= PASS_THRESHOLD ? 'bg-[#3B5A4A]' : 'bg-[#D4A843]'}`} style={{ width: `${pct}%` }}></div>
                    </div>
                    <span className={`text-sm font-medium w-20 text-right text-[${palette.textMuted}]`}>{s.correct}/{s.total} ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${ui.card} ${ui.cardPadding} mb-8`}>
            <h2 className={`text-lg font-semibold ${ui.heading} mb-6`}>Review Incorrect Answers</h2>
            <div className="space-y-5">
              {examQuestions.map((q, idx) => {
                if (examAnswers[idx] === q.correctIndex) return null;
                const sTitle = sections.find(x => x.number === q.sectionNum)?.title || '';
                return (
                  <div key={idx} className={`border-l-2 border-[#E8C9C9] pl-5 py-2`}>
                    <p className={ui.label + ' mb-1'}>Section {q.sectionNum}: {sTitle}</p>
                    <p className={`font-medium text-[${palette.textDark}] text-sm mb-2`}>{q.question}</p>
                    <p className="text-[#7A3B3B] text-sm">Your answer: {examAnswers[idx] !== undefined ? q.options[examAnswers[idx]] : 'No answer'}</p>
                    <p className="text-[#3B5A4A] text-sm font-medium">Correct: {q.options[q.correctIndex]}</p>
                    <p className={`text-[${palette.textLight}] text-sm mt-1`}>{q.explanation}</p>
                    {q.reference && <p className={`text-xs text-[${palette.textLight}] mt-1 italic`}>{q.reference}</p>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button onClick={startExam} className={ui.btnPrimary}>Take Another Exam</button>
          </div>
        </main>
      </Layout>
    );
  }

  // ── Pre-exam ──
  if (!examStarted) {
    return (
      <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
        <header className={`${t.headerBg} ${t.headerText} pt-14 pb-0 relative overflow-hidden`}>
          <HeaderGeo variant="exam" className="w-full h-full absolute inset-0" />
          <DotGrid cols={8} rows={4} gap={24} dotSize={1.5} color="#ffffff" opacity={0.03} className="absolute top-6 right-12" />
          <div className="max-w-5xl mx-auto px-6 relative z-10 pb-12">
            <p className={`text-xs uppercase tracking-[0.2em] ${t.headerSubtext} mb-3 font-medium`}>Written Examination</p>
            <h1 className="text-4xl font-semibold tracking-tight">Practice Exam</h1>
          </div>
          <WaveDivider />
        </header>
        <main className="max-w-3xl mx-auto px-6 py-16">
          <div className={`${ui.card} p-10 text-center`}>
            <h2 className={`text-xl font-semibold ${ui.heading} mb-8`}>ROC(M) Practice Written Exam</h2>
            <div className={`space-y-3 text-[${palette.textMuted}] text-sm mb-10 text-left max-w-md mx-auto`}>
              <p><span className={`font-medium text-[${palette.textDark}]`}>Questions:</span> 60 multiple choice (randomly selected from all 9 sections)</p>
              <p><span className={`font-medium text-[${palette.textDark}]`}>Time limit:</span> 60 minutes</p>
              <p><span className={`font-medium text-[${palette.textDark}]`}>Pass mark:</span> {PASS_THRESHOLD}% (42 out of 60 correct)</p>
              <p><span className={`font-medium text-[${palette.textDark}]`}>Format:</span> Same structure as the real exam</p>
            </div>
            <p className={`text-xs text-[${palette.textLight}] mb-8 max-w-md mx-auto`}>The real ROC(M) exam also includes an oral component. Use the Phonetic Trainer and Distress Call Builder to prepare.</p>
            <button onClick={startExam} className={`${ui.btnPrimary} py-4 px-12 text-base`}>
              Start Practice Exam
            </button>
          </div>
        </main>
      </Layout>
    );
  }

  // ── Exam in progress ──
  const currentQ = examQuestions[currentQuestionIndex];
  const answeredCount = Object.keys(examAnswers).length;
  const isLowTime = examTimeLeft < LOW_TIME_WARNING_SECONDS;

  return (
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      <div className={`sticky top-0 z-50 ${isLowTime ? 'bg-[#7A3B3B]' : 'bg-[#3B5A4A]'} text-white py-3`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div>
            <span className="font-medium text-sm">Question {currentQuestionIndex + 1} of {examQuestions.length}</span>
            <span className="ml-4 text-sm text-white/50">{answeredCount} answered</span>
          </div>
          <div className="flex items-center gap-6">
            <span className={`font-mono text-lg font-medium ${isLowTime ? 'animate-pulse' : ''}`}>{formatTime(examTimeLeft)}</span>
            <button onClick={() => { if (confirm('Are you sure you want to submit? Unanswered questions will be marked incorrect.')) submitExam(); }} className="bg-white/15 hover:bg-white/25 px-4 py-1.5 rounded font-medium transition text-sm">
              Submit Exam
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <div className="flex flex-wrap gap-1.5">
            {examQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-8 h-8 rounded text-xs font-medium transition ${
                  idx === currentQuestionIndex ? `bg-[${palette.navy}] text-white`
                  : examAnswers[idx] !== undefined ? 'bg-[#EFF5F1] text-[#3B5A4A]'
                  : `bg-[${palette.cream}] text-[${palette.textLight}] hover:bg-[${palette.sand}]`
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {currentQ && (
          <div className={`${ui.card} ${ui.cardPadding}`}>
            <p className={ui.label + ' mb-6'}>Section {currentQ.sectionNum}: {sections.find(s => s.number === currentQ.sectionNum)?.title}</p>
            <QuestionCard
              question={currentQ}
              selectedAnswer={examAnswers[currentQuestionIndex]}
              onSelectAnswer={(idx) => selectAnswer(currentQuestionIndex, idx)}
              showFeedback={false}
            />
            <div className="flex justify-between">
              <button onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} className={`${ui.btnSecondary} disabled:opacity-30`}>Previous</button>
              {currentQuestionIndex < examQuestions.length - 1 ? (
                <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className={ui.btnPrimary}>Next</button>
              ) : (
                <button onClick={() => { if (confirm('Submit your exam? Unanswered questions will be marked incorrect.')) submitExam(); }} className={ui.btnPrimary}>Submit Exam</button>
              )}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}

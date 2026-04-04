'use client';

import { sections } from '@/lib/quizData';
import { PASS_THRESHOLD } from '@/lib/constants';
import { viewThemes, palette, ui } from '@/lib/theme';
import Layout from './Layout';

export default function HomeView({ currentView, onNavigate, quizScores, onStartStudy, onReset }) {
  const t = viewThemes.home;

  return (
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      <header className={`${t.headerBg} ${t.headerText} py-16`}>
        <div className="max-w-5xl mx-auto px-6">
          <p className={`text-xs uppercase tracking-[0.15em] ${t.headerSubtext} mb-3 font-medium`}>ROC(M) Certification Study Guide</p>
          <h1 className="text-4xl font-semibold tracking-tight">Maritime Radio Trainer</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { onClick: onStartStudy, icon: '📖', title: 'Study & Quiz', desc: '9 sections of study material with 92 practice questions validated against the official manual.', color: 'text-[#2C3E6B]' },
            { onClick: () => onNavigate('phonetic'), icon: '🔤', title: 'Phonetic Trainer', desc: 'Practice the NATO phonetic alphabet and number pronunciation for your oral exam.', color: 'text-[#5B4A6B]' },
            { onClick: () => onNavigate('distress'), icon: '🆘', title: 'Distress Calls', desc: 'Build and practice MAYDAY, PAN PAN, and SECURITE calls with your own vessel details.', color: 'text-[#7A3B3B]' },
            { onClick: () => onNavigate('exam'), icon: '📝', title: 'Practice Exam', desc: '60 random questions, 60 minute timer. Simulates the real ROC(M) written exam.', color: 'text-[#3B5A4A]' },
          ].map(card => (
            <button
              key={card.title}
              onClick={card.onClick}
              className={`${ui.card} ${ui.cardPadding} ${ui.cardHover} text-left group transition-all duration-300`}
            >
              <div className="text-2xl mb-4">{card.icon}</div>
              <h2 className={`text-lg font-semibold ${card.color} mb-2 tracking-tight`}>{card.title}</h2>
              <p className={`text-sm text-[${palette.textMuted}] leading-relaxed`}>{card.desc}</p>
            </button>
          ))}
        </div>

        {Object.keys(quizScores).length > 0 && (
          <div className={`${ui.card} ${ui.cardPadding}`}>
            <h2 className={`text-lg font-semibold ${ui.heading} mb-6`}>Your Progress</h2>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
              {sections.slice(0, 9).map(s => {
                const score = quizScores[s.number];
                const passed = score >= PASS_THRESHOLD;
                const attempted = score !== undefined;
                return (
                  <div key={s.number} className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-medium text-sm ${
                      passed ? 'bg-[#3B5A4A] text-white'
                      : attempted ? 'bg-[#D4A843]/20 text-[#7A3B3B]'
                      : `bg-[${palette.cream}] text-[${palette.textLight}]`
                    }`}>
                      {attempted ? `${score}%` : s.number}
                    </div>
                    <p className={`text-xs mt-2 text-[${palette.textLight}]`}>S{s.number}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}

'use client';

import { sections } from '@/lib/quizData';
import { PASS_THRESHOLD } from '@/lib/constants';
import { palette, ui } from '@/lib/theme';
import Layout from './Layout';
import { HeaderGeo, GeoDivider, Diamond, Triangle, Circle, HalfCircle, DotGrid } from './GeoShapes';

export default function HomeView({ currentView, onNavigate, quizScores, onStartStudy, onReset }) {
  return (
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      {/* Hero — asymmetric with geometric decoration */}
      <header className={`bg-[${palette.navy}] text-white py-20 relative overflow-hidden`}>
        <HeaderGeo variant="home" className="w-full h-full absolute inset-0" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <HalfCircle size={20} color={palette.coral} />
            <Diamond size={10} color={palette.mustard} />
            <Circle size={8} color={palette.teal} />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight mb-3">Maritime Radio<br />Trainer</h1>
          <p className="text-white/50 text-lg max-w-md">Canadian ROC(M) certification study guide. Everything you need for the written and oral exam.</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Feature cards — intentionally asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          {/* Study — large, spans 7 cols */}
          <button
            onClick={onStartStudy}
            className={`md:col-span-7 ${ui.card} p-10 text-left group transition-all duration-300 ${ui.cardHover} relative overflow-hidden`}
          >
            <DotGrid cols={6} rows={4} gap={10} dotSize={3} color={palette.teal} opacity={0.12} className="absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-4">
              <HalfCircle size={28} color={palette.teal} />
              <Diamond size={10} color={palette.coral} className="opacity-60" />
            </div>
            <h2 className="text-xl font-semibold text-[#2C3E6B] mb-2 tracking-tight">Study & Quiz</h2>
            <p className={`text-sm text-[${palette.textMuted}] leading-relaxed max-w-sm`}>9 sections of study material with 92 practice questions validated against the official Maritime Radio Course manual.</p>
            <div className={`mt-6 text-xs font-medium text-[${palette.teal}] uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300`}>Start studying →</div>
          </button>

          {/* Phonetic — stacked with exam on right side */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <button
              onClick={() => onNavigate('phonetic')}
              className={`${ui.card} p-8 text-left group transition-all duration-300 ${ui.cardHover} relative overflow-hidden flex-1`}
            >
              <Triangle size={40} color={palette.mustard} rotate={15} className="absolute -top-2 -right-2 opacity-10" />
              <div className="flex items-center gap-2 mb-3">
                <Triangle size={16} color={palette.mustard} />
                <Circle size={6} color={palette.coral} className="opacity-50" />
              </div>
              <h2 className="text-lg font-semibold text-[#5B4A6B] mb-1 tracking-tight">Phonetic Trainer</h2>
              <p className={`text-sm text-[${palette.textMuted}] leading-relaxed`}>NATO alphabet and number pronunciation for the oral exam.</p>
            </button>

            <button
              onClick={() => onNavigate('exam')}
              className={`${ui.card} p-8 text-left group transition-all duration-300 ${ui.cardHover} relative overflow-hidden flex-1`}
            >
              <HalfCircle size={48} color={palette.teal} rotate={180} className="absolute -bottom-3 -right-3 opacity-8" />
              <div className="flex items-center gap-2 mb-3">
                <Circle size={16} color={palette.teal} />
                <Diamond size={8} color={palette.mustard} className="opacity-50" />
              </div>
              <h2 className="text-lg font-semibold text-[#3B5A4A] mb-1 tracking-tight">Practice Exam</h2>
              <p className={`text-sm text-[${palette.textMuted}] leading-relaxed`}>60 questions, 60 minutes. Same format as the real ROC(M).</p>
            </button>
          </div>
        </div>

        {/* Distress — full width, different visual treatment */}
        <button
          onClick={() => onNavigate('distress')}
          className={`w-full bg-[${palette.cream}] border border-[${palette.border}] rounded-lg p-8 text-left group transition-all duration-300 hover:border-[${palette.stone}] hover:shadow-sm mb-16 relative overflow-hidden`}
        >
          <Diamond size={48} color={palette.coral} className="absolute -top-4 right-16 opacity-8" />
          <DotGrid cols={3} rows={2} gap={12} dotSize={3} color={palette.coral} opacity={0.15} className="absolute bottom-4 right-4" />
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 mt-1">
              <div className="relative">
                <Diamond size={32} color={palette.coral} />
                <Circle size={8} color="white" className="absolute top-3 left-3" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#7A3B3B] mb-1 tracking-tight">Distress Call Builder</h2>
              <p className={`text-sm text-[${palette.textMuted}] leading-relaxed max-w-lg`}>Build and practice MAYDAY, PAN PAN, and SECURITE calls with your own vessel details. Essential for the oral exam.</p>
              <div className={`mt-4 text-xs font-medium text-[${palette.coral}] uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300`}>Build a call →</div>
            </div>
          </div>
        </button>

        <GeoDivider className="mb-16" />

        {/* Progress section */}
        {Object.keys(quizScores).length > 0 && (
          <div className={`${ui.card} ${ui.cardPadding} relative overflow-hidden`}>
            <DotGrid cols={4} rows={3} gap={8} dotSize={2} color={palette.navy} opacity={0.06} className="absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-6">
              <Circle size={10} color={palette.teal} />
              <h2 className={`text-lg font-semibold ${ui.heading}`}>Your Progress</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
              {sections.slice(0, 9).map(s => {
                const score = quizScores[s.number];
                const passed = score >= PASS_THRESHOLD;
                const attempted = score !== undefined;
                return (
                  <div key={s.number} className="text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-medium text-sm transition-all duration-300 ${
                      passed ? 'bg-[#3B5A4A] text-white'
                      : attempted ? `bg-[${palette.mustard}]/20 text-[#7A3B3B]`
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

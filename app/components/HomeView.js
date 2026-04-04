'use client';

import { sections } from '@/lib/quizData';
import { PASS_THRESHOLD } from '@/lib/constants';
import { palette, ui } from '@/lib/theme';
import Layout from './Layout';
import { Diamond, Triangle, Circle, HalfCircle, DotGrid, GeoDivider } from './GeoShapes';
import { WaveDivider, HorizonLine } from './WaveDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomeView({ currentView, onNavigate, quizScores, onStartStudy, onReset }) {
  const revealRef = useScrollReveal();

  return (
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      <div ref={revealRef}>
        {/* ════════════════════════════════════════════
            HERO — animated gradient, floating radio, atmosphere
            ════════════════════════════════════════════ */}
        <header className="hero-gradient text-white pt-24 pb-0 relative overflow-hidden">
          {/* Horizon lines for depth */}
          <HorizonLine className="absolute bottom-24 left-0 right-0 opacity-60" />

          {/* Subtle dot pattern */}
          <DotGrid cols={12} rows={6} gap={28} dotSize={1.5} color="#ffffff" opacity={0.04}
            className="absolute top-12 left-1/2 -translate-x-1/2" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="flex items-center justify-between gap-12 pb-16">
              {/* Left — text */}
              <div className="flex-1 max-w-xl">
                <div className="flex items-center gap-3 mb-6">
                  <HalfCircle size={16} color={palette.coral} />
                  <Diamond size={8} color={palette.mustard} />
                  <Circle size={6} color={palette.teal} />
                  <div className={`h-px flex-1 bg-white/10 ml-2`}></div>
                </div>

                <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-6">
                  Maritime<br />
                  <span className="text-white/60">Radio Trainer</span>
                </h1>

                <p className="text-white/40 text-lg leading-relaxed mb-8 max-w-md">
                  An unofficial Canadian ROC(M) certification study guide.
                </p>

                <div className="flex gap-3">
                  <button onClick={onStartStudy} className="bg-white text-[#1A2744] font-medium px-8 py-3.5 rounded hover:bg-white/90 transition text-sm">
                    Start Studying
                  </button>
                  <button onClick={() => onNavigate('exam')} className="border border-white/20 text-white/70 font-medium px-8 py-3.5 rounded hover:bg-white/10 hover:text-white transition text-sm">
                    Practice Exam
                  </button>
                </div>
              </div>

              {/* Right — floating radio with atmosphere */}
              <div className="hidden lg:block flex-shrink-0 relative">
                <div className="absolute -inset-12">
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[${palette.teal}]/8 blur-[80px]`}></div>
                  <div className={`absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-[${palette.coral}]/6 blur-[60px]`}></div>
                </div>
                <HalfCircle size={80} color={palette.coral} rotate={-30} className="absolute -top-6 -left-8 opacity-12" />
                <Diamond size={20} color={palette.mustard} className="absolute bottom-8 -left-6 opacity-20" />
                <Triangle size={14} color={palette.teal} rotate={25} className="absolute top-4 -right-4 opacity-15" />
                <DotGrid cols={3} rows={3} gap={12} dotSize={2} color="#ffffff" opacity={0.1} className="absolute -bottom-4 right-0" />
                <img
                  src="/vhf-radio.webp"
                  alt="ICOM IC-M510 VHF Marine Radio on Channel 16"
                  className="relative z-10 w-80 float-animation drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>

          {/* Wave transition to content */}
          <WaveDivider />
        </header>

        {/* ════════════════════════════════════════════
            FEATURE SECTIONS — editorial, not a card grid
            ════════════════════════════════════════════ */}
        <main className="max-w-5xl mx-auto px-6">

          {/* Study — hero feature, full width */}
          <section className="py-20 fade-up">
            <button onClick={onStartStudy} className="w-full text-left group">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <p className={`text-xs uppercase tracking-[0.2em] text-[${palette.teal}] font-medium mb-3`}>9 Sections · 92 Questions</p>
                  <h2 className={`text-3xl md:text-4xl font-semibold text-[${palette.navy}] tracking-tight mb-4 group-hover:text-[${palette.navyLight}] transition-colors duration-500`}>
                    Study & Quiz
                  </h2>
                  <p className={`text-[${palette.textMuted}] leading-relaxed text-lg max-w-lg`}>
                    Work through all nine sections of the Maritime Radio Course with study material and practice questions validated against the official manual.
                  </p>
                  <div className={`mt-6 text-sm font-medium text-[${palette.teal}] group-hover:translate-x-2 transition-transform duration-500`}>
                    Start studying →
                  </div>
                </div>
                <div className="md:col-span-5 relative">
                  <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br from-[${palette.teal}]/8 to-[${palette.teal}]/3 border border-[${palette.teal}]/10 flex items-center justify-center relative overflow-hidden`}>
                    <DotGrid cols={8} rows={6} gap={16} dotSize={3} color={palette.teal} opacity={0.15} className="absolute inset-0 m-auto" />
                    <div className="relative z-10 text-center">
                      <HalfCircle size={48} color={palette.teal} className="mx-auto mb-3 opacity-60" />
                      <p className={`text-5xl font-semibold text-[${palette.teal}]/40`}>92</p>
                      <p className={`text-xs uppercase tracking-wider text-[${palette.teal}]/40 mt-1`}>Questions</p>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </section>

          <GeoDivider className="fade-up" />

          {/* Two-up — Phonetic + Distress */}
          <section className="py-20 grid md:grid-cols-2 gap-8">
            {/* Phonetic */}
            <button onClick={() => onNavigate('phonetic')} className="fade-up fade-up-delay-1 text-left group">
              <div className={`h-full rounded-xl border border-[${palette.border}] bg-white p-10 hover:border-[${palette.stone}] hover:shadow-lg transition-all duration-500 relative overflow-hidden`}>
                <Triangle size={80} color={palette.mustard} rotate={15} className="absolute -top-8 -right-8 opacity-6" />
                <DotGrid cols={4} rows={3} gap={10} dotSize={2} color={palette.mustard} opacity={0.1} className="absolute bottom-4 right-4" />

                <div className="flex items-center gap-2 mb-6">
                  <Triangle size={20} color={palette.mustard} />
                  <Diamond size={8} color={palette.coral} className="opacity-40" />
                </div>
                <h3 className={`text-2xl font-semibold text-[#5B4A6B] tracking-tight mb-3 group-hover:text-[#7B6A8B] transition-colors duration-500`}>
                  Phonetic Trainer
                </h3>
                <p className={`text-[${palette.textMuted}] leading-relaxed`}>
                  Flashcards, reference tables, and a live translator for the NATO phonetic alphabet. Essential for the oral exam.
                </p>
                <div className={`mt-6 text-sm font-medium text-[${palette.mustard}] group-hover:translate-x-2 transition-transform duration-500`}>
                  Practice now →
                </div>
              </div>
            </button>

            {/* Distress */}
            <button onClick={() => onNavigate('distress')} className="fade-up fade-up-delay-2 text-left group">
              <div className={`h-full rounded-xl border border-[${palette.border}] bg-white p-10 hover:border-[${palette.stone}] hover:shadow-lg transition-all duration-500 relative overflow-hidden`}>
                <Diamond size={80} color={palette.coral} className="absolute -top-10 -right-10 opacity-5" />

                <div className="relative mb-6">
                  <Diamond size={24} color={palette.coral} />
                  <Circle size={8} color="white" className="absolute top-2 left-2" />
                </div>
                <h3 className={`text-2xl font-semibold text-[#7A3B3B] tracking-tight mb-3 group-hover:text-[#9A5B5B] transition-colors duration-500`}>
                  Distress Call Builder
                </h3>
                <p className={`text-[${palette.textMuted}] leading-relaxed`}>
                  Build MAYDAY, PAN PAN, and SECURITE calls with your vessel details. Practice reading them aloud at a measured pace.
                </p>
                <div className={`mt-6 text-sm font-medium text-[${palette.coral}] group-hover:translate-x-2 transition-transform duration-500`}>
                  Build a call →
                </div>
              </div>
            </button>
          </section>

          {/* Exam — cinematic full-width treatment */}
          <section className="py-20 fade-up">
            <button onClick={() => onNavigate('exam')} className="w-full text-left group">
              <div className={`rounded-xl bg-[${palette.navy}] text-white p-12 md:p-16 relative overflow-hidden hover:shadow-2xl transition-shadow duration-700`}>
                {/* Background atmosphere */}
                <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[${palette.teal}]/8 to-transparent`}></div>
                <DotGrid cols={6} rows={4} gap={20} dotSize={2} color="#ffffff" opacity={0.05} className="absolute top-8 right-8" />
                <HalfCircle size={120} color={palette.teal} rotate={90} className="absolute -bottom-12 -right-12 opacity-8" />
                <Circle size={40} color={palette.mustard} className="absolute top-8 right-32 opacity-6" />

                <div className="relative z-10 max-w-lg">
                  <div className="flex items-center gap-2 mb-6">
                    <Circle size={16} color={palette.teal} />
                    <Diamond size={8} color={palette.mustard} className="opacity-40" />
                    <div className="h-px flex-1 bg-white/10 ml-2"></div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Practice Exam
                  </h3>
                  <p className="text-white/40 text-lg leading-relaxed mb-2">
                    60 questions. 60 minutes. 70% to pass.
                  </p>
                  <p className="text-white/25 text-sm leading-relaxed">
                    Same format as the real ROC(M) written examination. Random questions drawn from all nine sections.
                  </p>
                  <div className="mt-8 text-sm font-medium text-[#5B8E9B] group-hover:translate-x-2 transition-transform duration-500">
                    Take the exam →
                  </div>
                </div>
              </div>
            </button>
          </section>

          {/* Progress */}
          {Object.keys(quizScores).length > 0 && (
            <section className="pb-20 fade-up">
              <GeoDivider className="mb-16" />
              <div className={`${ui.card} ${ui.cardPadding} relative overflow-hidden`}>
                <DotGrid cols={4} rows={3} gap={8} dotSize={2} color={palette.navy} opacity={0.04} className="absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-8">
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
                        <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center font-medium text-sm transition-all duration-500 ${
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
            </section>
          )}
        </main>
      </div>
    </Layout>
  );
}

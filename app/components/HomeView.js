'use client';

import { sections } from '@/lib/quizData';
import { PASS_THRESHOLD } from '@/lib/constants';
import { viewThemes } from '@/lib/theme';
import Layout from './Layout';

export default function HomeView({ currentView, onNavigate, quizScores, onStartStudy, onReset }) {
  const t = viewThemes.home;

  return (
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      <header className={`${t.headerBg} ${t.headerText} py-10`}>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Maritime Radio Trainer</h1>
          <p className={`${t.headerSubtext} text-lg`}>ROC(M) Certification Study Guide</p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <button onClick={onStartStudy} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
            <div className="text-3xl mb-3">📖</div>
            <h2 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition">Study & Quiz</h2>
            <p className="text-gray-600 text-sm">9 sections of study material with 92 practice questions validated against the official manual.</p>
          </button>
          <button onClick={() => onNavigate('phonetic')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
            <div className="text-3xl mb-3">🔤</div>
            <h2 className="text-xl font-bold text-purple-700 mb-2 group-hover:text-purple-500 transition">Phonetic Trainer</h2>
            <p className="text-gray-600 text-sm">Practice the NATO phonetic alphabet and number pronunciation for your oral exam.</p>
          </button>
          <button onClick={() => onNavigate('distress')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
            <div className="text-3xl mb-3">🆘</div>
            <h2 className="text-xl font-bold text-red-700 mb-2 group-hover:text-red-500 transition">Distress Call Builder</h2>
            <p className="text-gray-600 text-sm">Build and practice MAYDAY, PAN PAN, and SECURITE calls with your own vessel details.</p>
          </button>
          <button onClick={() => onNavigate('exam')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
            <div className="text-3xl mb-3">📝</div>
            <h2 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-500 transition">Practice Exam</h2>
            <p className="text-gray-600 text-sm">60 random questions, 60 minute timer. Simulates the real ROC(M) written exam. 70% to pass.</p>
          </button>
        </div>
        {Object.keys(quizScores).length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-900 mb-4">Your Progress</h2>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
              {sections.slice(0, 9).map(s => (
                <div key={s.number} className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-white ${
                    quizScores[s.number] >= PASS_THRESHOLD ? 'bg-green-500' : quizScores[s.number] !== undefined ? 'bg-orange-400' : 'bg-gray-300'
                  }`}>
                    {quizScores[s.number] !== undefined ? `${quizScores[s.number]}%` : s.number}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">S{s.number}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}

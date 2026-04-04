'use client';

import { shell } from '@/lib/theme';

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'section', label: 'Study & Quiz' },
  { key: 'phonetic', label: 'Phonetic Trainer' },
  { key: 'distress', label: 'Distress Calls' },
  { key: 'exam', label: 'Practice Exam' },
];

export default function NavBar({ currentView, onNavigate, onReset }) {
  return (
    <nav className={`${shell.navBg} ${shell.navText} py-4`}>
      <div className="max-w-5xl mx-auto px-6 flex gap-2 flex-wrap text-sm items-center">
        {NAV_ITEMS.map(item => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`px-4 py-2 rounded font-medium tracking-wide transition ${
              currentView === item.key ? shell.navActive : shell.navHover
            }`}
          >
            {item.label}
          </button>
        ))}
        {onReset && (
          <button
            onClick={() => { if (confirm('Reset all progress? This clears quiz scores and starts fresh.')) onReset(); }}
            className="ml-auto px-3 py-1.5 rounded text-white/40 hover:text-white hover:bg-red-600/60 text-xs tracking-wide transition"
          >
            Reset Progress
          </button>
        )}
      </div>
    </nav>
  );
}

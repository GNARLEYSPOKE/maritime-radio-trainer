'use client';

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'section', label: 'Study & Quiz' },
  { key: 'phonetic', label: 'Phonetic Trainer' },
  { key: 'distress', label: 'Distress Call Builder' },
  { key: 'exam', label: 'Practice Exam' },
];

export default function NavBar({ currentView, onNavigate, onReset }) {
  return (
    <nav className="bg-blue-950 text-white py-3 border-b border-blue-800">
      <div className="max-w-6xl mx-auto px-4 flex gap-4 flex-wrap text-sm font-semibold items-center">
        {NAV_ITEMS.map(item => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`px-3 py-1 rounded transition ${
              currentView === item.key ? 'bg-blue-600' : 'hover:bg-blue-800'
            }`}
          >
            {item.label}
          </button>
        ))}
        {onReset && (
          <button
            onClick={() => { if (confirm('Reset all progress? This clears quiz scores and starts fresh.')) onReset(); }}
            className="ml-auto px-3 py-1 rounded transition text-blue-300 hover:text-white hover:bg-red-600/80 text-xs"
          >
            Reset Progress
          </button>
        )}
      </div>
    </nav>
  );
}

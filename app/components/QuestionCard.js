'use client';

import { palette } from '@/lib/theme';

export default function QuestionCard({ question, selectedAnswer, onSelectAnswer, showFeedback }) {
  const answered = selectedAnswer !== undefined;

  return (
    <div>
      <h3 className={`text-lg font-semibold text-[${palette.textDark}] mb-6 leading-snug`}>{question.question}</h3>
      <div className="space-y-3 mb-8">
        {question.options.map((option, idx) => {
          let style = `bg-white border-[${palette.border}] text-[${palette.textDark}] hover:border-[${palette.stone}]`;
          if (showFeedback && answered) {
            if (idx === question.correctIndex) style = 'bg-[#EFF5F1] border-[#C9E0D2] text-[#3B5A4A]';
            else if (idx === selectedAnswer) style = 'bg-[#F7EFEF] border-[#E8C9C9] text-[#7A3B3B]';
          } else if (idx === selectedAnswer) {
            style = `bg-[${palette.cream}] border-[${palette.navyMuted}] text-[${palette.navy}]`;
          }
          return (
            <button
              key={idx}
              onClick={() => { if (!answered || !showFeedback) onSelectAnswer(idx); }}
              disabled={showFeedback && answered}
              className={`w-full p-4 text-left rounded border transition duration-300 font-medium text-sm ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showFeedback && answered && (
        <div className={`p-5 rounded mb-6 border ${selectedAnswer === question.correctIndex ? 'bg-[#EFF5F1] border-[#C9E0D2] text-[#3B5A4A]' : 'bg-[#F7EFEF] border-[#E8C9C9] text-[#7A3B3B]'}`}>
          <p className="font-medium mb-1 text-sm">{selectedAnswer === question.correctIndex ? 'Correct' : 'Incorrect'}</p>
          <p className="text-sm opacity-80">{question.explanation}</p>
          {question.reference && (
            <p className="text-xs mt-2 opacity-50 italic">{question.reference}</p>
          )}
        </div>
      )}
    </div>
  );
}

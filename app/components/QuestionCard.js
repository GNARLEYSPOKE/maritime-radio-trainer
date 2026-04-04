'use client';

export default function QuestionCard({ question, selectedAnswer, onSelectAnswer, showFeedback }) {
  const answered = selectedAnswer !== undefined;

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-6">{question.question}</h3>
      <div className="space-y-3 mb-8">
        {question.options.map((option, idx) => {
          let style = 'bg-white border-gray-200 text-gray-800 hover:border-blue-300';
          if (showFeedback && answered) {
            if (idx === question.correctIndex) style = 'bg-green-100 border-green-500 text-green-800';
            else if (idx === selectedAnswer) style = 'bg-red-100 border-red-500 text-red-800';
          } else if (idx === selectedAnswer) {
            style = 'bg-blue-100 border-blue-600 text-blue-900';
          }
          return (
            <button
              key={idx}
              onClick={() => { if (!answered || !showFeedback) onSelectAnswer(idx); }}
              disabled={showFeedback && answered}
              className={`w-full p-4 text-left rounded-lg border-2 transition font-semibold ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showFeedback && answered && (
        <div className={`p-4 rounded-lg mb-6 ${selectedAnswer === question.correctIndex ? 'bg-green-50 border border-green-300 text-green-800' : 'bg-red-50 border border-red-300 text-red-800'}`}>
          <p className="font-bold mb-1">{selectedAnswer === question.correctIndex ? '✓ Correct!' : '✗ Incorrect'}</p>
          <p>{question.explanation}</p>
          {question.reference && (
            <p className="text-xs mt-2 opacity-75 italic">📖 {question.reference}</p>
          )}
        </div>
      )}
    </div>
  );
}

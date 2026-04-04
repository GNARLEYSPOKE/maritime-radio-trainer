'use client';

import { useState, useCallback } from 'react';
import { phoneticAlphabet, numbers, translateToPhonetic } from '@/lib/referenceData';
import { viewThemes, palette, ui, accents } from '@/lib/theme';
import Layout from './Layout';
import { HeaderGeo } from './GeoShapes';

const ALL_CARDS = [
  ...phoneticAlphabet.map(item => ({ front: item.letter, back: item.word, type: 'letter' })),
  ...numbers.map(item => ({ front: item.digit, back: item.word, type: 'number' })),
];

function getRandomCard(exclude) {
  let card;
  do {
    card = ALL_CARDS[Math.floor(Math.random() * ALL_CARDS.length)];
  } while (exclude && card.front === exclude.front);
  return card;
}

export default function PhoneticView({ currentView, onNavigate, onReset }) {
  const [phoneticInput, setPhoneticInput] = useState('');
  const [phoneticOutput, setPhoneticOutput] = useState('');
  const [flashcard, setFlashcard] = useState(() => getRandomCard());
  const [isFlipped, setIsFlipped] = useState(false);
  const t = viewThemes.phonetic;
  const a = accents.phonetic;

  const handleFlip = useCallback(() => {
    if (isFlipped) {
      setIsFlipped(false);
      setTimeout(() => setFlashcard(getRandomCard(flashcard)), 200);
    } else {
      setIsFlipped(true);
    }
  }, [isFlipped, flashcard]);

  function handleTranslate() {
    setPhoneticOutput(translateToPhonetic(phoneticInput));
  }

  return (
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      <header className={`${t.headerBg} ${t.headerText} py-8 relative overflow-hidden`}>
        <HeaderGeo variant="phonetic" className="w-full h-full absolute inset-0" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className={`text-xs uppercase tracking-[0.15em] ${t.headerSubtext} mb-2 font-medium`}>Oral Exam Preparation</p>
          <h1 className="text-3xl font-semibold tracking-tight">Phonetic Alphabet Trainer</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className={`${ui.card} ${ui.cardPadding} mb-8`}>
          <h2 className={`text-lg font-semibold ${ui.heading} mb-2`}>Flashcards</h2>
          <p className={`text-sm text-[${palette.textMuted}] mb-6`}>Click the card to reveal the phonetic word. Click again for the next card.</p>
          <div className="flex justify-center">
            <button onClick={handleFlip} className="w-44 h-44 perspective-500 focus:outline-none">
              <div className={`relative w-full h-full transition-transform duration-500 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                <div className={`absolute inset-0 bg-[${a.bg}] rounded-xl flex flex-col items-center justify-center text-white`} style={{ backfaceVisibility: 'hidden' }}>
                  <span className="text-xs uppercase tracking-wider mb-2 opacity-50">{flashcard.type === 'letter' ? 'Letter' : 'Number'}</span>
                  <span className="text-5xl font-semibold">{flashcard.front}</span>
                  <span className="text-xs mt-3 opacity-30">tap to flip</span>
                </div>
                <div className={`absolute inset-0 bg-[${a.muted}] rounded-xl flex flex-col items-center justify-center border border-[${a.border}] [transform:rotateY(180deg)]`} style={{ backfaceVisibility: 'hidden' }}>
                  <span className={`text-xs uppercase tracking-wider mb-2 text-[${palette.textLight}]`}>{flashcard.front}</span>
                  <span className={`text-2xl font-semibold text-[${a.bg}]`}>{flashcard.back}</span>
                  <span className={`text-xs mt-3 text-[${palette.textLight}]`}>tap for next</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className={`${ui.card} ${ui.cardPadding} mb-8`}>
          <h2 className={`text-lg font-semibold ${ui.heading} mb-2`}>Translate Text to Phonetic</h2>
          <p className={`text-sm text-[${palette.textMuted}] mb-4`}>Type any word, vessel name, or call sign below to see the phonetic spelling.</p>
          <div className="flex gap-3">
            <input
              type="text"
              value={phoneticInput}
              onChange={(e) => setPhoneticInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleTranslate(); }}
              placeholder="e.g. SEADOG or your vessel name"
              className={`flex-1 ${ui.input}`}
            />
            <button onClick={handleTranslate} className={ui.btnPrimary}>Translate</button>
          </div>
          {phoneticOutput && (
            <div className={`mt-4 bg-[${a.muted}] p-4 rounded`}>
              <p className={`text-[${a.bg}] font-medium`}>{phoneticOutput}</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`${ui.card} ${ui.cardPadding}`}>
            <h2 className={`text-lg font-semibold ${ui.heading} mb-4`}>Letters</h2>
            <div className="grid grid-cols-2 gap-1.5">
              {phoneticAlphabet.map(item => (
                <div key={item.letter} className={`flex justify-between p-2.5 bg-[${palette.cream}] rounded text-sm`}>
                  <span className={`font-semibold w-6 text-[${palette.textDark}]`}>{item.letter}</span>
                  <span className={`text-[${palette.textMuted}]`}>{item.word}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${ui.card} ${ui.cardPadding}`}>
            <h2 className={`text-lg font-semibold ${ui.heading} mb-4`}>Numbers</h2>
            <div className="space-y-1.5 mb-6">
              {numbers.map(item => (
                <div key={item.digit} className={`flex justify-between p-3 bg-[${palette.cream}] rounded`}>
                  <span className={`font-semibold text-[${palette.textDark}]`}>{item.digit}</span>
                  <span className={`text-[${palette.textMuted}]`}>{item.word}</span>
                </div>
              ))}
            </div>
            <div className={`border-t border-[${palette.border}] pt-4 mt-4`}>
              <h3 className={`font-medium text-[${palette.textDark}] text-sm mb-3`}>Key Rules</h3>
              <p className={`text-sm text-[${palette.textMuted}] mb-1.5`}>All numbers are pronounced digit by digit except whole thousands.</p>
              <p className={`text-sm text-[${palette.textMuted}] mb-1`}>5800 = Five Eight Zero Zero</p>
              <p className={`text-sm text-[${palette.textMuted}] mb-1`}>11000 = One One Thousand</p>
              <p className={`text-sm text-[${palette.textMuted}]`}>156.8 = One Five Six Decimal Eight</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

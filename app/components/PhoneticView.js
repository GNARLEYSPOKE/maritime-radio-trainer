'use client';

import { useState, useCallback } from 'react';
import { phoneticAlphabet, numbers, translateToPhonetic } from '@/lib/referenceData';
import { viewThemes } from '@/lib/theme';
import Layout from './Layout';

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
      <header className={`${t.headerBg} ${t.headerText} py-6 shadow-md`}>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Phonetic Alphabet Trainer</h1>
          <p className={t.headerSubtext}>Essential for the oral exam component of the ROC(M)</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-purple-700 mb-4">Flashcards</h2>
          <p className="text-gray-600 mb-4">Click the card to reveal the phonetic word. Click again for the next card.</p>
          <div className="flex justify-center">
            <button
              onClick={handleFlip}
              className="w-48 h-48 perspective-500 focus:outline-none"
            >
              <div className={`relative w-full h-full transition-transform duration-300 ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 bg-purple-600 rounded-2xl shadow-lg flex flex-col items-center justify-center text-white" style={{ backfaceVisibility: 'hidden' }}>
                  <span className="text-xs uppercase tracking-wider mb-2 opacity-70">{flashcard.type === 'letter' ? 'Letter' : 'Number'}</span>
                  <span className="text-6xl font-bold">{flashcard.front}</span>
                  <span className="text-xs mt-3 opacity-50">tap to flip</span>
                </div>
                <div className="absolute inset-0 bg-purple-100 rounded-2xl shadow-lg flex flex-col items-center justify-center border-2 border-purple-300 [transform:rotateY(180deg)]" style={{ backfaceVisibility: 'hidden' }}>
                  <span className="text-xs uppercase tracking-wider mb-2 text-purple-500">{flashcard.front}</span>
                  <span className="text-3xl font-bold text-purple-800">{flashcard.back}</span>
                  <span className="text-xs mt-3 text-purple-400">tap for next</span>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold text-purple-700 mb-4">Translate Text to Phonetic</h2>
          <p className="text-gray-600 mb-4">Type any word, vessel name, or call sign below to see the phonetic spelling.</p>
          <div className="flex gap-3">
            <input
              type="text"
              value={phoneticInput}
              onChange={(e) => setPhoneticInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleTranslate(); }}
              placeholder="e.g. SEADOG or your vessel name"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            />
            <button
              onClick={handleTranslate}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Translate
            </button>
          </div>
          {phoneticOutput && (
            <div className="mt-4 bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold text-lg">{phoneticOutput}</p>
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-purple-700 mb-4">Letters</h2>
            <div className="grid grid-cols-2 gap-2">
              {phoneticAlphabet.map(item => (
                <div key={item.letter} className="flex justify-between p-2 bg-purple-50 rounded text-sm">
                  <span className="font-bold w-6">{item.letter}</span>
                  <span className="text-gray-700">{item.word}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-purple-700 mb-4">Numbers</h2>
            <div className="space-y-2 mb-6">
              {numbers.map(item => (
                <div key={item.digit} className="flex justify-between p-3 bg-purple-50 rounded">
                  <span className="font-bold">{item.digit}</span>
                  <span className="text-gray-700">{item.word}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <h3 className="font-bold text-gray-800 mb-2">Key Rules</h3>
              <p className="text-sm text-gray-600 mb-2">All numbers are pronounced digit by digit except whole thousands.</p>
              <p className="text-sm text-gray-600 mb-1">5800 = Five Eight Zero Zero</p>
              <p className="text-sm text-gray-600 mb-1">11000 = One One Thousand</p>
              <p className="text-sm text-gray-600">156.8 = One Five Six Decimal Eight</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

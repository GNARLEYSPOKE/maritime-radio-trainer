'use client';

import { useState } from 'react';
import { phoneticAlphabet, numbers, translateToPhonetic } from '@/lib/referenceData';
import NavBar from './NavBar';

export default function PhoneticView({ currentView, onNavigate, onReset }) {
  const [phoneticInput, setPhoneticInput] = useState('');
  const [phoneticOutput, setPhoneticOutput] = useState('');

  function handleTranslate() {
    setPhoneticOutput(translateToPhonetic(phoneticInput));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar currentView={currentView} onNavigate={onNavigate} onReset={onReset} />
      <header className="bg-purple-700 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Phonetic Alphabet Trainer</h1>
          <p className="text-purple-200">Essential for the oral exam component of the ROC(M)</p>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
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
    </div>
  );
}

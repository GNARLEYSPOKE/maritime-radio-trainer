'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { sections, quizzes, sectionContent, phoneticAlphabet, numbers, distressCalls } from '@/lib/quizData';

function NavBar({ currentView, setCurrentView, resetState }) {
  return (
    <nav className="bg-blue-950 text-white py-3 border-b border-blue-800">
      <div className="max-w-6xl mx-auto px-4 flex gap-4 flex-wrap text-sm font-semibold">
        {[
          { key: 'home', label: 'Home' },
          { key: 'section', label: 'Study & Quiz' },
          { key: 'phonetic', label: 'Phonetic Trainer' },
          { key: 'distress', label: 'Distress Call Builder' },
          { key: 'exam', label: 'Practice Exam' },
        ].map(item => (
          <button
            key={item.key}
            onClick={() => { resetState(); setCurrentView(item.key); }}
            className={`px-3 py-1 rounded transition ${
              currentView === item.key ? 'bg-blue-600' : 'hover:bg-blue-800'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default function Home() {
  const [currentView, setCurrentView] = useState('home');
  const [currentSection, setCurrentSection] = useState(1);
  const [isStudyMode, setIsStudyMode] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizScores, setQuizScores] = useState({});
  const [phoneticInput, setPhoneticInput] = useState('');
  const [phoneticOutput, setPhoneticOutput] = useState('');
  const [distressType, setDistressType] = useState('mayday');
  const [distressForm, setDistressForm] = useState({ vesselName: '', callSign: '', mmsi: '', position: '', personsOnBoard: '', nature: '', assistance: '' });
  const [distressScript, setDistressScript] = useState('');
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});
  const [examTimeLeft, setExamTimeLeft] = useState(3600);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examResults, setExamResults] = useState(null);
  const examTimerRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem('quizScores');
    if (saved) setQuizScores(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
  }, [quizScores]);

  useEffect(() => {
    return () => { if (examTimerRef.current) clearInterval(examTimerRef.current); };
  }, []);

  const resetState = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setPhoneticInput('');
    setPhoneticOutput('');
    setDistressScript('');
  }, []);

  const generateExam = useCallback(() => {
    const allQuestions = [];
    Object.keys(quizzes).forEach(sectionNum => {
      quizzes[sectionNum].forEach(q => {
        allQuestions.push({ ...q, sectionNum: parseInt(sectionNum) });
      });
    });
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 60);
  }, []);

  const startExam = useCallback(() => {
    const questions = generateExam();
    setExamQuestions(questions);
    setExamAnswers({});
    setExamTimeLeft(3600);
    setExamStarted(true);
    setExamFinished(false);
    setExamResults(null);
    setCurrentQuestionIndex(0);
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    examTimerRef.current = setInterval(() => {
      setExamTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(examTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [generateExam]);

  const submitExam = useCallback(() => {
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    let correct = 0;
    const sectionBreakdown = {};
    examQuestions.forEach((q, idx) => {
      const sNum = q.sectionNum;
      if (!sectionBreakdown[sNum]) sectionBreakdown[sNum] = { correct: 0, total: 0 };
      sectionBreakdown[sNum].total++;
      if (examAnswers[idx] === q.correctIndex) {
        correct++;
        sectionBreakdown[sNum].correct++;
      }
    });
    const percentage = Math.round((correct / examQuestions.length) * 100);
    setExamResults({ correct, total: examQuestions.length, percentage, sectionBreakdown, passed: percentage >= 70 });
    setExamFinished(true);
    setExamStarted(false);
  }, [examQuestions, examAnswers]);

  useEffect(() => {
    if (examTimeLeft === 0 && examStarted) submitExam();
  }, [examTimeLeft, examStarted, submitExam]);

  const buildDistressScript = useCallback(() => {
    const f = distressForm;
    const name = f.vesselName || '[YOUR VESSEL NAME]';
    const pos = f.position || '[YOUR POSITION]';
    const nature = f.nature || '[NATURE OF DISTRESS/URGENCY/HAZARD]';
    const pob = f.personsOnBoard || '[NUMBER]';
    const callSign = f.callSign ? `, call sign ${f.callSign}` : '';
    const mmsi = f.mmsi ? `, MMSI ${f.mmsi}` : '';
    const assist = f.assistance ? `\nAssistance available: ${f.assistance}` : '';

    if (distressType === 'mayday') {
      setDistressScript(
`MAYDAY MAYDAY MAYDAY
This is ${name}, ${name}, ${name}${callSign}${mmsi}
MAYDAY ${name}${callSign}
My position is ${pos}
I am ${nature}
I have ${pob} persons on board
${assist}
Over`
      );
    } else if (distressType === 'panpan') {
      setDistressScript(
`PAN PAN, PAN PAN, PAN PAN
All Stations, All Stations, All Stations
This is ${name}, ${name}, ${name}${callSign}${mmsi}
My position is ${pos}
${nature}
${pob} persons on board
${assist}
Over`
      );
    } else {
      setDistressScript(
`SÉCURITÉ, SÉCURITÉ, SÉCURITÉ
All Stations, All Stations, All Stations
This is ${name}, ${name}, ${name}${callSign}
Listen on Channel 6

--- Switch to Channel 6 ---

SÉCURITÉ
${name}${callSign}
${nature}
Position: ${pos}
Out`
      );
    }
  }, [distressForm, distressType]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // ── HOME ──
  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <NavBar currentView={currentView} setCurrentView={setCurrentView} resetState={resetState} />
        <header className="bg-blue-900 text-white py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Maritime Radio Trainer</h1>
            <p className="text-blue-200 text-lg">ROC(M) Certification Study Guide</p>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <button onClick={() => { setCurrentView('section'); setCurrentSection(1); setIsStudyMode(true); }} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
              <div className="text-3xl mb-3">📖</div>
              <h2 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-600 transition">Study & Quiz</h2>
              <p className="text-gray-600 text-sm">9 sections of study material with 92 practice questions validated against the official manual.</p>
            </button>
            <button onClick={() => setCurrentView('phonetic')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
              <div className="text-3xl mb-3">🔤</div>
              <h2 className="text-xl font-bold text-purple-700 mb-2 group-hover:text-purple-500 transition">Phonetic Trainer</h2>
              <p className="text-gray-600 text-sm">Practice the NATO phonetic alphabet and number pronunciation for your oral exam.</p>
            </button>
            <button onClick={() => setCurrentView('distress')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
              <div className="text-3xl mb-3">🆘</div>
              <h2 className="text-xl font-bold text-red-700 mb-2 group-hover:text-red-500 transition">Distress Call Builder</h2>
              <p className="text-gray-600 text-sm">Build and practice MAYDAY, PAN PAN, and SÉCURITÉ calls with your own vessel details.</p>
            </button>
            <button onClick={() => setCurrentView('exam')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-left group">
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
                      quizScores[s.number] >= 70 ? 'bg-green-500' : quizScores[s.number] !== undefined ? 'bg-orange-400' : 'bg-gray-300'
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
        <footer className="bg-blue-950 text-blue-300 py-6 text-center text-sm">
          <p>Maritime Radio Trainer by Sail Canada Instructor Chris Bryce</p>
          <p className="text-blue-400 mt-1">Study aid only. Not a substitute for the official CPS-ECP Maritime Radio Course.</p>
        </footer>
      </div>
    );
  }

  // ── STUDY & QUIZ ──
  if (currentView === 'section') {
    const section = sections.find(s => s.number === currentSection);
    const content = sectionContent[currentSection]?.keyPoints || [];
    const quiz = quizzes[currentSection] || [];
    const currentQuestion = quiz[currentQuestionIndex];

    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar currentView={currentView} setCurrentView={setCurrentView} resetState={resetState} />
        <header className="bg-blue-900 text-white py-6 shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold">Section {section?.number}: {section?.title}</h1>
            <p className="text-blue-200">{section?.description}</p>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6 flex gap-2 flex-wrap">
            {sections.slice(0, 9).map(s => (
              <button
                key={s.number}
                onClick={() => { setCurrentSection(s.number); setIsStudyMode(true); setCurrentQuestionIndex(0); setSelectedAnswers({}); }}
                className={`py-2 px-4 rounded font-semibold transition ${
                  currentSection === s.number ? 'bg-blue-600 text-white' : 'bg-white text-blue-900 hover:bg-gray-100 border border-blue-200'
                }`}
              >
                {s.number}. {s.title}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => { setIsStudyMode(true); setCurrentQuestionIndex(0); setSelectedAnswers({}); }}
                className={`py-2 px-6 rounded font-bold transition ${isStudyMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Study Mode
              </button>
              <button
                onClick={() => { setIsStudyMode(false); setCurrentQuestionIndex(0); setSelectedAnswers({}); }}
                className={`py-2 px-6 rounded font-bold transition ${!isStudyMode ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Quiz Mode ({quiz.length} questions)
              </button>
            </div>

            {isStudyMode ? (
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Study Material</h2>
                <div className="space-y-6">
                  {content.map((block, idx) => (
                    <div key={idx} className="border-l-4 border-blue-600 pl-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{block.heading}</h3>
                      <p className="text-gray-700 leading-relaxed">{block.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : currentQuestion ? (
              <div>
                <p className="text-gray-600 mb-2">Question {currentQuestionIndex + 1} of {quiz.length}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${((currentQuestionIndex + 1) / quiz.length) * 100}%` }}></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h3>
                <div className="space-y-3 mb-8">
                  {currentQuestion.options.map((option, idx) => {
                    const answered = selectedAnswers[currentQuestionIndex] !== undefined;
                    const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                    const isCorrect = idx === currentQuestion.correctIndex;
                    let style = 'bg-white border-gray-200 text-gray-800 hover:border-blue-300';
                    if (answered && isCorrect) style = 'bg-green-100 border-green-500 text-green-800';
                    else if (answered && isSelected && !isCorrect) style = 'bg-red-100 border-red-500 text-red-800';
                    else if (isSelected) style = 'bg-blue-100 border-blue-600 text-blue-900';
                    return (
                      <button
                        key={idx}
                        onClick={() => { if (!answered) setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: idx }); }}
                        disabled={answered}
                        className={`w-full p-4 text-left rounded-lg border-2 transition font-semibold ${style}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                {selectedAnswers[currentQuestionIndex] !== undefined && (
                  <div className={`p-4 rounded-lg mb-6 ${selectedAnswers[currentQuestionIndex] === currentQuestion.correctIndex ? 'bg-green-50 border border-green-300 text-green-800' : 'bg-red-50 border border-red-300 text-red-800'}`}>
                    <p className="font-bold mb-1">{selectedAnswers[currentQuestionIndex] === currentQuestion.correctIndex ? '✓ Correct!' : '✗ Incorrect'}</p>
                    <p>{currentQuestion.explanation}</p>
                    {currentQuestion.reference && (
                      <p className="text-xs mt-2 opacity-75 italic">📖 {currentQuestion.reference}</p>
                    )}
                  </div>
                )}
                <div className="flex gap-4 justify-between">
                  <button onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} className="bg-gray-400 hover:bg-gray-500 disabled:opacity-50 text-white font-bold py-2 px-6 rounded transition">Previous</button>
                  {currentQuestionIndex === quiz.length - 1 ? (
                    <button
                      onClick={() => {
                        let correct = 0;
                        quiz.forEach((q, idx) => { if (selectedAnswers[idx] === q.correctIndex) correct++; });
                        const pct = Math.round((correct / quiz.length) * 100);
                        setQuizScores({ ...quizScores, [currentSection]: pct });
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition"
                    >
                      Submit Quiz
                    </button>
                  ) : (
                    <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">Next</button>
                  )}
                </div>
                {quizScores[currentSection] !== undefined && currentQuestionIndex === quiz.length - 1 && (
                  <div className={`mt-6 p-6 rounded-lg text-center ${quizScores[currentSection] >= 70 ? 'bg-green-50 border-2 border-green-400' : 'bg-orange-50 border-2 border-orange-400'}`}>
                    <p className="text-2xl font-bold mb-2">{quizScores[currentSection]}%</p>
                    <p className="text-gray-700">{quizScores[currentSection] >= 70 ? 'Great work! You passed this section.' : 'Review the study material and try again. You need 70% to pass.'}</p>
                    {(() => {
                      const missed = [];
                      quiz.forEach((q, idx) => { if (selectedAnswers[idx] !== q.correctIndex) missed.push(q); });
                      if (missed.length === 0) return null;
                      return (
                        <div className="mt-4 text-left">
                          <p className="font-bold text-gray-800 mb-2">Questions to review:</p>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {missed.map(q => <li key={q.id}>• {q.question}</li>)}
                          </ul>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </main>
      </div>
    );
  }

  // ── PHONETIC TRAINER ──
  if (currentView === 'phonetic') {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar currentView={currentView} setCurrentView={setCurrentView} resetState={resetState} />
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
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const output = phoneticInput.toUpperCase().split('').map(c => {
                      const p = phoneticAlphabet.find(x => x.letter === c);
                      if (p) return p.word;
                      const n = numbers.find(x => x.digit === c);
                      if (n) return n.word;
                      if (c === ' ') return ' — ';
                      return c;
                    }).join(' ');
                    setPhoneticOutput(output);
                  }
                }}
                placeholder="e.g. SEADOG or your vessel name"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
              />
              <button
                onClick={() => {
                  const output = phoneticInput.toUpperCase().split('').map(c => {
                    const p = phoneticAlphabet.find(x => x.letter === c);
                    if (p) return p.word;
                    const n = numbers.find(x => x.digit === c);
                    if (n) return n.word;
                    if (c === ' ') return ' — ';
                    return c;
                  }).join(' ');
                  setPhoneticOutput(output);
                }}
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

  // ── DISTRESS CALL BUILDER ──
  if (currentView === 'distress') {
    const callInfo = distressCalls[distressType];
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar currentView={currentView} setCurrentView={setCurrentView} resetState={resetState} />
        <header className="bg-red-800 text-white py-6 shadow-md">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-bold">Distress Call Builder</h1>
            <p className="text-red-200">Practice building MAYDAY, PAN PAN, and SÉCURITÉ calls</p>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">
          <div className="flex gap-3 mb-8">
            {[
              { key: 'mayday', label: 'MAYDAY', color: 'red' },
              { key: 'panpan', label: 'PAN PAN', color: 'orange' },
              { key: 'securite', label: 'SÉCURITÉ', color: 'yellow' },
            ].map(t => (
              <button
                key={t.key}
                onClick={() => { setDistressType(t.key); setDistressScript(''); }}
                className={`py-3 px-6 rounded-lg font-bold transition ${
                  distressType === t.key
                    ? t.key === 'mayday' ? 'bg-red-600 text-white' : t.key === 'panpan' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-gray-900'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{callInfo.title}</h2>
                <p className="text-gray-600 mb-3">{callInfo.meaning}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-bold">Priority:</span> {callInfo.priority}</p>
                  <p><span className="font-bold">Channel:</span> {callInfo.channelCall}</p>
                  <p><span className="font-bold">Signal:</span> {callInfo.signal}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Steps</h3>
                <ol className="space-y-2">
                  {callInfo.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-700">
                      <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Enter Your Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Vessel Name</label>
                    <input type="text" value={distressForm.vesselName} onChange={e => setDistressForm({ ...distressForm, vesselName: e.target.value })} placeholder="e.g. Canadian Sailor" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Call Sign (optional)</label>
                    <input type="text" value={distressForm.callSign} onChange={e => setDistressForm({ ...distressForm, callSign: e.target.value })} placeholder="e.g. VE1234" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">MMSI (optional)</label>
                    <input type="text" value={distressForm.mmsi} onChange={e => setDistressForm({ ...distressForm, mmsi: e.target.value })} placeholder="e.g. 316001234" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Position</label>
                    <input type="text" value={distressForm.position} onChange={e => setDistressForm({ ...distressForm, position: e.target.value })} placeholder="e.g. 43°39'N 079°23'W or 2 miles south of Toronto Island" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">Persons on Board</label>
                    <input type="text" value={distressForm.personsOnBoard} onChange={e => setDistressForm({ ...distressForm, personsOnBoard: e.target.value })} placeholder="e.g. 4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">{distressType === 'securite' ? 'Hazard Description' : 'Nature of Distress/Urgency'}</label>
                    <input type="text" value={distressForm.nature} onChange={e => setDistressForm({ ...distressForm, nature: e.target.value })} placeholder={distressType === 'mayday' ? 'e.g. taking on water and sinking' : distressType === 'panpan' ? 'e.g. engine failure, drifting' : 'e.g. large shipping container adrift'} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                  </div>
                  {distressType !== 'securite' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1">Assistance Available (optional)</label>
                      <input type="text" value={distressForm.assistance} onChange={e => setDistressForm({ ...distressForm, assistance: e.target.value })} placeholder="e.g. Life raft deployed, flares available" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                    </div>
                  )}
                </div>
                <button onClick={buildDistressScript} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
                  Build Call Script
                </button>
              </div>

              {distressScript && (
                <div className={`p-6 rounded-lg shadow-md border-2 ${distressType === 'mayday' ? 'bg-red-50 border-red-400' : distressType === 'panpan' ? 'bg-orange-50 border-orange-400' : 'bg-yellow-50 border-yellow-400'}`}>
                  <h3 className="font-bold text-gray-800 mb-3">Your Call Script</h3>
                  <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-800">{distressScript}</pre>
                  <p className="mt-4 text-xs text-gray-500">Practice reading this aloud clearly and at a measured pace. In a real emergency, stay calm and speak slowly.</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-800 mb-3">Quick Reference: When to Use Each Signal</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <p className="font-bold text-red-700">MAYDAY (Distress)</p>
                <p className="text-gray-600">Grave and imminent danger. Life threatening. Immediate help needed NOW.</p>
                <p className="text-gray-500 mt-1">Sinking, fire, crew overboard</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <p className="font-bold text-orange-700">PAN PAN (Urgency)</p>
                <p className="text-gray-600">Serious safety concern. Help needed but not immediately life threatening.</p>
                <p className="text-gray-500 mt-1">Engine failure, medical issue, taking on water slowly</p>
              </div>
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <p className="font-bold text-yellow-700">SÉCURITÉ (Safety)</p>
                <p className="text-gray-600">Important navigational or weather warning for other vessels.</p>
                <p className="text-gray-500 mt-1">Debris in water, severe weather, unlit vessel</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ── PRACTICE EXAM ──
  if (currentView === 'exam') {
    if (examFinished && examResults) {
      return (
        <div className="min-h-screen bg-gray-50">
          <NavBar currentView={currentView} setCurrentView={setCurrentView} resetState={resetState} />
          <header className={`${examResults.passed ? 'bg-green-700' : 'bg-red-700'} text-white py-6 shadow-md`}>
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-3xl font-bold">{examResults.passed ? 'Congratulations!' : 'Keep Studying'}</h1>
              <p className="text-white/80">{examResults.passed ? 'You passed the practice exam.' : 'You did not reach the 70% pass mark this time.'}</p>
            </div>
          </header>
          <main className="max-w-4xl mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8 text-center">
              <p className={`text-6xl font-bold mb-2 ${examResults.passed ? 'text-green-600' : 'text-red-600'}`}>{examResults.percentage}%</p>
              <p className="text-gray-600 text-lg">{examResults.correct} correct out of {examResults.total} questions</p>
              <p className="text-gray-500">Pass mark: 70% (42 out of 60)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Score by Section</h2>
              <div className="space-y-3">
                {Object.keys(examResults.sectionBreakdown).sort((a, b) => a - b).map(sNum => {
                  const s = examResults.sectionBreakdown[sNum];
                  const pct = Math.round((s.correct / s.total) * 100);
                  const sectionTitle = sections.find(x => x.number === parseInt(sNum))?.title || `Section ${sNum}`;
                  return (
                    <div key={sNum} className="flex items-center gap-4">
                      <span className="w-48 text-sm font-semibold text-gray-700 truncate">S{sNum}: {sectionTitle}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div className={`h-4 rounded-full transition-all ${pct >= 70 ? 'bg-green-500' : 'bg-orange-400'}`} style={{ width: `${pct}%` }}></div>
                      </div>
                      <span className="text-sm font-bold w-20 text-right">{s.correct}/{s.total} ({pct}%)</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Review Incorrect Answers</h2>
              <div className="space-y-4">
                {examQuestions.map((q, idx) => {
                  if (examAnswers[idx] === q.correctIndex) return null;
                  const sTitle = sections.find(x => x.number === q.sectionNum)?.title || '';
                  return (
                    <div key={idx} className="border-l-4 border-red-400 pl-4 py-2">
                      <p className="text-xs text-gray-400 mb-1">Section {q.sectionNum}: {sTitle}</p>
                      <p className="font-semibold text-gray-800 mb-1">{q.question}</p>
                      <p className="text-red-600 text-sm">Your answer: {examAnswers[idx] !== undefined ? q.options[examAnswers[idx]] : 'No answer'}</p>
                      <p className="text-green-700 text-sm font-semibold">Correct: {q.options[q.correctIndex]}</p>
                      <p className="text-gray-500 text-sm mt-1">{q.explanation}</p>
                      {q.reference && (
                        <p className="text-xs text-gray-400 mt-1 italic">📖 {q.reference}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-center">
              <button onClick={startExam} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
                Take Another Exam
              </button>
            </div>
          </main>
        </div>
      );
    }

    if (!examStarted) {
      return (
        <div className="min-h-screen bg-gray-50">
          <NavBar currentView={currentView} setCurrentView={setCurrentView} resetState={resetState} />
          <header className="bg-green-800 text-white py-6 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-3xl font-bold">Practice Exam</h1>
              <p className="text-green-200">Simulates the ROC(M) written examination</p>
            </div>
          </header>
          <main className="max-w-3xl mx-auto px-4 py-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ROC(M) Practice Written Exam</h2>
              <div className="space-y-3 text-gray-600 mb-8 text-left max-w-md mx-auto">
                <p><span className="font-bold">Questions:</span> 60 multiple choice (randomly selected from all 9 sections)</p>
                <p><span className="font-bold">Time limit:</span> 60 minutes</p>
                <p><span className="font-bold">Pass mark:</span> 70% (42 out of 60 correct)</p>
                <p><span className="font-bold">Format:</span> Same structure as the real exam</p>
              </div>
              <p className="text-sm text-gray-400 mb-6">The real ROC(M) exam also includes an oral component testing phonetic alphabet and distress call procedures. Use the Phonetic Trainer and Distress Call Builder to prepare for that portion.</p>
              <button onClick={startExam} className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-lg transition text-lg">
                Start Practice Exam
              </button>
            </div>
          </main>
        </div>
      );
    }

    // Exam in progress
    const currentQ = examQuestions[currentQuestionIndex];
    const answeredCount = Object.keys(examAnswers).length;
    return (
      <div className="min-h-screen bg-gray-50">
        <div className={`sticky top-0 z-50 ${examTimeLeft < 300 ? 'bg-red-700' : 'bg-green-800'} text-white py-3 shadow-md`}>
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div>
              <span className="font-bold">Question {currentQuestionIndex + 1} of {examQuestions.length}</span>
              <span className="ml-4 text-sm opacity-80">{answeredCount} answered</span>
            </div>
            <div className="flex items-center gap-6">
              <span className={`font-mono text-xl font-bold ${examTimeLeft < 300 ? 'animate-pulse' : ''}`}>{formatTime(examTimeLeft)}</span>
              <button onClick={() => { if (confirm('Are you sure you want to submit? Unanswered questions will be marked incorrect.')) submitExam(); }} className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded font-bold transition text-sm">
                Submit Exam
              </button>
            </div>
          </div>
        </div>
        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6">
            <div className="flex flex-wrap gap-1">
              {examQuestions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-8 h-8 rounded text-xs font-bold transition ${
                    idx === currentQuestionIndex ? 'bg-blue-600 text-white'
                    : examAnswers[idx] !== undefined ? 'bg-green-200 text-green-800'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {currentQ && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-xs text-gray-400 mb-4">Section {currentQ.sectionNum}: {sections.find(s => s.number === currentQ.sectionNum)?.title}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-6">{currentQ.question}</h3>
              <div className="space-y-3 mb-8">
                {currentQ.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => setExamAnswers({ ...examAnswers, [currentQuestionIndex]: idx })}
                    className={`w-full p-4 text-left rounded-lg border-2 transition font-semibold ${
                      examAnswers[currentQuestionIndex] === idx
                        ? 'bg-blue-100 border-blue-600 text-blue-900'
                        : 'bg-white border-gray-200 text-gray-800 hover:border-blue-300'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0} className="bg-gray-400 hover:bg-gray-500 disabled:opacity-50 text-white font-bold py-2 px-6 rounded transition">Previous</button>
                {currentQuestionIndex < examQuestions.length - 1 ? (
                  <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition">Next</button>
                ) : (
                  <button onClick={() => { if (confirm('Submit your exam? Unanswered questions will be marked incorrect.')) submitExam(); }} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition">Submit Exam</button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }

  return null;
}

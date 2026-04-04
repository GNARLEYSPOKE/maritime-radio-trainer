'use client';

import { useState, useCallback } from 'react';
import { distressCalls } from '@/lib/referenceData';
import NavBar from './NavBar';
import Footer from './Footer';

const CALL_TYPES = [
  { key: 'mayday', label: 'MAYDAY', color: 'red' },
  { key: 'panpan', label: 'PAN PAN', color: 'orange' },
  { key: 'securite', label: 'SECURITE', color: 'yellow' },
];

const EMPTY_FORM = { vesselName: '', callSign: '', mmsi: '', position: '', personsOnBoard: '', nature: '', assistance: '' };

function FormField({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-600 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
}

export default function DistressView({ currentView, onNavigate, onReset }) {
  const [distressType, setDistressType] = useState('mayday');
  const [distressForm, setDistressForm] = useState(EMPTY_FORM);
  const [distressScript, setDistressScript] = useState('');

  const callInfo = distressCalls[distressType];

  const updateField = useCallback((field, value) => {
    setDistressForm(prev => ({ ...prev, [field]: value }));
  }, []);

  const buildScript = useCallback(() => {
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
`SECURITE, SECURITE, SECURITE
All Stations, All Stations, All Stations
This is ${name}, ${name}, ${name}${callSign}
Listen on Channel 6

--- Switch to Channel 6 ---

SECURITE
${name}${callSign}
${nature}
Position: ${pos}
Out`
      );
    }
  }, [distressForm, distressType]);

  const naturePlaceholder = distressType === 'mayday' ? 'e.g. taking on water and sinking'
    : distressType === 'panpan' ? 'e.g. engine failure, drifting'
    : 'e.g. large shipping container adrift';

  const scriptBorderColor = distressType === 'mayday' ? 'bg-red-50 border-red-400'
    : distressType === 'panpan' ? 'bg-orange-50 border-orange-400'
    : 'bg-yellow-50 border-yellow-400';

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar currentView={currentView} onNavigate={onNavigate} onReset={onReset} />
      <header className="bg-red-800 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Distress Call Builder</h1>
          <p className="text-red-200">Practice building MAYDAY, PAN PAN, and SECURITE calls</p>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex gap-3 mb-8">
          {CALL_TYPES.map(t => (
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
                <FormField label="Vessel Name" value={distressForm.vesselName} onChange={e => updateField('vesselName', e.target.value)} placeholder="e.g. Canadian Sailor" />
                <FormField label="Call Sign (optional)" value={distressForm.callSign} onChange={e => updateField('callSign', e.target.value)} placeholder="e.g. VE1234" />
                <FormField label="MMSI (optional)" value={distressForm.mmsi} onChange={e => updateField('mmsi', e.target.value)} placeholder="e.g. 316001234" />
                <FormField label="Position" value={distressForm.position} onChange={e => updateField('position', e.target.value)} placeholder="e.g. 43°39'N 079°23'W or 2 miles south of Toronto Island" />
                <FormField label="Persons on Board" value={distressForm.personsOnBoard} onChange={e => updateField('personsOnBoard', e.target.value)} placeholder="e.g. 4" />
                <FormField label={distressType === 'securite' ? 'Hazard Description' : 'Nature of Distress/Urgency'} value={distressForm.nature} onChange={e => updateField('nature', e.target.value)} placeholder={naturePlaceholder} />
                {distressType !== 'securite' && (
                  <FormField label="Assistance Available (optional)" value={distressForm.assistance} onChange={e => updateField('assistance', e.target.value)} placeholder="e.g. Life raft deployed, flares available" />
                )}
              </div>
              <button onClick={buildScript} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Build Call Script
              </button>
            </div>

            {distressScript && (
              <div className={`p-6 rounded-lg shadow-md border-2 ${scriptBorderColor}`}>
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
              <p className="font-bold text-yellow-700">SECURITE (Safety)</p>
              <p className="text-gray-600">Important navigational or weather warning for other vessels.</p>
              <p className="text-gray-500 mt-1">Debris in water, severe weather, unlit vessel</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

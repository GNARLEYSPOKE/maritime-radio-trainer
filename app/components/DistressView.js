'use client';

import { useState, useCallback } from 'react';
import { distressCalls } from '@/lib/referenceData';
import { viewThemes, palette, ui, accents } from '@/lib/theme';
import Layout from './Layout';

const CALL_TYPES = [
  { key: 'mayday', label: 'MAYDAY' },
  { key: 'panpan', label: 'PAN PAN' },
  { key: 'securite', label: 'SECURITE' },
];

const EMPTY_FORM = { vesselName: '', callSign: '', mmsi: '', position: '', personsOnBoard: '', nature: '', assistance: '' };

function FormField({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className={`block text-xs font-medium uppercase tracking-wider text-[${palette.textMuted}] mb-1.5`}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={ui.input + ' w-full'}
      />
    </div>
  );
}

export default function DistressView({ currentView, onNavigate, onReset }) {
  const [distressType, setDistressType] = useState('mayday');
  const [distressForm, setDistressForm] = useState(EMPTY_FORM);
  const [distressScript, setDistressScript] = useState('');
  const t = viewThemes.distress;
  const a = accents.distress;

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

  return (
    <Layout currentView={currentView} onNavigate={onNavigate} onReset={onReset}>
      <header className={`${t.headerBg} ${t.headerText} py-8`}>
        <div className="max-w-5xl mx-auto px-6">
          <p className={`text-xs uppercase tracking-[0.15em] ${t.headerSubtext} mb-2 font-medium`}>Emergency Procedures</p>
          <h1 className="text-3xl font-semibold tracking-tight">Distress Call Builder</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex gap-3 mb-10">
          {CALL_TYPES.map(ct => (
            <button
              key={ct.key}
              onClick={() => { setDistressType(ct.key); setDistressScript(''); }}
              className={`py-2.5 px-6 rounded text-sm font-medium transition ${
                distressType === ct.key
                  ? `bg-[${a.bg}] text-white`
                  : `${ui.card} hover:border-[${palette.stone}]`
              }`}
            >
              {ct.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className={`${ui.card} ${ui.cardPadding} mb-6`}>
              <h2 className={`text-lg font-semibold ${ui.heading} mb-2`}>{callInfo.title}</h2>
              <p className={`text-sm text-[${palette.textMuted}] mb-4`}>{callInfo.meaning}</p>
              <div className={`space-y-2 text-sm text-[${palette.textMuted}]`}>
                <p><span className={`font-medium text-[${palette.textDark}]`}>Priority:</span> {callInfo.priority}</p>
                <p><span className={`font-medium text-[${palette.textDark}]`}>Channel:</span> {callInfo.channelCall}</p>
                <p><span className={`font-medium text-[${palette.textDark}]`}>Signal:</span> {callInfo.signal}</p>
              </div>
            </div>
            <div className={`${ui.card} ${ui.cardPadding}`}>
              <h3 className={`font-medium text-[${palette.textDark}] text-sm mb-4`}>Steps</h3>
              <ol className="space-y-3">
                {callInfo.steps.map((step, idx) => (
                  <li key={idx} className={`flex gap-3 text-sm text-[${palette.textMuted}]`}>
                    <span className={`bg-[${palette.cream}] text-[${palette.textDark}] font-medium rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs`}>{idx + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <div className={`${ui.card} ${ui.cardPadding} mb-6`}>
              <h3 className={`font-medium text-[${palette.textDark}] text-sm mb-5`}>Enter Your Details</h3>
              <div className="space-y-4">
                <FormField label="Vessel Name" value={distressForm.vesselName} onChange={e => updateField('vesselName', e.target.value)} placeholder="e.g. Canadian Sailor" />
                <FormField label="Call Sign (optional)" value={distressForm.callSign} onChange={e => updateField('callSign', e.target.value)} placeholder="e.g. VE1234" />
                <FormField label="MMSI (optional)" value={distressForm.mmsi} onChange={e => updateField('mmsi', e.target.value)} placeholder="e.g. 316001234" />
                <FormField label="Position" value={distressForm.position} onChange={e => updateField('position', e.target.value)} placeholder="e.g. 43°39'N 079°23'W" />
                <FormField label="Persons on Board" value={distressForm.personsOnBoard} onChange={e => updateField('personsOnBoard', e.target.value)} placeholder="e.g. 4" />
                <FormField label={distressType === 'securite' ? 'Hazard Description' : 'Nature of Distress/Urgency'} value={distressForm.nature} onChange={e => updateField('nature', e.target.value)} placeholder={naturePlaceholder} />
                {distressType !== 'securite' && (
                  <FormField label="Assistance Available (optional)" value={distressForm.assistance} onChange={e => updateField('assistance', e.target.value)} placeholder="e.g. Life raft deployed, flares available" />
                )}
              </div>
              <button onClick={buildScript} className={`mt-6 w-full ${ui.btnPrimary}`}>
                Build Call Script
              </button>
            </div>

            {distressScript && (
              <div className={`${ui.card} ${ui.cardPadding} bg-[${a.muted}] border-[${a.border}]`}>
                <h3 className={`font-medium text-[${palette.textDark}] text-sm mb-4`}>Your Call Script</h3>
                <pre className={`whitespace-pre-wrap font-mono text-sm leading-relaxed text-[${palette.textDark}]`}>{distressScript}</pre>
                <p className={`mt-4 text-xs text-[${palette.textLight}]`}>Practice reading this aloud clearly and at a measured pace.</p>
              </div>
            )}
          </div>
        </div>

        <div className={`mt-12 ${ui.card} ${ui.cardPadding}`}>
          <h3 className={`font-medium text-[${palette.textDark}] text-sm mb-6`}>Quick Reference: When to Use Each Signal</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded border-l-2 border-[#7A3B3B] bg-[#F7EFEF]">
              <p className="font-medium text-[#7A3B3B] text-sm">MAYDAY (Distress)</p>
              <p className={`text-[${palette.textMuted}] text-sm mt-1`}>Grave and imminent danger. Life threatening. Immediate help needed.</p>
            </div>
            <div className="p-5 rounded border-l-2 border-[#8B6914] bg-[#FAF5E8]">
              <p className="font-medium text-[#8B6914] text-sm">PAN PAN (Urgency)</p>
              <p className={`text-[${palette.textMuted}] text-sm mt-1`}>Serious safety concern. Help needed but not immediately life threatening.</p>
            </div>
            <div className="p-5 rounded border-l-2 border-[#5B4A6B] bg-[#F3EFF7]">
              <p className="font-medium text-[#5B4A6B] text-sm">SECURITE (Safety)</p>
              <p className={`text-[${palette.textMuted}] text-sm mt-1`}>Important navigational or weather warning for other vessels.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

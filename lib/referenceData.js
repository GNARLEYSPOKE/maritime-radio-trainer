export const phoneticAlphabet = [
  { letter: 'A', word: 'Alpha' },
  { letter: 'B', word: 'Bravo' },
  { letter: 'C', word: 'Charlie' },
  { letter: 'D', word: 'Delta' },
  { letter: 'E', word: 'Echo' },
  { letter: 'F', word: 'Foxtrot' },
  { letter: 'G', word: 'Golf' },
  { letter: 'H', word: 'Hotel' },
  { letter: 'I', word: 'India' },
  { letter: 'J', word: 'Juliett' },
  { letter: 'K', word: 'Kilo' },
  { letter: 'L', word: 'Lima' },
  { letter: 'M', word: 'Mike' },
  { letter: 'N', word: 'November' },
  { letter: 'O', word: 'Oscar' },
  { letter: 'P', word: 'Papa' },
  { letter: 'Q', word: 'Quebec' },
  { letter: 'R', word: 'Romeo' },
  { letter: 'S', word: 'Sierra' },
  { letter: 'T', word: 'Tango' },
  { letter: 'U', word: 'Uniform' },
  { letter: 'V', word: 'Victor' },
  { letter: 'W', word: 'Whiskey' },
  { letter: 'X', word: 'X-ray' },
  { letter: 'Y', word: 'Yankee' },
  { letter: 'Z', word: 'Zulu' },
];

export const numbers = [
  { digit: '0', word: 'Zero' },
  { digit: '1', word: 'One' },
  { digit: '2', word: 'Two' },
  { digit: '3', word: 'Three' },
  { digit: '4', word: 'Four' },
  { digit: '5', word: 'Five' },
  { digit: '6', word: 'Six' },
  { digit: '7', word: 'Seven' },
  { digit: '8', word: 'Eight' },
  { digit: '9', word: 'Nine' },
];

export const distressCalls = {
  mayday: {
    title: 'MAYDAY (Distress)',
    priority: 'Highest',
    signal: 'Mayday (3x in call, 1x in message)',
    meaning: 'Vessel threatened by grave and imminent danger, requires IMMEDIATE assistance',
    channelCall: 'Channel 16 (VHF) or 2182 kHz (MF)',
    example: 'Mayday Mayday Mayday, this is Canadian Sailor, Canadian Sailor, Canadian Sailor...',
    steps: [
      'Assess the danger - only declare Mayday in grave/imminent danger',
      'Switch to Channel 16 (or 2182 kHz MF)',
      'Send DSC Distress alert (if equipped with DSC)',
      'Transmit voice Mayday call: "Mayday Mayday Mayday, this is [vessel name] [3x], over"',
      'Wait for acknowledgement',
      'Send Distress message: "Mayday [1x], [vessel name], position, nature of distress, persons on board, assistance available"',
      'Continue transmitting on Channel 16 until help arrives',
    ],
    silence: 'Seelonce Mayday (by vessel in distress) or Seelonce Distress (by others)',
    cancellation: 'Seelonce Feenee (when danger has passed)',
  },
  panpan: {
    title: 'PAN PAN (Urgency)',
    priority: 'High (below Distress)',
    signal: 'Pan Pan (3x in call)',
    meaning: 'Very urgent safety issue, assistance likely needed but not immediately',
    channelCall: 'Channel 16 (VHF) or 2182 kHz (MF)',
    example: 'Pan Pan Pan Pan Pan Pan, All Stations, this is Canadian Sailor...',
    steps: [
      'Assess the urgency - serious but not grave/imminent danger',
      'Switch to Channel 16',
      'Transmit: "Pan Pan Pan Pan Pan Pan, All Stations, this is [vessel name] [3x], over"',
      'Send urgency message with details of the situation',
      'Listen for responses and coast guard assistance',
    ],
    silence: 'Stations must listen for at least 3 minutes',
    cancellation: 'Broadcast "Urgency Ended" to All Stations when situation resolved',
  },
  securite: {
    title: 'SECURITE (Safety)',
    priority: 'Medium (below Distress/Urgency)',
    signal: 'Securite (3x in call)',
    meaning: 'Important navigational or weather warning',
    channelCall: 'Channel 16 call, then Channel 6 for detailed message',
    example: 'Securite Securite Securite, All Stations, this is Canadian Sailor...',
    steps: [
      'Identify the safety hazard (weather, navigation, etc.)',
      'Switch to Channel 16',
      'Transmit: "Securite Securite Securite, All Stations, this is [station] [3x], over"',
      'Switch to Channel 6',
      'Transmit the safety information (warning details, position if relevant)',
      'Safety calls are broadcasts - no reply expected',
    ],
    silence: 'Stations must stop routine traffic but no minimum listening period required',
    cancellation: 'No explicit cancellation - information transmitted once',
  },
};

export function translateToPhonetic(text) {
  return text.toUpperCase().split('').map(c => {
    const p = phoneticAlphabet.find(x => x.letter === c);
    if (p) return p.word;
    const n = numbers.find(x => x.digit === c);
    if (n) return n.word;
    if (c === ' ') return ' — ';
    return c;
  }).join(' ');
}

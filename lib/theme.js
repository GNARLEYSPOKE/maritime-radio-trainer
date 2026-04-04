// Scandinavian design palette — navy + warm whites, muted accents.
// One file to change the entire visual feel.

// ── Core palette ──
export const palette = {
  navy:       '#1A2744',
  navyLight:  '#2C3E6B',
  navyMuted:  '#3D5A80',
  white:      '#FAF9F6',   // warm white, never pure #FFF
  cream:      '#F5F3EF',
  sand:       '#E8E4DD',
  stone:      '#C4BDB2',
  textDark:   '#1A2744',   // navy as primary text
  textMuted:  '#6B7280',   // warm gray
  textLight:  '#9CA3AF',
  border:     '#E8E4DD',   // sand as border
  borderLight:'#F0EDE8',
  // Scandinavian accent pops
  coral:      '#E8837C',
  teal:       '#5B8E9B',
  mustard:    '#E5B74F',
};

// ── Muted accents per section (dusty, desaturated) ──
export const accents = {
  study:    { bg: '#2C3E6B', text: '#C9D4E8', muted: '#EEF1F7', border: '#C9D4E8' },
  phonetic: { bg: '#5B4A6B', text: '#D8CEE4', muted: '#F3EFF7', border: '#D8CEE4' },
  distress: { bg: '#7A3B3B', text: '#E8C9C9', muted: '#F7EFEF', border: '#E8C9C9' },
  exam:     { bg: '#3B5A4A', text: '#C9E0D2', muted: '#EFF5F1', border: '#C9E0D2' },
};

// ── Per-view header themes ──
export const viewThemes = {
  home: {
    headerBg:      `bg-[${palette.navy}]`,
    headerText:    'text-white',
    headerSubtext: 'text-blue-200/70',
  },
  section: {
    headerBg:      `bg-[#2C3E6B]`,
    headerText:    'text-white',
    headerSubtext: 'text-blue-200/60',
  },
  phonetic: {
    headerBg:      `bg-[#5B4A6B]`,
    headerText:    'text-white',
    headerSubtext: 'text-purple-200/60',
  },
  distress: {
    headerBg:      `bg-[#7A3B3B]`,
    headerText:    'text-white',
    headerSubtext: 'text-red-200/60',
  },
  exam: {
    headerBg:      `bg-[#3B5A4A]`,
    headerText:    'text-white',
    headerSubtext: 'text-green-200/60',
  },
};

// ── Shell (nav, footer, sponsors) ──
export const shell = {
  navBg:           `bg-[${palette.navy}]`,
  navText:         'text-white',
  navActive:       `bg-white/15`,
  navHover:        'hover:bg-white/10',
  footerBg:        `bg-[${palette.navy}]`,
  footerText:      'text-white/50',
  footerLink:      'text-white/70 hover:text-white',
  footerMuted:     'text-white/35',
  sponsorsBg:      `bg-[${palette.cream}]`,
  sponsorsText:    `text-[${palette.textMuted}]`,
  sponsorsHeading: `text-[${palette.textDark}]`,
  pageBg:          `bg-[${palette.white}]`,
};

// ── Shared UI tokens ──
export const ui = {
  card:          `bg-white border border-[${palette.border}] rounded-lg`,
  cardHover:     `hover:border-[${palette.stone}] hover:shadow-sm`,
  cardPadding:   'p-8',
  sectionGap:    'py-16',
  heading:       `text-[${palette.navy}] font-semibold`,
  label:         `text-[${palette.textMuted}] text-xs uppercase tracking-wider font-medium`,
  input:         `border border-[${palette.border}] rounded px-4 py-3 focus:outline-none focus:border-[${palette.navyMuted}] bg-white text-[${palette.textDark}]`,
  btnPrimary:    `bg-[${palette.navy}] text-white font-medium px-6 py-3 rounded hover:bg-[${palette.navyLight}]`,
  btnSecondary:  `border border-[${palette.border}] text-[${palette.textDark}] font-medium px-6 py-3 rounded hover:bg-[${palette.cream}]`,
  btnGhost:      `text-[${palette.navyMuted}] font-medium hover:text-[${palette.navy}]`,
};

'use client';

// Scandinavian-inspired geometric SVG shapes.
// Used as decorative accents in headers, cards, and dividers.

export function Diamond({ size = 24, color = '#E8837C', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <polygon points="12,2 22,12 12,22 2,12" fill={color} />
    </svg>
  );
}

export function HalfCircle({ size = 24, color = '#5B8E9B', rotate = 0, className = '' }) {
  return (
    <svg width={size} height={size / 2} viewBox="0 0 24 12" className={className} style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M0,12 A12,12 0 0,1 24,12 Z" fill={color} />
    </svg>
  );
}

export function Triangle({ size = 24, color = '#E5B74F', rotate = 0, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={{ transform: `rotate(${rotate}deg)` }}>
      <polygon points="12,2 22,22 2,22" fill={color} />
    </svg>
  );
}

export function Circle({ size = 24, color = '#5B8E9B', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill={color} />
    </svg>
  );
}

export function Cross({ size = 24, color = '#1A2744', strokeWidth = 2.5, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function Hexagon({ size = 24, color = '#E8837C', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
      <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill={color} />
    </svg>
  );
}

export function DotGrid({ cols = 5, rows = 3, dotSize = 3, gap = 10, color = '#1A2744', opacity = 0.15, className = '' }) {
  const w = (cols - 1) * gap + dotSize;
  const h = (rows - 1) * gap + dotSize;
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle key={`${r}-${c}`} cx={c * gap + dotSize / 2} cy={r * gap + dotSize / 2} r={dotSize / 2} fill={color} opacity={opacity} />
      );
    }
  }
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className={className}>
      {dots}
    </svg>
  );
}

// Decorative row of mixed shapes — used as a section divider
export function GeoDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <Diamond size={8} color="#E8837C" />
      <Triangle size={8} color="#E5B74F" rotate={0} />
      <Circle size={8} color="#5B8E9B" />
      <Diamond size={8} color="#E8837C" />
      <Triangle size={8} color="#E5B74F" rotate={180} />
      <Circle size={8} color="#5B8E9B" />
      <Diamond size={8} color="#E8837C" />
    </div>
  );
}

// Large decorative cluster for headers
export function HeaderGeo({ variant = 'home', className = '' }) {
  const configs = {
    home: (
      <div className={`relative ${className}`}>
        <HalfCircle size={64} color="#5B8E9B" className="absolute -top-2 -right-4 opacity-20" />
        <Diamond size={20} color="#E8837C" className="absolute top-8 right-12 opacity-30" />
        <Triangle size={16} color="#E5B74F" rotate={15} className="absolute top-1 right-24 opacity-25" />
        <Circle size={10} color="#E8837C" className="absolute top-14 right-6 opacity-20" />
        <DotGrid cols={4} rows={3} gap={8} dotSize={2.5} className="absolute top-3 right-36 opacity-30" />
      </div>
    ),
    study: (
      <div className={`relative ${className}`}>
        <Triangle size={40} color="#E5B74F" rotate={-10} className="absolute -top-2 -right-2 opacity-15" />
        <Circle size={14} color="#E8837C" className="absolute top-10 right-10 opacity-25" />
        <DotGrid cols={3} rows={3} gap={8} dotSize={2} className="absolute top-2 right-20 opacity-25" />
      </div>
    ),
    phonetic: (
      <div className={`relative ${className}`}>
        <Hexagon size={36} color="#E5B74F" className="absolute -top-2 -right-2 opacity-15" />
        <Diamond size={14} color="#5B8E9B" className="absolute top-8 right-12 opacity-25" />
        <Cross size={12} color="#FAF9F6" className="absolute top-2 right-24 opacity-20" />
      </div>
    ),
    distress: (
      <div className={`relative ${className}`}>
        <Diamond size={40} color="#E5B74F" className="absolute -top-4 -right-2 opacity-12" />
        <Circle size={16} color="#5B8E9B" className="absolute top-6 right-14 opacity-20" />
        <Triangle size={12} color="#E8837C" rotate={45} className="absolute top-1 right-28 opacity-20" />
      </div>
    ),
    exam: (
      <div className={`relative ${className}`}>
        <HalfCircle size={48} color="#E5B74F" rotate={180} className="absolute -top-6 -right-4 opacity-15" />
        <Cross size={16} color="#FAF9F6" className="absolute top-6 right-8 opacity-15" />
        <DotGrid cols={3} rows={2} gap={10} dotSize={2.5} className="absolute top-3 right-24 opacity-20" />
      </div>
    ),
  };

  return configs[variant] || configs.home;
}

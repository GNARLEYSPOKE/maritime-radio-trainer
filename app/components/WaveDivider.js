'use client';

// Organic wave shape — sits between hero and content.
// flip: renders upside down (for bottom of sections)

export function WaveDivider({ color = '#FAF9F6', flip = false, className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function HorizonLine({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 Q360,35 720,20 Q1080,5 1440,20 L1440,40 L0,40 Z"
          fill="#FAF9F6"
          fillOpacity="0.08"
        />
        <path
          d="M0,28 Q360,38 720,28 Q1080,18 1440,28 L1440,40 L0,40 Z"
          fill="#FAF9F6"
          fillOpacity="0.04"
        />
      </svg>
    </div>
  );
}

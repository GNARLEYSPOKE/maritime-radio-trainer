'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-300 py-6 text-center text-sm">
      <p>
        Maritime Radio Trainer by Sail Canada Instructor Chris Bryce, powered by{' '}
        <a href="https://dotfusion.com" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline transition">
          Dotfusion
        </a>
      </p>
      <p className="text-blue-400 mt-1">Study aid only. Not a substitute for the official CPS-ECP Maritime Radio Course.</p>
    </footer>
  );
}

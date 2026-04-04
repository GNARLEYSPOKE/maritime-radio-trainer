'use client';

import { shell } from '@/lib/theme';

export default function Footer() {
  return (
    <footer className={`${shell.footerBg} ${shell.footerText} py-6 text-center text-sm`}>
      <p>
        Maritime Radio Trainer by Sail Canada Instructor Chris Bryce, powered by{' '}
        <a href="https://dotfusion.com" target="_blank" rel="noopener noreferrer" className={`${shell.footerLink} underline transition`}>
          Dotfusion
        </a>
      </p>
      <p className={`${shell.footerMuted} mt-1`}>Study aid only. Not a substitute for the official CPS-ECP Maritime Radio Course.</p>
    </footer>
  );
}

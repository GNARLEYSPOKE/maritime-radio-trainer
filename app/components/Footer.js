'use client';

import { shell } from '@/lib/theme';

export default function Footer() {
  return (
    <footer className={`${shell.footerBg} py-10 text-center`}>
      <p className={`${shell.footerText} text-sm`}>
        Maritime Radio Trainer by Sail Canada Instructor Chris Bryce, powered by{' '}
        <a href="https://dotfusion.com" target="_blank" rel="noopener noreferrer" className={`${shell.footerLink} underline underline-offset-2 transition`}>
          Dotfusion
        </a>
      </p>
      <p className={`${shell.footerMuted} text-xs mt-2`}>Study aid only. Not a substitute for the official CPS-ECP Maritime Radio Course.</p>
    </footer>
  );
}

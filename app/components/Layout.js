'use client';

import { shell } from '@/lib/theme';
import NavBar from './NavBar';
import SponsorsBar from './SponsorsBar';
import Footer from './Footer';

export default function Layout({ currentView, onNavigate, onReset, children }) {
  return (
    <div className={`min-h-screen flex flex-col ${shell.pageBg}`}>
      <NavBar currentView={currentView} onNavigate={onNavigate} onReset={onReset} />
      <div className="flex-1">{children}</div>
      <SponsorsBar />
      <Footer />
    </div>
  );
}

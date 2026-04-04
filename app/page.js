'use client';

import { useState, useCallback } from 'react';
import { useProgress } from './hooks/useProgress';
import HomeView from './components/HomeView';
import SectionView from './components/SectionView';
import PhoneticView from './components/PhoneticView';
import DistressView from './components/DistressView';
import ExamView from './components/ExamView';

export default function Home() {
  const [currentView, setCurrentView] = useState('home');
  const { quizScores, setQuizScores } = useProgress();

  const handleNavigate = useCallback((view) => {
    setCurrentView(view);
  }, []);

  const handleStartStudy = useCallback(() => {
    setCurrentView('section');
  }, []);

  switch (currentView) {
    case 'section':
      return <SectionView currentView={currentView} onNavigate={handleNavigate} quizScores={quizScores} setQuizScores={setQuizScores} />;
    case 'phonetic':
      return <PhoneticView currentView={currentView} onNavigate={handleNavigate} />;
    case 'distress':
      return <DistressView currentView={currentView} onNavigate={handleNavigate} />;
    case 'exam':
      return <ExamView currentView={currentView} onNavigate={handleNavigate} />;
    default:
      return <HomeView currentView={currentView} onNavigate={handleNavigate} quizScores={quizScores} onStartStudy={handleStartStudy} />;
  }
}

'use client';

import { useState, useEffect } from 'react';

export function useProgress() {
  const [quizScores, setQuizScores] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('quizScores');
    if (saved) setQuizScores(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('quizScores', JSON.stringify(quizScores));
  }, [quizScores]);

  const resetProgress = () => {
    setQuizScores({});
    localStorage.removeItem('quizScores');
  };

  return { quizScores, setQuizScores, resetProgress };
}

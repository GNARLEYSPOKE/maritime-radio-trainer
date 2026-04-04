'use client';

import { useState, useCallback } from 'react';
import { PASS_THRESHOLD } from '@/lib/constants';

export function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
  }, []);

  const selectAnswer = useCallback((questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  }, []);

  const scoreQuiz = useCallback((quiz) => {
    let correct = 0;
    quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) correct++;
    });
    return Math.round((correct / quiz.length) * 100);
  }, [selectedAnswers]);

  const getMissedQuestions = useCallback((quiz) => {
    return quiz.filter((q, idx) => selectedAnswers[idx] !== q.correctIndex);
  }, [selectedAnswers]);

  return {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    selectedAnswers,
    selectAnswer,
    resetQuiz,
    scoreQuiz,
    getMissedQuestions,
    PASS_THRESHOLD,
  };
}

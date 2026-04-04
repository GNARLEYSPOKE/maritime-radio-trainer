'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { quizzes, sections } from '@/lib/quizData';
import { EXAM_DURATION_SECONDS, EXAM_QUESTION_COUNT, PASS_THRESHOLD } from '@/lib/constants';

export function useExam() {
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({});
  const [examTimeLeft, setExamTimeLeft] = useState(EXAM_DURATION_SECONDS);
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examResults, setExamResults] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const examTimerRef = useRef(null);

  useEffect(() => {
    return () => { if (examTimerRef.current) clearInterval(examTimerRef.current); };
  }, []);

  const generateExam = useCallback(() => {
    const allQuestions = [];
    Object.keys(quizzes).forEach(sectionNum => {
      quizzes[sectionNum].forEach(q => {
        allQuestions.push({ ...q, sectionNum: parseInt(sectionNum) });
      });
    });
    const shuffled = allQuestions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, EXAM_QUESTION_COUNT);
  }, []);

  const startExam = useCallback(() => {
    const questions = generateExam();
    setExamQuestions(questions);
    setExamAnswers({});
    setExamTimeLeft(EXAM_DURATION_SECONDS);
    setExamStarted(true);
    setExamFinished(false);
    setExamResults(null);
    setCurrentQuestionIndex(0);
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    examTimerRef.current = setInterval(() => {
      setExamTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(examTimerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [generateExam]);

  const submitExam = useCallback(() => {
    if (examTimerRef.current) clearInterval(examTimerRef.current);
    let correct = 0;
    const sectionBreakdown = {};
    examQuestions.forEach((q, idx) => {
      const sNum = q.sectionNum;
      if (!sectionBreakdown[sNum]) sectionBreakdown[sNum] = { correct: 0, total: 0 };
      sectionBreakdown[sNum].total++;
      if (examAnswers[idx] === q.correctIndex) {
        correct++;
        sectionBreakdown[sNum].correct++;
      }
    });
    const percentage = Math.round((correct / examQuestions.length) * 100);
    setExamResults({ correct, total: examQuestions.length, percentage, sectionBreakdown, passed: percentage >= PASS_THRESHOLD });
    setExamFinished(true);
    setExamStarted(false);
  }, [examQuestions, examAnswers]);

  useEffect(() => {
    if (examTimeLeft === 0 && examStarted) submitExam();
  }, [examTimeLeft, examStarted, submitExam]);

  const selectAnswer = useCallback((questionIndex, answerIndex) => {
    setExamAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return {
    examQuestions,
    examAnswers,
    examTimeLeft,
    examStarted,
    examFinished,
    examResults,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    startExam,
    submitExam,
    selectAnswer,
    formatTime,
  };
}

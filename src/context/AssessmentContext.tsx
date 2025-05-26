'use client';

import React, { createContext, useContext, useState } from 'react';

interface AnswerMap {
  [questionId: string]: string; // optionId
}

interface AssessmentContextType {
  answers: AnswerMap;
  setAnswer: (questionId: string, optionId: string) => void;
  resetAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState<AnswerMap>({});

  const setAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const resetAssessment = () => {
    setAnswers({});
  };

  return (
    <AssessmentContext.Provider value={{ answers, setAnswer, resetAssessment }}>{children}</AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}

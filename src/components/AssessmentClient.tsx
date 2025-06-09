'use client';

import { useState } from 'react';
import { Assessment } from '@/services/api';
import QuestionCard from './QuestionCard';

interface AssessmentClientProps {
  assessment: Assessment;
}

export default function AssessmentClient({ assessment }: AssessmentClientProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const currentQuestion = assessment.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === assessment.questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">{assessment.title}</h1>

      <QuestionCard
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={assessment.questions.length}
        onAnswer={handleAnswer}
        selectedAnswer={answers[currentQuestion.id]}
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={isFirstQuestion}
          className={`px-6 py-2 rounded-lg ${
            isFirstQuestion
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={isLastQuestion}
          className={`px-6 py-2 rounded-lg ${
            isLastQuestion ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

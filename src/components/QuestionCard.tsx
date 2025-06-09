'use client';

import { Question } from '@/services/api';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (questionId: string, answerId: string) => void;
  selectedAnswer?: string;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  selectedAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <span className="text-sm text-gray-500">
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-6">{question.text}</h3>
      <div className="space-y-4">
        {question.options.map(option => (
          <button
            key={option.id}
            onClick={() => onAnswer(question.id, option.id)}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${
              selectedAnswer === option.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

interface Question {
  id: string;
  text: string;
  options: { id: string; label: string }[];
}

interface QuestionCardProps {
  question: Question;
  onSelect: (optionId: string) => void;
}

export function QuestionCard({ question, onSelect }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onSelect(optionId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-primary mb-4">{question.text}</h3>

      <div className="space-y-3">
        {question.options.map(option => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            className={`w-full text-left p-4 rounded-lg border transition-all
              ${
                selectedOption === option.id
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

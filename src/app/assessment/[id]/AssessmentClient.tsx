'use client';

import React from 'react';
import { QuestionCard } from '@/components/QuestionCard';
import Link from 'next/link';
import { Assessment } from '@/services/api';

interface AssessmentClientProps {
  assessment: Assessment;
}

export function AssessmentClient({ assessment }: AssessmentClientProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">{assessment.title}</h1>
      <div className="space-y-8">
        {assessment.questions.map(question => (
          <QuestionCard
            key={question.id}
            question={question}
            onSelect={optionId => {
              console.log(`Selected option ${optionId} for question ${question.id}`);
            }}
          />
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/results"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Submit Assessment
        </Link>
      </div>
    </div>
  );
}

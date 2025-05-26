import React from 'react';
import { ResultsDashboard } from '@/components/ResultsDashboard';

export default function ResultsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Assessment Results</h1>
      <ResultsDashboard />
    </div>
  );
}

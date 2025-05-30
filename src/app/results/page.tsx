import React from 'react';
import { ResultsDashboard } from '@/components/ResultsDashboard';
import Link from 'next/link';

export default function ResultsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Assessment Results</h1>
      <ResultsDashboard />

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

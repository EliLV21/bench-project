import React from 'react';
import { fetchResults } from '@/services/api';
import Link from 'next/link';

export default async function ResultsPage() {
  const results = await fetchResults();
  const latestResult = results[0]; // Get the most recent result

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Results Page</h1>
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Assessment Score</h2>
        <p className="text-4xl font-bold text-primary">{latestResult.score}%</p>
      </div>
      <div className="mt-8">
        <Link
          href="/assessment/sample"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Take Another Assessment
        </Link>
      </div>
    </div>
  );
}

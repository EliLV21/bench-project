import React from 'react';
import { fetchAssessment } from '@/services/api';
import Link from 'next/link';
import { AssessmentClient } from './AssessmentClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AssessmentPage({ params }: PageProps) {
  try {
    const param = await params;
    const assessment = await fetchAssessment(param.id);

    if (!assessment) {
      return (
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Assessment not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      );
    }

    return <AssessmentClient assessment={assessment} />;
  } catch (error) {
    console.error('Error loading assessment:', error);
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Error loading assessment</h1>
        <p className="text-red-500 mb-4">There was a problem loading the assessment.</p>
        <Link href="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }
}

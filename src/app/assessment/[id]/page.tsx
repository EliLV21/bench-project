import React from 'react';
import { fetchAssessment } from '@/services/api';
import Link from 'next/link';
import { AssessmentClient } from './AssessmentClient';
import { Metadata } from 'next';

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `Assessment ${params.id}`,
  };
}

export async function generateStaticParams() {
  // Generate a range of assessment IDs for static export
  const assessmentIds = Array.from({ length: 100 }, (_, i) => ({
    id: (i + 1).toString(),
  }));

  // Add some specific assessment IDs
  const specificIds = ['assessment-1', 'assessment-2', 'assessment-3'].map(id => ({
    id,
  }));

  return [...assessmentIds, ...specificIds];
}

export default async function AssessmentPage({ params }: PageProps) {
  try {
    const assessment = await fetchAssessment(params.id);

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

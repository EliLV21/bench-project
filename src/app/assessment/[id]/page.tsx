import { fetchAssessment } from '@/services/api';
import AssessmentClient from '@/components/AssessmentClient';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function AssessmentPage({ params }: PageProps) {
  const assessment = await fetchAssessment(params.id);

  if (!assessment) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Assessment Not Found</h1>
        <p className="mb-6">The assessment you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return <AssessmentClient assessment={assessment} />;
}

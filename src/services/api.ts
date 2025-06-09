export interface Question {
  id: string;
  text: string;
  options: { id: string; label: string }[];
}

export interface Assessment {
  id: string;
  title: string;
  questions: Question[];
}

export interface AssessmentResult {
  id: string;
  date: string;
  score: number;
}

export const fetchAssessment = async (id: string): Promise<Assessment | null> => {
  // In a real application, this would make an API call to fetch the assessment
  // For now, we'll return mock data for any valid ID
  if (!id) return null;

  return {
    id,
    title: `Assessment ${id}`,
    questions: [
      {
        id: 'q1',
        text: 'Question 1?',
        options: [
          { id: 'a1', label: 'A' },
          { id: 'b1', label: 'B' },
          { id: 'c1', label: 'C' },
        ],
      },
      {
        id: 'q2',
        text: 'Question 2?',
        options: [
          { id: 'x2', label: 'X' },
          { id: 'y2', label: 'Y' },
          { id: 'z2', label: 'Z' },
        ],
      },
    ],
  };
};

export const submitResponse = async (
  assessmentId: string,
  answers: Record<string, string>
): Promise<{ success: boolean }> => {
  console.log(`Submitting answers for assessment ${assessmentId}:`, answers);
  return { success: true };
};

export const fetchResults = async (): Promise<AssessmentResult[]> => {
  return [
    { id: 'abc123', date: '2024-01-01', score: 85 },
    { id: 'def456', date: '2024-02-10', score: 72 },
  ];
};

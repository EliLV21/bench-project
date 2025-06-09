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

// Mock data for assessments
const mockAssessments: Record<string, Assessment> = {
  '123': {
    id: '123',
    title: 'Assessment 123',
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
  },
  '1': {
    id: '1',
    title: 'Assessment 1',
    questions: [
      {
        id: 'q1',
        text: 'What is your favorite color?',
        options: [
          { id: 'a1', label: 'Red' },
          { id: 'b1', label: 'Blue' },
          { id: 'c1', label: 'Green' },
        ],
      },
      {
        id: 'q2',
        text: 'What is your favorite animal?',
        options: [
          { id: 'x2', label: 'Dog' },
          { id: 'y2', label: 'Cat' },
          { id: 'z2', label: 'Bird' },
        ],
      },
    ],
  },
};

export const fetchAssessment = async (id: string): Promise<Assessment | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const assessment = mockAssessments[id];

  if (!assessment) {
    return null;
  }

  // Validate assessment structure
  if (!assessment.questions || !Array.isArray(assessment.questions)) {
    return null;
  }

  // Validate each question
  const validQuestions = assessment.questions.every(
    q =>
      q &&
      typeof q.id === 'string' &&
      typeof q.text === 'string' &&
      Array.isArray(q.options) &&
      q.options.every(o => o && typeof o.id === 'string' && typeof o.label === 'string')
  );

  if (!validQuestions) {
    return null;
  }

  return assessment;
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

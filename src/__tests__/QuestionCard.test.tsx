import { render, screen, fireEvent } from '@testing-library/react';
import QuestionCard from '@/components/QuestionCard';

const mockQuestion = {
  id: '1',
  text: 'Test Question',
  options: [
    { id: 'a', label: 'Option A' },
    { id: 'b', label: 'Option B' },
    { id: 'c', label: 'Option C' },
  ],
};

describe('QuestionCard', () => {
  it('renders question text and options', () => {
    const handleAnswer = jest.fn();

    render(<QuestionCard question={mockQuestion} questionNumber={1} totalQuestions={3} onAnswer={handleAnswer} />);

    expect(screen.getByText('Test Question')).toBeInTheDocument();
    expect(screen.getByText('Question 1 of 3')).toBeInTheDocument();
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
    expect(screen.getByText('Option C')).toBeInTheDocument();
  });

  it('calls onAnswer when an option is clicked', () => {
    const handleAnswer = jest.fn();

    render(<QuestionCard question={mockQuestion} questionNumber={1} totalQuestions={3} onAnswer={handleAnswer} />);

    fireEvent.click(screen.getByText('Option A'));
    expect(handleAnswer).toHaveBeenCalledWith('1', 'a');
  });

  it('shows selected option with correct styling', () => {
    render(
      <QuestionCard
        question={mockQuestion}
        questionNumber={1}
        totalQuestions={3}
        onAnswer={() => {}}
        selectedAnswer="b"
      />
    );

    const selectedOption = screen.getByText('Option B');
    expect(selectedOption).toHaveClass('border-blue-500', 'bg-blue-50');
  });
});

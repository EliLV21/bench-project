import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QuestionCard } from './QuestionCard';

describe('QuestionCard', () => {
  const mockQuestion = {
    id: 'q1',
    text: 'What is your favorite color?',
    options: [
      { id: 'o1', label: 'Red' },
      { id: 'o2', label: 'Blue' },
      { id: 'o3', label: 'Green' },
    ],
  };

  it('renders question text and options', () => {
    render(<QuestionCard question={mockQuestion} onSelect={() => {}} />);

    expect(screen.getByText(mockQuestion.text)).toBeInTheDocument();
    mockQuestion.options.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onSelect when an option is selected', () => {
    const onSelect = vi.fn();
    render(<QuestionCard question={mockQuestion} onSelect={onSelect} />);

    const firstOption = screen.getByLabelText(mockQuestion.options[0].label);
    fireEvent.click(firstOption);

    expect(onSelect).toHaveBeenCalledWith(mockQuestion.options[0].id);
  });
});

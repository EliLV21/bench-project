import { describe, it, expect } from 'vitest';
import { fetchAssessment, submitResponse, fetchResults } from './api';

describe('API Services', () => {
  describe('fetchAssessment', () => {
    it('should return an assessment with the expected structure', async () => {
      const result = await fetchAssessment('123');
      expect(result).toMatchObject({
        id: expect.any(String),
        title: expect.any(String),
        questions: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            text: expect.any(String),
            options: expect.any(Array),
          }),
        ]),
      });
    });
  });

  describe('submitResponse', () => {
    it('should return a success response', async () => {
      const result = await submitResponse('123', { q1: 'A' });
      expect(result).toMatchObject({
        success: expect.any(Boolean),
      });
    });
  });

  describe('fetchResults', () => {
    it('should return an array of assessment results', async () => {
      const results = await fetchResults();
      expect(results).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            date: expect.any(String),
            score: expect.any(Number),
          }),
        ])
      );
    });
  });
});

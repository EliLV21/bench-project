import { useState } from 'react';
import { TableBody, TableCell, TableRow } from './ui/table';

interface Result {
  id: string;
  date: string;
  score: number;
}

interface TableRowResultsProps {
  results: Result[];
  setSelectedResult: (result: Result) => void;
}

export const TableBodyResults = ({ results, setSelectedResult }: TableRowResultsProps) => {
  return (
    <TableBody>
      {results.map(result => (
        <TableRow
          key={result.id}
          className="cursor-pointer hover:bg-muted/50"
          onClick={() => setSelectedResult(result)}
        >
          <TableCell>{new Date(result.date).toLocaleDateString()}</TableCell>
          <TableCell>{result.id}</TableCell>
          <TableCell className="text-right">{result.score}%</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

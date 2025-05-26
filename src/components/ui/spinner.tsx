'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div role="status" aria-label="Loading" className={cn('flex items-center justify-center', className)} {...props}>
      <div className={cn('animate-spin rounded-full border-4 border-primary/20 border-t-primary', sizeClasses[size])} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}

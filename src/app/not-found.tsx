import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Return Ho
      </Link>
    </div>
  );
}

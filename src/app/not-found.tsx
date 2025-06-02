'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Check if the URL matches our assessment pattern
    const path = window.location.pathname;
    if (path.includes('/assessment/')) {
      // Extract the ID from the URL
      const id = path.split('/assessment/')[1];
      if (id) {
        // Redirect to the correct path
        router.push(`/assessment/${id}`);
        return;
      }
    }
  }, [router]);

  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Return to Home
      </Link>
    </div>
  );
}

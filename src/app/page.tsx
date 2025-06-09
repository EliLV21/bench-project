'use client';

import Link from 'next/link';

export default function Home() {
  console.log('Home page rendered');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/assessment/123"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            onClick={() => console.log('Clicked Assessment 123')}
          >
            Go to Assessment 123
          </Link>
          <Link
            href="/assessment/1"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            onClick={() => console.log('Clicked Assessment 1')}
          >
            Go to Assessment 1
          </Link>
        </div>
      </main>
    </div>
  );
}

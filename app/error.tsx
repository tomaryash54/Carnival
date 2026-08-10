'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Something went wrong</p>
      <h1 className="mt-6 text-5xl font-black text-slate-950">Unexpected error</h1>
      <p className="mt-6 max-w-2xl mx-auto text-base leading-8 text-slate-600">
        An unexpected issue occurred while loading this page. Please refresh, or return to the homepage.
      </p>
      <Link href="/" className="btn-primary mt-10 inline-flex">
        Return home
      </Link>
    </div>
  );
}

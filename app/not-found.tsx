import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">Page not found</p>
      <h1 className="mt-6 text-6xl font-black text-slate-950">404</h1>
      <p className="mt-6 max-w-2xl mx-auto text-base leading-8 text-slate-600">
        The page you are looking for is unavailable or may have moved. Return to the homepage to continue browsing.
      </p>
      <Link href="/" className="btn-primary mt-10 inline-flex">
        Back to Home
      </Link>
    </div>
  );
}

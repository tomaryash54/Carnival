import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | PlayNest',
  description: 'Terms and conditions for PlayNest demo site.'
};

export default function TermsPage() {
  return (
    <div className="container py-20">
      <div className="rounded-lg border border-slate-100 bg-white p-10 shadow-soft">
        <h1 className="text-3xl font-semibold text-slate-950">Terms & Conditions</h1>
        <p className="mt-4 muted">These placeholder terms outline the conditions for using the PlayNest demo website.</p>
        <div className="mt-6 space-y-6 muted">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Acceptance</h2>
            <p className="mt-2">By using this website, you agree to the terms and the privacy practices described in the privacy policy.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Content accuracy</h2>
            <p className="mt-2">Information is provided for demonstration purposes and may not reflect actual business operations.</p>
          </div>
        </div>
        <Link href="/" className="btn-secondary mt-6 inline-flex">Return home</Link>
      </div>
    </div>
  );
}

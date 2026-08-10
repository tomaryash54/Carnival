import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Vertex Solutions',
  description: 'Placeholder terms and conditions for the Vertex Solutions website.'
};

export default function TermsPage() {
  return (
    <div className="container py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-12 shadow-soft">
        <h1 className="text-4xl font-semibold text-slate-950">Terms & Conditions</h1>
        <p className="mt-6 text-slate-600">
          These placeholder terms outline the conditions for using the Vertex Solutions website.
        </p>
        <div className="mt-10 space-y-6 text-slate-600">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Acceptance</h2>
            <p className="mt-3">By using this website, you agree to the terms and the privacy practices described in the privacy policy.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Content accuracy</h2>
            <p className="mt-3">Information is provided for demonstration purposes and may not reflect actual business operations.</p>
          </div>
        </div>
        <Link href="/" className="btn-secondary mt-8 inline-flex">
          Return home
        </Link>
      </div>
    </div>
  );
}

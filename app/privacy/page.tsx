import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Vamskidszone',
  description: 'Privacy policy for Vamskidszone demo site.'
};

export default function PrivacyPage() {
  return (
    <div className="container py-20">
      <div className="rounded-lg border border-slate-100 bg-white p-10 shadow-soft">
        <h1 className="text-3xl font-semibold text-slate-950">Privacy Policy</h1>
        <p className="mt-4 muted">This placeholder policy explains how Vamskidszone handles contact enquiries submitted through the website.</p>
        <div className="mt-8 space-y-6 muted">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Data collection</h2>
            <p className="mt-2">We collect contact details and enquiry information submitted through the website form to deliver notifications and maintain query records.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Use of information</h2>
            <p className="mt-2">Submitted information is used to respond to enquiries and provide follow-up communication as appropriate.</p>
          </div>
        </div>
        <Link href="/" className="btn-secondary mt-6 inline-flex">Return home</Link>
      </div>
    </div>
  );
}

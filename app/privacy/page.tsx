import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Vertex Solutions',
  description: 'Placeholder privacy policy for Vertex Solutions website.'
};

export default function PrivacyPage() {
  return (
    <div className="container py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-12 shadow-soft">
        <h1 className="text-4xl font-semibold text-slate-950">Privacy Policy</h1>
        <p className="mt-6 text-slate-600">
          This placeholder policy describes how Vertex Solutions handles basic website data and contact submissions.
        </p>
        <div className="mt-10 space-y-6 text-slate-600">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Data collection</h2>
            <p className="mt-3">We collect contact details and enquiry information submitted through the website form to deliver email notifications and maintain query records.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950">Use of information</h2>
            <p className="mt-3">Submitted information is used to respond to enquiries and provide follow-up communication as appropriate.</p>
          </div>
        </div>
        <Link href="/" className="btn-secondary mt-8 inline-flex">
          Return home
        </Link>
      </div>
    </div>
  );
}

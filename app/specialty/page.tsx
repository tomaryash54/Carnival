import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Specialty | Vertex Solutions',
  description: 'Learn what sets Vertex Solutions apart and how our approach provides dependable premium service outcomes.'
};

const specialtyPoints = [
  {
    title: 'Strategic clarity',
    description: 'We start with what matters most and shape every deliverable around business outcomes.'
  },
  {
    title: 'Delivery confidence',
    description: 'Transparent progress tracking and stakeholder alignment keep work moving forward.'
  },
  {
    title: 'Operational focus',
    description: 'Our solutions are practical, scalable, and designed to reduce friction for your team.'
  }
];

export default function SpecialtyPage() {
  return (
    <div className="space-y-24 py-16 lg:py-20">
      <section className="container rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Our Specialty</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              Premium service delivery built around trust and execution.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Vertex Solutions combines operational expertise, service design, and project excellence to create business-ready results.
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Start a conversation
            </Link>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80"
              alt="Executive service planning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-3">
        {specialtyPoints.map((item) => (
          <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="text-xl font-semibold text-slate-950">{item.title}</p>
            <p className="mt-4 text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="container grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-100">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="Team reviewing strategy"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">What sets us apart</p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">A practical approach built for service businesses that need clarity and speed.</h2>
          <p className="text-slate-600">
            We craft solutions with real business rhythm in mind — not abstract frameworks. That means sensible planning, proactive support, and fewer surprises.
          </p>
          <ul className="space-y-4 text-slate-600">
            <li className="list-disc pl-5">Focused service design that supports operations from day one.</li>
            <li className="list-disc pl-5">Hands-on coordination to keep work aligned and expectations managed.</li>
            <li className="list-disc pl-5">Clear business outcomes, not just activity-based recommendations.</li>
          </ul>
          <Link href="/contact" className="btn-secondary inline-flex">
            Arrange a meeting
          </Link>
        </div>
      </section>

      <section className="container rounded-[2rem] border border-slate-200 bg-slate-950 p-12 text-white shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Our process is designed to reduce risk and maximise value.</h2>
            <p className="mt-4 text-slate-300">
              We combine thoughtful discovery, disciplined planning, and attentive delivery oversight to turn complex requirements into manageable progress.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Discovery', 'Alignment', 'Delivery', 'Review'].map((step) => (
              <div key={step} className="rounded-[1.5rem] bg-slate-900 p-6">
                <p className="font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

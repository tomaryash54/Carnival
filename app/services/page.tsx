import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Our Services | Vertex Solutions',
  description: 'Explore the core service offerings designed to support operational excellence, customer experience, and project execution.'
};

const services = [
  {
    title: 'Operational consulting',
    summary: 'Targeted process improvements for consistent performance and delivery.',
    description:
      'We help refine workflows, align teams around measurable goals, and introduce operational discipline that supports safer scaling.'
  },
  {
    title: 'Customer experience design',
    summary: 'Premium engagement and communication across every touchpoint.',
    description:
      'Our approach ensures that every client interaction is professional, responsive, and designed to strengthen your brand presence.'
  },
  {
    title: 'Project execution',
    summary: 'Clear planning, milestones, and follow-through for timely delivery.',
    description:
      'Project delivery is often the difference between a service that performs and one that underdelivers. We keep plans realistic and execution disciplined.'
  },
  {
    title: 'Digital transformation',
    summary: 'Modernize the tools and systems that support your business operations.',
    description:
      'From systems planning to rollout guidance, we support modern tooling decisions that help teams work smarter and faster.'
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-24 py-16 lg:py-20">
      <section className="container rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Our Services</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              Service capabilities tailored to your business goals.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Our core service offerings are designed to support teams that need strong operational support and premium execution without complexity.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
              alt="Modern corporate planning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="card p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Service</p>
            <h2 className="mt-4 text-xl font-semibold text-slate-950">{service.title}</h2>
            <p className="mt-4 text-slate-600">{service.summary}</p>
          </div>
        ))}
      </section>

      <section className="container rounded-[2rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Designed for clarity, control, and stronger outcomes.</h2>
            <p className="mt-4 text-slate-600">
              Each service is structured to support business teams with clear milestones, consistent stakeholder communication, and measurable impact.
            </p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-50 p-8">
            <p className="font-semibold text-slate-950">Featured service: Project execution</p>
            <p className="mt-4 text-slate-600">
              From implementation planning to launch review, this service helps teams stay aligned and confident throughout every stage.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              Discuss this service
            </Link>
          </div>
        </div>
      </section>

      <section className="container rounded-[2rem] border border-slate-200 bg-slate-950 p-12 text-white shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-200">Insights</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A premium service strategy starts with the right problem definition.</h2>
            <p className="mt-4 max-w-xl text-slate-300">
              We help teams build service roadmaps that respond to current operating realities, market demands, and internal capacity.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Strategic planning', 'Process mapping', 'Delivery support', 'Client experience'].map((point) => (
              <div key={point} className="rounded-[1.5rem] bg-slate-900 p-6">
                <p className="font-semibold text-white">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

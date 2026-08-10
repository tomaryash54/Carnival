import Link from 'next/link';

export const metadata = {
  title: 'Testimonials | Vertex Solutions',
  description: 'Explore placeholder testimonials and trust indicators for the premium service experience offered by Vertex Solutions.'
};

const testimonials = [
  {
    quote: 'An excellent partner for delivering service initiatives with clarity and accountability.',
    name: 'Karan Patel',
    role: 'Program Director',
    company: 'Blue Ridge Services'
  },
  {
    quote: 'The team made complex planning feel simple and straightforward.',
    name: 'Divya Joshi',
    role: 'Head of Operations',
    company: 'Nimbus Consulting'
  },
  {
    quote: 'Their responsiveness and project discipline were exceptional throughout the engagement.',
    name: 'Rohit Sen',
    role: 'Service Lead',
    company: 'Urban Works'
  },
  {
    quote: 'A polished and premium delivery experience with strong attention to detail.',
    name: 'Sana Kapoor',
    role: 'Customer Experience Manager',
    company: 'Axis Advisory'
  },
  {
    quote: 'They helped our team adopt a much clearer process for execution and reporting.',
    name: 'Manish Khanna',
    role: 'Chief Operations Officer',
    company: 'Vertex Logistics'
  },
  {
    quote: 'The guidance and support were always timely, thoughtful, and practical.',
    name: 'Ananya Roy',
    role: 'Project Manager',
    company: 'Beacon Services'
  }
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-24 py-16 lg:py-20">
      <section className="container rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Testimonials</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              Real feedback from businesses using premium service support.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Browse placeholder stories that illustrate how a premium service partner can create stronger delivery confidence.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-50 p-10">
            <p className="text-sm uppercase tracking-[0.22em] text-brand-700">Get in touch</p>
            <p className="mt-4 text-slate-600">
              If you are ready to improve your service delivery, we can share a tailored approach for your business.
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}, {item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container rounded-[2rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Trusted performance and measurable support.</h2>
            <p className="mt-4 text-slate-600">
              The right partner is one who delivers with consistency, clarity, and confidence.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: '98% satisfaction', value: '98%' },
              { label: '500+ success stories', value: '500+' },
              { label: '24/7 support', value: '24/7' },
              { label: '10+ years experience', value: '10+' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-[1.5rem] bg-slate-50 p-6">
                <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

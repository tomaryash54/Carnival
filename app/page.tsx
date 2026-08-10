import Image from 'next/image';
import Link from 'next/link';
import { QueryForm } from '@/components/forms/query-form';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Home | Vertex Solutions',
  description: 'Premium service solutions for modern businesses — discover consulting, execution, and support designed to move your organisation forward.'
};

export default function HomePage() {
  return (
    <div className="space-y-24 py-16 lg:py-24">
      <section className="container overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-soft">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="p-10 sm:p-14 lg:p-20">
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
              Premium service delivery for growth-focused teams
            </span>
            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Solutions built around your needs, not the other way around.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Vertex Solutions helps organisations embrace smarter operations, better client engagement, and reliable service execution with clarity and confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900 sm:min-h-[520px]">
            <div className="absolute inset-0 bg-hero-gradient opacity-90" />
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Team discussing business strategy"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent px-8 py-8 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-100">Corporate service excellence</p>
              <p className="mt-3 text-3xl font-semibold">Strong planning, dependable delivery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-4">
          {siteConfig.heroHighlights.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 text-center shadow-soft">
              <p className="text-4xl font-semibold text-brand-700">{item.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">About Vertex Solutions</p>
          <h2 className="section-heading">A trusted partner for organisations that need responsive service and strategic support.</h2>
          <p className="section-copy">
            We combine operational insight, digital fluency, and project discipline to create tailored solutions for service-led businesses. Our team focuses on clear communication, risk reduction, and measurable progress.
          </p>
          <Link href="/about" className="btn-secondary">
            Learn about our story
          </Link>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-100">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="Operations team collaborating"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Our services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Expert services built to help you move faster.
            </h2>
          </div>
          <Link href="/services" className="btn-secondary">
            View all services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteConfig.services.map((service) => (
            <div key={service.title} className="card p-8">
              <p className="text-brand-700">Service</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-12 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft lg:p-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Why choose us</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              We create structured, modern service experiences that your team can depend on.
            </h2>
            <p className="mt-5 max-w-xl text-slate-600">
              From planning to launch, our approach is anchored in transparency, strong project rhythm, and trusted operational guidance.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {siteConfig.featurePoints.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 p-6">
                <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(197,157,98,0.35),_transparent_45%)]" />
        <div className="container relative grid gap-10 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-200">Featured insight</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Built for businesses seeking premium execution with clarity.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-200 sm:text-lg">
              Our work is designed to feel confident and polished, with every project backed by strong communication and practical delivery frameworks.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-slate-800 sm:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=1200&q=80"
              alt="Professional business interior"
              fill
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Trusted by business leaders who need confident delivery.
            </h2>
          </div>
          <Link href="/testimonials" className="btn-secondary w-fit">
            Read more stories
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              quote: 'Vertex Solutions helped our team create a responsive support process with high visibility and clarity.',
              name: 'Nisha Mehta',
              role: 'Operations Lead'
            },
            {
              quote: 'Their project delivery was precise, professional, and easy to align with our internal stakeholders.',
              name: 'Amit Sharma',
              role: 'Head of Growth'
            },
            {
              quote: 'The collaboration felt premium from day one — they understood our priorities and stayed on track.',
              name: 'Rhea Kapoor',
              role: 'Service Director'
            }
          ].map((item) => (
            <div key={item.name} className="card p-8">
              <p className="text-slate-700">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-950">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Start your enquiry</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
              Tell us what you need and our team will get back to you.
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Submit your project details now for a prompt response from our consulting and execution specialists.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
            <QueryForm pageLabel="Home" />
          </div>
        </div>
      </section>

      <section className="container rounded-[2rem] border border-slate-200 bg-white p-12 shadow-soft text-center">
        <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Ready to turn the next chapter into a stronger operation?</h2>
        <p className="mt-4 text-slate-600">Connect with Vertex Solutions today and receive a tailored plan for your business.</p>
        <Link href="/contact" className="btn-primary mt-8 inline-block">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

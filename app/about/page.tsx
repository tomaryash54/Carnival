import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'About Us | Vertex Solutions',
  description: 'Discover the story, mission, and values that shape Vertex Solutions and our premium service experience.'
};

export default function AboutPage() {
  return (
    <div className="space-y-24 py-16 lg:py-20">
      <section className="container rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">About Vertex Solutions</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              We turn operational ambition into dependable service outcomes.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Vertex Solutions is a fictional premium service consultancy built to demonstrate how a modern corporate website can communicate trust, clarity, and professional delivery.
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Speak with our team
            </Link>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="Business team in a meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="section-heading">Our story is rooted in trusted delivery and consistent client support.</h2>
          <p className="section-copy">
            We believe strong service experiences come from clear communication, smart planning, and teams who understand how to turn strategy into real outcomes. Our placeholder content is arranged to support real business narrative later.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-950">Mission</h3>
            <p className="mt-4 text-slate-600">
              Deliver robust service solutions that help our clients operate with confidence and clarity.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-slate-950">Vision</h3>
            <p className="mt-4 text-slate-600">
              Build a premium partner experience that can scale across teams, projects, and service delivery models.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">What makes us different</h2>
            <p className="mt-4 text-slate-600">
              Each engagement is designed to create long-term value through better service management, stronger processes, and attentive account support.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-950">Structured delivery</p>
              <p className="mt-2 text-slate-600">Clear project phases, milestones, and communication at every step.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-950">Team alignment</p>
              <p className="mt-2 text-slate-600">A single point of contact supports fast decisions and consistent status updates.</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-950">Professional quality</p>
              <p className="mt-2 text-slate-600">Premium presentation, polished documentation, and diligent follow-through.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container rounded-[2rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Our values</h2>
            <p className="mt-4 text-slate-600">
              Trust, accuracy, and thoughtful execution are the foundation of every client engagement.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Trust', 'Clarity', 'Responsiveness', 'Excellence'].map((value) => (
              <div key={value} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <p className="font-semibold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(79,174,150,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(197,157,98,0.15),_transparent_30%)] p-12 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Team focus</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">We help teams move faster without sacrificing quality.</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              With premium client service, strong accountability, and practical strategy, we help organisations deliver more confidently.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-soft">
            <p className="font-semibold text-slate-950">Want to discuss your business goals?</p>
            <p className="mt-3 text-slate-600">Contact us to review your current challenges and learn how Vertex Solutions can support your next project.</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

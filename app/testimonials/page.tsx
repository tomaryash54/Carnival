import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: `Reviews | ${siteConfig.companyName}`,
  description: 'Parent reviews and testimonials for PlayNest — demo placeholder content.'
};

const testimonials = [
  { quote: "Such a wonderful place for kids! My daughter didn&apos;t want to leave.", name: 'Priya', meta: 'Weekend visit' },
  { quote: 'Our son loved the trampoline zone — staff were very attentive.', name: 'Amit', meta: 'Birthday party' },
  { quote: 'Clean, safe and so much fun; the toddler area is perfect.', name: 'Shreya', meta: 'Toddler play' },
  { quote: 'We organized a school group visit and the team handled everything professionally.', name: 'Mr. Kumar', meta: 'School visit' }
];

export default function TestimonialsPage() {
  return (
    <div className="space-y-12 py-12 lg:py-20">
      <section className="container rounded-lg border border-slate-100 bg-white p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Reviews</p>
            <h1 className="mt-4 section-heading">What parents say about PlayNest</h1>
            <p className="mt-4 section-lead">Demo testimonials from families who enjoyed our play experiences and parties.</p>
          </div>
          <div className="rounded-md bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-brand">Plan a visit</p>
            <p className="mt-3 muted">Ready to book a party or visit? Reach out and we&apos;ll help you plan.</p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6">
              <p className="italic">“{t.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="muted text-sm">{t.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container rounded-lg bg-white p-10 shadow-soft">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            { label: 'Happy Families', value: '98%' },
            { label: 'Birthday Parties Hosted', value: '300+' },
            { label: 'Daily Sessions', value: '10+' },
            { label: 'Years of Play', value: '5' }
          ].map((s) => (
            <div key={s.label} className="card p-6 text-center">
              <p className="text-2xl font-semibold">{s.value}</p>
              <p className="muted mt-2 text-sm uppercase tracking-[0.12em]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: `About | ${siteConfig.companyName}`,
  description: 'More than a play area — the story and philosophy behind PlayNest.'
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12 lg:py-20">
      <section className="container rounded-lg border border-slate-100 bg-white p-12 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-eyebrow">About PlayNest</p>
            <h1 className="mt-4 section-heading">More than a play area</h1>
            <p className="mt-4 section-lead">
              PlayNest exists to create joyful, active and safe experiences where children can explore, move and imagine — and parents can relax knowing their little ones are in caring hands.
            </p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">Plan a Visit</Link>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-md">
            <Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1f?auto=format&fit=crop&w=1200&q=80" alt="children playing at playnest" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div>
          <h2 className="section-heading">Our story</h2>
          <p className="section-lead">Founded to give families a premium indoor play experience, PlayNest combines thoughtful design, trained staff and clean, age-appropriate play zones so every visit feels special.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-semibold">Our Philosophy</h3>
            <p className="mt-3 muted">Active play encourages confidence, creativity and social skills — we design our spaces to spark curiosity and healthy movement.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Safety First</h3>
            <p className="mt-3 muted">Certified equipment, clear sight-lines and trained staff ensure a secure, supervised environment for all children.</p>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="section-heading">Clean & Comfortable</h2>
            <p className="muted mt-3">We follow strict hygiene routines, with regular cleaning and sanitisation so families can relax while children play.</p>
          </div>
          <div className="grid gap-4">
            {['Certified equipment', 'Trained supervisors', 'Comfortable parent lounges', 'Flexible party rooms'].map((v) => (
              <div key={v} className="card p-4">
                <p className="font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container rounded-lg bg-white p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="section-heading">Made for kids, designed for parents</h2>
            <p className="muted mt-3">Smart sight-lines, comfortable seating and a dedicated cafe mean parents can enjoy a relaxed visit while children have full-on fun.</p>
          </div>
          <div className="rounded-md overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1558981403-c5a1d0f1d6f6?auto=format&fit=crop&w=1000&q=80" alt="playnest interior" width={900} height={560} className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

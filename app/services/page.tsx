import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: `Play Experiences | ${siteConfig.companyName}`,
  description: `Fun, safe and supervised play experiences for kids and families at ${siteConfig.companyName}.`
};

const experiences = [
  { title: 'Indoor Soft Play', summary: 'Padded zones for climbing, crawling and creative play.' },
  { title: 'Toddler Play Area', summary: 'Gentle sensory play for our youngest guests.' },
  { title: 'Trampoline Fun', summary: 'Bouncy, supervised sessions with safety-first equipment.' },
  { title: 'Slides & Climbing', summary: 'Large slides and safe climbing structures for all ages.' },
  { title: 'Interactive Games', summary: 'Group games and tech-enabled play for family fun.' },
  { title: 'Birthday Parties', summary: 'Private party rooms, hosts and tailored packages.' },
  { title: 'School & Group Visits', summary: 'Structured group sessions for school trips and events.' }
];

export default function ServicesPage() {
  return (
    <div className="space-y-16 py-12 lg:py-20">
      <section className="container rounded-lg border border-slate-100 bg-white p-12 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Play Experiences</p>
            <h1 className="mt-4 section-heading">Fun for Every Kind of Explorer</h1>
            <p className="mt-4 section-lead">From toddler-friendly corners to high-energy trampolines, our experiences are curated for safety, joy and discovery.</p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-md">
            <Image src="https://images.unsplash.com/photo-1544117510-3e0f0f5f6b27?auto=format&fit=crop&w=1200&q=80" alt="kids play area" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container grid gap-6 lg:grid-cols-3">
        {experiences.map((exp) => (
          <div key={exp.title} className="card p-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="mt-3 muted">{exp.summary}</p>
          </div>
        ))}
      </section>

      <section className="container rounded-lg bg-white p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="section-heading">Featured experience: Birthday Parties</h2>
            <p className="muted mt-3">Private rooms, a party host, decorations and playtime included — we handle the details so you can celebrate.</p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">Plan a Party</Link>
          </div>
          <div className="rounded-md overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1505577058444-a3dab14b3d02?auto=format&fit=crop&w=1000&q=80" alt="kids birthday party" width={900} height={560} className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

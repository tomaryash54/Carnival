import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: `Why Us | ${siteConfig.companyName}`,
  description: 'Why PlayNest is special — safety, hygiene and a parent-friendly experience.'
};

const special = [
  { title: 'Safety First', description: 'Certified equipment, trained staff and secure access for peace of mind.' },
  { title: 'Hygiene & Cleanliness', description: 'Regular sanitisation and cleaning routines keep spaces fresh and welcoming.' },
  { title: 'Age-Appropriate Zones', description: 'Separate areas tailored for toddlers, young children and older kids.' },
  { title: 'Trained Friendly Team', description: 'Hosts and supervisors trained in child safety and engagement.' },
  { title: 'Parent-Friendly Design', description: 'Comfortable seating, good sight-lines and refreshments for grown-ups.' },
  { title: 'Non-Stop Fun', description: 'Curated activities that keep energy high and smiles wide.' }
];

export default function SpecialtyPage() {
  return (
    <div className="space-y-12 py-12 lg:py-20">
      <section className="container rounded-lg border border-slate-100 bg-white p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-eyebrow">WHY PLAYNEST IS SPECIAL</p>
            <h1 className="mt-4 section-heading">What sets PlayNest apart</h1>
            <p className="mt-4 section-lead">A safety-first, parent-friendly play experience with thoughtfully designed zones and attentive staff.</p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">Plan a Visit</Link>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-md">
            <Image src="https://images.unsplash.com/photo-1558981403-c5a1d0f1d6f6?auto=format&fit=crop&w=1200&q=80" alt="playnest safety" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container grid gap-6 lg:grid-cols-3">
        {special.map((s) => (
          <div key={s.title} className="card p-6">
            <p className="text-xl font-semibold">{s.title}</p>
            <p className="mt-3 muted">{s.description}</p>
          </div>
        ))}
      </section>

      <section className="container rounded-lg bg-white p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <h2 className="section-heading">Our approach</h2>
            <p className="muted mt-3">We combine careful design, trained supervision and family-first amenities so every visit is safe, joyful and easy for parents.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Certified equipment', 'Regular cleaning', 'Dedicated hosts', 'Age-specific zones'].map((v) => (
              <div key={v} className="card p-4">
                <p className="font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

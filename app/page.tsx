import Image from 'next/image';
import Link from 'next/link';
import { QueryForm } from '@/components/forms/query-form';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default function HomePage() {
  return (
    <div className="space-y-16 py-12 lg:py-20">
      <section className="relative">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="py-12 lg:py-20">
            <p className="section-eyebrow">PLAY • EXPLORE • IMAGINE</p>
            <h1 className="mt-6 section-heading">Where Little Adventures Begin</h1>
            <p className="mt-6 section-lead">
              An exciting indoor play zone designed for big laughs, endless adventures and unforgettable family moments.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Plan Your Visit
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book a Birthday Party
              </Link>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1f?auto=format&fit=crop&w=1400&q=80"
              alt="Children playing in indoor playground"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 pointer-events-none">
              {/* decorative floating shapes could be added via CSS */}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-4">
          {siteConfig.heroHighlights.map((item) => (
            <div key={item.label} className="card p-6 text-center">
              <p className="text-2xl font-bold text-brand">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="section-eyebrow">LET THE FUN BEGIN</p>
          <h2 className="section-heading">More than a play area — it's a world of discovery.</h2>
          <p className="mt-4 section-lead">
            At PlayNest, children move, imagine and make memories while parents relax in comfortable, supervised surroundings. Our spaces are designed to be exciting for kids and reassuring for parents.
          </p>
          <Link href="/about" className="btn-secondary mt-6">
            Learn about PlayNest
          </Link>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Children sliding into ball pit"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow">ACTIVITIES</p>
            <h2 className="section-heading">Play experiences for every adventurer</h2>
          </div>
          <Link href="/services" className="btn-secondary">
            Explore all experiences
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card p-6 lg:col-span-2">
            <h3 className="text-2xl font-semibold">Soft Play Arena & Ball Pit</h3>
            <p className="mt-3 muted">A colourful padded arena ideal for climbing, tumbling and joyful discovery for younger children.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Image src="https://images.unsplash.com/photo-1544117510-3e0f0f5f6b27?auto=format&fit=crop&w=800&q=80" alt="soft play" width={600} height={360} className="rounded-md object-cover" />
              <Image src="https://images.unsplash.com/photo-1558981403-c5a1d0f1d6f6?auto=format&fit=crop&w=800&q=80" alt="ball pit" width={600} height={360} className="rounded-md object-cover" />
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-2xl font-semibold">Trampolines & Active Play</h3>
            <p className="mt-3 muted">Supervised sessions for high-energy fun, with safety harnesses and trained staff on hand.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-2xl font-semibold">Toddler Cove</h3>
            <p className="mt-3 muted">A calm, sensory-friendly corner for 0–3 years with low-impact toys and soft textures.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-2xl font-semibold">Slides & Climbing</h3>
            <p className="mt-3 muted">Giant slides and safe climbing structures crafted for confident play and exploration.</p>
          </div>

          <div className="card p-6">
            <h3 className="text-2xl font-semibold">Interactive Games</h3>
            <p className="mt-3 muted">Tech-enabled play stations and group games for family challenges and skill-building activities.</p>
          </div>
        </div>
      </section>

      <section className="container rounded-lg border border-slate-100 bg-white p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-eyebrow">WHY PARENTS LOVE PLAYNEST</p>
            <h2 className="section-heading">A safe, clean and joyful place for kids and parents</h2>
            <p className="mt-4 muted">Staffed by trained supervisors, rigorously cleaned, and designed with sight-lines and comfort for parents in mind.</p>
            <ul className="mt-6 grid gap-3">
              <li className="font-semibold">• Safety-first programs and certified equipment</li>
              <li className="font-semibold">• Comfortable parent lounges with cafe-style refreshments</li>
              <li className="font-semibold">• Flexible party packages and dedicated hosts</li>
            </ul>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-md">
            <Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1f?auto=format&fit=crop&w=1000&q=80" alt="parents watching children play" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-eyebrow">MAKE THEIR BIG DAY EVEN BIGGER</p>
            <h2 className="section-heading">Birthday Parties at PlayNest</h2>
            <p className="mt-4 muted">We host memorable, stress-free parties with tailored packages, decorations and a dedicated host so families can enjoy the celebration.</p>
            <Link href="/contact" className="btn-primary mt-6">Plan a Birthday Party</Link>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-md">
            <Image src="https://images.unsplash.com/photo-1505577058444-a3dab14b3d02?auto=format&fit=crop&w=1000&q=80" alt="kids birthday party" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-eyebrow">AGE GROUPS</p>
            <h2 className="section-heading">Play sessions designed for every age</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="card p-4 text-center">
                <p className="font-semibold">Toddlers</p>
                <p className="muted">0–3 years</p>
              </div>
              <div className="card p-4 text-center">
                <p className="font-semibold">Little Explorers</p>
                <p className="muted">4–7 years</p>
              </div>
              <div className="card p-4 text-center">
                <p className="font-semibold">Big Adventurers</p>
                <p className="muted">7–12 years</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Ready for Some Serious Fun?</h3>
            <p className="mt-2 muted">Planning a visit, birthday party or group event? Tell us what you're looking for.</p>
            <div className="mt-4">
              <QueryForm pageLabel="Home" />
            </div>
          </div>
        </div>
      </section>

      <section className="container text-center">
        <h2 className="section-heading">Hear from families who love PlayNest</h2>
        <p className="mt-4 muted">Demo testimonials from parents (placeholder content)</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { quote: "Such a wonderful place for kids! My daughter didn't want to leave.", name: 'Priya', meta: 'Parent' },
            { quote: "The staff were friendly and the whole space felt clean and safe.", name: 'Rahul', meta: 'Parent' },
            { quote: "Our son's birthday party was effortless — highly recommend!", name: 'Neha', meta: 'Parent' }
          ].map((t) => (
            <div key={t.name} className="card p-6">
              <p className="italic">“{t.quote}”</p>
              <p className="mt-4 font-semibold">{t.name}</p>
              <p className="muted text-sm">{t.meta}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

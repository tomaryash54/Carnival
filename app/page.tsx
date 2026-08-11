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
    <div className="pb-8">
      <section className="hero-shell container">
        <div className="hero-panel">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-badge">Play • Explore • Imagine</div>
              <h1>Where Little Adventures Begin</h1>
              <p>
                Big adventures, happy memories and endless fun — all in one exciting indoor playzone designed to delight curious kids and reassure busy parents.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-primary">
                  Plan Your Visit
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Birthday Parties
                </Link>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-bubble hero-bubble--yellow">Fun for every age</div>
              <div className="hero-bubble hero-bubble--blue">Safe<br />and joyful</div>

              <div className="decor-star" style={{ top: '16%', left: '18%' }} />
              <div className="decor-star" style={{ top: '8%', right: '8%' }} />
              <div className="decor-orb" style={{ top: '18%', right: '32%' }} />
              <div className="decor-dot" style={{ bottom: '22%', left: '8%' }} />
              <div className="decor-spark" style={{ bottom: '18%', right: '16%' }} />

              <div className="hero-card hero-card--main">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1f?auto=format&fit=crop&w=1200&q=80"
                  alt="Children playing in indoor playground"
                  width={900}
                  height={1100}
                  priority
                />
              </div>

              <div className="hero-card hero-card--small">
                <Image
                  src="https://images.unsplash.com/photo-1558981403-c5a1d0f1d6f6?auto=format&fit=crop&w=800&q=80"
                  alt="Kids at a bright play area"
                  width={700}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-shell">
        <div className="stats-row">
          {siteConfig.heroHighlights.map((item) => (
            <div key={item.label} className="stat-panel">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-shell intro-panel">
        <div>
          <p className="section-eyebrow">Let the fun begin</p>
          <h2 className="section-heading">More than a play area — it’s a world of discovery.</h2>
          <p className="section-lead mt-4">
            At PlayNest, children move, imagine and make memories while parents relax in comfortable, supervised surroundings. Every zone is thoughtfully designed to feel exciting, lively and reassuringly safe.
          </p>
          <Link href="/about" className="btn-secondary mt-8">
            Learn about PlayNest
          </Link>
        </div>

        <div className="image-standalone">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Children sliding into a ball pit"
            width={1200}
            height={900}
          />
        </div>
      </section>

      <section className="feature-band section-shell">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Activities</p>
              <h2 className="section-heading">Play experiences made for every adventurer</h2>
            </div>
            <Link href="/services" className="btn-secondary">
              Explore all experiences
            </Link>
          </div>

          <div className="experience-grid mt-8">
            {[
              {
                number: '01',
                title: 'Soft Play Arena',
                description: 'A bright, padded adventure zone filled with climbing, crawling and sensory fun for curious little explorers.',
                image: 'https://images.unsplash.com/photo-1544117510-3e0f0f5f6b27?auto=format&fit=crop&w=1200&q=80'
              },
              {
                number: '02',
                title: 'Ball Pit & Slides',
                description: 'Fast-moving, joyful energy in a vibrant mix of slides, twists and giggles.',
                image: 'https://images.unsplash.com/photo-1558981403-c5a1d0f1d6f6?auto=format&fit=crop&w=1200&q=80'
              },
              {
                number: '03',
                title: 'Trampoline Fun',
                description: 'Safe, supervised sessions designed for high-energy play and big smiles.',
                image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1f?auto=format&fit=crop&w=1200&q=80'
              }
            ].map((item) => (
              <article key={item.title} className="experience-card">
                <div className="experience-card__image">
                  <Image src={item.image} alt={item.title} width={900} height={700} />
                </div>
                <div className="experience-card__meta">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-shell">
        <div className="feature-spotlight">
          <div>
            <p className="section-eyebrow" style={{ color: 'white' }}>Why parents love PlayNest</p>
            <h2 className="section-heading" style={{ color: 'white' }}>A safe, clean and joyful place for the whole family.</h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              From thoughtful layouts to trained staff and relaxed parent zones, every detail is designed to make play both exciting and stress-free.
            </p>
            <ul className="feature-list">
              <li>Safety-first equipment and attentive supervision</li>
              <li>Comfortable spaces where parents can relax</li>
              <li>Flexible party packages and easy planning</li>
            </ul>
          </div>

          <div className="image-standalone">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1f?auto=format&fit=crop&w=1000&q=80"
              alt="Parents watching children play"
              width={900}
              height={800}
            />
          </div>
        </div>
      </section>

      <section className="container section-shell">
        <div className="party-panel">
          <div className="party-layout">
            <div>
              <div className="party-tag">Birthday parties</div>
              <h2 className="section-heading mt-4">Make their big day even bigger.</h2>
              <p className="section-lead mt-4">
                Stress-free celebrations with activity zones, party hosting and thoughtfully designed packages that keep the fun going.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Plan a Birthday Party
              </Link>
            </div>

            <div className="image-standalone" style={{ minHeight: '360px' }}>
              <Image
                src="https://images.unsplash.com/photo-1505577058444-a3dab14b3d02?auto=format&fit=crop&w=1200&q=80"
                alt="Birthday celebration in a kids playzone"
                width={1200}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Age groups</p>
            <h2 className="section-heading">Play sessions designed for every age and energy level.</h2>
            <div className="age-grid mt-8">
              <div className="age-card">
                <strong>Toddlers</strong>
                <span>0–3 years</span>
              </div>
              <div className="age-card">
                <strong>Little Explorers</strong>
                <span>4–7 years</span>
              </div>
              <div className="age-card">
                <strong>Big Adventurers</strong>
                <span>7–12 years</span>
              </div>
            </div>
          </div>

          <div className="card-soft p-6 md:p-8">
            <h3 className="text-3xl font-black leading-none text-slate-950">Ready for some serious fun?</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Planning a visit, birthday party or group event? Let us help you choose the perfect experience.
            </p>
            <div className="mt-6">
              <QueryForm pageLabel="Home" />
            </div>
          </div>
        </div>
      </section>

      <section className="container section-shell">
        <div className="testimonial-wrap">
          <div className="testimonial-feature">
            <div className="quote-mark">“</div>
            <div>
              <p className="section-eyebrow">Family love</p>
              <p className="quote-box mt-2">
                “The whole place feels premium, safe and full of life. My daughter didn’t want to leave and I loved how relaxed it felt as a parent.”
              </p>
              <div className="rating" aria-label="5 star rating">★★★★★</div>
              <div className="mt-4">
                <p className="font-extrabold text-slate-900">Priya S.</p>
                <p className="text-sm uppercase tracking-[0.14em] text-slate-500">Parent of a 6-year-old</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QueryForm } from '@/components/forms/query-form';
import { siteConfig, withBasePath } from '@/lib/site-config';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default function HomePage() {
  const heroPanelStyle: CSSProperties = {
    backgroundImage: `linear-gradient(120deg, rgba(17, 28, 59, 0.78), rgba(20, 38, 72, 0.58)), url("${withBasePath('/banner.png')}") , url("${withBasePath('/site-images/home-hero-main.png')}")`,
    backgroundBlendMode: 'multiply, normal, normal'
  };

  const featureSpotlightStyle: CSSProperties = {
    backgroundImage: `linear-gradient(135deg, rgba(17, 28, 59, 0.96), rgba(29, 43, 94, 0.94) 52%, rgba(33, 56, 111, 0.92)), url("${withBasePath('/site-images/about-family-zone.png')}")`,
    backgroundBlendMode: 'overlay, normal'
  };

  const partyPanelStyle: CSSProperties = {
    backgroundImage: `linear-gradient(120deg, rgba(255, 191, 63, 0.18), rgba(255, 122, 89, 0.12), rgba(109, 214, 255, 0.12)), url("${withBasePath('/site-images/home-birthday-party.png')}")`,
    backgroundBlendMode: 'normal, normal'
  };

  return (
    <div className="pb-8">
      <section className="hero-shell container reveal reveal-delay-100">
        <div className="hero-panel" style={heroPanelStyle}>
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

              <div className="hero-sport-scene" aria-label="Animated child kicking a football">
                <div className="kid-figure">
                  <span className="head" />
                  <span className="body" />
                  <span className="arm arm--left" />
                  <span className="arm arm--right" />
                  <span className="leg leg--left" />
                  <span className="leg leg--right" />
                </div>
                <div className="football" aria-hidden="true" />
              </div>

              <div className="hero-card hero-card--main">
                <Image
                  src={withBasePath('/site-images/home-hero-main.png')}
                  alt="Children enjoying active play in a colourful indoor zone"
                  width={900}
                  height={1100}
                  priority
                />
              </div>

              <div className="hero-card hero-card--small">
                <Image
                  src={withBasePath('/site-images/home-hero-small.png')}
                  alt="Bright play area with children laughing and playing"
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
          {siteConfig.heroHighlights.map((item, index) => (
            <div key={item.label} className="stat-panel reveal" style={{ animationDelay: `${index * 120}ms` }}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-shell intro-panel reveal reveal-delay-150">
        <div>
          <p className="section-eyebrow">Let the fun begin</p>
          <h2 className="section-heading">More than a play area — it’s a world of discovery.</h2>
          <p className="section-lead mt-4">
            At Vamskidszone, children move, imagine and make memories while parents relax in comfortable, supervised surroundings. Every zone is thoughtfully designed to feel exciting, lively and reassuringly safe.
          </p>
          <Link href="/about" className="btn-secondary mt-8">
            Learn about Vamskidszone
          </Link>
        </div>
      </section>

      <section className="feature-band section-shell reveal reveal-delay-200">
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
                image: withBasePath('/site-images/home-activity-soft-play.png')
              },
              {
                number: '02',
                title: 'Ball Pit & Slides',
                description: 'Fast-moving, joyful energy in a vibrant mix of slides, twists and giggles.',
                image: withBasePath('/site-images/home-activity-ball-pit.png')
              },
              {
                number: '03',
                title: 'Trampoline Fun',
                description: 'Safe, supervised sessions designed for high-energy play and big smiles.',
                image: withBasePath('/site-images/home-activity-trampoline.png')
              }
            ].map((item, index) => (
              <article key={item.title} className="experience-card reveal" style={{ animationDelay: `${index * 140}ms` }}>
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

      <section className="container section-shell reveal reveal-delay-250">
        <div className="feature-spotlight" style={featureSpotlightStyle}>
          <div>
            <p className="section-eyebrow" style={{ color: 'white' }}>Why parents love Vamskidszone</p>
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
              src={withBasePath('/site-images/about-family-zone.png')}
              alt="Parents watching children enjoy a playful indoor space"
              width={900}
              height={800}
            />
          </div>
        </div>
      </section>

      <section className="container section-shell reveal reveal-delay-300">
        <div className="party-panel" style={partyPanelStyle}>
          <div className="party-celebration" aria-hidden="true">
            <span className="party-burst party-burst--1" />
            <span className="party-burst party-burst--2" />
            <span className="party-burst party-burst--3" />
            <span className="party-burst party-burst--4" />
          </div>
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
                src={withBasePath('/site-images/home-birthday-party.png')}
                alt="Birthday celebration with kids in a playful venue"
                width={1200}
                height={900}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container section-shell reveal reveal-delay-350">
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

      <section className="container section-shell reveal reveal-delay-400">
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

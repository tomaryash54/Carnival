import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' }
];

export function SiteFooter() {
  return (
    <footer className="footer-shell">
      <div className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div className="logo-mark text-white">
              <span className="logo-mark__badge" />
              <span>{siteConfig.companyName}</span>
            </div>
            <p className="max-w-lg text-base leading-7 text-slate-300">
              Big adventures, little smiles — Vamskidszone is a premium indoor playzone where children explore freely, parents relax confidently, and every visit feels like a memorable family day out.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {siteConfig.socialLinks.map((item) => (
                <Link key={item.label} href={item.href} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/20 hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="text-lg font-extrabold tracking-tight text-white">Navigate</p>
            <div className="mt-5 grid gap-3 text-slate-300">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="text-lg font-extrabold tracking-tight text-white">Visit us</p>
            <div className="mt-5 space-y-3 text-slate-300">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.address}</p>
              <p>Mon – Sun: 9:00 AM – 8:00 PM</p>
              <Link href="/contact" className="btn-secondary mt-2 inline-flex bg-white/5 text-white border-white/10">
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#040b16] py-6 text-center text-sm text-slate-400">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

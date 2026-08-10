import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.8fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-white">{siteConfig.companyName}</p>
          <p className="max-w-xl text-slate-400">
            Vertex Solutions brings a premium service delivery experience to growing organisations.
            Every page is designed for clarity, trust, and conversion.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            {siteConfig.socialLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-3 text-sm text-slate-300">
          <p className="font-semibold text-white">Navigation</p>
          {siteConfig.navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-3 text-sm text-slate-300">
          <p className="font-semibold text-white">Contact</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.address}</p>
          <Link href="/contact" className="text-brand-200 transition hover:text-white">
            Send an enquiry
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-900 py-6 text-center text-sm text-slate-500">
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

import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' }
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-2xl font-semibold">{siteConfig.companyName}</p>
            <p className="max-w-lg muted">
              Big adventures, little smiles — PlayNest is a premium indoor playzone built for joyful family moments, safe play and memorable celebrations.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {siteConfig.socialLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition-opacity hover:opacity-80">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Navigation</p>
            <div className="mt-4 grid gap-2">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-80">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <p className="font-semibold">Contact</p>
            <div className="mt-4 space-y-2">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
              <p className="muted">{siteConfig.address}</p>
              <Link href="/contact" className="inline-block btn-secondary mt-2">
                Send an enquiry
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-[#04101a] py-6 text-center text-sm text-slate-400">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-80">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

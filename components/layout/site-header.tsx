'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
          {siteConfig.companyName}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${pathname === item.href ? 'text-brand-700' : 'text-slate-600 hover:text-slate-950'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="btn-primary">
            Send Enquiry
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-950 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`${menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 lg:hidden`}>
        <div className="container space-y-4 border-t border-slate-200/80 bg-white/95 py-5">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="block rounded-2xl bg-brand-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-soft hover:bg-brand-800" onClick={() => setMenuOpen(false)}>
            Send Enquiry
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between gap-6 py-4">
        <Link href="/" className="logo-mark" aria-label="Vamskidszone home">
          <span className="logo-mark__badge">
            <span className="logo-mark__ball" aria-hidden="true" />
          </span>
          <span>{siteConfig.companyName}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/contact" className="btn-primary">
            Plan a Visit
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`${menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 lg:hidden`}>
        <div className="container space-y-3 border-t border-slate-200/80 bg-white/90 py-5 backdrop-blur-sm">
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
          <Link href="/contact" className="btn-primary mt-2 block w-full" onClick={() => setMenuOpen(false)}>
            Plan a Visit
          </Link>
        </div>
      </div>
    </header>
  );
}

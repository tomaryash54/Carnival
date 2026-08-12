import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { QueryPopup } from '@/components/layout/query-popup';
import { siteConfig, withBasePath } from '@/lib/site-config';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.companyName,
    type: 'website',
    url: siteConfig.siteUrl,
    images: [
      {
        url: withBasePath('/site-images/home-hero-main.png'),
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName} preview`
      }
    ]
  },
  icons: {
    icon: withBasePath('/favicon.ico')
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-950">
        <div className="min-h-screen bg-slate-50">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <QueryPopup />
        </div>
      </body>
    </html>
  );
}

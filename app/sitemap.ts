import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-static';

export default function Sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/about', '/services', '/specialty', '/testimonials', '/contact', '/privacy', '/terms'];

  return pages.map((page) => ({
    url: `${siteConfig.siteUrl.replace(/\/$/, '')}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  }));
}

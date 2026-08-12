export function withBasePath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_ACTIONS ? '/Carnival' : '');
  return `${basePath}${normalizedPath}`;
}

export const siteConfig = {
  companyName: 'Vamskidszone',
  title: 'Vamskidszone | Indoor Kids Playzone & Birthday Parties',
  description:
    'Vamskidszone is a premium indoor playzone where children explore, climb, jump and celebrate — designed for joyful family moments and safe adventures.',
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.GITHUB_ACTIONS ? 'https://tomaryash54.github.io/Carnival' : 'http://localhost:3000'),
  phone: '+91 98765 43210',
  email: 'hello@vamskidszone.com',
  address: 'Sector 47, Gurugram, Haryana, India',
  ogImage: withBasePath('/site-images/home-hero-main.png'),
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.609758729071!2d77.04859077471821!3d28.464868992718466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a2b8ce0c9df%3A0xd8f2a0662e1f6c7!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1712824927119!5m2!1sen!2sus',
  socialLinks: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'YouTube', href: '#' }
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Play Experiences', href: '/services' },
    { label: 'Why Us', href: '/specialty' },
    { label: 'Reviews', href: '/testimonials' },
    { label: 'Contact', href: '/contact' }
  ],
  services: [
    {
      title: 'Soft Play Arena',
      description: 'A colourful, padded adventure zone perfect for energetic play and exploration.'
    },
    {
      title: 'Ball Pit & Slides',
      description: 'Giant slides and a sparkling ball pit provide endless laughter.'
    },
    {
      title: 'Trampoline & Active Play',
      description: 'Safe trampoline sessions supervised by our trained staff.'
    },
    {
      title: 'Toddler Cove',
      description: 'A gentle, sensory-friendly area designed for our youngest guests.'
    }
  ],
  heroHighlights: [
    { label: 'Safe & Supervised', value: 'Trusted' },
    { label: 'Fun for Every Age', value: 'All Ages' },
    { label: 'Spotlessly Maintained', value: 'Hygienic' },
    { label: 'Perfect for Parties', value: 'Birthday Ready' }
  ],
  featurePoints: [
    {
      title: 'Safety first',
      description: 'Certified equipment, trained staff, and controlled access for peace of mind.'
    },
    {
      title: 'Family focused',
      description: 'Comfortable seating, smart sightlines, and clean facilities for parents.'
    },
    {
      title: 'Memorable parties',
      description: 'Dedicated party spaces with curated packages and attentive hosting.'
    }
  ]
};

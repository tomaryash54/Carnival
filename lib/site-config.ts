export const siteConfig = {
  companyName: 'Vertex Solutions',
  title: 'Vertex Solutions | Premium service solutions for modern businesses',
  description:
    'Vertex Solutions delivers premium service business support, responsible execution, and modern corporate solutions for growing teams.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  phone: '+91 98765 43210',
  email: 'contact@vertexsolutions.example',
  address: 'Sector 47, Gurugram, Haryana, India',
  ogImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.609758729071!2d77.04859077471821!3d28.464868992718466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a2b8ce0c9df%3A0xd8f2a0662e1f6c7!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1712824927119!5m2!1sen!2sus',
  socialLinks: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' }
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Our Specialty', href: '/specialty' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact Us', href: '/contact' }
  ],
  services: [
    {
      title: 'Operational consulting',
      description: 'Improve operational resilience with smart process and delivery oversight.'
    },
    {
      title: 'Customer experience design',
      description: 'Craft premium experiences that grow trust and customer loyalty.'
    },
    {
      title: 'Project execution',
      description: 'Plan and deliver complex initiatives with clarity and control.'
    },
    {
      title: 'Digital transformation',
      description: 'Modernize workflows, systems, and communications for scale.'
    }
  ],
  heroHighlights: [
    { label: '10+ Years Experience', value: '10+' },
    { label: '500+ Clients Served', value: '500+' },
    { label: '98% Client Satisfaction', value: '98%' },
    { label: '24/7 Support Available', value: '24/7' }
  ],
  featurePoints: [
    {
      title: 'Focused on results',
      description: 'We translate complex challenges into clear, measurable outcomes.'
    },
    {
      title: 'Agile execution',
      description: 'A modern delivery approach keeps quality high and timelines tight.'
    },
    {
      title: 'Trusted support',
      description: 'Responsive teams keep projects moving and stakeholders informed.'
    }
  ]
};

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6f6',
          100: '#dcefe9',
          200: '#b8e0d9',
          300: '#82c7bd',
          400: '#4ba59c',
          500: '#2f877f',
          600: '#266d67',
          700: '#245854',
          800: '#214946',
          900: '#203d3b'
        },
        accent: '#c59d62'
      },
      boxShadow: {
        soft: '0 20px 48px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(197,157,98,0.16), transparent 32%)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;

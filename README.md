# Vertex Solutions

Premium corporate website for a fictional service business. Built with Next.js, TypeScript, Tailwind CSS, Prisma, and Nodemailer.

## Requirements

- Node.js 18 or newer
- PostgreSQL database

## Setup

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file from `.env.example`

```bash
cp .env.example .env
```

3. Update `.env` with your PostgreSQL and SMTP credentials.

4. Run Prisma migration

```bash
npx prisma migrate dev --name init
```

5. Start the development server

```bash
npm run dev
```

6. Open http://localhost:3000

## Database

The app uses Prisma with PostgreSQL. The main model is `Query`.

## Configure multiple notification recipients

Set `QUERY_NOTIFICATION_EMAILS` as a comma-separated list:

```env
QUERY_NOTIFICATION_EMAILS=admin@example.com,sales@example.com,manager@example.com
```

## Replace placeholder content

Edit `lib/site-config.ts` to update the company name, tagline, contact details, navigation, services, and social links.

## Replace placeholder images

The site uses remote placeholder imagery from Unsplash. Replace image URLs in page components with your own assets or local `public/` images.

## Change map location

Update `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` in `.env` with your own Google Maps embed URL.

## SMTP/email provider

Configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, and `SMTP_FROM` in `.env`.

## Vercel deployment

This project is ready for deployment on Vercel.

1. Push this repository to GitHub.
2. Create a new Vercel project and connect it to the GitHub repository.
3. Add the following environment variables in the Vercel dashboard:
   - `DATABASE_URL`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `SMTP_FROM`
   - `QUERY_NOTIFICATION_EMAILS`
   - `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`
   - `NEXT_PUBLIC_SITE_URL`
4. Optionally add GitHub repository secrets if using the provided GitHub Actions workflow:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

The app will build with `npm run build` and deploy from the `main` branch using `.github/workflows/vercel-deploy.yml`.

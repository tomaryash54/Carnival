import { QueryForm } from '@/components/forms/query-form';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Contact Us | Vertex Solutions',
  description: 'Contact Vertex Solutions for premium business service support, operational consulting, and client experience strategy.'
};

export default function ContactPage() {
  return (
    <div className="space-y-20 py-16 lg:py-24">
      <section className="container rounded-[2.5rem] border border-slate-200 bg-white p-12 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Get in touch</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              Let’s discuss your requirements and create a service plan tailored to your team.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Use the contact details below or submit your enquiry directly through the form. We will reach out with a practical next step.
            </p>
          </div>
          <div className="rounded-[2rem] bg-slate-50 p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-brand-700">Contact information</p>
            <div className="mt-6 space-y-4 text-slate-700">
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p>{siteConfig.phone}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p>{siteConfig.email}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Address</p>
                <p>{siteConfig.address}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Hours</p>
                <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">Find us</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Our Gurgaon placeholder location</h2>
          <p className="mt-4 text-slate-600">
            Visit our local office in Sector 47, Gurugram, or send an enquiry using the form. The map below is configured with a sample location for placeholder use.
          </p>
          <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-soft">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title="Location map"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-secondary mt-6 inline-flex">
            Get Directions
          </a>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-950">Send us a detailed enquiry</h2>
          <p className="mt-3 text-slate-600">Complete the form below and include as much detail as possible about your project.</p>
          <div className="mt-8">
            <QueryForm pageLabel="Contact Page" />
          </div>
        </div>
      </section>
    </div>
  );
}

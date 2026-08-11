import { QueryForm } from '@/components/forms/query-form';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: `Contact | ${siteConfig.companyName}`,
  description: 'Plan your visit, book a birthday party or enquire about group bookings at PlayNest.'
};

export default function ContactPage() {
  return (
    <div className="space-y-12 py-12 lg:py-20">
      <section className="container rounded-lg border border-slate-100 bg-white p-10 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="section-eyebrow">Let&apos;s Plan Your Visit</p>
            <h1 className="mt-4 section-heading">Book a visit, party, or group event</h1>
            <p className="mt-4 section-lead">Call, email or send an enquiry below — our team will help you pick the best package and timings.</p>
          </div>

          <div className="rounded-md bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.12em] font-semibold">Contact information</p>
            <div className="mt-4 space-y-3">
              <div>
                <p className="font-semibold">Phone</p>
                <p className="muted">{siteConfig.phone}</p>
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="muted">{siteConfig.email}</p>
              </div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="muted">{siteConfig.address}</p>
              </div>
              <div>
                <p className="font-semibold">Opening hours</p>
                <p className="muted">Mon – Sun: 9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-slate-100 bg-white p-8 shadow-soft">
          <p className="section-eyebrow">Find us</p>
          <h2 className="section-heading mt-2">Visit PlayNest in Sector 47, Gurugram</h2>
          <p className="muted mt-3">We&apos;re conveniently located. Use the map below for directions or contact us to plan a group visit.</p>
          <div className="mt-6 overflow-hidden rounded-md border border-slate-100 shadow-sm">
            <iframe src={siteConfig.mapEmbedUrl} title="PlayNest location" className="h-72 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-secondary mt-6 inline-flex">Get Directions</a>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-semibold">Planning a birthday party?</h2>
          <p className="muted mt-2">Tell us your preferred date, number of children and any special requests — we&apos;ll handle the rest.</p>
          <div className="mt-6">
            <QueryForm pageLabel="Contact Page" />
          </div>
        </div>
      </section>
    </div>
  );
}

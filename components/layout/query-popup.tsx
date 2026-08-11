'use client';

import { useEffect, useState } from 'react';
import { QueryForm } from '@/components/forms/query-form';

const STORAGE_KEY = 'playnest-query-popup-dismissed';

export function QueryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (dismissed === 'true') return;

    const timer = window.setTimeout(() => setIsOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const closeModal = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
    }
    setIsOpen(false);
  };

  const handleSubmitSuccess = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
    }
    setIsOpen(false);
  };

  const submitForm = () => {
    if (typeof document === 'undefined') return;
    const form = document.getElementById('popup-query-form') as HTMLFormElement | null;
    form?.requestSubmit();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#081426]/70 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#fffaf4] shadow-[0_35px_80px_rgba(9,15,34,0.5)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,191,63,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(109,214,255,0.18),transparent_30%)]" />

        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white/85 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Close enquiry popup"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative border-b border-slate-200 bg-[linear-gradient(135deg,rgba(255,191,63,0.18),rgba(255,255,255,0.85))] px-6 py-6 sm:px-8">
          <p className="section-eyebrow">Quick Enquiry</p>
          <h2 className="mt-3 text-3xl font-black leading-none text-slate-950">Planning a fun day out?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Tell us what you&apos;re looking for and we will help you plan the perfect visit, birthday celebration or family outing.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={submitForm}
              className="btn-primary"
            >
              Send Enquiry
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="text-sm font-semibold text-slate-600 underline-offset-2 transition hover:text-slate-900 hover:underline"
            >
              Skip for now
            </button>
          </div>
        </div>

        <div className="relative max-h-[78vh] overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
          <QueryForm
            pageLabel="Popup"
            formId="popup-query-form"
            hideSubmitButton
            onSubmitSuccess={handleSubmitSuccess}
          />
        </div>
      </div>
    </div>
  );
}

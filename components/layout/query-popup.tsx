'use client';

import { useEffect, useState } from 'react';
import { QueryForm } from '@/components/forms/query-form';

const STORAGE_KEY = 'vamskidszone-query-popup-dismissed';

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
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#081426]/70 px-3 py-4 backdrop-blur-sm sm:px-4">
      <div className="relative w-full max-w-[760px] max-h-[84vh] overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#fffaf4] shadow-[0_24px_60px_rgba(9,15,34,0.42)] sm:rounded-[2rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,191,63,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(109,214,255,0.15),transparent_35%)]" />

        <button
          type="button"
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:right-4 sm:top-4"
          aria-label="Close enquiry popup"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative border-b border-slate-200 bg-[linear-gradient(135deg,rgba(255,191,63,0.18),rgba(255,255,255,0.85))] px-4 py-4 sm:px-6 sm:py-5">
          <p className="section-eyebrow">Quick Enquiry</p>
          <h2 className="mt-3 text-2xl font-black leading-none text-slate-950 sm:text-3xl">Planning a fun day out?</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:leading-7">
            Tell us what you&apos;re looking for and we will help you plan the perfect visit, birthday celebration or family outing.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
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

        <div className="relative max-h-[58vh] overflow-y-auto px-3 py-3 sm:px-5 sm:py-5">
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

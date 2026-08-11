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
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label="Close enquiry popup"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="border-b border-slate-100 bg-slate-50 px-6 py-6 sm:px-8">
          <p className="section-eyebrow">QUICK ENQUIRY</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">Tell us what you are looking for</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Share a few details and we will help you plan the right visit, party or group experience.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={submitForm}
              className="rounded-full bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-800"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="text-sm font-semibold text-slate-500 underline-offset-2 transition hover:text-slate-800 hover:underline"
            >
              Skip
            </button>
          </div>
        </div>

        <div className="max-h-[78vh] overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">
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

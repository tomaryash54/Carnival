'use client';

import { useMemo, useState } from 'react';
import { querySchema } from '@/lib/validations';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  consent: boolean;
  honeypot: string;
};

type QueryFormProps = {
  pageLabel: string;
  formId?: string;
  hideSubmitButton?: boolean;
  onSubmitSuccess?: () => void;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
  consent: false,
  honeypot: ''
};

export function QueryForm({ pageLabel, formId, hideSubmitButton = false, onSubmitSuccess }: QueryFormProps) {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');

  const canSubmit = useMemo(() => status !== 'loading', [status]);

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
    if (status === 'success') setStatus('idle');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');
    setErrors({});

    const payload = {
      ...formState,
      consent: formState.consent,
      source: pageLabel,
      honeypot: formState.honeypot
    };

    const parseResult = querySchema.safeParse(payload);
    if (!parseResult.success) {
      setStatus('error');
      const fieldErrors: Record<string, string> = {};
      parseResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      const response = await fetch('/api/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parseResult.data)
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.message || 'Something went wrong.');
      }

      setStatus('success');
      setMessage('Your enquiry has been received. We will contact you shortly.');
      setFormState(initialState);
      onSubmitSuccess?.();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Unable to submit your enquiry right now. Please try again later.'
      );
    }
  };

  return (
    <form id={formId} className="grid gap-6 rounded-lg border border-slate-100 bg-white p-8 shadow-soft md:grid-cols-2" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="source" value={pageLabel} />
      <div className="grid gap-5">
        <div className="form-field">
          <label htmlFor="name" className="label">
            Full Name*
          </label>
          <input
            id="name"
            className={`input ${errors.name ? 'border-rose-500' : ''}`}
            type="text"
            value={formState.name}
            onChange={(event) => handleChange('name', event.target.value)}
            placeholder="Enter your full name"
            disabled={!canSubmit}
            aria-invalid={!!errors.name}
          />
          {errors.name ? <p className="field-error">{errors.name}</p> : null}
        </div>

        <div className="form-field">
          <label htmlFor="email" className="label">
            Email Address*
          </label>
          <input
            id="email"
            className={`input ${errors.email ? 'border-rose-500' : ''}`}
            type="email"
            value={formState.email}
            onChange={(event) => handleChange('email', event.target.value)}
            placeholder="you@company.com"
            disabled={!canSubmit}
            aria-invalid={!!errors.email}
          />
          {errors.email ? <p className="field-error">{errors.email}</p> : null}
        </div>

        <div className="form-field">
          <label htmlFor="phone" className="label">
            Phone Number*
          </label>
          <input
            id="phone"
            className={`input ${errors.phone ? 'border-rose-500' : ''}`}
            type="tel"
            value={formState.phone}
            onChange={(event) => handleChange('phone', event.target.value)}
            placeholder="+91 98765 43210"
            disabled={!canSubmit}
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? <p className="field-error">{errors.phone}</p> : null}
        </div>

        <div className="form-field">
          <label htmlFor="company" className="label">
            Party / Group (optional)
          </label>
          <input
            id="company"
            className="input"
            type="text"
            value={formState.company}
            onChange={(event) => handleChange('company', event.target.value)}
            placeholder="e.g. 12 children / School visit"
            disabled={!canSubmit}
          />
        </div>

        <div className="form-field">
          <label htmlFor="service" className="label">
            What are you interested in?
          </label>
          <select
            id="service"
            className="input"
            value={formState.service}
            onChange={(event) => handleChange('service', event.target.value)}
            disabled={!canSubmit}
          >
            <option value="">Select an option</option>
            <option value="General Visit">General Visit</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Toddler Play">Toddler Play</option>
            <option value="Group/School Visit">Group / School Visit</option>
            <option value="Weekend Visit">Weekend Visit</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="form-field md:col-span-2">
          <label htmlFor="message" className="label">
            Message*
          </label>
          <textarea
            id="message"
            className={`textarea ${errors.message ? 'border-rose-500' : ''} min-h-[172px] resize-none`}
            value={formState.message}
            onChange={(event) => handleChange('message', event.target.value)}
            placeholder="Tell us more about your requirement or project scope"
            disabled={!canSubmit}
            aria-invalid={!!errors.message}
          />
          {errors.message ? <p className="field-error">{errors.message}</p> : null}
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700 md:col-span-2">
            <input
              type="checkbox"
              checked={formState.consent}
              onChange={(event) => handleChange('consent', event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-700 focus:ring-brand-500"
              disabled={!canSubmit}
            />
            <span>
              I agree to be contacted by Vamskidszone regarding my enquiry. *
            </span>
          </label>
          {errors.consent ? <p className="field-error md:col-span-2">{errors.consent}</p> : null}
        </div>

        <input type="text" name="honeypot" value={formState.honeypot} onChange={(event) => handleChange('honeypot', event.target.value)} autoComplete="off" className="sr-only" tabIndex={-1} aria-hidden={"true"} />

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-6">
          <div>
            {status === 'success' ? (
              <p className="text-sm font-semibold" style={{ color: 'rgb(16 185 129)' }}>{message}</p>
            ) : status === 'error' ? (
              <p className="text-sm font-semibold" style={{ color: '#d14343' }}>{message}</p>
            ) : (
              <p className="text-sm muted">We aim to follow up within 24 hours.</p>
            )}
          </div>
          {!hideSubmitButton ? (
            <button type="submit" className="btn-primary w-full md:w-auto" disabled={!canSubmit}>
              {status === 'loading' ? (
                <span className="inline-flex items-center gap-2">Sending... <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" strokeOpacity="0.2"></circle><path d="M4 12a8 8 0 018-8" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"></path></svg></span>
              ) : (
                'Submit Enquiry'
              )}
            </button>
          ) : null}
        </div>
      </div>
    </form>
  );
}

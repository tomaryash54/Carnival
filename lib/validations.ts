import { z } from 'zod';

export const querySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(100, 'Name is too long.'),
  email: z.string().trim().email('Please enter a valid email.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .max(20, 'Phone number is too long.'),
  company: z.string().trim().max(100).optional().or(z.literal('')),
  service: z.string().trim().max(100).optional().or(z.literal('')),
  message: z.string().trim().min(20, 'Message must be at least 20 characters.').max(1000, 'Message is too long.'),
  consent: z.boolean().refine((value) => value === true, 'Consent is required.'),
  source: z.string().trim().optional().default('website'),
  honeypot: z.string().optional().default('')
});

export type QueryFormValues = z.infer<typeof querySchema>;

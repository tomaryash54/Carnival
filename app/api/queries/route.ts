import { NextResponse } from 'next/server';
import { querySchema } from '@/lib/validations';
import { prisma } from '@/lib/db';
import { sendQueryNotification } from '@/lib/email';

const ipSubmissionCache = new Map<string, number>();
const SUBMISSION_WINDOW_MS = 10000;

export async function POST(request: Request) {
  const sourceIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  const now = Date.now();
  const lastSubmission = ipSubmissionCache.get(sourceIp) ?? 0;

  if (now - lastSubmission < SUBMISSION_WINDOW_MS) {
    return NextResponse.json({ message: 'Please wait a moment before submitting again.' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid submission format.' }, { status: 400 });
  }

  const parseResult = querySchema.safeParse(body);
  if (!parseResult.success) {
    const fieldErrors: Record<string, string> = {};
    parseResult.error.errors.forEach((error) => {
      if (error.path[0]) {
        fieldErrors[error.path[0] as string] = error.message;
      }
    });
    return NextResponse.json({ message: 'Validation failed.', errors: fieldErrors }, { status: 422 });
  }

  if (parseResult.data.honeypot) {
    return NextResponse.json({ message: 'Spam detected.' }, { status: 400 });
  }

  ipSubmissionCache.set(sourceIp, now);

  const queryData = {
    name: parseResult.data.name,
    email: parseResult.data.email,
    phone: parseResult.data.phone,
    company: parseResult.data.company || null,
    service: parseResult.data.service || null,
    message: parseResult.data.message,
    source: parseResult.data.source || 'website',
    consent: parseResult.data.consent
  };

  try {
    const queryRecord = await prisma.query.create({ data: queryData });
    let emailSent = false;
    let emailSentAt: Date | null = null;

    try {
      await sendQueryNotification(parseResult.data);
      emailSent = true;
      emailSentAt = new Date();
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
    }

    await prisma.query.update({
      where: { id: queryRecord.id },
      data: {
        emailNotificationSent: emailSent,
        emailNotificationSentAt: emailSentAt
      }
    });

    return NextResponse.json({ message: 'Query submitted successfully.', status: 'ok' });
  } catch (error) {
    console.error('Query submission failed:', error);
    return NextResponse.json({ message: 'Unable to save your enquiry at this time.' }, { status: 500 });
  }
}

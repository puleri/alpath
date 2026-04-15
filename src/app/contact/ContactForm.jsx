'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef(null);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const buildSendFailureMessage = ({ status, details }) => {
    const normalizedDetails =
      typeof details === 'string' ? details.trim() : '';

    if (
      normalizedDetails &&
      /service|template|user|public key|api key|forbidden|unauthorized|origin/i.test(
        normalizedDetails,
      )
    ) {
      return `We could not send your brief because EmailJS rejected the request (${normalizedDetails}). Double-check NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local, then restart the dev server.`;
    }

    const statusSuffix = Number.isInteger(status) ? ` (HTTP ${status})` : '';
    return `We could not send your brief right now${statusSuffix}. Please try again in a moment or email matt@alpathengineering.com.`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage(
        'Email service is not configured yet. Add the EmailJS keys to your environment variables.',
      );
      return;
    }

    if (!formRef.current) {
      setErrorMessage('Form is unavailable. Please refresh and try again.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage('');

      const formData = new FormData(formRef.current);
      const contactEmail = formData.get('contact_email');

      const requestBody = new FormData(formRef.current);
      requestBody.append('service_id', EMAILJS_SERVICE_ID);
      requestBody.append('template_id', EMAILJS_TEMPLATE_ID);
      requestBody.append('user_id', EMAILJS_PUBLIC_KEY);


      const response = await fetch(
        'https://api.emailjs.com/api/v1.0/email/send-form',
        {
          method: 'POST',
          body: requestBody,
        },
      );

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(
          buildSendFailureMessage({
            status: response.status,
            details: responseText,
          }),
        );
      }

      formRef.current.reset();
      const thankYouHref =
        typeof contactEmail === 'string' && contactEmail.length > 0
          ? `/thank-you?email=${encodeURIComponent(contactEmail)}`
          : '/thank-you';
      router.push(thankYouHref);
    } catch (error) {
      if (error instanceof Error && error.message) {
        setErrorMessage(error.message);
        return;
      }

      setErrorMessage(buildSendFailureMessage({}));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={handleSubmit}
      data-emailjs-ready="true"
    >
      <input type="hidden" name="contact_source" value="website" />
      <div className="contact-form-row">
        <label htmlFor="contact_name">Name</label>
        <input
          id="contact_name"
          name="contact_name"
          type="text"
          autoComplete="name"
          required
        />
      </div>
      <div className="contact-form-row">
        <label htmlFor="contact_email">Email</label>
        <input
          id="contact_email"
          name="contact_email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="contact-form-row">
        <label htmlFor="company_name">Company</label>
        <input
          id="company_name"
          name="company_name"
          type="text"
          autoComplete="organization"
        />
      </div>
      <div className="contact-form-row">
        <label htmlFor="project_scope">Project brief</label>
        <textarea
          id="project_scope"
          name="project_scope"
          rows={6}
          placeholder="Tell us what you are trying to improve."
          required
        />
      </div>
      {errorMessage ? (
        <p className="contact-submit-feedback" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button
        className="primary-button contact-submit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send brief'}{' '}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

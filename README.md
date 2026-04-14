# Alpath Next.js App

This repository contains a freshly initialized Next.js application.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## EmailJS setup (contact form)

The `/contact` form now sends directly to EmailJS from the browser and then
redirects to `/thank-you` on success.

Add these variables to your local `.env.local` and your deployment environment:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Keep the existing field names in your EmailJS template mapping:

- `contact_name`
- `contact_email`
- `company_name`
- `project_scope`
- `contact_source`

## Quality Checks

Run ESLint:

```bash
npm run lint
```

Format the codebase with Prettier:

```bash
npm run format
```

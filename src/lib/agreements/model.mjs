import { createHash } from 'node:crypto';

export const CONSENT =
  'I adopt the name shown as my electronic signature and confirm that I have reviewed this demo agreement. This is a test only and does not create a binding agreement.';
export const DEMO_NOTICE =
  'DEMO — FOR TESTING ONLY. This copy does not create a binding agreement or change the original client agreement.';
export const hash = (value) => createHash('sha256').update(value).digest('hex');
export const validToken = (value) =>
  typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
export const validId = (value) =>
  typeof value === 'string' &&
  /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value);

function text(value, label, max) {
  if (
    typeof value !== 'string' ||
    !value.trim() ||
    value.trim().length > max ||
    /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)
  ) {
    throw new Error(
      `${label} is required and must be at most ${max} characters.`,
    );
  }
  return value.trim();
}

export function validateContent(input) {
  const signer = (role) => {
    const value = input[role] || {};
    const email = text(value.email, `${role} email`, 254).toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      throw new Error(`Enter a valid ${role} email.`);
    return {
      name: text(value.name, `${role} name`, 120),
      email,
      title: text(value.title, `${role} title`, 120),
    };
  };
  return {
    demo: true,
    title: text(input.title, 'Agreement title', 200),
    body: text(input.body, 'Agreement terms', 60000),
    alpath: signer('alpath'),
    client: signer('client'),
  };
}

export function contentFromForm(form) {
  return validateContent({
    title: form.get('title'),
    body: form.get('body'),
    alpath: {
      name: form.get('alpathName'),
      email: form.get('alpathEmail'),
      title: form.get('alpathTitle'),
    },
    client: {
      name: form.get('clientName'),
      email: form.get('clientEmail'),
      title: form.get('clientTitle'),
    },
  });
}

export function snapshotOf(content) {
  return JSON.stringify(validateContent(content));
}

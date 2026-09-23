import test from 'node:test';
import assert from 'node:assert/strict';
import { renderAgreementPdf } from '../src/lib/agreements/pdf-render.mjs';
import { PDFDocument } from 'pdf-lib';
import {
  validateContent,
  snapshotOf,
  hash,
  validToken,
} from '../src/lib/agreements/model.mjs';

const content = {
  title: 'Demo',
  body: 'Test terms',
  alpath: { name: 'Matt', email: 'MATT@example.com', title: 'Owner' },
  client: {
    name: 'Demo Client',
    email: 'demo@example.com',
    title: 'Test signer',
  },
};
test('normalizes signer details and always marks copied agreements as demos', () => {
  const normalized = validateContent({ ...content, demo: false });
  assert.equal(normalized.demo, true);
  assert.equal(normalized.alpath.email, 'matt@example.com');
});
test('rejects missing names, malformed emails, and oversized agreements', () => {
  assert.throws(() =>
    validateContent({ ...content, client: { ...content.client, name: ' ' } }),
  );
  assert.throws(() =>
    validateContent({
      ...content,
      client: { ...content.client, email: 'not-an-email' },
    }),
  );
  assert.throws(() => validateContent({ ...content, body: 'x'.repeat(60001) }));
});
test('snapshot hash covers terms and both signer identities', () => {
  const original = hash(snapshotOf(content));
  assert.notEqual(
    original,
    hash(snapshotOf({ ...content, body: 'Different terms' })),
  );
  assert.notEqual(
    original,
    hash(
      snapshotOf({
        ...content,
        client: { ...content.client, name: 'Someone else' },
      }),
    ),
  );
  assert.equal(
    original,
    hash(
      snapshotOf({
        client: content.client,
        alpath: content.alpath,
        body: content.body,
        title: content.title,
      }),
    ),
  );
});
test('only 256-bit hexadecimal signing tokens are accepted', () => {
  assert.equal(validToken('a'.repeat(64)), true);
  for (const value of [null, '', '../admin', 'a'.repeat(63), 'z'.repeat(64)])
    assert.equal(validToken(value), false);
});

test('PDF embeds readable text and has a separate signature record page', async () => {
  const bytes = await renderAgreementPdf({ id: 'test', status: 'draft', content });
  const pdf = await PDFDocument.load(bytes);
  assert.equal(pdf.getPageCount(), 2);
  assert.match(pdf.getTitle(), /DEMO/);
});

test('unsupported PDF glyphs fail before a document can be finalized', async () => {
  await assert.rejects(() => renderAgreementPdf({ id: 'test', status: 'draft', content: { ...content, body: 'Unsupported emoji: 🦊' } }), /cannot display/);
});

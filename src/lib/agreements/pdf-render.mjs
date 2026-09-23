import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { DEMO_NOTICE } from './model.mjs';

export async function renderAgreementPdf(version) {
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  const fontBytes = await readFile(
    path.join(process.cwd(), 'public/agreements/anaheim-regular.ttf'),
  );
  const fontSource = fontkit.create(fontBytes);
  const font = await pdf.embedFont(fontBytes, { subset: true });
  const created = new Date(version.finalized_at || '2026-09-22T00:00:00Z');
  pdf.setCreationDate(created);
  pdf.setModificationDate(
    new Date(
      version.signers?.find((s) => s.role === 'client')?.signed_at || created,
    ),
  );
  pdf.setTitle(`${version.content.title} — DEMO`);
  pdf.setAuthor('Alpath Engineering');
  let page, y;
  const addPage = () => {
    page = pdf.addPage([612, 792]);
    y = 724;
    page.drawText('ALPATH ENGINEERING  /  DEMO AGREEMENT', {
      x: 48,
      y: 758,
      size: 10,
      font,
      color: rgb(0.3, 0.35, 0.4),
    });
  };
  addPage();
  function write(value, size = 12, color = rgb(0.12, 0.16, 0.2)) {
    for (const char of String(value)) {
      if (
        !/\s/.test(char) &&
        !fontSource.hasGlyphForCodePoint(char.codePointAt(0))
      ) {
        throw new Error(
          `The demo PDF font cannot display “${char}”. Update the draft or add a font supporting this character before finalizing.`,
        );
      }
    }
    for (const paragraph of String(value).split('\n')) {
      // Break long words as well as normal prose, so emails and hashes fit.
      let line = '';
      for (const word of paragraph.split(/\s+/)) {
        const candidate = line ? `${line} ${word}` : word;
        if (font.widthOfTextAtSize(candidate, size) <= 516) {
          line = candidate;
          continue;
        }
        if (line) draw(line);
        line = '';
        for (const char of word) {
          if (font.widthOfTextAtSize(line + char, size) > 516) {
            draw(line);
            line = '';
          }
          line += char;
        }
      }
      if (line) draw(line);
      y -= 7;
    }
    function draw(line) {
      if (y < 64) addPage();
      page.drawText(line, { x: 48, y, size, font, color });
      y -= size * 1.4;
    }
  }
  write(DEMO_NOTICE, 12, rgb(0.6, 0.22, 0.06));
  write(version.content.title, 22);
  write(
    `Agreement ${version.id}\nStatus: ${version.status}\nVersion: ${version.version || 1}`,
    10,
  );
  for (const role of ['alpath', 'client']) {
    const s = version.content[role];
    write(
      `${role === 'alpath' ? 'Alpath signer' : 'Demo client signer'}: ${s.name} / ${s.title}\n${s.email}`,
      12,
    );
  }
  write(version.content.body);
  addPage();
  write('Signatures & signing record', 22);
  write(DEMO_NOTICE, 11, rgb(0.6, 0.22, 0.06));
  for (const role of ['alpath', 'client']) {
    const s = version.signers?.find((s) => s.role === role) || {
      ...version.content[role],
      role,
    };
    write(
      `${role === 'alpath' ? 'Alpath' : 'Demo client'}: ${s.name} / ${s.title}`,
      16,
    );
    write(
      `Email: ${s.email}\nSignature: ${s.signature || 'Awaiting signature'}\nSigned at (UTC): ${s.signed_at || 'Not signed'}`,
    );
    if (s.consent) write(s.consent, 10);
  }
  write(
    `Frozen document SHA-256: ${version.document_sha256 || 'Draft — not finalized'}`,
    10,
  );
  write(
    'Times below are server-recorded in UTC. Client access uses a private link; email ownership was not independently verified.',
    10,
  );
  for (const event of version.events || [])
    write(`${event.created_at}  ${event.event_type.replaceAll('_', ' ')}`, 10);
  const pages = pdf.getPages();
  pages.forEach((p, i) =>
    p.drawText(
      `DEMO • NOT BINDING                                      ${i + 1} / ${pages.length}`,
      { x: 48, y: 30, size: 9, font },
    ),
  );
  return Buffer.from(await pdf.save());
}

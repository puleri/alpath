import { getByToken } from '../../../../../lib/agreements/store';
import { completedPdf } from '../../../../../lib/agreements/pdf';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { token } = await params;
  try {
    const agreement = await getByToken(token);
    if (!agreement || agreement.status !== 'completed')
      return new Response('PDF unavailable.', {
        status: 404,
        headers: { 'Cache-Control': 'no-store' },
      });
    return new Response(await completedPdf(agreement), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'attachment; filename="completed-demo-agreement.pdf"',
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex, nofollow',
        'Referrer-Policy': 'no-referrer',
      },
    });
  } catch {
    return new Response(
      'PDF unavailable. Your signature remains saved. Please retry.',
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    );
  }
}

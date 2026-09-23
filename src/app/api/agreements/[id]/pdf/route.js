import { requireAdmin } from '../../../../../lib/supabase/server';
import { getAgreement } from '../../../../../lib/agreements/store';
import { completedPdf } from '../../../../../lib/agreements/pdf';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  await requireAdmin();
  const { id } = await params;
  try {
    const agreement = await getAgreement(id);
    if (!agreement || !['finalized', 'completed'].includes(agreement.status))
      return new Response('PDF unavailable.', { status: 404 });
    const bytes = await completedPdf(agreement);
    return new Response(bytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="demo-agreement-${id}.pdf"`,
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  } catch {
    return new Response(
      'PDF unavailable. Your signatures remain saved. Please retry.',
      { status: 503, headers: { 'Cache-Control': 'no-store' } },
    );
  }
}

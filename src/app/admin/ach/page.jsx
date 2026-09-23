import { requireAdmin } from '../../../lib/supabase/server';
import { achConfig } from '../../../lib/ach/config';
import ShareForm from './ShareForm';

export const metadata = { title: 'Share ACH details | Alpath Engineering' };

export default async function AchAdmin() {
  await requireAdmin();
  const { ready, demo } = achConfig();
  return (
    <section>
      <h1>Share ACH details</h1>
      <p>
        Create a private link, then share its access code through a separate
        channel.
      </p>
      {demo && (
        <p role="status">
          Demo mode: the payment page displays sample details with a “Do not
          send funds” notice.
        </p>
      )}
      {!ready && (
        <p role="alert">
          ACH sharing is disabled until the banking fields and signing key are
          configured.
        </p>
      )}
      <ShareForm ready={ready} />
      <p>
        Links can be reused until expiration. Individual revocation is not
        available.
      </p>
      <p>
        <a href="/admin">Back to admin</a>
      </p>
    </section>
  );
}

import 'server-only';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { isAgreementAdmin } from './admin-access';

export async function createSessionClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll(values) {
          try {
            values.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // Server components cannot write cookies; middleware refreshes them.
          }
        },
      },
    },
  );
}

export async function requireAdmin() {
  const client = await createSessionClient();
  const { data: { user }, error } = await client.auth.getUser();
  if (error || !isAgreementAdmin(user)) redirect('/admin/login');
  return { client, user };
}

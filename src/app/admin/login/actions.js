'use server';

import { redirect } from 'next/navigation';
import { createSessionClient } from '../../../lib/supabase/server';
import { ADMIN_EMAIL, isAgreementAdmin } from '../../../lib/supabase/admin-access';

export async function signIn(formData) {
  const password = formData.get('password');
  if (typeof password !== 'string' || !password || password.length > 1024) {
    redirect('/admin/login?error=1');
  }
  const client = await createSessionClient();
  const { data, error } = await client.auth.signInWithPassword({ email: ADMIN_EMAIL, password });
  if (error || !isAgreementAdmin(data.user)) {
    await client.auth.signOut();
    redirect('/admin/login?error=1');
  }
  redirect('/admin');
}

export async function signOut() {
  const client = await createSessionClient();
  await client.auth.signOut();
  redirect('/admin/login');
}

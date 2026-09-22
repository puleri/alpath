import { requireAdmin } from '../../lib/supabase/server';
import { signOut } from './login/actions';

export default async function AdminPage() {
  const { user } = await requireAdmin();
  return (
    <section>
      <h1>Agreement admin</h1>
      <p>Signed in as {user.email}.</p>
      <p>Your admin connection is ready. Agreement creation and signing are not enabled yet.</p>
      <form action={signOut}><button type="submit">Sign out</button></form>
    </section>
  );
}

import { signIn } from './actions';
import { ADMIN_EMAIL } from '../../../lib/supabase/admin-access';

export default async function AdminLogin({ searchParams }) {
  const params = await searchParams;
  return (
    <section>
      <h1>Agreement admin</h1>
      <p>Sign in to manage Alpath agreements.</p>
      <form action={signIn} style={{ display: 'grid', gap: 16, maxWidth: 420 }}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={ADMIN_EMAIL} readOnly autoComplete="username" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required maxLength={1024} autoComplete="current-password" />
        {params.error && <p role="alert">Unable to sign in. Check your password and try again.</p>}
        <button type="submit">Sign in</button>
      </form>
    </section>
  );
}

import { requireAdmin } from '../../lib/supabase/server';
import { signOut } from './login/actions';
import { agreementStore } from '../../lib/agreements/store';
import styles from './agreements/agreements.module.css';

export default async function AdminPage() {
  const { user } = await requireAdmin();
  const { data: agreements, error } = await agreementStore()
    .from('agreement_versions')
    .select('id,status,created_at,content,agreements!inner(is_demo)')
    .eq('agreements.is_demo', true)
    .order('created_at', { ascending: false })
    .limit(100);
  return (
    <section>
      <h1>Agreement admin</h1>
      <p>Signed in as {user.email}.</p>
      <p><a href="/admin/ach">Share ACH payment details</a></p>
      <p className={styles.banner}>
        Demo workspace. Your existing Union Street client agreement is
        unchanged.
      </p>
      <a className={styles.button} href="/admin/agreements/new">
        Create demo agreement
      </a>
      {error ? (
        <p role="alert">
          Unable to load agreements. Check that the latest migration is applied,
          then refresh.
        </p>
      ) : (
        <ul className={styles.list}>
          {agreements.map((a) => (
            <li key={a.id}>
              <a href={`/admin/agreements/${a.id}`}>{a.content.title}</a>
              <span className={styles.badge}>{a.status}</span>
            </li>
          ))}
          {!agreements.length && <li>No demo agreements yet.</li>}
        </ul>
      )}
      <form action={signOut}>
        <button type="submit">Sign out</button>
      </form>
    </section>
  );
}

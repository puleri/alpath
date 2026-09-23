import { requireAdmin } from '../../../../lib/supabase/server';
import template from '../../../../lib/agreements/demo-template.json';
import DraftForm from '../DraftForm';
import styles from '../agreements.module.css';

export default async function NewAgreement() {
  const { user } = await requireAdmin();
  const content = {
    title: template.title,
    body: template.body,
    alpath: {
      name: 'Matt Puleri',
      email: user.email,
      title: 'Authorized representative',
    },
    client: { name: 'Demo Client', email: user.email, title: 'Test signer' },
  };
  return (
    <>
      <a href="/admin">← Agreements</a>
      <h1>Create a demo agreement</h1>
      <p className={styles.banner}>
        Independent Union Street CRE copy • Testing only • No email is sent
      </p>
      <DraftForm content={content} />
    </>
  );
}

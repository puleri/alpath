'use client';

import { useActionState } from 'react';
import { saveDraft } from './actions';
import styles from './agreements.module.css';

export default function DraftForm({ content, id = '', revision = 1 }) {
  const [state, action, pending] = useActionState(saveDraft, {});
  return (
    <form action={action} className={styles.form}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="revision" value={revision} />
      <label>
        Agreement title
        <input
          name="title"
          defaultValue={content.title}
          required
          maxLength={200}
        />
      </label>
      <div className={styles.columns}>
        {['alpath', 'client'].map((role) => (
          <fieldset key={role}>
            <legend>
              {role === 'alpath' ? 'Your details' : 'Test client details'}
            </legend>
            <label>
              Name
              <input
                name={`${role}Name`}
                defaultValue={content[role].name}
                required
                maxLength={120}
              />
            </label>
            <label>
              Email
              <input
                name={`${role}Email`}
                type="email"
                defaultValue={content[role].email}
                required
                maxLength={254}
              />
            </label>
            <label>
              Title
              <input
                name={`${role}Title`}
                defaultValue={content[role].title}
                required
                maxLength={120}
              />
            </label>
          </fieldset>
        ))}
      </div>
      <label>
        Demo agreement terms
        <textarea
          name="body"
          defaultValue={content.body}
          rows={20}
          required
          maxLength={60000}
        />
      </label>
      <p className={styles.muted}>
        These are an independent copy. Editing or signing this demo does not
        update the existing Union Street client agreement. No email will be
        sent.
      </p>
      {state.error && (
        <p role="alert" className={styles.error}>
          {state.error}
        </p>
      )}
      <button disabled={pending} type="submit">
        {pending
          ? 'Saving…'
          : id
            ? 'Save draft changes'
            : 'Create demo agreement'}
      </button>
    </form>
  );
}

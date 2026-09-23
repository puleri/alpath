'use client';

import { useActionState, useEffect, useState } from 'react';
import { createAchLink } from './actions';

export default function ShareForm({ ready }) {
  const [state, action, pending] = useActionState(createAchLink, null);
  const [origin, setOrigin] = useState('');
  useEffect(() => setOrigin(window.location.origin), []);
  return (
    <>
      <form action={action}>
        <label htmlFor="hours">Link expires after </label>
        <select name="hours" id="hours" defaultValue="24">
          <option value="1">1 hour</option>
          <option value="24">24 hours</option>
          <option value="48">48 hours</option>
        </select>{' '}
        <button disabled={!ready || pending}>
          {pending ? 'Creating…' : 'Create private link'}
        </button>
      </form>
      {state?.error && <p role="alert">{state.error}</p>}
      {state?.path && (
        <section aria-live="polite" style={{ marginTop: 24 }}>
          <label htmlFor="share-link">Email this link to the client</label>
          <textarea
            id="share-link"
            readOnly
            value={`${origin}${state.path}`}
            rows={4}
            style={{ display: 'block', width: '100%', margin: '8px 0 20px' }}
          />
          <label htmlFor="share-code">
            Send this access code separately by text or phone
          </label>
          <input
            id="share-code"
            readOnly
            value={state.code}
            style={{ display: 'block', width: '100%', margin: '8px 0' }}
          />
          <p>
            Expires {new Date(state.expiresAt).toLocaleString()}. The client
            gets up to 15 minutes of access per unlock.
          </p>
          <p>
            Save the link and code now; they are not stored. Creating another
            link does not revoke this one.
          </p>
        </section>
      )}
    </>
  );
}

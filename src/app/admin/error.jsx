'use client';

export default function AdminError({ reset }) {
  return (
    <section>
      <h1>Agreement workspace unavailable</h1>
      <p>
        Check the Supabase connection and migrations, then try again. Saved
        agreements and signatures will not be resubmitted.
      </p>
      <button onClick={reset}>Try again</button>
    </section>
  );
}

'use client';

export default function SigningError({ reset }) {
  return (
    <main style={{ margin: '160px auto', maxWidth: 650, padding: 24 }}>
      <h1>Signing is temporarily unavailable</h1>
      <p>
        Please try again. If you already submitted a signature, refreshing will
        check its saved status.
      </p>
      <button onClick={reset}>Try again</button>
    </main>
  );
}

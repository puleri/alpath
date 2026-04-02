export const metadata = {
  title: "Thank You",
  description:
    "Thank you for reaching out to Alpath Engineering. We will follow up soon.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-card container">
        <p className="case-studies-eyebrow">Message received</p>
        <h1>Thanks for reaching out.</h1>
        <p>
          Your form was submitted successfully. We will reply soon at the email
          address you provided.
        </p>
        <div className="thank-you-actions">
          <a className="primary-button" href="/">
            Back to home
          </a>
          <a className="secondary-button" href="/services">
            Explore services
          </a>
        </div>
      </section>
    </main>
  );
}

import styles from './page.module.css';

export default function PricingOptions({ tiers }) {
  return (
    <>
      <p className={styles.billingIntro}>
        Each price is a one-time project investment. No ongoing care plan is
        required.
      </p>
      <div className={styles.pricing}>
        {tiers.map((tier) => {
          return (
            <article
              key={tier.number}
              className={`${styles.tier} ${tier.recommended ? styles.recommended : ''}`}
            >
              <div className={styles.tierTop}>
                <span>Tier {tier.number}</span>
                {tier.recommended && <span>Recommended ↗</span>}
              </div>
              <h3>{tier.name}</h3>
              <p className={styles.price}>{tier.price}</p>
              <p className={styles.tierIntro}>{tier.intro}</p>
              <ul>
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.best}>
                <p className={styles.eyebrow}>Best for</p>
                <p>{tier.best}</p>
              </div>
              <a className={styles.button} href="#next">
                Discuss Tier {tier.number} <span aria-hidden="true">↗</span>
              </a>
            </article>
          );
        })}
      </div>
      <section className={styles.carePanel} aria-labelledby="care-heading">
        <div>
          <p className={styles.eyebrow}>Optional basic care / $150 per month</p>
          <h3 id="care-heading">A little help when you need it.</h3>
          <p>
            The rebuild stands on its own. If you’d like us to check the site
            each month and be available for small updates, we can keep that
            simple.
          </p>
        </div>
        <ul>
          <li>
            <strong>A basic monthly audit.</strong> Check key pages, navigation
            links, and the contact form for obvious issues. We’ll email you a
            brief note if anything needs attention.
          </li>
          <li>
            <strong>Availability for minor changes.</strong> Email us when you
            need a copy edit, image swap, or contact-detail update. Includes up
            to 30 minutes of small changes per month, in addition to the audit.
          </li>
        </ul>
      </section>
      <p className={styles.note}>
        Entirely optional after launch, month-to-month, with no minimum term.
        Cancel before your next billing date. Unused update time does not roll
        over. Larger changes are quoted before work begins. This basic plan does
        not include ongoing SEO/AEO campaigns, search reporting, or new content.
        You can also skip the plan and request a quote for changes as needed.
        Hosting and third-party fees are separate.
      </p>
    </>
  );
}

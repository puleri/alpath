import Link from "next/link";
import PathboySnake from "./components/PathboySnake";
import styles from "./not-found.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <div className={`container ${styles.content}`}>
        <section className={styles.messageColumn}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page not found.</h1>
          <p className={styles.description}>
            Looks like this route wandered off the map. Try heading back to home,
            or play a quick round of Snake on the PATHBOY while you&apos;re here.
          </p>
          <Link href="/" className={styles.homeButton}>
            Back to Home
          </Link>
        </section>

        <section className={styles.gameColumn}>
          <PathboySnake />
        </section>
      </div>
    </main>
  );
}

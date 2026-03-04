import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background decorative elements */}
      <div className={styles.bg}>
        <div className={styles.bgGlow1} aria-hidden="true" />
        <div className={styles.bgGlow2} aria-hidden="true" />
        <div className={styles.bgGrid} aria-hidden="true" />
      </div>

      <div className="container">
        <div className={styles.content}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            UK-Based Mobile App Studio
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            Consumer apps built to{" "}
            <span className="gradient-text">the highest standard</span>
          </h1>

          {/* Sub-headline */}
          <p className={styles.subheadline}>
            527Studios Limited is a mobile application development company
            dedicated to designing and building high-quality consumer
            applications, with a strong emphasis on robust engineering,
            performance, and intuitive user experience.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a href="#services" className="btn btn-primary">
              Our Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Start a Project
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>iOS</span>
              <span className={styles.statLabel}>Native development</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statValue}>React Native</span>
              <span className={styles.statLabel}>Cross-platform</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statValue}>UK Based</span>
              <span className={styles.statLabel}>Mildenhall, Suffolk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}

import styles from "./About.module.css";

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Robust Engineering",
    description:
      "Clean, maintainable code underpins everything we build. Every architectural decision is made with long-term reliability and scalability in mind.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Peak Performance",
    description:
      "Speed and responsiveness are non-negotiable. We optimise every layer of the stack to deliver fluid, high-performance experiences.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Intuitive UX",
    description:
      "The best interfaces are invisible. We design interactions that feel immediately natural, reducing friction and engaging users from their very first session.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Consumer Focus",
    description:
      "Our primary focus is the end user. A consumer-first mindset shapes every product decision, ensuring each application genuinely resonates with its intended audience.",
  },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.layout}>
          {/* Left: text */}
          <div className={styles.textCol}>
            <p className="section-label">About Us</p>
            <h2 className="section-heading">
              A studio built for the{" "}
              <span className="gradient-text">mobile era</span>
            </h2>
            <p className="section-subheading">
              527Studios Limited is a mobile application development company
              dedicated to designing and building high-quality consumer
              applications, with a strong emphasis on robust engineering,
              performance, and intuitive user experience.
            </p>
            <p className={styles.bodyText}>
              The company primarily focuses on developing its own consumer-facing
              apps using iOS and React Native technologies, while selectively
              undertaking application development projects for other businesses.
            </p>
            <div className={styles.location}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" fill="currentColor"/>
              </svg>
              <span>Unit A, 82 James Carter Road, Mildenhall, IP28 7DE</span>
            </div>
          </div>

          {/* Right: pillars grid */}
          <div className={`grid-2 ${styles.pillarsGrid}`}>
            {pillars.map((p) => (
              <div key={p.title} className={styles.pillar}>
                <div className={styles.pillarIcon}>{p.icon}</div>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

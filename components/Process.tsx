import styles from "./Process.module.css";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by deeply understanding your goals, audience, and constraints. This shapes every decision that follows and ensures we build the right thing.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "Wireframes, interaction models, and high-fidelity prototypes are validated before a single line of production code is written.",
  },
  {
    step: "03",
    title: "Engineering",
    description:
      "We build with care — clean architecture, thorough testing, and continuous integration so quality is baked in from day one.",
  },
  {
    step: "04",
    title: "Launch & Beyond",
    description:
      "App Store submission, release planning, and ongoing monitoring. We stay involved to iterate and improve based on real-world usage.",
  },
];

export default function Process() {
  return (
    <section id="process" className={`section ${styles.process}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">How We Work</p>
          <h2 className="section-heading">
            A process built for{" "}
            <span className="gradient-text">quality outcomes</span>
          </h2>
          <p className="section-subheading">
            We follow a structured, collaborative approach that keeps projects
            on track and produces apps worth being proud of.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.step} className={styles.step}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
              <div className={styles.stepNumber}>{s.step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

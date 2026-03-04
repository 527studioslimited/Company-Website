import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "iOS App Development",
    description:
      "Native Swift and SwiftUI applications built to Apple's exacting standards. We leverage the full power of the iOS platform to deliver fast, polished, and App Store-ready apps.",
    tags: ["Swift", "SwiftUI", "UIKit", "Xcode"],
    accent: "teal",
  },
  {
    number: "02",
    title: "React Native Development",
    description:
      "Cross-platform apps that feel truly native on both iOS and Android. We write clean, performant React Native code with shared business logic and platform-specific optimisations.",
    tags: ["React Native", "Expo", "TypeScript", "Redux"],
    accent: "blue",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Thoughtful, human-centred design that makes complex interactions feel effortless. From wireframes and prototypes through to polished, pixel-perfect visual design.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    accent: "purple",
  },
  {
    number: "04",
    title: "App Strategy & Consulting",
    description:
      "We help businesses identify the right mobile strategy, define their MVP, and plan a roadmap that maximises value. Selective project partnerships with a focus on long-term success.",
    tags: ["Product Strategy", "MVP", "Roadmapping", "Discovery"],
    accent: "teal",
  },
  {
    number: "05",
    title: "Performance Optimisation",
    description:
      "Diagnose and resolve performance bottlenecks in existing apps. We profile, optimise, and modernise codebases to deliver the smooth, responsive experience users expect.",
    tags: ["Profiling", "Crash Analysis", "Memory Management", "CI/CD"],
    accent: "blue",
  },
  {
    number: "06",
    title: "Ongoing Support & Maintenance",
    description:
      "Long-term partnership to keep your app healthy, up-to-date with OS releases, and continuously improving based on real user feedback and analytics data.",
    tags: ["Monitoring", "OS Updates", "Iterations", "Analytics"],
    accent: "purple",
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">What We Do</p>
          <h2 className="section-heading">
            End-to-end mobile{" "}
            <span className="gradient-text">development services</span>
          </h2>
          <p className="section-subheading">
            From concept to App Store — we handle every aspect of bringing a
            mobile app to life with precision and care.
          </p>
        </div>

        {/* Services grid */}
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.number} className={`${styles.card} ${styles[`accent-${service.accent}`]}`}>
              <span className={styles.number}>{service.number}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.tags}>
                {service.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

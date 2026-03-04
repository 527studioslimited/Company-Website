import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "iOS App Development",
    description:
      "Native Swift and SwiftUI applications built to Apple's exacting standards. We leverage the full capability of the iOS platform to deliver fast, polished, App Store-ready products.",
    tags: ["Swift", "SwiftUI", "UIKit", "Xcode"],
    accent: "teal",
  },
  {
    number: "02",
    title: "React Native Development",
    description:
      "Cross-platform applications that feel genuinely native on both iOS and Android. We write clean, performant React Native code with shared business logic and platform-specific optimisations where it matters.",
    tags: ["React Native", "Expo", "TypeScript", "Redux"],
    accent: "blue",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Considered, human-centred design that makes complex interactions feel effortless. From early wireframes and interactive prototypes through to precise, pixel-perfect visual execution.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
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
            Mobile development{" "}
            <span className="gradient-text">done properly</span>
          </h2>
          <p className="section-subheading">
            From initial concept through to App Store release, we apply the same
            exacting standards to every stage of the development process.
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

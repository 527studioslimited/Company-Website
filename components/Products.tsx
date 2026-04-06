import Image from "next/image";
import styles from "./Products.module.css";

const products = [
  {
    name: "Hearth",
    tagline: "Cooking made simple",
    platforms: ["iOS"],
    logoSrc: "/app-logos/hearth.png",
    privacyPolicy: "/hearth/privacy",
    termsConditions: "/hearth/terms",
  },
  {
    name: "SocialQuest",
    tagline: "Level up your social life",
    platforms: ["iOS"],
    logoSrc: "/app-logos/socialquest.png",
    privacyPolicy: "/socialquest/privacy",
    termsConditions: "/socialquest/terms",
  },
];

export default function Products() {
  return (
    <section id="products" className={`section ${styles.products}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label">Our Products</p>
          <h2 className="section-heading">
            Apps we&apos;ve{" "}
            <span className="gradient-text">built and shipped</span>
          </h2>
          <p className="section-subheading">
            Beyond client work, we develop our own consumer-facing applications
            with the same rigour and attention to detail.
          </p>
        </div>

        {/* Products and coming soon grid */}
        <div className={styles.productsGrid}>
          {/* Products */}
          <div className={styles.productsColumn}>
            {products.map((product) => (
              <div key={product.name} className={styles.productCard}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                  <Image
                    src={product.logoSrc}
                    alt={`${product.name} logo`}
                    width={160}
                    height={160}
                    className={styles.logo}
                    priority
                  />
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.tagline}>{product.tagline}</p>

                  {/* Platforms */}
                  <div className={styles.platforms}>
                    {product.platforms.map((platform) => (
                      <span key={platform} className={styles.platform}>
                        {platform}
                      </span>
                    ))}
                  </div>

                  {/* Legal links */}
                  <div className={styles.legalLinks}>
                    <a href={product.privacyPolicy} className={styles.legalLink} target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                    <span className={styles.legalDivider}>·</span>
                    <a href={product.termsConditions} className={styles.legalLink} target="_blank" rel="noopener noreferrer">
                      Terms & Conditions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming soon card */}
          <div className={styles.comingSoonCard}>
            <div className={styles.comingSoonIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.comingSoonTitle}>Coming Soon</h3>
            <p className={styles.comingSoonText}>
              We&apos;re currently working on our next consumer application. Stay tuned for announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

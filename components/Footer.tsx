import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/hearth/privacy", label: "Privacy Policy" },
  { href: "/hearth/terms", label: "Terms of Use" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top border accent */}
      <div className={styles.topBorder} aria-hidden="true" />

      <div className="container">
        <div className={styles.main}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#" className={styles.logo} aria-label="527Studios home">
              <span className={styles.logoMark}>527</span>
              <span className={styles.logoText}>Studios</span>
            </a>
            <p className={styles.tagline}>
              527Studios Limited is a mobile application development company
              dedicated to designing and building high-quality consumer
              applications, with a strong emphasis on robust engineering,
              performance, and intuitive user experience.
            </p>
            <p className={styles.company}>
              527Studios Limited<br />
              Registered in the UK
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.linksCol}>
            <p className={styles.colHeading}>Navigation</p>
            <nav aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Address */}
          <div className={styles.linksCol}>
            <p className={styles.colHeading}>Location</p>
            <address className={styles.address}>
              Unit A<br />
              82 James Carter Road<br />
              Mildenhall<br />
              IP28 7DE<br />
              United Kingdom
            </address>
            <a href="mailto:527studioslimited@gmail.com" className={styles.emailLink}>
              527studioslimited@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} 527Studios Limited. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.legalLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

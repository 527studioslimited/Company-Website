import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy | SocialQuest — 527Studios Limited",
  description: "SocialQuest Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link href="/" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to 527Studios
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.docHeader}>
          <p className={styles.appLabel}>SocialQuest Application</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: 5 April 2026</p>
        </div>

        <div className={styles.doc}>

          <section className={styles.section}>
            <h2>1. Data Controller</h2>
            <p>The data controller for personal data collected through the App is:</p>
            <div className={styles.infoBlock}>
              <p>527 Studios Limited</p>
              <p>Company registration number: 17067398</p>
              <p>Unit A, 82 James Carter Road, Mildenhall, IP28 7DE, United Kingdom</p>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>2. Personal Data We Collect</h2>
            <p><strong>2.1</strong> Account data (provided at registration or via Apple Sign-In): email address; full name (optional, where shared via Apple Sign-In); profile picture URL (optional, where shared via Apple Sign-In); unique user identifier (UUID) generated automatically at account creation.</p>
            <p><strong>2.2</strong> Authentication credentials: passwords are hashed by our authentication provider (Supabase) and are never stored in plain text; we do not have access to your password. Where Apple Sign-In is used, no password is stored.</p>
            <p><strong>2.3</strong> App usage and progress data (stored on our servers): the Quest you are currently working on and your progress through the Quest system; XP accumulated and any administrator-granted bonus XP; difficulty levels selected within Quests.</p>
            <p><strong>2.4</strong> Device-local data (encrypted storage on your device only; not transmitted to our servers): Quest timer start and completion timestamps; onboarding completion status flag.</p>
            <p><strong>2.5</strong> Onboarding session data: during onboarding, you select from predefined options in response to motivational framing questions. These selections are used within the session only to personalise the narrative flow. They are not transmitted to our servers and are not retained after the session ends.</p>
            <p><strong>2.6</strong> Signature data: during onboarding, you are invited to draw a signature as a gamified commitment prompt. This is captured in-session to enable onboarding progression. It is not stored on our servers, not transmitted, and is discarded at the end of onboarding.</p>
            <p><strong>2.7</strong> Subscription data (retrieved from RevenueCat): whether you hold an active SocialQuest Pro entitlement. We do not hold or process your payment card details; all payment information is held by Apple.</p>
          </section>

          <section className={styles.section}>
            <h2>3. Age and Under-Age Users</h2>
            <p>We do not knowingly collect personal data from anyone under the age of 16. If we become aware that we hold personal data belonging to a person under 16, we will take steps to delete it without undue delay. If you believe a child under 16 has created an account, please contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>4. How We Use Your Data and Our Lawful Basis</h2>

            <h3>4.1 Creating and managing your account</h3>
            <p><strong>Purpose:</strong> Registering your account, authenticating you, and maintaining your account.</p>
            <p><strong>UK/EU GDPR:</strong> Performance of a contract (Article 6(1)(b)).</p>
            <p><strong>CCPA/CPRA:</strong> Disclosed purpose — account administration.</p>
            <p><strong>PIPEDA:</strong> Consent at registration and necessary for service delivery.</p>

            <h3>4.2 Providing the App's features</h3>
            <p><strong>Purpose:</strong> Retrieving your Quest progress, calculating XP and rank, and displaying your profile.</p>
            <p><strong>UK/EU GDPR:</strong> Performance of a contract (Article 6(1)(b)).</p>
            <p><strong>CCPA/CPRA:</strong> Disclosed purpose — service delivery.</p>
            <p><strong>PIPEDA:</strong> Necessary for service delivery.</p>

            <h3>4.3 Managing your subscription</h3>
            <p><strong>Purpose:</strong> Verifying subscription status and gating access to premium content.</p>
            <p><strong>UK/EU GDPR:</strong> Performance of a contract (Article 6(1)(b)).</p>
            <p><strong>CCPA/CPRA:</strong> Disclosed purpose — subscription management.</p>
            <p><strong>PIPEDA:</strong> Necessary for service delivery.</p>

            <h3>4.4 Responding to your communications</h3>
            <p><strong>Purpose:</strong> Handling support requests, enquiries, and complaints.</p>
            <p><strong>UK/EU GDPR:</strong> Legitimate interests (Article 6(1)(f)) — our legitimate interest in providing customer support.</p>
            <p><strong>CCPA/CPRA:</strong> Disclosed purpose — customer support.</p>
            <p><strong>PIPEDA:</strong> Implicit consent and our legitimate purpose of providing support.</p>

            <h3>4.5 Security and fraud prevention</h3>
            <p><strong>Purpose:</strong> Detecting, investigating, and preventing fraudulent activity, abuse, and security incidents.</p>
            <p><strong>UK/EU GDPR:</strong> Legitimate interests (Article 6(1)(f)).</p>
            <p><strong>CCPA/CPRA:</strong> Disclosed purpose — security.</p>
            <p><strong>PIPEDA:</strong> Our legitimate purpose of protecting the App and its users.</p>

            <h3>4.6 Compliance with legal obligations</h3>
            <p><strong>Purpose:</strong> Complying with applicable laws, regulations, court orders, or competent authority requests.</p>
            <p><strong>UK/EU GDPR:</strong> Legal obligation (Article 6(1)(c)).</p>
            <p><strong>CCPA/CPRA / PIPEDA:</strong> Legal obligation.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Third-Party Recipients and Processors</h2>

            <h3>5.1 Supabase Inc. — Data Processor</h3>
            <p><strong>Role:</strong> Backend database hosting and authentication services.</p>
            <p><strong>Data received:</strong> Account data (email, name, avatar URL, UUID), hashed authentication tokens, Quest progress data.</p>
            <p><strong>Location:</strong> Data is primarily stored in the EU (Ireland). Where data is transferred outside the EEA or UK, appropriate safeguards are applied in accordance with applicable law.</p>
            <p><strong>Privacy policy:</strong> supabase.com/privacy</p>

            <h3>5.2 RevenueCat, Inc. — Data Processor / Independent Controller (in part)</h3>
            <p><strong>Role:</strong> Subscription entitlement management.</p>
            <p><strong>Data received:</strong> User identifier, subscription status, purchase event data.</p>
            <p><strong>Location:</strong> United States. Where data is transferred outside the EEA or UK, appropriate safeguards are applied.</p>
            <p><strong>Note:</strong> RevenueCat may act as an independent controller for certain platform-level analytics it collects.</p>
            <p><strong>Privacy policy:</strong> revenuecat.com/privacy</p>

            <h3>5.3 Apple Inc. — Independent Controller</h3>
            <p><strong>Role:</strong> App Store operator, Apple Sign-In provider, and subscription payment processor.</p>
            <p><strong>Data received:</strong> Authentication data (via Apple Sign-In) and subscription purchase data (via App Store billing).</p>
            <p><strong>Location:</strong> United States.</p>
            <p><strong>Note:</strong> Apple acts as an independent data controller for all data processed through its platforms.</p>
            <p><strong>Privacy policy:</strong> apple.com/privacy</p>
          </section>

          <section className={styles.section}>
            <h2>6. International Data Transfers</h2>
            <p>Core user data is primarily stored within the European Union (Supabase infrastructure in Ireland). As a UK company, we transfer personal data from the UK to the EU. The UK Government has determined that the EU/EEA provides an adequate level of data protection; this transfer is covered by that adequacy determination.</p>
            <p>Supabase Inc., RevenueCat, Inc., and Apple Inc. are US-based. Where personal data is transferred from the UK or EEA to these organisations, we rely on appropriate transfer safeguards in accordance with applicable law. Where required by applicable law, appropriate safeguards for international transfers are in place.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Data Retention</h2>
            <p><strong>7.1</strong> Account and progress data: retained for as long as your account is active. If you delete your account, we will delete or anonymise your personal data within a reasonable period, subject to any retention required by applicable law.</p>
            <p><strong>7.2</strong> Subscription data: records of subscription transactions may be retained for longer periods where required by applicable tax, financial, or fraud-prevention regulations, or to resolve disputes.</p>
            <p><strong>7.3</strong> Support communications: correspondence is retained for a reasonable period to resolve your request and for a further period in the event of follow-up claims.</p>
            <p><strong>7.4</strong> Device-local data: session tokens, onboarding status, and Quest timer data stored on your device are removed when you delete the App or delete your account.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your personal data, including: transmission over encrypted HTTPS connections; encrypted local storage of session tokens and on-device data using Apple's Keychain mechanism via Expo SecureStore; hashed storage of passwords by our authentication provider; and access controls restricting access to backend systems.</p>
            <p>No method of electronic transmission or storage is entirely secure. While we take appropriate steps to protect your data, we cannot guarantee absolute security.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Data We Do Not Collect</h2>
            <p>Based on the current design of the App, we do not collect:</p>
            <ul>
              <li>Precise or approximate location data</li>
              <li>Device contacts or address book data</li>
              <li>Camera, microphone, or photo library data</li>
              <li>Advertising identifiers (IDFA or equivalent)</li>
              <li>Analytics or behavioural tracking data (no analytics SDK is integrated)</li>
              <li>Crash or error reporting data (no crash reporting service is integrated)</li>
              <li>Push notification tokens (no push notifications are sent)</li>
            </ul>
            <p>Regarding IP addresses: the App does not collect IP addresses at the application layer. However, our infrastructure providers (Supabase, RevenueCat, Apple) may log IP addresses at the server or network level as part of standard operations. Please refer to their respective privacy policies.</p>
            <p>Important: this section reflects the App as currently built. If any new SDK, analytics integration, or data-collection feature is added, this section must be reviewed and updated before that version ships.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Your Rights</h2>

            <h3>10.1 UK and EU/EEA Users (UK GDPR / EU GDPR)</h3>
            <ul>
              <li><strong>Right of access</strong> — to request a copy of the data we hold about you.</li>
              <li><strong>Right to rectification</strong> — to request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to erasure</strong> — to request deletion of your data in certain circumstances.</li>
              <li><strong>Right to restriction</strong> — to request restricted processing in certain circumstances.</li>
              <li><strong>Right to data portability</strong> — to receive your data in a structured, machine-readable format where processing is based on contract or consent and carried out by automated means.</li>
              <li><strong>Right to object</strong> — to object to processing based on legitimate interests.</li>
              <li><strong>Right to withdraw consent</strong> — where we rely on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
            </ul>
            <p>These rights are subject to exceptions. We will respond within one month, with possible extension in complex cases.</p>

            <h3>10.2 California Residents (CCPA/CPRA)</h3>
            <ul>
              <li><strong>Right to know</strong> — to request disclosure of categories and specific pieces of personal information collected, sources, purposes, and third-party recipients.</li>
              <li><strong>Right to delete</strong> — to request deletion, subject to certain exceptions.</li>
              <li><strong>Right to correct</strong> — to request correction of inaccurate information.</li>
              <li><strong>Right to opt out of sale or sharing</strong> — see clause 12.</li>
              <li><strong>Right to limit use of sensitive personal information</strong> — to direct us to limit use to what is necessary for our services.</li>
              <li><strong>Right to non-discrimination</strong> — we will not discriminate for exercising any CCPA/CPRA right.</li>
            </ul>
            <p>We will respond within 45 days of receipt, subject to permitted extensions.</p>

            <h3>10.3 Canadian Residents (PIPEDA and Quebec Law 25)</h3>
            <ul>
              <li><strong>Right to access</strong> — to request access to personal information we hold and how it is used.</li>
              <li><strong>Right to correction</strong> — to request correction of inaccurate information.</li>
              <li><strong>Right to withdraw consent</strong> — subject to legal or contractual restrictions; withdrawal may affect our ability to provide the App.</li>
              <li><strong>Quebec Law 25:</strong> Quebec residents have additional rights including data portability and de-indexation.</li>
            </ul>
            <p>We will respond within 30 days.</p>

            <h3>10.4 Australian Residents (Privacy Act 1988)</h3>
            <ul>
              <li><strong>Right of access</strong> — to request access to personal information we hold.</li>
              <li><strong>Right to correction</strong> — to request correction of inaccurate, out of date, or misleading information.</li>
              <li><strong>Right to complain</strong> — to complain to the OAIC if you believe we have breached the Australian Privacy Principles.</li>
            </ul>
            <p>We will respond within 30 days.</p>
          </section>

          <section className={styles.section}>
            <h2>11. How to Exercise Your Rights and How to Complain</h2>
            <p><strong>11.1</strong> To exercise any right in clause 10, contact us at:</p>
            <div className={styles.infoBlock}>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
              <p>Post: 527 Studios Limited, Unit A, 82 James Carter Road, Mildenhall, IP28 7DE, United Kingdom</p>
            </div>
            <p>Please provide your registered email address. We may ask for additional verification and will not charge a fee unless a request is manifestly unfounded or excessive.</p>
            <p><strong>11.2 UK supervisory authority:</strong> Information Commissioner's Office (ICO) — ico.org.uk | Phone: 0303 123 1113 | Address: Wycliffe House, Water Lane, Wilmslow, SK9 5AF</p>
            <p><strong>11.3 EU supervisory authorities:</strong> if you are in the EU/EEA, you may lodge a complaint with the data protection authority in your country of residence. A directory is available at edpb.europa.eu.</p>
            <p><strong>11.4 Australian supervisory authority:</strong> Office of the Australian Information Commissioner (OAIC) — oaic.gov.au | Phone: 1300 363 992</p>
            <p><strong>11.5 Canadian supervisory authorities:</strong> Office of the Privacy Commissioner of Canada — priv.gc.ca. Quebec residents may also contact the Commission d'accès à l'information (CAI) — cai.quebec.ca.</p>
            <p><strong>11.6 California:</strong> California Privacy Protection Agency (CPPA) — cppa.ca.gov.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Do Not Sell or Share (CCPA)</h2>
            <p>We do not sell your personal information to third parties. We do not share your personal information with third parties for cross-context behavioural advertising purposes, as those terms are defined under the CCPA/CPRA. We share data only with the service providers identified in clause 5 for the purposes of operating and delivering the App.</p>
          </section>

          <section className={styles.section}>
            <h2>13. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Where changes are material, we will notify you through the App or by email to your registered address. The date at the top of this Policy will always reflect when it was last updated.</p>
            <p>Where applicable law requires a specific notice period before changes to data processing take effect, we will comply with those requirements.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Contact Information</h2>
            <p>For questions, concerns, or requests relating to this Privacy Policy or our data practices:</p>
            <div className={styles.infoBlock}>
              <p>527 Studios Limited</p>
              <p>Unit A, 82 James Carter Road</p>
              <p>Mildenhall, IP28 7DE</p>
              <p>United Kingdom</p>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

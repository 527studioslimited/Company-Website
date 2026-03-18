import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy | Hearth — 527Studios Limited",
  description: "Hearth Privacy Policy",
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
          <p className={styles.appLabel}>Hearth Application</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: 18 March 2026</p>
        </div>

        <div className={styles.doc}>

          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>527Studios Limited ("527Studios", "we", "us", "our"), a company incorporated in England and Wales, operates the Hearth mobile application (the "App"). This Privacy Policy explains what personal data we collect, why we collect it, how we use and protect it, who we share it with, and what rights you have over it.</p>
            <p>We process personal data in compliance with the UK General Data Protection Regulation ("UK GDPR"), the Data Protection Act 2018, and, where applicable to our users, the EU General Data Protection Regulation ("EU GDPR").</p>
            <p>If you have any questions about this Policy, contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Data Controller</h2>
            <p>The data controller responsible for your personal data is:</p>
            <div className={styles.infoBlock}>
              <p>527Studios Limited</p>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
              <p>Website: https://www.527studios.co.uk/</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Data We Collect and Our Legal Basis</h2>

            <h3>3.1 Account Data</h3>
            <p>We collect your email address when you register. If you use Sign in with Apple, Apple may share your name and email address with us subject to your Apple privacy settings. We store authentication tokens and session identifiers required to keep you signed in.</p>
            <p className={styles.legalBasis}>Legal basis: Performance of a contract — this data is necessary to provide you with access to the App.</p>

            <h3>3.2 Recipe and Cookbook Data</h3>
            <p>We store recipes you choose to save, including title, ingredients, steps, estimated macros and calories, cuisine type, difficulty rating, cooking time, personal notes, star ratings, cook counts, and display preferences (emoji, colour).</p>
            <p className={styles.legalBasis}>Legal basis: Performance of a contract.</p>

            <h3>3.3 Collection and Organisation Data</h3>
            <p>We store the recipe collections you create and the recipes you assign to them.</p>
            <p className={styles.legalBasis}>Legal basis: Performance of a contract.</p>

            <h3>3.4 Meal Plan Data</h3>
            <p>We store your weekly meal plan assignments, mapping saved recipes to specific days and meal slots.</p>
            <p className={styles.legalBasis}>Legal basis: Performance of a contract.</p>

            <h3>3.5 Recent Scan Data</h3>
            <p>We store the last 4 recipes you have scanned (extracted from a URL or image), including the recipe data and the timestamp of each scan. Entries beyond this limit are deleted automatically.</p>
            <p className={styles.legalBasis}>Legal basis: Performance of a contract.</p>

            <h3>3.6 Usage Metadata</h3>
            <p>We record the timestamps associated with recipe saves and scans, and the source type of each extraction (video URL or image). This data is used solely to operate the App and is never used for advertising or profiling.</p>
            <p className={styles.legalBasis}>Legal basis: Legitimate interests in operating and maintaining the App.</p>

            <h3>3.7 Subscription Status</h3>
            <p>Your subscription entitlement status is managed by RevenueCat on our behalf. We receive confirmation of whether your subscription is active. We do not receive or store payment card details; these are handled exclusively by Apple.</p>
            <p className={styles.legalBasis}>Legal basis: Performance of a contract.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Data We Do Not Collect</h2>
            <p>We do not collect or process:</p>
            <ul>
              <li>Payment card or banking details (managed entirely by Apple)</li>
              <li>Precise or background location data</li>
              <li>Advertising identifiers or behavioural tracking data</li>
              <li>Contacts, calendar entries, or any data beyond what is described in Section 3</li>
              <li>Personal data from any person under the age of 16</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Device Permissions</h2>
            <p><strong>5.1 Camera</strong> — requested only when you choose to scan a printed or handwritten recipe by taking a photo. The image is resized on your device and transmitted securely for processing; it is not stored on our servers after extraction is complete.</p>
            <p><strong>5.2 Photo Library</strong> — requested only when you choose to select an image from your gallery. The image is handled in the same manner as above.</p>
            <p>Both permissions are requested at the point of use, are never accessed in the background, and can be revoked at any time in your iOS Settings. Revoking a permission only prevents that scan method from being used; all other App functionality remains unaffected.</p>
          </section>

          <section className={styles.section}>
            <h2>6. How We Use Your Data</h2>
            <p>We use your personal data exclusively to:</p>
            <ul>
              <li>Create and maintain your account and authenticate you</li>
              <li>Sync your recipes, collections, and meal plan to your account</li>
              <li>Process recipe extraction requests via AI</li>
              <li>Verify and manage your subscription status</li>
              <li>Communicate with you about material changes to the App, these Terms, or this Policy</li>
              <li>Investigate and respond to support requests or complaints</li>
            </ul>
            <p>We do not sell, rent, trade, or otherwise share your personal data with third parties for their own marketing or advertising purposes.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Third-Party Data Processors</h2>
            <p>We share personal data only with the following trusted service providers, each acting as a data processor under a data processing agreement:</p>

            <h3>7.1 Supabase (Supabase Inc.)</h3>
            <p><strong>Purpose:</strong> Cloud database hosting, authentication, and edge function execution.</p>
            <p><strong>Data shared:</strong> Account data, recipes, collections, meal plans, and recent scan records.</p>
            <p><strong>Location:</strong> West EU — Ireland (eu-west-1). All core user data is stored within the European Economic Area and does not leave it.</p>
            <p><strong>Privacy policy:</strong> supabase.com/privacy</p>

            <h3>7.2 OpenAI (OpenAI, LLC)</h3>
            <p><strong>Purpose:</strong> Server-side AI recipe extraction.</p>
            <p><strong>Data shared:</strong> When you scan a video URL, platform metadata (video title, caption) and a thumbnail image are sent to OpenAI's API. When you scan a photo, a resized version of that image is sent. This data is transmitted transiently for the sole purpose of extraction; it is not stored by us after the extraction response is received.</p>
            <p><strong>Location:</strong> United States. By using the scan feature, you acknowledge that this data is transferred to the US for processing under OpenAI's data processing terms.</p>
            <p><strong>Privacy policy:</strong> openai.com/policies/privacy-policy</p>

            <h3>7.3 RevenueCat (RevenueCat, Inc.)</h3>
            <p><strong>Purpose:</strong> Subscription entitlement management.</p>
            <p><strong>Data shared:</strong> An anonymised user identifier linking your App Store subscription to your account. RevenueCat does not receive your recipe data, meal plans, or directly identifying personal information beyond this identifier.</p>
            <p><strong>Location:</strong> United States. Transfer is subject to appropriate contractual safeguards.</p>
            <p><strong>Privacy policy:</strong> revenuecat.com/privacy</p>

            <h3>7.4 Apple Inc.</h3>
            <p><strong>Purpose:</strong> App distribution, subscription billing, and (optionally) Sign in with Apple authentication.</p>
            <p><strong>Data shared:</strong> Apple independently processes all App Store transactions. If you use Sign in with Apple, Apple authenticates you and provides us with an identity token.</p>
            <p><strong>Privacy policy:</strong> apple.com/legal/privacy/</p>
          </section>

          <section className={styles.section}>
            <h2>8. International Data Transfers</h2>
            <p><strong>8.1</strong> Your core personal data (account, recipes, collections, meal plans, recent scans) is stored in Supabase's West EU (Ireland) data centre within the EEA. No transfer outside the EEA occurs for this data.</p>
            <p><strong>8.2</strong> When you use the scan feature, data is transmitted to OpenAI's servers in the United States. This transfer takes place on the basis of your use of that feature and OpenAI's standard contractual commitments for data processing.</p>
            <p><strong>8.3</strong> Subscription status data is processed by RevenueCat in the United States, subject to appropriate contractual safeguards.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Data Retention</h2>
            <p><strong>9.1</strong> Your personal data is retained for as long as your account remains active.</p>
            <p><strong>9.2</strong> Recent scan entries are capped at 4; older entries are deleted automatically when this limit is exceeded.</p>
            <p><strong>9.3</strong> When you delete your account (Settings → Delete Account), all associated data — recipes, collections, meal plans, recent scans, and your authentication record — is permanently and irreversibly deleted immediately. This action cannot be undone.</p>
            <p><strong>9.4</strong> Aggregated or fully anonymised data that cannot reasonably identify you may be retained indefinitely for operational purposes.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Data Security</h2>
            <p><strong>10.1</strong> All data is transmitted using HTTPS/TLS encryption. Passwords are never stored in plain text; authentication is managed by Supabase Auth using industry-standard cryptographic methods.</p>
            <p><strong>10.2</strong> We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, accidental loss, destruction, or alteration.</p>
            <p><strong>10.3</strong> No method of electronic transmission or storage is completely secure. While we take reasonable precautions, we cannot guarantee absolute security.</p>
            <p><strong>10.4</strong> In the event of a personal data breach likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours and will notify affected users without undue delay as required by law.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Your Rights</h2>
            <p>Under UK GDPR and EU GDPR, you have the following rights:</p>
            <ul>
              <li><strong>Right of Access</strong> — Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification</strong> — Request correction of inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure</strong> — Request deletion of your personal data. You can exercise this right immediately by deleting your account within the App (Settings → Delete Account), which permanently removes all your data.</li>
              <li><strong>Right to Restriction</strong> — Request that we restrict processing of your personal data in certain circumstances.</li>
              <li><strong>Right to Data Portability</strong> — Request your data in a structured, commonly used, machine-readable format.</li>
              <li><strong>Right to Object</strong> — Object to processing carried out on the basis of legitimate interests.</li>
              <li><strong>Right to Withdraw Consent</strong> — Where processing is based on your consent, withdraw it at any time without affecting the lawfulness of prior processing.</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a> or use the in-App account deletion function. We will respond within one calendar month of receiving your request. We may ask you to verify your identity before acting on a request.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Supervisory Authority</h2>
            <p>If you are located in the United Kingdom, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):</p>
            <div className={styles.infoBlock}>
              <p>Website: ico.org.uk</p>
              <p>Telephone: 0303 123 1113</p>
            </div>
            <p>If you are located in the European Union, you may contact the data protection supervisory authority in your member state of residence.</p>
          </section>

          <section className={styles.section}>
            <h2>13. Children's Privacy</h2>
            <p>The App is not directed at persons under the age of 16. We do not knowingly collect personal data from anyone under 16. If we become aware that personal data has been collected from a person under 16, we will delete that data and close the account promptly. If you believe we may have inadvertently collected such data, please contact us immediately at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, the App's functionality, or applicable law. We will notify you of material changes via the App or by email. The "Last updated" date at the top of this Policy indicates when it was most recently revised. Continued use of the App after changes are posted constitutes acceptance of the updated Policy.</p>
          </section>

          <section className={styles.section}>
            <h2>15. Contact</h2>
            <p>For any questions, concerns, or requests regarding this Privacy Policy or your personal data:</p>
            <div className={styles.infoBlock}>
              <p>527Studios Limited</p>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
              <p>Website: https://www.527studios.co.uk/</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

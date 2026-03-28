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
          <p className={styles.lastUpdated}>Last updated: 28 March 2026</p>
        </div>

        <div className={styles.doc}>

          <section className={styles.section}>
            <h2>1. About This Policy</h2>
            <p>527Studios Limited ("527Studios", "we", "us", "our"), a company incorporated in England and Wales (company registration number 17067398), operates the Hearth mobile application (the "App"). This Privacy Policy is a transparency notice. It explains what personal data we collect about you, why we collect it, the lawful basis on which we process it, who we share it with, how long we keep it, and what rights you have in relation to it.</p>
            <p>We process personal data in accordance with the UK General Data Protection Regulation ("UK GDPR") and the Data Protection Act 2018. Where users are located in the European Union, we apply the EU General Data Protection Regulation ("EU GDPR") to the extent applicable.</p>
            <p>For any questions about this Policy, contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Data Controller</h2>
            <p>The data controller responsible for your personal data is:</p>
            <div className={styles.infoBlock}>
              <p>527Studios Limited</p>
              <p>Company number: 17067398</p>
              <p>Registered office: Unit A, 82 James Carter Road, Mildenhall, IP28 7DE, United Kingdom</p>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
              <p>Website: https://www.527studios.co.uk/</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Personal Data We Collect and Our Lawful Basis</h2>

            <h3>3.1 Account Data</h3>
            <p><strong>What we collect:</strong> Your email address; a securely hashed credential (email/password sign-in); or an identity token and, subject to your Apple privacy settings, your name and email address (Sign in with Apple). We also store authentication tokens and session identifiers required to keep you signed in.</p>
            <p><strong>Source:</strong> Provided directly by you at registration.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract — this data is necessary to create and maintain your account and provide access to the App.</p>

            <h3>3.2 Profile Data</h3>
            <p><strong>What we collect:</strong> Your chosen username (if set) and avatar selection (if set). Your username and avatar are visible to other registered users if you publish content to the Social Feed.</p>
            <p><strong>Source:</strong> Provided directly by you.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract.</p>

            <h3>3.3 Recipe Data</h3>
            <p><strong>What we collect:</strong> Recipes you save, including: title, ingredients, steps, cooking time, difficulty, estimated macronutrient and calorie information, personal notes, star ratings, cook counts, and display preferences (emoji).</p>
            <p><strong>Source:</strong> Provided directly by you, or generated via AI extraction at your request.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract.</p>

            <h3>3.4 Collection and Organisation Data</h3>
            <p><strong>What we collect:</strong> The recipe collections you create and the recipe assignments within them.</p>
            <p><strong>Source:</strong> Provided directly by you.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract.</p>

            <h3>3.5 Meal Plan Data</h3>
            <p><strong>What we collect:</strong> Your weekly meal plan, mapping saved recipes to specific days and meal slots across multiple weeks.</p>
            <p><strong>Source:</strong> Provided directly by you.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract.</p>

            <h3>3.6 Recent Scan History</h3>
            <p><strong>What we collect:</strong> The last 6 recipes you have extracted via the scan feature (from a URL or an image), including the extracted recipe data and a timestamp. Entries beyond this limit are deleted automatically.</p>
            <p><strong>Source:</strong> Generated by your use of the scan feature.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract.</p>

            <h3>3.7 Social and Interaction Data</h3>
            <p><strong>What we collect:</strong> The publication status of your recipes (whether and when you chose to post them to the Social Feed), votes you cast on other users' recipes, your friend connections, and your accumulated ranking points. Your posted recipes, username, and avatar are visible to other registered users of the App.</p>
            <p><strong>Source:</strong> Generated by your use of the social features.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract, and our legitimate interests in operating community features, preventing abuse, and maintaining the integrity of the Social Feed.</p>

            <h3>3.8 Usage Metadata</h3>
            <p><strong>What we collect:</strong> Timestamps associated with recipe saves, scans, and publications; the source type of each extraction (video URL or image).</p>
            <p><strong>Source:</strong> Generated automatically by your use of the App.</p>
            <p><strong>How used:</strong> Solely to operate and maintain the App. Not used for advertising, profiling, or any purpose beyond service operation.</p>
            <p className={styles.legalBasis}>Lawful basis: Our legitimate interests in operating and maintaining the App.</p>

            <h3>3.9 Subscription Status</h3>
            <p><strong>What we collect:</strong> Confirmation of whether your subscription is active, managed by RevenueCat on our behalf. We do not receive, store, or process your payment card details; these are handled exclusively by Apple.</p>
            <p><strong>Source:</strong> Received from RevenueCat following an App Store transaction.</p>
            <p className={styles.legalBasis}>Lawful basis: Performance of a contract.</p>

            <h3>3.10 Device Identifier (Pre-registration / Onboarding Only)</h3>
            <p><strong>What we collect:</strong> A randomly generated device identifier, created and stored locally on your device before you create an account. Used solely to enforce rate limits on recipe extraction during onboarding.</p>
            <p><strong>Source:</strong> Generated automatically on your device at first launch.</p>
            <p className={styles.legalBasis}>Lawful basis: Our legitimate interests in preventing service misuse and managing operating costs.</p>

            <h3>3.11 IP Address (Rate Limiting Only)</h3>
            <p><strong>What we collect:</strong> Your IP address, processed server-side when you submit a recipe extraction request, solely as a secondary rate-limiting measure. IP addresses are not stored persistently and are not linked to your account profile.</p>
            <p><strong>Source:</strong> Transmitted automatically as part of network requests.</p>
            <p className={styles.legalBasis}>Lawful basis: Our legitimate interests in preventing service misuse and managing operating costs.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Data We Do Not Collect</h2>
            <p>At the time of writing, we do not collect or process:</p>
            <ul>
              <li>Payment card or banking details (handled exclusively by Apple)</li>
              <li>Precise or approximate location data</li>
              <li>Device advertising identifiers (IDFA) or cross-app behavioural tracking data</li>
              <li>Contacts, calendar, microphone, or health and fitness data</li>
              <li>Analytics or crash-reporting data — no analytics or crash-reporting SDK is incorporated in the App for that purpose</li>
            </ul>
            <p>This section reflects the current state of the App. It will be updated before any new SDK or data collection capability is introduced.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Under-18s</h2>
            <p>The App is not directed at persons under the age of 18. We do not knowingly collect personal data from anyone under 18. If we become aware that personal data has been collected from a person under 18, we will suspend the account and delete or anonymise the associated data within a reasonable period, subject to any retention required by law. If you are a parent or guardian and believe your child has used the App, please contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>6. Cookies and Tracking</h2>
            <p>The App is a native iOS application and does not use cookies. We do not use web beacons, pixel trackers, or any cross-site or cross-app tracking technologies. No advertising identifiers are collected or used.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Device Permissions</h2>
            <p><strong>7.1 Camera</strong> — requested only when you choose to scan a recipe by taking a photograph. The image is transmitted securely to our servers for AI extraction and is not retained by us after the extraction response is returned.</p>
            <p><strong>7.2 Photo Library</strong> — requested only when you choose to select an existing image from your gallery. The image is handled in the same manner as section 7.1.</p>
            <p>Both permissions are requested at the point of use, are never accessed in the background, and can be revoked at any time in iOS Settings → Privacy &amp; Security → Camera or Photos. Revoking a permission only prevents that specific scan method from being used; all other App functionality is unaffected.</p>
          </section>

          <section className={styles.section}>
            <h2>8. How We Use Your Data</h2>
            <p>We use your personal data exclusively to:</p>
            <ul>
              <li>Create, authenticate, and maintain your account</li>
              <li>Synchronise your recipes, collections, and meal plan across sessions</li>
              <li>Process recipe extraction requests via AI</li>
              <li>Display your published recipes and profile to other registered users via the Social Feed</li>
              <li>Calculate and display ranking points and trending content</li>
              <li>Verify and manage your subscription entitlement</li>
              <li>Communicate with you regarding material changes to the App or this Policy</li>
              <li>Investigate and respond to support requests, complaints, and content reports</li>
            </ul>
            <p>We do not sell, rent, trade, or otherwise disclose your personal data to any third party for their own marketing, advertising, or commercial purposes.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Third-Party Data Processors and Controllers</h2>
            <p>We share personal data only with the following service providers. Where they act as processors, they do so on our behalf under appropriate data processing terms, processing data only as instructed by us.</p>

            <h3>9.1 Supabase (Supabase Inc.)</h3>
            <p><strong>Role:</strong> Data Processor</p>
            <p><strong>Purpose:</strong> Cloud database hosting, user authentication, and server-side function execution.</p>
            <p><strong>Data shared:</strong> Account data, profile data, recipes, collections, meal plans, recent scan records, social interaction data, and ranking points.</p>
            <p><strong>Location:</strong> Core user data is primarily stored within the EEA, in Supabase's West EU (Ireland) data centre. Where personal data is transferred outside the UK or EEA, we rely on appropriate transfer safeguards as required by applicable law.</p>
            <p><strong>Privacy policy:</strong> supabase.com/privacy</p>

            <h3>9.2 OpenAI (OpenAI, LLC)</h3>
            <p><strong>Role:</strong> Data Processor</p>
            <p><strong>Purpose:</strong> Server-side AI recipe extraction.</p>
            <p><strong>Data shared:</strong> When you scan a video URL — the video platform name, title, caption, and a thumbnail image fetched by our server. When you scan a photograph — a resized copy of the image you submit (up to 1.5 MB). This data is transmitted transiently and is not retained by us after the extraction response is received. Under OpenAI's standard API terms, submitted data is not used for model training and is retained by OpenAI for up to 30 days for abuse monitoring purposes before deletion.</p>
            <p><strong>Location:</strong> United States. When you use the scan feature, relevant image or video metadata is transferred to OpenAI in the United States for recipe extraction. Where required, we put appropriate safeguards in place for that transfer.</p>
            <p><strong>Privacy policy:</strong> openai.com/policies/privacy-policy</p>

            <h3>9.3 RevenueCat (RevenueCat, Inc.)</h3>
            <p><strong>Role:</strong> Data Processor</p>
            <p><strong>Purpose:</strong> Subscription entitlement management and verification.</p>
            <p><strong>Data shared:</strong> An anonymised user identifier linking your App Store subscription to your App account. RevenueCat does not receive your recipe data, meal plans, email address, or any other personal data beyond this identifier.</p>
            <p><strong>Location:</strong> United States. Where personal data is transferred outside the UK or EEA, we rely on appropriate transfer safeguards as required by applicable law.</p>
            <p><strong>Privacy policy:</strong> revenuecat.com/privacy</p>

            <h3>9.4 Apple Inc.</h3>
            <p><strong>Role:</strong> Independent Data Controller (for App Store distribution, subscription billing, and Sign in with Apple)</p>
            <p><strong>Purpose:</strong> App Store distribution, subscription billing, and (where you choose it) Sign in with Apple authentication.</p>
            <p><strong>Data shared:</strong> Apple independently processes all App Store transactions. If you use Sign in with Apple, Apple provides us with a secure identity token and, subject to your privacy settings, your name and email address. We do not transmit personal data to Apple beyond what is inherent in app distribution and in-app purchasing.</p>
            <p><strong>Privacy policy:</strong> apple.com/legal/privacy/</p>
          </section>

          <section className={styles.section}>
            <h2>10. International Data Transfers</h2>
            <p><strong>10.1</strong> Core user data is primarily stored within the EEA, in Supabase's West EU (Ireland) data centre. Where personal data is transferred outside the UK or EEA, we rely on appropriate transfer safeguards as required by applicable law.</p>
            <p><strong>10.2</strong> When you use the scan feature, relevant image or video metadata is transferred to OpenAI in the United States for recipe extraction. Where required, we put appropriate safeguards in place for that transfer.</p>
            <p><strong>10.3</strong> An anonymised user identifier is transferred to RevenueCat in the United States for subscription verification. Where required, we put appropriate safeguards in place for that transfer.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Data Retention</h2>
            <p><strong>11.1</strong> Your personal data is retained for as long as your account remains active.</p>
            <p><strong>11.2</strong> Recent scan history is capped at 6 entries per user. Older entries are deleted automatically when new scans exceed this limit.</p>
            <p><strong>11.3</strong> When you delete your account (Settings → Delete Account), your account and all associated personal data — including your recipes, collections, meal plans, scan history, social profile, vote history, friend connections, and files stored on our servers — will be deleted or anonymised within a reasonable period, subject to any retention required by law. This action cannot be undone.</p>
            <p><strong>11.4</strong> Aggregated or fully anonymised data that cannot reasonably be used to identify you — for example, ranking points credited to other users as a result of their interactions with your content — may be retained indefinitely, as it does not constitute personal data.</p>
            <p><strong>11.5</strong> Where we are required by law to retain certain data for a specified period, we will retain only that data, for only that period, in compliance with the relevant legal obligation.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Data Security</h2>
            <p><strong>12.1</strong> All data is transmitted using HTTPS/TLS encryption. Passwords are never stored in plain text; authentication is managed using industry-standard cryptographic methods. Session tokens are stored securely on your device using platform-provided secure storage mechanisms.</p>
            <p><strong>12.2</strong> We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction, disclosure, or alteration.</p>
            <p><strong>12.3</strong> No method of electronic transmission or storage is completely secure. While we take all reasonable precautions, we cannot guarantee absolute security.</p>
            <p><strong>12.4</strong> In the event of a personal data breach likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of it, and will notify affected individuals without undue delay, as required by applicable law.</p>
          </section>

          <section className={styles.section}>
            <h2>13. Your Rights Under UK GDPR</h2>
            <p>You have the following rights in respect of your personal data. These rights are subject to certain conditions and exemptions under applicable law.</p>
            <ul>
              <li><strong>Right of Access</strong> — You may request a copy of the personal data we hold about you (a "Subject Access Request").</li>
              <li><strong>Right to Rectification</strong> — You may request correction of personal data that is inaccurate or incomplete.</li>
              <li><strong>Right to Erasure</strong> — You may request deletion of your personal data. You can exercise this right directly by deleting your account within the App (Settings → Delete Account). Your personal data will be deleted or anonymised within a reasonable period, subject to any retention required by law.</li>
              <li><strong>Right to Restriction of Processing</strong> — You may request that we restrict our processing of your personal data in certain circumstances, for example while a dispute about accuracy is resolved.</li>
              <li><strong>Right to Data Portability</strong> — You may request that we provide personal data you have given us in a structured, commonly used, machine-readable format, where technically feasible and where processing is carried out by automated means.</li>
              <li><strong>Right to Object</strong> — You may object to processing based on our legitimate interests. We will cease such processing unless we can demonstrate compelling legitimate grounds that override your interests, or the processing is necessary for the establishment, exercise, or defence of legal claims.</li>
              <li><strong>Right to Withdraw Consent</strong> — Where we rely on your consent for any processing, you may withdraw it at any time. Withdrawal does not affect the lawfulness of any processing carried out before that withdrawal.</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>. We will respond within one calendar month of receipt. We may ask you to verify your identity before acting on your request.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Supervisory Authority</h2>
            <p><strong>14.1</strong> If you are located in the United Kingdom, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):</p>
            <div className={styles.infoBlock}>
              <p>Website: ico.org.uk</p>
              <p>Telephone: 0303 123 1113</p>
              <p>Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
            </div>
            <p><strong>14.2</strong> If you are located in the European Union, you may lodge a complaint with the supervisory authority in your member state of habitual residence, place of work, or place of the alleged infringement.</p>
            <p><strong>14.3</strong> We would always welcome the opportunity to address your concerns before you contact a supervisory authority and encourage you to reach out to us first.</p>
          </section>

          <section className={styles.section}>
            <h2>15. Changes to This Policy</h2>
            <p><strong>15.1</strong> We may update this Privacy Policy from time to time to reflect changes in our data practices, the App's functionality, or applicable law. The "Last updated" date at the top of this Policy reflects the most recent revision.</p>
            <p><strong>15.2</strong> Where a change is material, we will notify you via the App before it takes effect.</p>
          </section>

          <section className={styles.section}>
            <h2>16. Contact</h2>
            <p>For any questions, concerns, data subject requests, or complaints regarding this Privacy Policy or your personal data:</p>
            <div className={styles.infoBlock}>
              <p>527Studios Limited</p>
              <p>Company number: 17067398</p>
              <p>Registered office: Unit A, 82 James Carter Road, Mildenhall, IP28 7DE, United Kingdom</p>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
              <p>Website: https://www.527studios.co.uk/</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

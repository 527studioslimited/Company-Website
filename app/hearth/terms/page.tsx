import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms & Conditions | Hearth — 527Studios Limited",
  description: "Hearth Terms & Conditions",
};

export default function TermsAndConditions() {
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
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
          <p className={styles.lastUpdated}>Last updated: 18 March 2026</p>
        </div>

        <div className={styles.doc}>

          <section className={styles.section}>
            <h2>1. Introduction and Acceptance</h2>
            <p>These Terms and Conditions ("Terms") govern your access to and use of Hearth (the "App"), developed and operated by 527Studios Limited, a company incorporated in England and Wales ("527Studios", "we", "us", "our"). Further information about 527Studios is available at https://www.527studios.co.uk/.</p>
            <p>By downloading, installing, or using the App, you confirm that you are at least 16 years of age and that you agree to be bound by these Terms in full. If you do not agree to these Terms, you must not download, install, or use the App.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Eligibility</h2>
            <p>The App is intended for users aged 16 and over. By using the App, you represent and warrant that you are at least 16 years old. We do not knowingly permit persons under 16 to create accounts or use the App. If we become aware that a user is under 16, we will terminate their account and delete all associated data without notice.</p>
          </section>

          <section className={styles.section}>
            <h2>3. Account Registration</h2>
            <p><strong>3.1</strong> To use the App you must create an account using a valid email address and password, or via Sign in with Apple.</p>
            <p><strong>3.2</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</p>
            <p><strong>3.3</strong> You must not share your login credentials with any third party or permit any other person to access your account.</p>
            <p><strong>3.4</strong> You agree to notify us immediately at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a> if you become aware of any unauthorised access to or use of your account.</p>
            <p><strong>3.5</strong> You must provide accurate and complete registration information and keep it up to date.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Subscription and Payment</h2>
            <p><strong>4.1</strong> The App is available exclusively on a paid subscription basis. No free plan or trial period is offered.</p>
            <p><strong>4.2</strong> Two subscription plans are available: a monthly plan and an annual plan. All prices are displayed in the App Store at the time of purchase and may vary by region and currency.</p>
            <p><strong>4.3</strong> All subscriptions are processed, billed, and managed by Apple Inc. through the App Store. By purchasing a subscription, you agree to Apple's Media Services Terms and Conditions in addition to these Terms.</p>
            <p><strong>4.4 AUTOMATIC RENEWAL:</strong> All subscriptions auto-renew at the end of each billing period (monthly or annually, as applicable) unless you cancel at least 24 hours before the renewal date. The renewal charge is applied to your Apple ID account within 24 hours before the end of the current period at the same price as your existing plan.</p>
            <p><strong>4.5</strong> You may manage or cancel your subscription at any time via your Apple ID account settings (iOS Settings → [Your Name] → Subscriptions). Cancellation takes effect at the end of the current paid billing period; you will retain full access to the App until that date. We do not issue refunds for unused portions of any subscription period.</p>
            <p><strong>4.6</strong> All refund requests must be submitted directly to Apple via reportaproblem.apple.com. 527Studios has no authority over and accepts no responsibility for Apple's refund decisions. Apple's refund policy governs entirely.</p>
            <p><strong>4.7</strong> 527Studios reserves the right to change subscription pricing. Where permitted by applicable law, we will provide reasonable advance notice of any price change. Your continued use of the App following a price change constitutes acceptance of the revised pricing.</p>
          </section>

          <section className={styles.section}>
            <h2>5. What the App Does</h2>
            <p><strong>5.1</strong> Hearth allows you to:</p>
            <ul>
              <li>Extract recipe information from cooking videos (TikTok, Instagram, Pinterest URLs) and photographs using AI</li>
              <li>Save, organise, and edit recipes in a personal digital cookbook</li>
              <li>Create and manage recipe collections</li>
              <li>Plan meals using a weekly planner</li>
              <li>Track cook counts, personal ratings, and recipe notes</li>
            </ul>
            <p><strong>5.2</strong> The App is a personal productivity tool for recipe management and meal planning. It is not intended to provide medical, nutritional, dietary, or health advice of any kind. Nothing in the App should be construed as such advice.</p>
          </section>

          <section className={styles.section}>
            <h2>6. AI-Powered Recipe Extraction</h2>
            <p><strong>6.1</strong> The App uses artificial intelligence services provided by OpenAI to extract recipe information from images and video URLs you submit. All AI processing is performed server-side. Images and URL metadata are transmitted transiently and are not stored by us after extraction is complete.</p>
            <p><strong>6.2</strong> AI-extracted content is a best-effort interpretation based on available information and may contain errors, omissions, or inaccuracies, including but not limited to incorrect ingredients, quantities, allergens, cooking temperatures, or preparation instructions.</p>
            <p><strong>6.3 YOU ARE SOLELY RESPONSIBLE FOR VERIFYING ALL EXTRACTED RECIPE CONTENT — INCLUDING INGREDIENTS, QUANTITIES, ALLERGENS, AND COOKING INSTRUCTIONS — BEFORE PREPARING OR CONSUMING ANY DISH.</strong> 527Studios expressly disclaims all liability for any harm, injury, allergic reaction, illness, or other loss arising from reliance on AI-extracted recipe content.</p>
            <p><strong>6.4</strong> The App does not reproduce, download, or retain video content from third-party platforms. Thumbnail images from social media platforms are accessed transiently solely to assist AI recipe extraction and are not stored.</p>
          </section>

          <section className={styles.section}>
            <h2>7. User Content</h2>
            <p><strong>7.1</strong> You retain full ownership of all content you create within the App, including recipes you save, notes, collections, and meal plans ("User Content").</p>
            <p><strong>7.2</strong> By using the App, you grant 527Studios a limited, non-exclusive, royalty-free, worldwide licence to store, process, and transmit your User Content solely to the extent necessary to provide the App's functionality. This licence terminates automatically when you delete the relevant content or your account.</p>
            <p><strong>7.3</strong> You represent and warrant that: (a) you own or have the necessary rights to your User Content; (b) your User Content does not infringe any third-party intellectual property, privacy, or other rights; and (c) your User Content does not contain unlawful, harmful, or offensive material.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Third-Party Content and Intellectual Property</h2>
            <p><strong>8.1</strong> When you extract a recipe from a TikTok, Instagram, Pinterest, or other third-party URL, the underlying recipe content may be owned by that platform, its creators, or other third parties. 527Studios does not claim ownership of any such content.</p>
            <p><strong>8.2</strong> You are solely responsible for complying with the terms of service and intellectual property policies of any third-party platform from which you extract content.</p>
            <p><strong>8.3</strong> The App, its design, source code, graphics, trademarks, and all related intellectual property are owned by or licensed to 527Studios Limited and protected by applicable intellectual property laws. You may not copy, modify, reverse-engineer, decompile, disassemble, or create derivative works from any part of the App.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Acceptable Use</h2>
            <p><strong>9.1</strong> You agree not to use the App to:</p>
            <ul>
              <li>Violate any applicable law or regulation</li>
              <li>Infringe the intellectual property or privacy rights of any person</li>
              <li>Upload, submit, or generate harmful, unlawful, defamatory, or obscene content</li>
              <li>Attempt to gain unauthorised access to the App or its underlying infrastructure</li>
              <li>Reverse-engineer, tamper with, or interfere with the operation of the App</li>
              <li>Use automated means to access or interact with the App</li>
              <li>Circumvent or attempt to circumvent the subscription payment mechanism</li>
              <li>Use the App for any commercial purpose without our prior written consent</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. Disclaimers</h2>
            <p><strong>10.1</strong> THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT.</p>
            <p><strong>10.2</strong> We do not warrant that the App will be available at all times, uninterrupted, or error-free. We do not warrant the accuracy, completeness, or suitability of any AI-extracted recipe content.</p>
            <p><strong>10.3</strong> Nothing in these Terms excludes or limits any statutory warranty or consumer right that cannot lawfully be excluded, including rights under the Consumer Rights Act 2015 where applicable.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Limitation of Liability</h2>
            <p><strong>11.1</strong> To the maximum extent permitted by applicable law, 527Studios Limited's total aggregate liability to you arising out of or in connection with these Terms or the App shall not exceed the total subscription fees paid by you in the 12 months immediately preceding the event giving rise to the claim.</p>
            <p><strong>11.2</strong> In no event shall 527Studios be liable for: (a) any indirect, incidental, special, punitive, or consequential loss or damage; (b) loss of profits, revenue, or anticipated savings; (c) loss or corruption of data; (d) any personal injury, illness, or allergic reaction resulting from preparing or consuming a recipe; or (e) any loss arising from reliance on AI-extracted content — whether or not 527Studios had been advised of the possibility of such loss.</p>
            <p><strong>11.3</strong> Nothing in these Terms limits or excludes liability for: (a) death or personal injury caused by 527Studios' negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be limited or excluded by applicable law.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless 527Studios Limited and its directors, officers, and employees from and against any claims, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from: (a) your use of the App in violation of these Terms; (b) your User Content; or (c) your infringement of any third-party rights.</p>
          </section>

          <section className={styles.section}>
            <h2>13. Termination</h2>
            <p><strong>13.1</strong> We may suspend or terminate your account and access to the App at any time if we have reasonable grounds to believe you have materially breached these Terms, without liability to refund any prepaid subscription fees.</p>
            <p><strong>13.2</strong> You may terminate your account at any time by deleting it within the App (Settings → Delete Account). Account deletion permanently removes all associated data and cannot be undone.</p>
            <p><strong>13.3</strong> Upon termination for any reason, your right to access and use the App ceases immediately. Sections 7–12 and 16–19 shall survive termination.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Apple App Store — Additional Terms</h2>
            <p><strong>14.1</strong> The App is distributed solely via the Apple App Store. These Terms are an agreement between you and 527Studios Limited only. Apple Inc. is not a party to these Terms and is not responsible for the App or its content.</p>
            <p><strong>14.2</strong> Apple has no obligation to provide any maintenance, support services, or warranty in respect of the App.</p>
            <p><strong>14.3</strong> Apple and its subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance, Apple has the right to enforce these Terms against you as a third-party beneficiary.</p>
            <p><strong>14.4</strong> In the event of any conflict between these Terms and the Apple Media Services Terms and Conditions, the Apple Media Services Terms and Conditions shall prevail solely in respect of Apple's role as App Store operator.</p>
          </section>

          <section className={styles.section}>
            <h2>15. Changes to These Terms</h2>
            <p>We may update these Terms at any time. Material changes will be communicated to you through the App or by email. The "Last updated" date at the top reflects the most recent revision. Continued use of the App after updated Terms are posted constitutes your acceptance of those changes. If you do not accept revised Terms, you must stop using the App and cancel your subscription.</p>
          </section>

          <section className={styles.section}>
            <h2>16. Governing Law and Jurisdiction</h2>
            <p><strong>16.1</strong> These Terms are governed by and construed in accordance with the laws of England and Wales.</p>
            <p><strong>16.2</strong> Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales, except where applicable mandatory consumer law in your country of residence grants you the right to bring proceedings in your local courts.</p>
          </section>

          <section className={styles.section}>
            <h2>17. Severability</h2>
            <p>If any provision of these Terms is held invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, and all remaining provisions shall continue in full force and effect.</p>
          </section>

          <section className={styles.section}>
            <h2>18. Entire Agreement</h2>
            <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and 527Studios Limited with respect to the App and supersede all prior agreements, representations, and understandings relating to the App.</p>
          </section>

          <section className={styles.section}>
            <h2>19. Contact</h2>
            <p>For questions or complaints regarding these Terms:</p>
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

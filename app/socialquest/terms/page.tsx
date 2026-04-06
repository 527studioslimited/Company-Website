import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms & Conditions | SocialQuest — 527Studios Limited",
  description: "SocialQuest Terms & Conditions",
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
          <p className={styles.appLabel}>SocialQuest Application</p>
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
          <p className={styles.lastUpdated}>Last updated: 5 April 2026</p>
        </div>

        <div className={styles.doc}>

          <p className={styles.intro}>These Terms and Conditions ("Terms") govern your access to and use of the SocialQuest mobile application ("App") provided by 527 Studios Limited ("we", "us", "our"). Please read them carefully before downloading or using the App. By creating an account, you enter into a legally binding agreement with us on these Terms. If you do not agree, do not use the App.</p>

          <section className={styles.section}>
            <h2>1. About Us</h2>
            <p><strong>1.1</strong> The App is operated by 527 Studios Limited, a company incorporated in England and Wales, company registration number 17067398.</p>
            <p><strong>1.2</strong> Registered office: Unit A, 82 James Carter Road, Mildenhall, IP28 7DE, United Kingdom.</p>
            <p><strong>1.3</strong> Contact: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
          </section>

          <section className={styles.section}>
            <h2>2. Definitions</h2>
            <p>In these Terms, the following expressions have the following meanings:</p>
            <ul>
              <li><strong>"App"</strong> — the SocialQuest mobile application available on the Apple App Store.</li>
              <li><strong>"Apple"</strong> — Apple Inc.</li>
              <li><strong>"App Store"</strong> — the Apple App Store operated by Apple.</li>
              <li><strong>"Content"</strong> — all text, images, data, software, and other material within the App.</li>
              <li><strong>"Quest"</strong> — a social interaction challenge within the App.</li>
              <li><strong>"Services"</strong> — the quest-based personal development features, subscription content, and related functionality made available through the App.</li>
              <li><strong>"Subscription"</strong> — a paid SocialQuest Pro subscription purchased through the App Store.</li>
              <li><strong>"XP"</strong> — experience points awarded within the App's gamification system.</li>
              <li><strong>"You" / "User"</strong> — any individual who downloads, accesses, or uses the App.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Scope and Eligibility</h2>
            <p><strong>3.1</strong> These Terms apply to all users of the App globally.</p>
            <p><strong>3.2</strong> To use the App you must: (a) be at least 16 years of age; (b) have the legal capacity to enter into a binding contract under the laws of your country of residence; and (c) agree to these Terms in full.</p>
            <p><strong>3.3</strong> Where applicable law in your country of residence requires a higher age of consent or legal capacity to enter into subscription contracts, you must meet that higher requirement.</p>
            <p><strong>3.4</strong> By creating an account, you confirm that you meet the eligibility requirements in clause 3.2.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Age Restriction and Under-Age Users</h2>
            <p><strong>4.1</strong> The App is intended for users aged 16 and over. We do not knowingly permit account creation by, and we do not knowingly collect personal data from, anyone under the age of 16.</p>
            <p><strong>4.2</strong> If we become aware that an account has been created by, or that we hold personal data of, a person under the age of 16, we will take steps to delete that account and associated data without undue delay.</p>
            <p><strong>4.3</strong> If you are a parent or guardian and believe that a child under 16 has created an account, please contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a> so that we may investigate and, where confirmed, delete the account and associated data.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Account Registration</h2>
            <p><strong>5.1</strong> To access the App's features you must register for an account using either: (a) a valid email address and password; or (b) Apple Sign-In.</p>
            <p><strong>5.2</strong> You agree to provide accurate, current, and complete information when registering and to keep your account information up to date.</p>
            <p><strong>5.3</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us promptly at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a> if you become aware of any unauthorised access to or use of your account.</p>
            <p><strong>5.4</strong> We reserve the right to suspend or terminate accounts that contain inaccurate information or are used in breach of these Terms, in accordance with clause 14.</p>
          </section>

          <section className={styles.section}>
            <h2>6. Description of the App and Its Features</h2>
            <p><strong>6.1</strong> SocialQuest is a gamified personal development application that guides users through a progressive series of social interaction Quests designed to help build confidence and social skills. The App uses retro 8-bit RPG-style mechanics — including XP, levels, and ranks — to track and reward progress.</p>
            <p><strong>6.2</strong> Core features include: (a) a progressive Quest system with multiple difficulty tiers per Quest; (b) an XP-based levelling and ranking system (Wanderer through to Legend); (c) challenge categorisation across five interaction types; (d) quest progress tracking with time-spent metrics stored locally on your device; and (e) account management including the ability to delete your account.</p>
            <p><strong>6.3</strong> The App is a practical self-improvement tool. It does not constitute therapy, counselling, psychological treatment, or any other form of professional mental health or medical advice. You should not use the App as a substitute for professional advice. If you are experiencing significant mental health difficulties, please consult a qualified professional.</p>
            <p><strong>6.4</strong> Access to the App's core features requires an active Subscription (see clause 7).</p>
            <p><strong>6.5</strong> We may update or modify the features of the App from time to time in accordance with clause 13.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Subscription, Billing, and Automatic Renewal</h2>
            <p><strong>7.1 Subscription requirement.</strong> Access to the App's core features is contingent on holding an active SocialQuest Pro subscription. After completing onboarding, you will be presented with the option to subscribe before accessing the main App content.</p>
            <p><strong>7.2 Subscription tiers.</strong> Two tiers are currently available: (a) a Monthly Subscription, billed monthly on a recurring basis; and (b) an Annual Subscription, billed annually on a recurring basis.</p>
            <p><strong>7.3 Pricing.</strong> Current subscription prices are displayed in your local currency at the time of purchase within the App Store. All prices are inclusive of applicable taxes where required by law. Prices are subject to change in accordance with clause 7.7.</p>
            <p><strong>7.4 Billing.</strong> All billing is processed by Apple through Apple's in-app purchase system. Your payment method on file with Apple will be charged at the time of purchase and at the start of each renewal period. We do not process payments directly and do not have access to your payment information.</p>
            <p><strong>7.5 Automatic renewal.</strong> Subscriptions renew automatically at the end of each billing period unless cancelled. Renewal charges are applied to your Apple Account at the price displayed at the time of renewal. Apple will notify you prior to any price change taking effect on your renewal, in accordance with Apple's then-current policies.</p>
            <p><strong>7.6 Cancellation.</strong> You may cancel your Subscription at any time through your Apple Account settings. Cancellation takes effect at the end of the current billing period; you retain access to the App's features until that date. Cancelling your Subscription does not automatically delete your account.</p>
            <p><strong>7.7 Price changes.</strong> We reserve the right to change subscription pricing. Where a price increase applies to your existing Subscription, Apple will notify you in advance and seek your consent before the new price takes effect on renewal. Where required by applicable law, we will provide advance notice of material pricing changes affecting existing subscribers.</p>
            <p><strong>7.8 Free trials.</strong> No free trial is currently offered.</p>
            <p><strong>7.9 Restore purchases.</strong> If you have previously purchased a Subscription and wish to restore it on a new device or after reinstallation, you may use the restore purchases function available within the App.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Refund Policy</h2>
            <p><strong>8.1</strong> All Subscription purchases are processed and managed by Apple through its in-app purchase system. Refund requests for Subscription purchases must be directed to Apple and are subject to Apple's then-current refund policy, available via your Apple Account.</p>
            <p><strong>8.2</strong> Nothing in this clause affects any statutory rights you may have under the mandatory consumer protection laws of your country of residence, including: rights under the Consumer Rights Act 2015 for users in the United Kingdom; consumer guarantee rights for users in Australia under the Australian Consumer Law; and equivalent statutory rights in other jurisdictions.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Statutory Rights Preservation</h2>
            <p>Nothing in these Terms is intended to, or shall, limit or exclude any rights you have as a consumer under the mandatory laws of your country of residence that cannot lawfully be limited or excluded by contract. This includes, without limitation:</p>
            <ul>
              <li>(a) rights under the Consumer Rights Act 2015 for users in the United Kingdom;</li>
              <li>(b) statutory warranty rights for users in the European Union under the EU Consumer Rights Directive and applicable national consumer laws;</li>
              <li>(c) consumer guarantee rights for users in Australia under the Australian Consumer Law (Schedule 2, Competition and Consumer Act 2010); and</li>
              <li>(d) rights under applicable consumer protection legislation for users in other jurisdictions.</li>
            </ul>
            <p>Where any provision of these Terms conflicts with a right you hold under such mandatory laws, the mandatory law prevails to the extent of that conflict.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Intellectual Property</h2>
            <p><strong>10.1</strong> All intellectual property rights in the App — including Quest content, visual design, software, text, graphics, sounds, and underlying code — are owned by or licensed to 527 Studios Limited. All rights are reserved.</p>
            <p><strong>10.2</strong> Subject to your compliance with these Terms and the maintenance of an active Subscription, we grant you a limited, non-exclusive, non-transferable, revocable licence to use the App for your personal, non-commercial purposes.</p>
            <p><strong>10.3</strong> You must not: copy, reproduce, distribute, modify, create derivative works from, publicly display, or otherwise exploit the App or any Content without our prior written consent; reverse-engineer, decompile, or disassemble any part of the App; or use the App or its Content for any commercial purpose.</p>
            <p><strong>10.4</strong> Any feedback, suggestions, or ideas you submit to us may be used by us without obligation or compensation to you.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Acceptable Use</h2>
            <p><strong>11.1</strong> You agree to use the App only for lawful purposes and in accordance with these Terms.</p>
            <p><strong>11.2</strong> You must not:</p>
            <ul>
              <li>(a) use the App in any way that violates applicable local, national, or international law or regulation;</li>
              <li>(b) attempt to gain unauthorised access to any part of the App, its servers, or connected systems;</li>
              <li>(c) introduce or transmit viruses, trojans, worms, or other malicious or harmful code;</li>
              <li>(d) use automated tools, scripts, or bots to access or interact with the App;</li>
              <li>(e) impersonate any person or misrepresent your identity;</li>
              <li>(f) interfere with or disrupt the integrity or performance of the App; or</li>
              <li>(g) attempt to circumvent any security or access-control mechanism, including the Subscription paywall.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>12. Third-Party Services and Platform Dependencies</h2>
            <p><strong>12.1</strong> The App depends on third-party services and platforms to function, including Supabase (backend data storage and authentication), RevenueCat (subscription management), and Apple's App Store infrastructure.</p>
            <p><strong>12.2</strong> We are not responsible for the availability, reliability, accuracy, or continued operation of these third-party services. Access to features of the App may be affected if any such service becomes unavailable, changes its terms, or modifies its functionality in a manner beyond our reasonable control.</p>
            <p><strong>12.3</strong> Third-party services are subject to their own terms and privacy policies, details of which are set out in our Privacy Policy.</p>
            <p><strong>12.4</strong> Nothing in this clause limits any rights you may have under the mandatory consumer protection laws of your country of residence where the App itself fails to conform to the requirements of those laws.</p>
          </section>

          <section className={styles.section}>
            <h2>13. App Modification and Suspension</h2>
            <p><strong>13.1</strong> We reserve the right to modify, update, suspend, restrict, or withdraw the App or any feature at any time where reasonably necessary for operational, security, legal, or commercial reasons. Where reasonably practicable, we will provide advance notice of material changes.</p>
            <p><strong>13.2</strong> We may temporarily suspend or restrict access to the App for maintenance, updates, or to address security issues, and will aim to minimise disruption.</p>
            <p><strong>13.3</strong> Where applicable law requires specific notice periods for material changes to a paid service, we will comply with those requirements.</p>
            <p><strong>13.4</strong> If we permanently withdraw the App, we will provide reasonable advance notice through the App or by email to the address registered on your account. Nothing in this clause affects your rights under clause 9.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Termination</h2>
            <p><strong>14.1 Termination by you.</strong> You may terminate your account at any time by using the account deletion function in the App's settings, or by contacting us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>. Deleting your account does not automatically cancel any active Subscription; you must cancel your Subscription separately through your Apple Account settings before deleting your account.</p>
            <p><strong>14.2 Termination by us.</strong> We may suspend or terminate your account if: (a) you materially or persistently breach these Terms; (b) you use the App in a manner that creates legal liability for us or third parties; or (c) we are required to do so by applicable law, court order, or regulatory direction. We will act reasonably when exercising any right to suspend or terminate accounts and, where practicable, will give you prior notice and an opportunity to address the issue.</p>
            <p><strong>14.3 Effect of termination.</strong> On termination of your account: (a) your licence to use the App ceases immediately; (b) we will delete or anonymise your personal data within a reasonable period, subject to any retention required by applicable law and as described in our Privacy Policy; and (c) you will lose access to your progress, levels, and XP.</p>
            <p><strong>14.4 Rights on termination of a paid service.</strong> If your account is terminated by us other than for your breach of these Terms, and you hold an active paid Subscription, we will take reasonable steps to arrange a pro-rata refund of any unused portion of your subscription period through Apple, subject to Apple's policies and applicable law. Nothing in this clause affects your statutory rights.</p>
            <p><strong>14.5 Survival.</strong> The following clauses survive termination of your account or of these Terms for any reason: clause 2 (Definitions), clause 10 (Intellectual Property), clause 11 (Acceptable Use), clause 15 (Indemnity), clause 16 (Limitation of Liability), clause 20 (Governing Law and Jurisdiction), and clause 21 (Severability, Waiver, and Entire Agreement).</p>
          </section>

          <section className={styles.section}>
            <h2>15. Indemnity</h2>
            <p><strong>15.1</strong> You agree to indemnify 527 Studios Limited and its officers, directors, employees, and agents against losses, liabilities, damages, and reasonable legal costs incurred as a direct result of: (a) your material breach of these Terms; (b) your infringement of any third party's intellectual property rights in connection with your use of the App; or (c) your violation of applicable law in connection with your use of the App.</p>
            <p><strong>15.2</strong> This indemnity does not extend to claims arising from our own negligence, default, or breach of applicable law.</p>
            <p><strong>15.3</strong> Note: indemnity clauses of this kind may have limited enforceability against consumers in certain jurisdictions, including under the Consumer Rights Act 2015 (UK), the EU Unfair Terms Directive, and equivalent consumer protection laws in Australia. This clause does not seek to exclude any rights you hold as a consumer under the mandatory laws of your country of residence.</p>
          </section>

          <section className={styles.section}>
            <h2>16. Limitation of Liability</h2>
            <p><strong>16.1 Non-excludable liability.</strong> Nothing in these Terms limits or excludes our liability for: (a) death or personal injury caused by our negligence; (b) fraud or fraudulent misrepresentation; or (c) any liability that cannot lawfully be excluded or limited under governing law or under the mandatory consumer protection laws of your country of residence.</p>
            <p><strong>16.2 Cap on liability.</strong> Subject to clause 16.1, our total aggregate liability to you under or in connection with these Terms — whether arising in contract, tort (including negligence), breach of statutory duty, or otherwise — shall not exceed the greater of: (a) the total Subscription fees paid by you in the twelve months immediately preceding the event giving rise to the claim; or (b) £50 where no fees have been paid.</p>
            <p><strong>16.3 Excluded losses.</strong> Subject to clause 16.1, we shall not be liable to you for any: (a) loss of profits, revenue, or business; (b) loss of data; (c) loss of anticipated savings; (d) loss of goodwill or reputation; or (e) indirect, special, or consequential loss or damage — whether or not foreseeable or we had been advised of the possibility of such loss.</p>
            <p><strong>16.4 App as a self-improvement tool.</strong> The App provides gamified tracking and challenge guidance as a personal development tool. We do not warrant that completing Quests will produce any particular outcome. We are not liable for any decisions you make or actions you take in the real world in connection with using the App. This clause does not affect the carve-out at clause 16.1.</p>
            <p><strong>16.5 Third-party services.</strong> We are not liable for loss or damage arising from your reliance on, or the unavailability of, any third-party service on which the App depends.</p>
            <p><strong>16.6 Jurisdiction note.</strong> Liability caps and exclusions of this kind may not be enforceable against consumers in all jurisdictions. Users in Australia may have rights under the Australian Consumer Law that cannot be excluded or limited, and users in New Zealand may have rights under the Consumer Guarantees Act 1993. Nothing in this clause is intended to exclude rights that cannot lawfully be excluded in your country of residence.</p>
          </section>

          <section className={styles.section}>
            <h2>17. Force Majeure</h2>
            <p>We shall not be liable for any failure or delay in performing our obligations under these Terms where such failure or delay is caused by events or circumstances beyond our reasonable control, including third-party API or infrastructure outages, acts of government, changes in law, telecommunications failures, or other circumstances outside our control. We will take reasonable steps to minimise the impact of such events and resume normal operation as soon as reasonably practicable.</p>
          </section>

          <section className={styles.section}>
            <h2>18. Apple App Store — Additional Terms</h2>
            <p><strong>18.1</strong> These Terms are entered into between you and 527 Studios Limited only. Apple is not a party to these Terms and has no obligation to provide maintenance or support in respect of the App.</p>
            <p><strong>18.2</strong> Apple is a third-party beneficiary of these Terms for the purposes of the App Store's standard licensing terms. Apple has the right to enforce these Terms against you as a third-party beneficiary.</p>
            <p><strong>18.3</strong> Any claims relating to the App — including product liability claims, failure to conform to applicable legal or regulatory requirements, and claims under consumer protection legislation — are the sole responsibility of 527 Studios Limited, not Apple.</p>
            <p><strong>18.4</strong> For support in relation to the App, please contact us at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>. Do not direct App-related support requests to Apple.</p>
          </section>

          <section className={styles.section}>
            <h2>19. Complaints and Dispute Resolution</h2>
            <p><strong>19.1</strong> If you have a complaint or concern about the App or these Terms, we encourage you to contact us in the first instance so that we can attempt to resolve it informally:</p>
            <div className={styles.infoBlock}>
              <p>Email: <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a></p>
              <p>Post: 527 Studios Limited, Unit A, 82 James Carter Road, Mildenhall, IP28 7DE, United Kingdom</p>
            </div>
            <p><strong>19.2</strong> We will acknowledge your complaint within a reasonable time and aim to provide a substantive response within 30 days. Where a complaint is complex or requires further investigation, we will keep you informed of progress.</p>
            <p><strong>19.3 EU alternative dispute resolution.</strong> If you are a consumer in the European Union and we are unable to resolve your complaint to your satisfaction, you may refer the matter to an alternative dispute resolution (ADR) body. The European Commission's Online Dispute Resolution platform is available at ec.europa.eu/consumers/odr.</p>
            <p><strong>19.4 UK consumers.</strong> If you are a consumer in the United Kingdom and we are unable to resolve your complaint, you may seek advice from Citizens Advice (citizensadvice.org.uk) or refer the matter to an appropriate alternative dispute resolution scheme. Nothing in this clause affects your right to bring proceedings before a court of competent jurisdiction.</p>
            <p><strong>19.5</strong> Nothing in this clause limits your right to bring a claim before a court of competent jurisdiction at any time.</p>
          </section>

          <section className={styles.section}>
            <h2>20. Changes to These Terms</h2>
            <p><strong>20.1</strong> We may update these Terms from time to time. Where changes are material, we will notify you in advance through the App or by email to the address registered on your account.</p>
            <p><strong>20.2</strong> Where applicable law requires a specific notice period before material changes to a paid service take effect, we will comply with those requirements.</p>
            <p><strong>20.3</strong> Continued use of the App after the applicable notice period has elapsed constitutes your acceptance of the revised Terms.</p>
            <p><strong>20.4</strong> The date at the top of these Terms will always reflect when they were last updated.</p>
          </section>

          <section className={styles.section}>
            <h2>21. Governing Law and Jurisdiction</h2>
            <p><strong>21.1</strong> These Terms and any dispute or claim arising out of or in connection with them (including non-contractual disputes) are governed by and construed in accordance with the law of England and Wales.</p>
            <p><strong>21.2</strong> Subject to clause 21.3, each party irrevocably submits to the exclusive jurisdiction of the courts of England and Wales to resolve any dispute or claim arising under or in connection with these Terms.</p>
            <p><strong>21.3 Consumer rights preservation.</strong> Nothing in this clause affects your rights as a consumer to rely on the mandatory consumer protection laws of your country of residence. Users in the European Union retain rights under EU consumer law regardless of this governing law clause. Users in the United Kingdom retain rights under the Consumer Rights Act 2015 and related legislation. Users in Australia retain rights under the Australian Consumer Law.</p>
          </section>

          <section className={styles.section}>
            <h2>22. Severability, Waiver, and Entire Agreement</h2>
            <p><strong>22.1 Severability.</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable, it shall be modified to the minimum extent necessary to make it enforceable or, if modification is not possible, severed from the Terms, with the remaining provisions continuing in full force.</p>
            <p><strong>22.2 Waiver.</strong> Our failure to enforce any right or provision on any occasion shall not constitute a waiver of that right or provision on any future occasion.</p>
            <p><strong>22.3 Entire agreement.</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and 527 Studios Limited in relation to the App and supersede all prior agreements and understandings relating to the same subject matter.</p>
          </section>

          <section className={styles.section}>
            <h2>23. Contact Information</h2>
            <p>For questions, support, or complaints relating to the App or these Terms, please contact:</p>
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

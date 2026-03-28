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
          <p className={styles.lastUpdated}>Last updated: 28 March 2026</p>
        </div>

        <div className={styles.doc}>

          <section className={styles.section}>
            <h2>1. Introduction and Acceptance</h2>
            <p>These Terms and Conditions ("Terms") govern your access to and use of Hearth (the "App"), developed and operated by 527Studios Limited, a company incorporated in England and Wales (company registration number 17067398) ("527Studios", "we", "us", "our"). Further information about 527Studios is available at https://www.527studios.co.uk/.</p>
            <p>By downloading, installing, or using the App, you confirm that you are at least 18 years of age and that you agree to be bound by these Terms in full. If you do not agree to these Terms, you must not download, install, or use the App.</p>
            <p>Nothing in these Terms affects your statutory rights as a consumer under applicable law, including your right to receive digital services performed with reasonable care and skill under the Consumer Rights Act 2015.</p>
          </section>

          <section className={styles.section}>
            <h2>2. Eligibility and Age Restriction</h2>
            <p><strong>2.1</strong> The App is intended exclusively for users aged 18 and over. By using the App, you represent and warrant that you are at least 18 years old.</p>
            <p><strong>2.2</strong> We do not knowingly collect personal data from or permit account creation by anyone under 18. If we become aware that a user is under 18, we will suspend or terminate their account and delete or anonymise all associated personal data within a reasonable period, subject to any retention required by law.</p>
            <p><strong>2.3</strong> If you are a parent or guardian and believe your child under 18 has created an account, please contact us immediately at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>3. Account Registration</h2>
            <p><strong>3.1</strong> To use the App you must create an account using a valid email address and password, or via Sign in with Apple.</p>
            <p><strong>3.2</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account, whether or not authorised by you.</p>
            <p><strong>3.3</strong> You must not share your login credentials with any third party or permit any other person to access your account.</p>
            <p><strong>3.4</strong> You must notify us immediately at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a> if you become aware of any unauthorised access to or use of your account.</p>
            <p><strong>3.5</strong> You must provide accurate and complete registration information and keep it up to date at all times.</p>
            <p><strong>3.6</strong> Each account is for a single individual user only. You may not create multiple accounts or use another person's account.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Subscription and Payment</h2>
            <p><strong>4.1</strong> The App is available exclusively on a paid subscription basis. No free tier, free plan, or free trial period is offered.</p>
            <p><strong>4.2</strong> Two subscription plans are available: a monthly plan and an annual plan. Current prices for your region and currency are displayed in the App Store at the time of purchase. Prices may vary by country in accordance with Apple's regional pricing.</p>
            <p><strong>4.3</strong> All subscriptions are processed, billed, and managed exclusively by Apple Inc. through the App Store. By purchasing a subscription, you also agree to Apple's Media Services Terms and Conditions.</p>
            <p><strong>4.4 Automatic renewal:</strong> Your subscription will automatically renew at the end of each billing period (monthly or annually, as applicable) at the then-current price unless you cancel at least 24 hours before the renewal date. The renewal charge is applied to your Apple ID account within 24 hours before the end of the current period.</p>
            <p><strong>4.5</strong> You may view, manage, or cancel your subscription at any time via iOS Settings → [Your Name] → Subscriptions. Cancellation takes effect at the end of the current paid billing period; you will retain full access to the App until that date. Access is revoked upon expiry of the final paid period — there is no grace period.</p>
            <p><strong>4.6</strong> Because all billing is handled by Apple Inc. through the App Store, all refund requests must be submitted directly to Apple via reportaproblem.apple.com. 527Studios has no ability to issue refunds and accepts no responsibility for Apple's refund decisions. Nothing in this clause affects any statutory rights you may have under applicable consumer law, including any right to a refund where the App fails to perform with reasonable care and skill as required by the Consumer Rights Act 2015.</p>
            <p><strong>4.7</strong> 527Studios reserves the right to change subscription pricing at any time. Where required by applicable law, we will provide reasonable advance notice of any price change via the App or by email. If you do not accept a price change, you must cancel your subscription before the renewal date on which the new price takes effect.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Description of the App</h2>
            <p><strong>5.1</strong> Hearth is a recipe management and meal planning application. It allows you to:</p>
            <ul>
              <li>Extract recipe information from cooking videos (TikTok, Instagram, Pinterest, and YouTube URLs) and photographs using artificial intelligence</li>
              <li>Save, organise, and edit recipes in your personal recipe collection</li>
              <li>Create and manage custom recipe collections</li>
              <li>Plan meals using a weekly planner across multiple weeks</li>
              <li>Track personal cook counts, star ratings, and notes against individual recipes</li>
              <li>Publish recipes to a shared social feed and interact with recipes published by other users</li>
            </ul>
            <p><strong>5.2</strong> The App is a personal productivity and social tool only. It does not provide, and must not be relied upon for, professional advice of any kind — including medical, nutritional, dietary, allergen, food safety, or health advice. Macro and calorie information is an estimate only. You should always consult a qualified professional for any health, medical, or dietary concern.</p>
          </section>

          <section className={styles.section}>
            <h2>6. AI-Powered Recipe Extraction</h2>
            <p><strong>6.1</strong> The App uses artificial intelligence services provided by OpenAI, LLC to extract recipe information from images and video URLs you submit. All AI processing is performed server-side. Images and video metadata are transmitted transiently for this purpose and are not retained by us after the extraction response is received.</p>
            <p><strong>6.2</strong> All AI-extracted content is a best-effort estimate only. It may contain errors, omissions, or inaccuracies, including but not limited to incorrect ingredients, quantities, allergen information, cooking temperatures, preparation methods, timings, and nutritional data. The App does not verify, validate, or guarantee the accuracy of any extracted content.</p>
            <p><strong>6.3</strong> You are solely responsible for independently verifying all AI-extracted recipe content — including every ingredient, quantity, allergen, cooking temperature, and preparation instruction — before preparing or consuming any dish. You must not rely on AI-extracted content without independent verification, particularly where allergens or food safety are concerned.</p>
            <p><strong>6.4</strong> The App does not download, reproduce, or retain video content from third-party platforms. Thumbnail images from social media platforms are fetched transiently by our servers solely to assist AI extraction and are not stored.</p>
            <p><strong>6.5</strong> Extraction requests are subject to rate limits, which may change from time to time at our discretion.</p>
          </section>

          <section className={styles.section}>
            <h2>7. Third-Party Service Dependencies</h2>
            <p><strong>7.1</strong> The App depends on third-party services and platforms to deliver its functionality, including but not limited to: OpenAI (AI recipe extraction), Apple (App Store distribution and billing), Supabase (cloud database and authentication), RevenueCat (subscription management), and social media platforms including TikTok, Instagram, YouTube, and Pinterest (for recipe video URL extraction).</p>
            <p><strong>7.2</strong> 527Studios does not control these third-party services and is not responsible for their availability, accuracy, reliability, or continued operation. If any such service becomes unavailable, changes its terms, or restricts access, certain features of the App may be affected, reduced, or temporarily unavailable. Nothing in this clause affects any rights you may have under applicable consumer law where the App itself fails to conform to those requirements.</p>
            <p><strong>7.3</strong> Where a feature depends on a third-party platform's continued willingness to permit access to its content (such as social media video metadata), we cannot guarantee its continued availability and reserve the right to modify or remove the feature at any time.</p>
          </section>

          <section className={styles.section}>
            <h2>8. App Modification and Suspension</h2>
            <p><strong>8.1</strong> We may suspend, withdraw, restrict, or modify the App or any of its features where reasonably necessary for operational, security, legal, or commercial reasons. Where reasonably practicable, we will give you advance notice of any material change.</p>
            <p><strong>8.2</strong> Nothing in this clause permits us to modify the App in a way that would deprive you of a core benefit of your subscription without reasonable justification. Your statutory rights as a consumer are not affected.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Social Features</h2>
            <p><strong>9.1</strong> The App includes a social feed ("Social Feed") where you may choose to publish recipes from your personal collection, making them visible to other registered users.</p>
            <p><strong>9.2</strong> Publishing a recipe is voluntary and entirely at your discretion. You may unpublish a recipe at any time by removing it from your collection or deleting your account.</p>
            <p><strong>9.3</strong> Other registered users may vote on your published recipes (upvote or downvote). You may not vote on your own recipes.</p>
            <p><strong>9.4</strong> The App includes a ranking and points system. Points are awarded for activity such as posting recipes, voting, receiving upvotes, and appearing in trending content. Points and rankings are approximate, subject to change at any time, and carry no monetary or transferable value.</p>
            <p><strong>9.5</strong> You may add other users as friends to see their posts in your feed. Friend relationships are mutual.</p>
            <p><strong>9.6</strong> If you believe content published by another user violates these Terms or is otherwise objectionable, you may report it using the in-App report function. We will review reports and act reasonably. We are under no obligation to remove content solely because it has been reported, but we reserve the right to remove content and to suspend or terminate any account where we reasonably consider it necessary.</p>
            <p><strong>9.7</strong> 527Studios does not pre-screen, moderate, or endorse content published to the Social Feed. Content in the Social Feed is the responsibility of the user who posted it. 527Studios is not responsible for inaccurate, offensive, or objectionable content posted by other users.</p>
          </section>

          <section className={styles.section}>
            <h2>10. User Content</h2>
            <p><strong>10.1</strong> "User Content" means all content you create, upload, or publish within the App, including recipes, notes, collections, meal plans, and anything you post to the Social Feed.</p>
            <p><strong>10.2</strong> You retain full ownership of your User Content. By using the App, you grant 527Studios a limited, non-exclusive, royalty-free, worldwide licence to store, process, transmit, and (where you choose to publish to the Social Feed) display your User Content, solely to the extent necessary to operate and provide the App's functionality. This licence terminates when you delete the relevant content or your account, subject to any retention required by law.</p>
            <p><strong>10.3</strong> You represent and warrant that: (a) you own or hold all necessary rights in your User Content; (b) your User Content does not infringe any intellectual property, privacy, personality, or other third-party rights; (c) your User Content is not false, misleading, defamatory, obscene, offensive, hateful, or otherwise unlawful; and (d) your User Content complies with all applicable laws and regulations.</p>
            <p><strong>10.4</strong> You are solely responsible for all User Content you submit or publish. 527Studios accepts no liability for any User Content.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Third-Party Content and Intellectual Property</h2>
            <p><strong>11.1</strong> When you extract a recipe from a third-party URL (TikTok, Instagram, Pinterest, YouTube, or otherwise), the underlying content may be owned by that platform, its creators, or other third parties. 527Studios does not claim ownership of any such content.</p>
            <p><strong>11.2</strong> You are solely responsible for ensuring that your use of third-party content — including saving and publishing extracted recipes — complies with the terms of service and intellectual property policies of the relevant platform and any applicable law.</p>
            <p><strong>11.3</strong> The App, its name, design, source code, graphics, and all related intellectual property are owned by or licensed to 527Studios Limited and are protected by applicable law. You may not copy, modify, reverse-engineer, decompile, disassemble, or create derivative works based on any part of the App.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Acceptable Use</h2>
            <p><strong>12.1</strong> You agree not to use the App to:</p>
            <ul>
              <li>(a) violate any applicable law or regulation;</li>
              <li>(b) infringe the intellectual property, privacy, or other rights of any person;</li>
              <li>(c) publish, submit, or generate content that is unlawful, defamatory, obscene, hateful, threatening, or harassing;</li>
              <li>(d) publish content that contains or promotes dangerous, unsafe, or medically harmful instructions;</li>
              <li>(e) impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
              <li>(f) attempt to gain unauthorised access to the App, its servers, or any connected systems;</li>
              <li>(g) reverse-engineer, decompile, tamper with, or interfere with the operation of the App;</li>
              <li>(h) use automated scripts, bots, scrapers, or other automated means to access or interact with the App;</li>
              <li>(i) circumvent, or attempt to circumvent, the subscription payment mechanism or any feature restriction; or</li>
              <li>(j) use the App for any commercial purpose — including selling or sub-licensing access — without our prior written consent.</li>
            </ul>
            <p><strong>12.2</strong> Breach of this clause may result in suspension or termination of your account.</p>
          </section>

          <section className={styles.section}>
            <h2>13. Indemnity</h2>
            <p>If 527Studios suffers losses, liabilities, or reasonable legal costs as a direct result of: (a) your User Content being unlawful or infringing the rights of a third party; (b) your material breach of these Terms; or (c) your infringement of any third-party intellectual property or privacy rights — you agree to reimburse 527Studios for those losses, liabilities, and costs to the extent they are directly caused by your conduct. This clause does not require you to indemnify 527Studios against losses to which 527Studios has itself contributed, and it does not apply to losses that are indirect or consequential in nature.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Disclaimers</h2>
            <p><strong>14.1</strong> We do not warrant that the App will be available at all times, free from interruption or error, or that defects will be corrected. We do not warrant that any AI-extracted recipe content will be accurate, complete, or fit for any particular purpose.</p>
            <p><strong>14.2</strong> Nothing in these Terms excludes or limits any statutory warranty or consumer right that cannot lawfully be excluded or limited, including rights under the Consumer Rights Act 2015.</p>
          </section>

          <section className={styles.section}>
            <h2>15. Limitation of Liability</h2>
            <p><strong>15.1</strong> Subject to clause 15.3, 527Studios Limited's total aggregate liability to you arising out of or in connection with these Terms or the App shall not exceed the total subscription fees paid by you in the 12 months immediately preceding the event giving rise to the claim.</p>
            <p><strong>15.2</strong> Subject to clause 15.3, 527Studios is not liable for: (a) any indirect or consequential loss or damage; (b) loss of profits, revenue, business, or anticipated savings; (c) loss, corruption, or unavailability of data or User Content; (d) any personal injury, illness, allergic reaction, or death resulting from preparing or consuming a recipe, including any AI-extracted recipe; (e) loss arising from reliance on AI-generated content; (f) loss arising from third-party content in the Social Feed; or (g) loss arising from the unavailability or failure of any third-party service on which the App depends — whether or not 527Studios had been advised of the possibility of such loss.</p>
            <p><strong>15.3</strong> Nothing in these Terms limits or excludes liability for: (a) death or personal injury caused by 527Studios' negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot lawfully be limited or excluded under the laws of England and Wales.</p>
          </section>

          <section className={styles.section}>
            <h2>16. Termination</h2>
            <p><strong>16.1</strong> We may suspend or terminate your account and access to the App if we have reasonable grounds to believe you have materially breached these Terms, or if required to do so by law. We will act reasonably in exercising this right. Suspension or termination for breach does not entitle you to a refund of any prepaid subscription fees.</p>
            <p><strong>16.2</strong> You may delete your account at any time within the App (Settings → Delete Account). Deletion is permanent. Your personal data will be deleted or anonymised within a reasonable period, subject to any retention required by law and as described in our Privacy Policy.</p>
            <p><strong>16.3</strong> Upon termination for any reason: (a) your right to access the App ceases; (b) aggregated or anonymised data derived from your account activity (such as points awarded to other users as a result of their interactions with your content) may be retained as described in the Privacy Policy; and (c) clauses 10, 11, 12, 13, 15, and 19 to 23 shall survive termination.</p>
          </section>

          <section className={styles.section}>
            <h2>17. Force Majeure</h2>
            <p>527Studios will not be liable for any failure or delay in performing its obligations under these Terms to the extent caused by circumstances beyond its reasonable control, including outages or changes to third-party APIs or services (including OpenAI, Apple, TikTok, Instagram, YouTube, Pinterest, Supabase, or RevenueCat), Internet or telecommunications failures, acts of God, natural disasters, severe weather, pandemics, industrial disputes, government action or regulation, or failures in shared infrastructure. We will use reasonable efforts to minimise the impact of any such event and to resume performance as soon as reasonably practicable.</p>
          </section>

          <section className={styles.section}>
            <h2>18. Apple App Store — Additional Terms</h2>
            <p><strong>18.1</strong> The App is distributed solely via the Apple App Store. These Terms are an agreement between you and 527Studios Limited only. Apple Inc. is not a party to these Terms and bears no responsibility for the App or its content.</p>
            <p><strong>18.2</strong> Apple has no obligation to provide any maintenance, support services, or warranty in respect of the App. Any support queries should be directed to 527Studios at <a href="mailto:527studioslimited@gmail.com">527studioslimited@gmail.com</a>.</p>
            <p><strong>18.3</strong> Apple and its subsidiaries are third-party beneficiaries of these Terms and, upon your acceptance, have the right to enforce these Terms against you as a third-party beneficiary.</p>
            <p><strong>18.4</strong> In the event of any conflict between these Terms and the Apple Media Services Terms and Conditions, the Apple Media Services Terms and Conditions shall prevail solely in respect of Apple's role as App Store operator and billing processor.</p>
          </section>

          <section className={styles.section}>
            <h2>19. Changes to These Terms</h2>
            <p><strong>19.1</strong> We may update these Terms from time to time to reflect changes in the App, our business, or applicable law. The "Last updated" date at the top of this document reflects the most recent revision.</p>
            <p><strong>19.2</strong> We will notify you of material changes via the App. If you do not accept revised Terms, you must stop using the App and cancel your subscription before the revised Terms take effect.</p>
          </section>

          <section className={styles.section}>
            <h2>20. Governing Law and Jurisdiction</h2>
            <p><strong>20.1</strong> These Terms are governed by and construed in accordance with the laws of England and Wales.</p>
            <p><strong>20.2</strong> Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales, except where applicable mandatory consumer protection law in your country of habitual residence grants you the right to bring proceedings before the courts of that country.</p>
          </section>

          <section className={styles.section}>
            <h2>21. Severability</h2>
            <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, and all remaining provisions shall continue in full force and effect.</p>
          </section>

          <section className={styles.section}>
            <h2>22. Waiver</h2>
            <p>No failure or delay by 527Studios in exercising any right or remedy under these Terms shall operate as a waiver of that right or remedy. No single or partial exercise of any right or remedy precludes its further exercise or the exercise of any other right or remedy.</p>
          </section>

          <section className={styles.section}>
            <h2>23. Entire Agreement</h2>
            <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and 527Studios Limited with respect to the App and supersede all prior agreements, representations, warranties, and understandings relating to the App.</p>
          </section>

          <section className={styles.section}>
            <h2>24. Contact</h2>
            <p>For questions, support, or complaints regarding these Terms:</p>
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

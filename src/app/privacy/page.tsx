import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GigaWebZone LLP collects, uses, protects and shares personal data — in line with India's Digital Personal Data Protection (DPDP) Act 2023.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="June 2026"
      intro="This policy explains what personal data GigaWebZone LLP collects, how we use and protect it, and the rights you have — in line with India's Digital Personal Data Protection (DPDP) Act 2023."
    >
      <h2>1. Who we are</h2>
      <p>
        GigaWebZone LLP (&ldquo;GigaWebZone&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
        full-stack web and app development studio based in Narayangaon, Junnar, Maharashtra,
        India. For any privacy questions, contact us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or {CONTACT.phoneDisplay}.
      </p>

      <h2>2. Information we collect</h2>
      <p>We only collect what we need to respond to you and deliver our services:</p>
      <ul>
        <li><strong>Enquiry details</strong> you provide via our contact form — name, email, phone/WhatsApp, company, project type, budget range and your message.</li>
        <li><strong>Communication records</strong> when you call, email or message us.</li>
        <li><strong>Usage &amp; analytics data</strong> — pages visited, device and browser type, and referral source, collected via privacy-respecting analytics and cookies.</li>
        <li><strong>Project data</strong> shared with us during an engagement, handled under our client agreement.</li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and provide a consultation, scope or quote.</li>
        <li>To deliver, support and maintain the services you engage us for.</li>
        <li>To improve our website and understand how it is used.</li>
        <li>To send service-related communication. We do not sell your data or send spam.</li>
      </ul>

      <h2>4. Legal basis &amp; consent (DPDP Act 2023)</h2>
      <p>
        We process personal data on the basis of your consent (given when you submit an
        enquiry) and for legitimate, specified purposes. You may withdraw consent at any time
        by contacting us; this will not affect processing already carried out.
      </p>

      <h2>5. Sharing &amp; disclosure</h2>
      <p>
        We do not sell your personal data. We share it only with trusted service providers who
        help us operate (for example, hosting, analytics and CRM/communication tools), bound to
        protect it and use it only for the purposes we specify, or where required by law.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We keep personal data only as long as necessary for the purpose it was collected, to
        maintain our client relationship, or to meet legal and accounting obligations — after
        which it is securely deleted or anonymised.
      </p>

      <h2>7. Security</h2>
      <p>
        We apply reasonable technical and organisational safeguards — including HTTPS, access
        controls and secure infrastructure — to protect personal data against unauthorised
        access, alteration or loss.
      </p>

      <h2>8. Your rights</h2>
      <p>Under the DPDP Act 2023, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction or completion of inaccurate data.</li>
        <li>Request erasure of your data, subject to legal limits.</li>
        <li>Withdraw consent and raise a grievance.</li>
      </ul>
      <p>
        To exercise any of these, email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>9. Cookies &amp; analytics</h2>
      <p>
        We use minimal, privacy-respecting cookies and analytics to operate the site and
        understand usage. You can control cookies through your browser settings; disabling them
        may affect some functionality.
      </p>

      <h2>10. Children</h2>
      <p>
        Our services are intended for businesses and adults. We do not knowingly collect
        personal data from children.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last updated&rdquo; date above
        reflects the latest version, and material changes will be posted on this page.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions, requests or grievances about your data? Reach us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or {CONTACT.phoneDisplay},
        GigaWebZone LLP, {CONTACT.address}.
      </p>
    </LegalLayout>
  );
}

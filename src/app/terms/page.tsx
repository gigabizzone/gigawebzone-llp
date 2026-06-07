import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing the use of GigaWebZone LLP's website and the engagement of our web, app and WordPress development services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="June 2026"
      intro="These terms govern your use of the GigaWebZone website and the engagement of our services. By using this site or working with us, you agree to them."
    >
      <h2>1. About these terms</h2>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) are between you and GigaWebZone LLP
        (&ldquo;GigaWebZone&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a limited liability
        partnership registered in India. They cover use of this website; specific projects are
        also governed by a separate written proposal or agreement, which prevails if there is
        any conflict.
      </p>

      <h2>2. Our services</h2>
      <p>
        We provide web development, app development, portal/platform development, WordPress
        services and related support. Any consultation, scope or quote we provide is an offer to
        engage, not a binding contract until accepted in writing by both parties.
      </p>

      <h2>3. Proposals, scope &amp; quotes</h2>
      <p>
        Each engagement is defined by a written scope, timeline and quote. Work outside the
        agreed scope (&ldquo;change requests&rdquo;) may affect the timeline and cost and will be
        quoted separately before we proceed.
      </p>

      <h2>4. On-Time Delivery Commitment</h2>
      <p>
        Where we offer an On-Time Delivery Commitment, its exact terms — including what counts
        as &ldquo;on time&rdquo;, the milestones it covers, and the remedy if a deadline we
        control is missed — are defined in the applicable project agreement. Timelines assume
        timely client feedback, content and approvals.
      </p>

      <h2>5. Payments</h2>
      <p>
        Fees, milestones and payment schedules are set out in the project agreement. Unless
        stated otherwise, invoices are payable as scheduled, and work may be paused for overdue
        payments. Taxes apply as per Indian law.
      </p>

      <h2>6. Client responsibilities</h2>
      <ul>
        <li>Provide accurate information, content and access needed to deliver the project.</li>
        <li>Review and respond to deliverables and requests for approval in good time.</li>
        <li>Ensure you have the rights to any materials you provide to us.</li>
      </ul>

      <h2>7. Intellectual property</h2>
      <p>
        On full payment, ownership of the final, custom deliverables created for your project
        transfers to you, except for third-party components, open-source software and our
        pre-existing tools, frameworks and know-how, which remain owned by their respective
        owners or by us and are licensed to you for use in the delivered work.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        Projects may rely on third-party platforms, plugins, hosting or APIs governed by their
        own terms. We are not responsible for the availability, performance or changes of
        third-party services outside our control.
      </p>

      <h2>9. Warranties &amp; disclaimers</h2>
      <p>
        We deliver our services with reasonable skill and care. Except as expressly stated in a
        project agreement, the website and our materials are provided &ldquo;as is&rdquo; without
        further warranties of any kind to the extent permitted by law.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, GigaWebZone&apos;s total liability arising out of
        an engagement is limited to the fees paid for that engagement. We are not liable for
        indirect, incidental or consequential losses, or for loss of profit, data or goodwill.
      </p>

      <h2>11. Confidentiality</h2>
      <p>
        Each party will keep the other&apos;s non-public information confidential and use it only
        to perform the engagement. Your data is handled per our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>12. Termination</h2>
      <p>
        Either party may terminate an engagement as set out in the project agreement. On
        termination, you pay for work completed up to that date, and we hand over completed,
        paid-for deliverables.
      </p>

      <h2>13. Governing law &amp; jurisdiction</h2>
      <p>
        These Terms are governed by the laws of India. The courts at Pune, Maharashtra have
        exclusive jurisdiction over any dispute, subject to any arbitration agreed in a project
        contract.
      </p>

      <h2>14. Changes</h2>
      <p>
        We may update these Terms from time to time. The &ldquo;last updated&rdquo; date above
        reflects the current version; continued use of the site constitutes acceptance of the
        updated Terms.
      </p>

      <h2>15. Contact</h2>
      <p>
        Questions about these Terms? Contact{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or {CONTACT.phoneDisplay},
        GigaWebZone LLP, {CONTACT.address}.
      </p>
    </LegalLayout>
  );
}

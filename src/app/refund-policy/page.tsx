import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "How refunds, cancellations and care-plan renewals work at GigaWebZone LLP — what is refundable, what isn't, and how to raise a refund request.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      updated="August 2026"
      intro="We build custom software to an agreed scope, so refunds work differently than they do for off-the-shelf products. This page sets out exactly what is refundable, what isn't, and how to raise a request."
    >
      <h2>1. Scope of this policy</h2>
      <p>
        This policy applies to services purchased from GigaWebZone LLP
        (&ldquo;GigaWebZone&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) — web development, app
        development, portal and platform builds, WordPress work, and ongoing care plans /
        Annual Maintenance Contracts (AMC). Where a signed project agreement sets out different
        refund or cancellation terms, that agreement prevails over this page.
      </p>

      <h2>2. Consultations are free</h2>
      <p>
        Our initial consultation, discovery call, scope and quote cost you nothing and carry no
        obligation. You only pay once you accept a written proposal, so there is nothing to
        refund at the enquiry stage.
      </p>

      <h2>3. How we bill</h2>
      <p>
        Projects are billed against a written scope and a milestone schedule — typically an
        advance to reserve delivery capacity and begin work, followed by payments tied to
        agreed milestones. Care plans and AMCs are billed monthly or annually in advance. Your
        project agreement records the exact amounts and dates.
      </p>

      <h2>4. Cancelling a project</h2>
      <h3>Before work begins</h3>
      <p>
        If you cancel in writing before we hold the kickoff and begin work, we refund your
        advance in full, less any third-party costs already incurred on your behalf (see
        section 6).
      </p>
      <h3>After work begins</h3>
      <p>
        Once work has started, the advance covers reserved capacity and the discovery,
        strategy and design effort already spent, and is not refundable. If you cancel
        mid-project, you pay for all work completed and in progress up to the date of written
        cancellation; anything you have paid beyond that value is refunded to you. We hand over
        the completed, paid-for deliverables.
      </p>
      <h3>If we cannot deliver</h3>
      <p>
        In the rare case that we cancel an engagement for a reason within our control and
        cannot complete it, you receive a full refund of amounts paid for work not delivered.
      </p>

      <h2>5. Care plans, AMC &amp; retainers</h2>
      <ul>
        <li>
          You may cancel an ongoing care plan, AMC or retainer at any time with written notice.
          Cancellation takes effect at the end of the current billing period.
        </li>
        <li>
          Fees for a billing period already under way are not refunded, because the cover
          (monitoring, backups, security and support availability) has already been provided
          for that period.
        </li>
        <li>
          Annual plans cancelled mid-term are refunded on a pro-rata basis for whole unused
          months, less any discount that was granted for the annual commitment.
        </li>
        <li>
          Unused hours or tasks in a monthly plan do not carry over and are not refundable in
          cash.
        </li>
      </ul>

      <h2>6. What is not refundable</h2>
      <ul>
        <li>
          <strong>Third-party costs</strong> paid on your behalf — domains, hosting, SSL,
          premium themes and plugins, licences, APIs, app store developer fees, paid media and
          stock assets. These are billed by the vendor under their own terms.
        </li>
        <li>
          <strong>Work already delivered or approved</strong>, including design concepts,
          content, code and configuration handed over to you.
        </li>
        <li>
          <strong>Fees for a billing period already in progress</strong> on a care plan, AMC or
          retainer.
        </li>
        <li>
          <strong>Delays or cancellation caused by the client</strong> — for example withheld
          content, approvals or access, or a change of business direction mid-project.
        </li>
        <li>
          <strong>Dissatisfaction with subjective preferences</strong> where the delivered work
          matches the approved scope, wireframes and design sign-off. We include revision
          rounds during the project precisely so this is settled before delivery.
        </li>
        <li>
          <strong>Outcomes outside our control</strong> — search rankings, traffic, conversions
          or revenue, and issues caused by third-party platform changes or by edits made to the
          build by others after handover.
        </li>
      </ul>

      <h2>7. Missed deadlines</h2>
      <p>
        Where a project carries our On-Time Delivery Commitment and a milestone we control
        slips, the remedy is the one written into that project agreement — agreed with you
        before work starts, so nobody is guessing after the fact. Timelines assume timely
        client feedback, content and approvals; delays on your side move the dates
        correspondingly. See our <Link href="/terms">Terms of Service</Link> for the full
        position.
      </p>

      <h2>8. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> from the address
        associated with your account, with your project or invoice reference, the payment
        details, and the reason for the request. You can also call us on{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> to discuss it first — in our
        experience most concerns are resolved faster by fixing the work than by unwinding the
        engagement.
      </p>
      <ul>
        <li>We acknowledge every refund request within 2 business days.</li>
        <li>
          We review it against your project agreement and share a written decision, with
          workings, within 7 business days.
        </li>
        <li>
          Approved refunds are processed within 7&ndash;10 business days to the original payment
          method. Your bank or card issuer may take additional time to post the credit.
        </li>
        <li>
          Refunds are made in the currency of the original payment. Bank charges, payment
          gateway fees and any currency conversion loss are deducted from the refunded amount.
        </li>
      </ul>

      <h2>9. Chargebacks</h2>
      <p>
        Please raise any billing concern with us before initiating a chargeback with your bank
        or card issuer. We would much rather resolve it directly, and a chargeback opened
        without contacting us may suspend active work and support on your project while it is
        investigated.
      </p>

      <h2>10. Taxes</h2>
      <p>
        GST and other applicable taxes are charged as per Indian law. Where a refund is issued,
        the associated tax is adjusted or credited in line with the prevailing tax rules.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;last updated&rdquo; date above
        reflects the current version. The policy in force on the date of your project agreement
        is the one that applies to that engagement.
      </p>

      <h2>12. Governing law</h2>
      <p>
        This policy is governed by the laws of India, and the courts at Pune, Maharashtra have
        exclusive jurisdiction over any dispute, subject to any arbitration agreed in a project
        contract.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about billing, cancellation or a refund? Reach us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> or{" "}
        <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>, GigaWebZone LLP,{" "}
        {CONTACT.address}.
      </p>
    </LegalLayout>
  );
}

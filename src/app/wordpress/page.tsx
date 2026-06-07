import type { Metadata } from "next";
import { PageHero } from "@/components/service/PageHero";
import { SectionHead } from "@/components/service/SectionHead";
import { StackCard } from "@/components/service/StackCard";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { UseCaseGrid } from "@/components/service/UseCaseGrid";
import { CommitBand } from "@/components/service/CommitBand";
import { RelatedWork } from "@/components/service/RelatedWork";
import { FAQ } from "@/components/service/FAQ";
import { PageCta } from "@/components/service/PageCta";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "WordPress Development Company in India — Custom, WooCommerce, Headless",
  description:
    "WordPress specialists with 12 years' expertise and 400+ builds. Custom themes & plugins, WooCommerce, headless WordPress, plus maintenance, recovery, backup and AMC support.",
};

const sl = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const ic = { fill: "none" as const, strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const uci = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const WHY = [
  { h: "Your team edits content often", p: "Non-technical staff can update pages, posts and products themselves — no developer needed." },
  { h: "Speed to launch & budget matter", p: "A proven, cost-effective foundation that gets you live fast without cutting corners." },
  { h: "You want a huge ecosystem", p: "Mature plugins for commerce, SEO, memberships and more — extend without reinventing." },
  { h: "Long-term maintainability", p: "Easy to find help and easy to grow — your site won't be trapped in a niche framework." },
];

export default function WordPressPage() {
  return (
    <>
      <PageHero
        current="WordPress"
        eyebrow="WordPress · Our 12-year specialty"
        title={<>WordPress, done <span className="grad-text">properly</span> — at scale.</>}
        lead={
          <>
            <strong>Twelve years and 400+ builds deep</strong> — WordPress is where we
            started and where we go deepest. Specialists in <strong>custom themes &amp;
            plugins</strong> who also engineer full-stack, so you get the ease of WordPress
            with the rigor of a real software team — backed by maintenance that lasts.
          </>
        }
        secondaryHref="#care"
        secondaryLabel="WordPress support plans"
        proof={[
          { count: 400, suffix: "+", label: "WordPress builds" },
          { count: 12, suffix: "+", label: "years in WordPress" },
          { text: "White-label", label: "for agencies" },
        ]}
        visual={
          <StackCard
            label="WordPress, end to end"
            layers={[
              { title: "Custom themes & plugins", sub: "hand-built", tools: ["PHP", "JS"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></svg> },
              { title: "WooCommerce", sub: "online stores", tools: ["Payments"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M3 9l1-5h16l1 5M4 9h16v11H4zM9 13h6" /></svg> },
              { title: "Headless WordPress", sub: "Next.js front-end", tools: ["REST"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M4 7l8-4 8 4-8 4-8-4z" /><path d="M4 7v10l8 4 8-4V7" /></svg> },
              { title: "Care & maintenance", sub: "ongoing", tools: ["Secure"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M12 2l8 3v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg> },
            ]}
          />
        }
      />

      <section className="section" id="build">
        <div className="wrap">
          <SectionHead eyebrow="The full spread" title="Not just websites — the whole WordPress stack.">
            From a clean custom theme to a headless build feeding a Next.js front-end, we go
            as deep as your project needs.
          </SectionHead>
          <FeatureGrid
            items={[
              { title: "Custom themes & plugins", body: "Our craft for 12 years — fully custom themes and bespoke plugins built from scratch. Clean, fast code; zero page-builder bloat or template sprawl.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg> },
              { title: "Gutenberg blocks", body: "Custom, editor-friendly blocks so your team builds and edits pages confidently — without breaking the design.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></svg> },
              { title: "Headless WordPress", body: "Keep WordPress as the editor your team loves, with a blazing-fast Next.js front-end on top.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M4 7l8-4 8 4-8 4-8-4z" /><path d="M4 7v10l8 4 8-4V7" /></svg> },
              { title: "WooCommerce", body: "Online stores with payments, UPI, subscriptions and inventory — tuned for conversion and speed.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M3 9l1-5h16l1 5M4 9h16v11H4zM9 13h6" /></svg> },
              { title: "AI integration & automation", body: "Chat, content assistance and workflow automation, wired into WordPress where it actually helps.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M12 2v6M12 16v6M2 12h6M16 12h6" /><circle cx="12" cy="12" r="3" /></svg> },
              { title: "REST API & integrations", body: "Connect WordPress to CRMs, payment gateways, mobile apps and third-party services, securely.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg> },
            ]}
          />
        </div>
      </section>

      <section className="section tint" id="care">
        <div className="wrap">
          <SectionHead eyebrow="WordPress care & maintenance" title="The part most agencies skip — keeping it running.">
            A WordPress site is never &ldquo;done.&rdquo; Our dedicated care services —
            including <strong>Annual Maintenance Contracts (AMC)</strong> — keep yours
            secure, fast, backed up and current long after launch. This is the difference
            between a build and a partner.
          </SectionHead>
          <UseCaseGrid
            items={[
              { label: "Updates & management", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" /></svg> },
              { label: "Ongoing maintenance", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" /></svg> },
              { label: "Hacked-site recovery", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M3 2v6h6M21 12A9 9 0 1 1 6 5.3L3 8" /></svg> },
              { label: "Backup & restore", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg> },
              { label: "Troubleshooting & fixes", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" /></svg> },
              { label: "Security hardening", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M12 2l8 3v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg> },
              { label: "Performance & speed", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg> },
              { label: "Annual maintenance (AMC)", highlight: true, icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18M8 2v4M16 2v4M9 16l2 2 4-4" /></svg> },
            ]}
          />
          <div className="reveal" style={{ textAlign: "center", marginTop: 34 }}>
            <Button href="#contact" variant="primary" size="lg">
              Get an AMC / care-plan quote
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="why-grid">
            <div className="reveal">
              <span className="eyebrow">When WordPress is the right call</span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", margin: "16px 0 14px" }}>
                We recommend it when it genuinely fits — and say so when it doesn&apos;t.
              </h2>
              <p style={{ color: "var(--text-2)", fontSize: 17 }}>
                WordPress is brilliant for the right project. Here&apos;s when we&apos;ll point
                you to it — and we&apos;ll happily steer you to a full-stack build when
                that&apos;s the smarter call.
              </p>
              <div className="why-list">
                {WHY.map((w) => (
                  <div className="why-item" key={w.h}>
                    <span className="tick">
                      <Check />
                    </span>
                    <div>
                      <h4>{w.h}</h4>
                      <p>{w.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" data-d="2">
              <CommitBand
                variant="product"
                singleColumn
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7h-9M14 17H5M5 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                  </svg>
                }
                tag="Trusted by other agencies"
                title="White-label WordPress"
                body={
                  <>
                    Other studios and agencies trust us to build and maintain WordPress under{" "}
                    <em>their</em> brand — reliably, discreetly, and on time. If you&apos;re an
                    agency that needs a dependable WordPress team behind the scenes, that&apos;s
                    us.
                  </>
                }
                ctaLabel="Partner with us"
                ctaHref="#contact"
                ctaStyle={{ marginTop: 6 }}
              />
            </div>
          </div>
        </div>
      </section>

      <RelatedWork
        id="work"
        tint
        eyebrow="WordPress in production"
        title="A small slice of 400+ builds."
        titleStyle={{ fontSize: "clamp(30px,4vw,46px)", marginTop: 16 }}
        items={[
          { tags: ["WooCommerce", "E-commerce"], title: "Ayuratan", desc: "A WooCommerce store for a wellness brand — catalog, payments and a conversion-tuned checkout.", ph: "screenshot · ayuratan.com" },
          { tags: ["Healthcare", "WordPress"], title: "Borneo Hospitals", desc: "A multi-department hospital site with services, doctors and enquiry flows.", ph: "screenshot · borneohospitals.com" },
          { tags: ["WordPress", "Custom theme"], title: "Doctor WordPress", desc: "A custom WordPress build with bespoke theming and content management.", ph: "screenshot · doctorwordpress.in" },
        ]}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Questions, answered" title="WordPress FAQs" />
          <FAQ
            items={[
              { q: "Do you build custom themes or use page builders?", a: "We build clean, custom themes (and custom Gutenberg blocks) — no bloated page-builder stacks. The result is faster, more secure, and far easier to maintain than a typical Elementor/template site." },
              { q: "Can you build a WooCommerce online store?", a: "Yes — WooCommerce is a core specialty. Catalog, UPI & card payments, subscriptions, inventory, shipping and a conversion-tuned checkout, all built and optimized properly." },
              { q: "What is headless WordPress, and do I need it?", a: "Headless means keeping WordPress as your content editor while serving the front-end with a fast framework like Next.js. It's great when you want top-tier speed and a custom front-end but still want easy content editing. We'll tell you honestly whether it's worth it for your case." },
              { q: "Do you offer maintenance and support plans?", a: "Yes. Our care plans cover security, updates, performance, backups and monitoring — plus a real human to call when something needs attention. We also provide white-label maintenance for other agencies." },
              { q: "Can you fix, secure or rescue an existing WordPress site?", a: "Absolutely. Hacked, slow, broken or just neglected — we audit, clean up, harden and optimize existing WordPress sites, and can take over ongoing maintenance from there." },
            ]}
          />
        </div>
      </section>

      <PageCta
        title="Need WordPress done right? Let's talk."
        lead="Whether it's a new build, a rescue, or an ongoing care plan — book a free consultation and we'll give you a clear, honest recommendation, usually within one working day."
      />
    </>
  );
}

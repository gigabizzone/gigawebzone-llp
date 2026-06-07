import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/service/PageHero";
import { SectionHead } from "@/components/service/SectionHead";
import { StackCard } from "@/components/service/StackCard";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { TechStacks } from "@/components/service/TechStacks";
import { Steps } from "@/components/service/Steps";
import { CommitBand } from "@/components/service/CommitBand";
import { RelatedWork } from "@/components/service/RelatedWork";
import { FAQ } from "@/components/service/FAQ";
import { PageCta } from "@/components/service/PageCta";
import { Shield } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const DESCRIPTION =
  "Custom web application & full-stack website development by GigaWebZone — React, Next.js, Node, Laravel. Headless builds, APIs, performance engineering. DPIIT-recognised, 400+ businesses served.";

export const metadata: Metadata = {
  title: "Full-Stack Web Development Company",
  description: DESCRIPTION,
  alternates: { canonical: "/web-development" },
};

const ic = { fill: "none" as const, strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function WebDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Web Development", path: "/web-development" },
          ]),
          serviceJsonLd({
            serviceType: "Full-Stack Web Development",
            name: "Full-Stack Web Development",
            description: DESCRIPTION,
            path: "/web-development",
          }),
        ]}
      />
      <PageHero
        current="Web Development"
        eyebrow="Full-Stack Web Development"
        title={<>Custom web apps &amp; sites, <span className="grad-text">engineered to perform.</span></>}
        lead={
          <>
            From high-converting marketing sites to complex web applications — we
            architect, build and ship production-grade software on React, Next.js and
            modern back-ends. WordPress specialists who engineer the whole stack.
          </>
        }
        secondaryHref="#work"
        secondaryLabel="See web projects"
        proof={[
          { count: 400, suffix: "+", label: "businesses served" },
          { count: 45, suffix: "+", label: "live projects" },
          { count: 98, label: "avg Lighthouse" },
        ]}
        visual={
          <StackCard
            label="The stack we ship"
            layers={[
              {
                title: "Front-end",
                sub: "UI · UX · SSR",
                tools: ["React", "Next.js", "TS"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <rect x="2" y="4" width="20" height="14" rx="2" />
                    <path d="M8 20h8M12 18v2" />
                  </svg>
                ),
              },
              {
                title: "Back-end",
                sub: "APIs · logic",
                tools: ["Node", "Laravel", "Python"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <path d="M4 7l8-4 8 4-8 4-8-4z" />
                    <path d="M4 7v10l8 4 8-4V7" />
                  </svg>
                ),
              },
              {
                title: "Data",
                sub: "SQL · NoSQL · cache",
                tools: ["Postgres", "MongoDB"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <ellipse cx="12" cy="5" rx="8" ry="3" />
                    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                  </svg>
                ),
              },
              {
                title: "Cloud & DevOps",
                sub: "deploy · CI/CD",
                tools: ["AWS", "Vercel", "Docker"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.6-1.5A4 4 0 0 0 6 19z" />
                  </svg>
                ),
              },
            ]}
          />
        }
      />

      <section className="section" id="build">
        <div className="wrap">
          <SectionHead eyebrow="What we build" title="Beyond websites — the software your business runs on.">
            Whatever the brief, it ships as clean, documented, production-grade code your
            team can grow on.
          </SectionHead>
          <FeatureGrid
            items={[
              {
                title: "Custom web applications",
                body: "Bespoke software, dashboards, portals and internal tools — built around your exact workflow, not a template.",
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                ),
              },
              {
                title: "Full-stack websites",
                body: "Marketing and corporate sites engineered for speed, SEO and conversion — front-end to back-end, end to end.",
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
                  </svg>
                ),
              },
              {
                title: "Headless & decoupled",
                body: "Next.js front-ends powered by a headless CMS or headless WordPress — editor-friendly, blazing fast.",
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                  </svg>
                ),
              },
              {
                title: "APIs & integrations",
                body: "Payments & UPI, CRMs, ERPs, WhatsApp and third-party services — connected with secure, well-documented APIs.",
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                title: "Performance engineering",
                body: "Core Web Vitals taken seriously — SSR/SSG/ISR, caching and image optimization. Most builds ship 90+ Lighthouse.",
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
                  </svg>
                ),
              },
              {
                title: "Maintenance & support",
                body: "Monitoring, updates, security and SLAs — long-term care so what we ship keeps performing.",
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}>
                    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
                    <path d="M9 9l2 2 4-4" />
                  </svg>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead
            eyebrow="The tech stack"
            title="A modern, proven stack — chosen for your project, not our habits."
          >
            We pick tools for fit, maintainability and longevity. Here&apos;s what we reach
            for most.
          </SectionHead>
          <TechStacks
            cats={[
              {
                heading: "Front-end",
                items: [
                  { name: "React" },
                  { name: "Next.js", sub: "App Router, SSR/ISR" },
                  { name: "TypeScript" },
                  { name: "Tailwind / CSS" },
                ],
              },
              {
                heading: "Back-end",
                items: [
                  { name: "Node.js" },
                  { name: "Laravel (PHP)" },
                  { name: "Python" },
                  { name: "REST & GraphQL" },
                ],
              },
              {
                heading: "Data",
                items: [
                  { name: "PostgreSQL" },
                  { name: "MySQL" },
                  { name: "MongoDB" },
                  { name: "Redis", sub: "caching & queues" },
                ],
              },
              {
                heading: "Cloud & DevOps",
                items: [
                  { name: "AWS" },
                  { name: "Vercel" },
                  { name: "Docker" },
                  { name: "CI/CD pipelines" },
                ],
              },
            ]}
          />
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <SectionHead
            eyebrow="How we work"
            title="A clear process, with a fixed scope and weekly demos."
          >
            You always know what&apos;s being built, what it costs, and when it lands. No
            black boxes.
          </SectionHead>
          <Steps
            steps={[
              { num: "01", title: "Discover & scope", body: "We map goals, users and requirements, then lock a fixed scope, timeline and quote.", when: "Week 1" },
              { num: "02", title: "Design & architect", body: "UX flows, a token-based design system, and the technical architecture — signed off before code.", when: "Week 1–2" },
              { num: "03", title: "Build & test", body: "Agile sprints with weekly demos and a staging link, continuous QA, and your feedback baked in.", when: "Week 2 onward" },
              { num: "04", title: "Launch & support", body: "Production deploy, performance & SEO checks, monitoring, and an ongoing care plan.", when: "Launch + ongoing" },
            ]}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CommitBand
            icon={<Shield />}
            title="The On-Time Delivery Commitment"
            body="We agree a delivery date up front and stand behind it. If a milestone we control slips, you're not left guessing — there's a defined remedy, in writing, before we start."
            tbd
            ctaLabel="Start your project"
            ctaHref="#contact"
          />
        </div>
      </section>

      <RelatedWork
        id="work"
        tint
        eyebrow="Selected web builds"
        title="Live, in production, doing their job."
        titleStyle={{ fontSize: "clamp(30px,4vw,46px)", marginTop: 16 }}
        items={[
          { tags: ["E-commerce", "Full-stack"], title: "Devintech", desc: "A custom e-commerce platform with catalog, payments and order management.", ph: "screenshot · devintech.net" },
          { tags: ["Fintech", "Web app"], title: "MyLoanMantra", desc: "A trust-first loan-services journey with secure, frictionless application flows.", ph: "screenshot · myloanmantra.co.in" },
          { tags: ["Automotive", "E-commerce"], title: "GroundZero", desc: "A performance-focused commerce build for an automotive accessories brand.", ph: "screenshot · groundzero.net.in" },
        ]}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Questions, answered" title="Web development FAQs" />
          <FAQ
            items={[
              { q: "Do you build custom, or use templates?", a: "Custom. Whether it's a marketing site or a complex application, we design and engineer to your requirements — no recycled themes or page-builder bloat. Where a CMS makes sense (including WordPress), we build clean, custom implementations on top of it." },
              { q: "What's your tech stack, and how do you choose it?", a: "Most builds use React/Next.js on the front-end with Node, Laravel or Python back-ends and SQL/NoSQL data stores, deployed on AWS or Vercel. We choose per project based on fit, your team's familiarity, and long-term maintainability — not whatever's trendy." },
              { q: "How long does a typical build take?", a: "A focused marketing site can ship in 2–4 weeks; a custom application or portal is typically 6–12 weeks depending on scope. We lock a fixed scope and timeline in week one and demo progress weekly so there are no surprises." },
              { q: "Can you work with our existing team or codebase?", a: "Yes. We regularly extend existing codebases, integrate with in-house teams, and pick up or rescue stalled projects. We document as we go so your developers can own the work afterward." },
              { q: "Do you provide ongoing maintenance and support?", a: "Yes — monitoring, updates, security, performance and content support are available on ongoing care plans, so what we ship keeps performing long after launch." },
              { q: "Is WordPress still an option?", a: <>Absolutely. WordPress is one of our flagship specialties — twelve years and 400+ builds deep. We&apos;ll recommend it (custom or headless) when it&apos;s genuinely the right tool, and a full-stack build when it isn&apos;t. <Link className="accent-text" href="/wordpress">See our WordPress expertise →</Link></> },
            ]}
          />
        </div>
      </section>

      <PageCta
        title="Have a web project in mind? Let's scope it."
        lead="Book a free, no-pressure consultation. We'll review your goals and come back with a clear, honest scope — usually within one working day."
      />
    </>
  );
}

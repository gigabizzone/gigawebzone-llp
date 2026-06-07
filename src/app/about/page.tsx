import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/service/PageHero";
import { SectionHead } from "@/components/service/SectionHead";
import { StackCard } from "@/components/service/StackCard";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { PageCta } from "@/components/service/PageCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, ORG_ID, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About GigaWebZone — Full-Stack Build Studio | Founder Kiran Mulay",
  description:
    "GigaWebZone LLP is a full-stack build studio led by founder Kiran Mulay — DPIIT-recognised, debt-free, 15+ years and 400+ businesses served. Meet the team, our values and our credentials.",
  alternates: { canonical: "/about" },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  mainEntity: { "@id": ORG_ID },
};

const sl = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const ic = { fill: "none" as const, strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const TEAM = [
  { name: "Chandrakant Korde", role: "Sr. Web Developer · Server Management Expert", initials: "CK" },
  { name: "Shivani Patidar", role: "UI / UX Expert", initials: "SP" },
  { name: "Prajakta Mulay", role: "Content Writer · Social Media Marketing", initials: "PM" },
  { name: "Manisha Mulay", role: "Accounts & Admin", initials: "MM" },
  { name: "Manasi Wadekar", role: "Marketing / Sales Consultant", initials: "MW" },
  { name: "Sagar Wadekar", role: "System Design Expert", initials: "SW" },
];

const CREDS = [
  { cl: "Startup recognition", cv: "DPIIT Recognised", small: "DIPP119348" },
  { cl: "MSME registration", cv: "Udyam Registered", small: "UDYAM-MH-26-0247635" },
  { cl: "Legal entity", cv: "LLP Registered", small: "LLPIN AAV-4776" },
  { cl: "Track record", cv: "15+ years experience", small: "Debt-free, profitable" },
  { cl: "Relationships", cv: "400+ businesses", small: "45+ live projects" },
  { cl: "Based in", cv: "Pune, India", small: "Narayangaon, Junnar" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          aboutJsonLd,
        ]}
      />
      <PageHero
        current="About"
        eyebrow="About GigaWebZone"
        title={<>An engineering partner you can <span className="grad-text">actually trust.</span></>}
        lead={
          <>
            GigaWebZone LLP is a Pune-based, full-stack build studio — DPIIT-recognised,
            debt-free, and proud of every one of the 400+ businesses we&apos;ve served.
            We&apos;re not a template shop; we&apos;re the team that ships, supports, and stands
            behind the work.
          </>
        }
        primaryLabel="Work with us"
        secondaryHref="/portfolio"
        secondaryLabel="See the work"
        visual={
          <StackCard
            label="At a glance"
            layers={[
              { title: "15+ years experience", sub: "since 2011", tools: ["LLP"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" /></svg> },
              { title: "400+ businesses", sub: "served", tools: ["45+ live"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /></svg> },
              { title: "DPIIT recognised", sub: "+ Udyam", tools: ["Govt."], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M12 2l8 3v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg> },
              { title: "On-time delivery", sub: "a written commitment", tools: ["AMC"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
            ]}
          />
        }
      />

      <section className="section">
        <div className="wrap why-grid" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Our story</span>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", margin: "16px 0 0" }}>
              From WordPress specialists to a full-stack studio.
            </h2>
          </div>
          <div className="reveal" data-d="2" style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7 }}>
            <p style={{ marginBottom: 18 }}>
              GigaWebZone started where most Indian businesses start online — with WordPress.
              Over twelve years of WordPress craft and 400+ builds, we earned a reputation for
              doing it <em>properly</em>: clean code, real support, and sites that actually
              performed.
            </p>
            <p style={{ marginBottom: 18 }}>
              As our clients grew, their needs grew too — custom applications, mobile apps,
              complex portals. So we became the team that could build all of it, while keeping
              WordPress as a flagship specialty. Today GigaWebZone is a full-stack build studio,
              and our own site (built on Next.js) is proof of that range.
            </p>
            <p>
              Our mission is simple:{" "}
              <strong style={{ color: "var(--text)" }}>
                build the digital systems your business runs on — and deliver, on time
              </strong>
              . Everything we do is measured against whether it earns a client&apos;s confidence
              to act.
            </p>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap founder-grid">
          <div className="reveal">
            <div className="founder-photo">
              <Image
                src="/assets/kiran-mulay.jpg"
                alt="Kiran Mulay, Founder of GigaWebZone LLP"
                fill
                sizes="(max-width: 760px) 260px, 300px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
          <div className="reveal" data-d="2">
            <span className="eyebrow">The founder</span>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,40px)", margin: "16px 0 14px" }}>Kiran Mulay</h2>
            <p style={{ fontSize: 17, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 18 }}>
              GigaWebZone is led by an operator who has actually built, sold, and delivered —
              not a salesperson who outsources the hard part. That means honest scoping,
              realistic timelines, and a team that takes ownership from the first call to long
              after launch.
            </p>
            <div className="id-quote" style={{ background: "var(--surface)" }}>
              <blockquote>
                &ldquo;We win by being the partner clients don&apos;t have to chase. Do the work
                properly, communicate clearly, deliver on time — the trust takes care of
                itself.&rdquo;
              </blockquote>
              <div className="who">
                <span className="av">KM</span>
                <span>
                  <span className="nm">Kiran Mulay</span>
                  <span className="ti">Founder, GigaWebZone LLP</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Meet the team" title="The people behind the pixels.">
            We don&apos;t just code websites — we craft them. Behind every build is a small,
            dedicated team that owns the outcome from first call to long after launch.
          </SectionHead>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <article className="tm-card reveal" data-d={(i % 4) + 1} key={m.name}>
                <div className="tm-photo">
                  <span className="tm-initials">{m.initials}</span>
                </div>
                <div className="tm-info">
                  <div className="nm">{m.name}</div>
                  <div className="role">{m.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="The values behind every build.">
            They&apos;re not posters on a wall — they&apos;re how we make decisions on your
            project, every day.
          </SectionHead>
          <FeatureGrid
            items={[
              { title: "Proof over promises", body: "Every claim is backed by a live project, a real number, or a credential. We'd rather show than tell.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg> },
              { title: "Honest recommendations", body: "We'll tell you when WordPress is right and when it isn't — and steer you to the smarter call, even if it's smaller.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M3 6h18M3 12h18M3 18h12" /></svg> },
              { title: "On-time & transparent", body: "A fixed scope, weekly demos and a date we stand behind — so you always know what's happening.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> },
              { title: "Engineering rigor", body: "Clean, documented, production-grade code — whether it's a landing page or a multi-role platform.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg> },
              { title: "Long-term partnership", body: "Care plans, maintenance and support that keep what we build performing — we're here after launch.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M12 2l8 3v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg> },
              { title: "Outcome-driven", body: "We design around the action that matters to your business — enquiries, sales, sign-ups — not vanity polish.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg> },
            ]}
          />
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="Credentials & recognition" title="Verifiable, on the record.">
            Real registrations and recognitions carried by the parent LLP — the kind of trust
            signals you can check.
          </SectionHead>
          <div className="creds reveal">
            {CREDS.map((c) => (
              <div className="cred-item" key={c.cv}>
                <div className="cl">{c.cl}</div>
                <div className="cv">
                  {c.cv}
                  <small>{c.small}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="One house, two brands" title="Build it, then grow it — under one roof.">
            GigaWebZone LLP runs two complementary brands, so you get the full lifecycle from a
            single, accountable partner.
          </SectionHead>
          <div className="house">
            <div className="house-card build reveal" data-d="1">
              <span className="hc-tag">Build</span>
              <h3>GigaWebZone</h3>
              <p>
                The studio you&apos;re talking to — web, apps, portals and WordPress. We design,
                develop and ship the digital systems your business runs on.
              </p>
              <Link className="arrow-link" href="/">
                Explore GigaWebZone
                <ArrowRight />
              </Link>
            </div>
            <div className="house-card grow reveal" data-d="2">
              <span className="hc-tag">Grow</span>
              <h3 className="grad-text">GigaBizZone</h3>
              <p>
                Our AI growth &amp; automation brand — lead generation, automation, a managed CRM
                and marketing, priced on the outcomes they create.
              </p>
              <a
                className="arrow-link"
                style={{ color: "#ffd9b0" }}
                href="https://gigabizzone.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GigaBizZone
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Trust is earned in the work. Let's start."
        lead="Book a free, no-pressure consultation. We'll review your goals and come back with a clear, honest scope — usually within one working day."
      />
    </>
  );
}

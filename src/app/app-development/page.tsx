import type { Metadata } from "next";
import { PageHero } from "@/components/service/PageHero";
import { SectionHead } from "@/components/service/SectionHead";
import { StackCard } from "@/components/service/StackCard";
import { FeatureGrid } from "@/components/service/FeatureGrid";
import { TechStacks } from "@/components/service/TechStacks";
import { Steps } from "@/components/service/Steps";
import { CommitBand } from "@/components/service/CommitBand";
import { UseCaseGrid } from "@/components/service/UseCaseGrid";
import { RelatedWork } from "@/components/service/RelatedWork";
import { FAQ } from "@/components/service/FAQ";
import { PageCta } from "@/components/service/PageCta";
import { Shield } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const DESCRIPTION =
  "Mobile and web app development by GigaWebZone — cross-platform (Flutter, React Native), native, PWAs and web applications. Process-first and security-minded, built by an established engineering studio.";

export const metadata: Metadata = {
  title: "Mobile & Web App Development Company",
  description: DESCRIPTION,
  alternates: { canonical: "/app-development" },
};

const sl = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const ic = { fill: "none" as const, strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const uci = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function AppDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "App Development", path: "/app-development" },
          ]),
          serviceJsonLd({
            serviceType: "Mobile & Web App Development",
            name: "App Development",
            description: DESCRIPTION,
            path: "/app-development",
          }),
        ]}
      />
      <PageHero
        current="App Development"
        eyebrow="App Development · Mobile & Web"
        title={<>Apps built to feel <span className="grad-text">native</span> — and to last.</>}
        lead={
          <>
            A fast-growing capability, backed by fifteen years of engineering discipline.
            We design and build cross-platform mobile apps, progressive web apps and web
            applications — with UX, security and QA baked in from day one.
          </>
        }
        secondaryHref="#build"
        secondaryLabel="What we build"
        proof={[
          { count: 400, suffix: "+", label: "businesses served" },
          { count: 15, suffix: "+", label: "years experience" },
          { text: "DPIIT", label: "recognised" },
        ]}
        visual={
          <StackCard
            label="Platforms we build for"
            layers={[
              {
                title: "iOS",
                sub: "native",
                tools: ["Swift", "SwiftUI"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}>
                    <rect x="7" y="2" width="10" height="20" rx="2.5" />
                    <path d="M11 18h2" />
                  </svg>
                ),
              },
              {
                title: "Android",
                sub: "native",
                tools: ["Kotlin"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}>
                    <path d="M6 8a6 6 0 0 1 12 0v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
                    <path d="M8 4l-1-2M16 4l1-2M9 12h.01M15 12h.01" />
                  </svg>
                ),
              },
              {
                title: "Cross-platform",
                sub: "one codebase",
                tools: ["Flutter", "RN"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}>
                    <path d="M4 7l8-4 8 4-8 4-8-4z" />
                    <path d="M4 7v10l8 4 8-4V7" />
                  </svg>
                ),
              },
              {
                title: "Web app",
                sub: "PWA · installable",
                tools: ["React", "Next.js"],
                icon: (
                  <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
                  </svg>
                ),
              },
            ]}
          />
        }
      />

      <section className="section" id="build">
        <div className="wrap">
          <SectionHead eyebrow="What we build" title="From one idea to both app stores — and the web.">
            We help you pick the right path, then build it properly: clean code, tested,
            documented, and ready to grow.
          </SectionHead>
          <FeatureGrid
            items={[
              { title: "Cross-platform mobile apps", body: "One Flutter or React Native codebase, a native feel on both iOS and Android — faster to build, easier to maintain.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><rect x="5" y="2" width="14" height="20" rx="3" /><path d="M10 18h4" /></svg> },
              { title: "Native apps", body: "Swift and Kotlin when raw performance, device hardware or platform-specific features demand the real thing.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.6 5.7 21l2.3-7.1-6-4.5h7.6z" /></svg> },
              { title: "Progressive web apps", body: "Installable, offline-capable web apps that work on any device — no app store, instant updates.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" /></svg> },
              { title: "Web applications", body: "Dashboards, customer portals and SaaS-style tools — complex, role-based software that runs in the browser.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg> },
              { title: "App backends & APIs", body: "Authentication, payments, push notifications and real-time sync — the secure services your app runs on.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M12 2v6M12 16v6M2 12h6M16 12h6" /><circle cx="12" cy="12" r="3" /></svg> },
              { title: "Security, QA & store launch", body: "Automated testing, hardening and a guided App Store & Play Store submission — shipped right, not just shipped.", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ic}><path d="M12 2l8 3v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></svg> },
            ]}
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Where an app earns its keep"
            title="Common things we help clients put in people's pockets."
            titleStyle={{ fontSize: "clamp(28px,3.6vw,40px)" }}
          />
          <UseCaseGrid
            items={[
              { label: "Booking & appointments", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg> },
              { label: "Membership & community", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /></svg> },
              { label: "Field & on-site teams", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
              { label: "Customer self-service portals", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> },
              { label: "Internal tools & dashboards", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg> },
              { label: "Marketplaces & directories", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...uci}><path d="M3 9l1-5h16l1 5M4 9h16v11H4zM9 13h6" /></svg> },
            ]}
          />
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="Stack & approach" title="Proven tools, a process that protects your launch.">
            We choose the platform for your users and budget — then engineer it with
            testing and CI/CD from the first commit.
          </SectionHead>
          <TechStacks
            cats={[
              { heading: "Mobile", items: [{ name: "Flutter" }, { name: "React Native" }, { name: "Swift" }, { name: "Kotlin" }] },
              { heading: "Web app", items: [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "PWA" }] },
              { heading: "Backend", items: [{ name: "Node.js" }, { name: "Laravel" }, { name: "Firebase" }, { name: "REST & GraphQL" }] },
              { heading: "Quality & ship", items: [{ name: "Automated tests" }, { name: "CI/CD" }, { name: "TestFlight / Beta" }, { name: "Store submission" }] },
            ]}
          />
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="Prototype early, test on real devices, launch with confidence.">
            You validate the idea before we build the whole thing — and you see progress
            every week.
          </SectionHead>
          <Steps
            steps={[
              { num: "01", title: "Discover & scope", body: "Goals, users and platform choice — then a fixed scope, timeline and quote.", when: "Week 1" },
              { num: "02", title: "Design & prototype", body: "UX flows and UI, plus a clickable prototype so you can feel the app before code.", when: "Week 1–2" },
              { num: "03", title: "Build & test", body: "Sprints with weekly demos, real-device QA, and beta builds via TestFlight / Play Beta.", when: "Week 2 onward" },
              { num: "04", title: "Launch & iterate", body: "Store submission, monitoring, and a steady cadence of updates and improvements.", when: "Launch + ongoing" },
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
            ctaLabel="Start your app"
            ctaHref="#contact"
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CommitBand
            variant="product"
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M3 9h18M9 21V9" />
                <circle cx="6" cy="6" r="0.6" fill="#fff" />
              </svg>
            }
            tag="Already live · a real product"
            title="The GigaWebZone client app & CRM"
            body={
              <>
                Every client also gets our own <strong>branded client app and CRM</strong> — a
                live, white-label platform to track projects, message us, and manage their
                leads, all under the GigaWebZone brand. It&apos;s genuine and demoable.
              </>
            }
            note="Distinct from the bespoke app builds above — this is our own platform, shown in a live demo, not a client case study."
            ctaLabel="See it in a demo"
            ctaHref="#contact"
          />
        </div>
      </section>

      <RelatedWork
        id="work"
        tint
        eyebrow="Platform work"
        title="App-grade builds we've already shipped."
        titleStyle={{ fontSize: "clamp(28px,3.8vw,42px)", marginTop: 16 }}
        lead="Dedicated mobile-app case studies are growing as our app practice expands. Meanwhile, here's complex, app-like platform work that flexes the same engineering muscles."
        items={[
          { tags: ["E-learning", "Web app"], title: "Linguist", desc: "An online learning platform with courses, enrolment and student dashboards.", ph: "screenshot · linguist.co.in" },
          { tags: ["Learning", "Commerce"], title: "The K Junction", desc: "A combined learning-and-commerce platform with accounts, content and checkout.", ph: "screenshot · thekjunction.com" },
          { tags: ["Fintech", "Web app"], title: "MyLoanMantra", desc: "A multi-step loan-application journey with secure, role-based flows.", ph: "screenshot · myloanmantra.co.in" },
        ]}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Questions, answered" title="App development FAQs" />
          <FAQ
            items={[
              { q: "Native or cross-platform — which should I choose?", a: "For most apps we recommend cross-platform (Flutter or React Native): one codebase, both platforms, lower cost and faster updates. We go native (Swift/Kotlin) when you need maximum performance, heavy device-hardware use, or platform-specific capabilities. We'll give you an honest recommendation for your case." },
              { q: "I have an idea but no spec — can you help shape it?", a: "Yes — that's what our discovery phase is for. We help turn a rough idea into a clear scope, user flows and a clickable prototype, so you can validate it before committing to a full build." },
              { q: "How long does an app take, and what does it cost?", a: "A focused MVP typically takes 6–12 weeks; larger apps scale from there. Cost depends on platforms, features and integrations. We lock a fixed scope and quote in discovery so there are no surprises — and we can phase the build to fit a budget." },
              { q: "Do you handle App Store and Play Store submission?", a: "Yes. We prepare store listings, handle the technical submission and review process for both Apple's App Store and Google Play, and support you through approvals." },
              { q: "Do you maintain and update apps after launch?", a: "Yes — OS updates, bug fixes, new features, monitoring and security are all available on ongoing care plans. Mobile platforms move fast, and we keep your app current." },
              { q: "How is your client app/CRM different from a custom app you'd build for me?", a: <>They&apos;re two different things, and we keep that honest. The GigaWebZone client app &amp; CRM is <em>our own</em> branded, ready-to-use platform that every client gets for managing their projects and leads. A <em>bespoke app</em> is custom software we design and build specifically for you and your users. We&apos;re happy to demo the former and scope the latter.</> },
            ]}
          />
        </div>
      </section>

      <PageCta
        title="Have an app idea? Let's pressure-test it."
        lead="Book a free, no-pressure consultation. We'll talk through your idea, the right platform, and a realistic scope — usually within one working day."
      />
    </>
  );
}

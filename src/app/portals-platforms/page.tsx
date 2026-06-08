import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/service/PageHero";
import { SectionHead } from "@/components/service/SectionHead";
import { StackCard } from "@/components/service/StackCard";
import { PortalTypes } from "@/components/service/PortalTypes";
import { IntegrationsGrid } from "@/components/service/IntegrationsGrid";
import { CommitBand } from "@/components/service/CommitBand";
import { FAQ } from "@/components/service/FAQ";
import { PageCta } from "@/components/service/PageCta";
import { Shield } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { PROJECT_COUNT } from "@/lib/data/projects";

const DESCRIPTION =
  "GigaWebZone builds complex web platforms — e-commerce, LMS, booking, membership and directory/database portals. Multi-role systems with payments (UPI), WhatsApp and automation.";

export const metadata: Metadata = {
  title: "Portals & Platform Development — E-commerce, LMS, Booking",
  description: DESCRIPTION,
  alternates: { canonical: "/portals-platforms" },
};

const sl = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const pt = { fill: "none" as const, strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const ig = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export default function PortalsPlatformsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portals & Platforms", path: "/portals-platforms" },
          ]),
          serviceJsonLd({
            serviceType: "Portal & Platform Development",
            name: "Portals & Platforms",
            description: DESCRIPTION,
            path: "/portals-platforms",
          }),
        ]}
      />
      <PageHero
        current="Portals & Platforms"
        eyebrow="Portals & Platforms"
        title={<>Complex platforms, built to <span className="grad-text">run your business.</span></>}
        lead={
          <>
            E-commerce, learning, booking, membership and directory platforms — multi-role
            systems with the dashboards, payments and automation to actually operate them.
            This is the high-value work we love.
          </>
        }
        secondaryHref="#types"
        secondaryLabel="Explore platform types"
        proof={[
          { count: PROJECT_COUNT, suffix: "+", label: "live projects" },
          { count: 400, suffix: "+", label: "businesses served" },
          { count: 15, suffix: "+", label: "years experience" },
        ]}
        visual={
          <StackCard
            label="Platforms we build"
            layers={[
              { title: "E-commerce", sub: "stores & checkout", tools: ["Ayuratan"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M3 9l1-5h16l1 5M4 9h16v11H4zM9 13h6" /></svg> },
              { title: "LMS", sub: "courses & learning", tools: ["K Junction"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg> },
              { title: "Booking", sub: "scheduling", tools: ["Borneo"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18M8 15l2 2 4-4" /></svg> },
              { title: "Membership", sub: "subscriptions", tools: ["Samavesh"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /></svg> },
              { title: "Directory", sub: "listings & data", tools: ["Microdata"], icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...sl}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg> },
            ]}
          />
        }
      />

      <section className="section" id="types">
        <div className="wrap">
          <SectionHead eyebrow="Five platforms, one engineering team" title="Whatever your business runs on, we build it.">
            Each platform is a multi-role system — public front-end, customer accounts, and
            the admin dashboards and automation to operate it. Here&apos;s what we build most.
          </SectionHead>
          <PortalTypes
            types={[
              {
                num: "01 — E-COMMERCE",
                title: "E-commerce & online stores",
                body: "From a focused D2C shop to a multi-vendor marketplace — catalog, cart, payments, inventory and orders, all in one place you control.",
                chips: ["Catalog & cart", "UPI & cards", "Inventory", "Orders & shipping", "Coupons", "Multi-vendor"],
                who: "retail & D2C brands, manufacturers, agro & wholesale.",
                linkLabel: "See e-commerce work",
                exampleName: "Ayuratan",
                exampleEx: "live · e-commerce",
                domain: "ayuratan.com",
                icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...pt}><path d="M3 9l1-5h16l1 5M4 9h16v11H4zM9 13h6" /></svg>,
              },
              {
                num: "02 — LEARNING (LMS)",
                title: "Learning management systems",
                body: "Course platforms with enrolment, lessons, assessments and student dashboards — for institutes and independent educators alike.",
                chips: ["Courses & lessons", "Enrolment", "Quizzes", "Certificates", "Progress tracking", "Live classes"],
                who: "colleges, coaching institutes, e-learning brands.",
                linkLabel: "See learning platforms",
                exampleName: "The K Junction",
                exampleEx: "live · LMS",
                domain: "thekjunction.com",
                icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...pt}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>,
              },
              {
                num: "03 — BOOKING & APPOINTMENTS",
                title: "Booking & appointments",
                body: "Scheduling systems with availability, reminders and payments — customers book themselves, and you stop playing phone tag.",
                chips: ["Calendars", "Slots & availability", "Reminders", "Online payment", "Staff management"],
                who: "clinics & hospitals, salons, consultants, services.",
                linkLabel: "See booking work",
                exampleName: "Borneo Hospitals",
                exampleEx: "live · healthcare",
                domain: "borneohospitals.com",
                icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...pt}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18M8 15l2 2 4-4" /></svg>,
              },
              {
                num: "04 — MEMBERSHIP & COMMUNITY",
                title: "Membership & community",
                body: "Gated content, subscriptions and member directories — recurring revenue and an engaged community, in one platform.",
                chips: ["Member tiers", "Subscriptions", "Gated content", "Profiles", "Community"],
                who: "associations, clubs, creators, institutions.",
                linkLabel: "See membership work",
                exampleName: "Samavesh",
                exampleEx: "live · community",
                domain: "samavesh.life",
                icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...pt}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9" /></svg>,
              },
              {
                num: "05 — DIRECTORY & DATABASE",
                title: "Directory & database platforms",
                body: "Searchable directories and data-driven web apps — listings, filters and dynamic content at scale. Our \"Advance Dynamic / Database\" specialty.",
                chips: ["Listings", "Search & filters", "Maps", "Submissions", "Admin dashboards"],
                who: "marketplaces, listing sites, data platforms.",
                linkLabel: "See directory work",
                exampleName: "Microdata Global",
                exampleEx: "live · database",
                domain: "microdataglobal.com",
                icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...pt}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>,
              },
            ]}
          />
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="Integrations" title="Connected to the tools your business already uses.">
            Payments, messaging, logistics and growth — wired in securely, the way Indian
            businesses actually operate.
          </SectionHead>
          <IntegrationsGrid
            items={[
              { title: "Payments & UPI", sub: "Razorpay, UPI, cards, EMI", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ig}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg> },
              { title: "WhatsApp", sub: "Notifications & chat", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ig}><path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5z" /></svg> },
              { title: "Email & SMS", sub: "Transactional & campaigns", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ig}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7 10-7" /></svg> },
              { title: "Analytics", sub: "GA4 & event tracking", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ig}><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg> },
              { title: "CRM & automation", sub: "Routed via GigaBizZone", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ig}><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /><circle cx="12" cy="12" r="3" /></svg> },
              { title: "Logistics & shipping", sub: "Couriers & tracking", icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ig}><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 3v5h-7zM5.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg> },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <CommitBand
            icon={<Shield />}
            title="The On-Time Delivery Commitment"
            body="Platforms are big projects — so we agree a delivery date up front and stand behind it. If a milestone we control slips, there's a defined remedy, in writing, before we start."
            tbd
            ctaLabel="Scope your platform"
            ctaHref="#contact"
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead center eyebrow="Questions, answered" title="Portals & platforms FAQs" />
          <FAQ
            items={[
              { q: "Which platform type fits my business?", a: "That's exactly what our discovery phase figures out. Often it's a blend — e.g. a store with memberships, or a directory with booking. We map your goals to the right mix and give you a clear scope before any code is written." },
              { q: "Can you integrate payments and UPI?", a: "Yes — Razorpay, UPI, cards, net-banking and EMI are standard. We also wire in WhatsApp notifications, email/SMS, analytics and shipping, so the platform fits how Indian businesses actually run." },
              { q: "Can it handle multiple user roles or vendors?", a: "Absolutely. Multi-role access (admins, staff, vendors, members, customers) with permissions is core to platform work — including multi-vendor marketplaces and institution-wide systems." },
              { q: "Do you build on WordPress/WooCommerce or fully custom?", a: "Both. For many stores and LMS builds, a clean WooCommerce or LMS implementation is the fastest, most maintainable route. For complex, high-scale or unusual logic, we build fully custom. We recommend the right tool, not the one we feel like using." },
              { q: "Can you add automation and a CRM after launch?", a: <>Yes. Lead capture, follow-up automation and a managed CRM are handled by our sister brand, GigaBizZone — so your platform doesn&apos;t just run, it grows. <Link className="accent-text" href="/#sister">Meet GigaBizZone →</Link></> },
            ]}
          />
        </div>
      </section>

      <PageCta
        title="Have a platform to build? Let's map it."
        lead="Book a free, no-pressure consultation. We'll turn your requirements into a clear platform scope, timeline and quote — usually within one working day."
      />
    </>
  );
}

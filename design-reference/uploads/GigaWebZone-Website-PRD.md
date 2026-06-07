# Product Requirements Document (PRD)
## GigaWebZone LLP — Corporate Website Revamp

| Field | Detail |
|---|---|
| Document title | GigaWebZone Website Revamp — PRD |
| Version | 1.1 (Revised — key decisions locked) |
| Owner | Kiran Mulay, Founder — GigaWebZone LLP |
| Prepared as | Content & digital strategy specification |
| Current site | https://gigawebzone.com |
| Sister brand | GigaBizZone — https://gigabizzone.com |
| Date | June 2026 |
| Status | Revised draft (v1.1) — platform, CRM & delivery-commitment decisions confirmed |

---

> **Revision note (v1.1):** Three decisions are now locked — (1) the site will be built on **Next.js** (replacing WordPress); (2) the **CRM/client app** is a GigaWebZone-branded white-label product running on GoHighLevel agency infrastructure, used by clients entirely under the GigaWebZone brand; (3) an **On-Time Delivery Commitment** will be adopted, echoing GigaBizZone's guarantee. Sections 6.4, 7.3, 10.3, 12, 16, 17, 18, 20, and 21 reflect these.

---

## 1. Executive Summary

GigaWebZone LLP is repositioning from a *WordPress website-design agency* into a **full-stack digital build studio** — covering full-stack web development, mobile and web application development, and complex portals (e-commerce, LMS, booking, membership, directory/database) — while retaining and elevating its proven WordPress expertise as a named specialty.

The website is the company's single most important sales asset. Its job is not to "list services" but to **make a prospective client feel confident enough to hand over their project and budget**, trusting that GigaWebZone will deliver the best result, on time. Every page, section, and word in this PRD is evaluated against that one purpose: *does this build the visitor's confidence to act?*

This document specifies the goals, audience, positioning, architecture, page-by-page content requirements, trust framework, design direction (light-default with dark-mode toggle), technical requirements, and the migration/launch plan for the new site.

---

## 2. Background & Current-State Summary

The existing site is a WordPress/Elementor build whose messaging is consistently anchored to "Top Website Design and Development Company" and WordPress. It has real strengths to preserve and clear problems to fix.

**Strengths to carry forward**
- Strong, real social proof: 400+ businesses served and named client testimonials (doctors, college principals, founders).
- A substantial live portfolio (45 projects — see Appendix A).
- Reasonable SEO foundations (canonical tags, OpenGraph/Twitter meta, indexable).
- An active blog/content engine.
- Credible compliance credentials (DPIIT, Udyam) carried by the parent LLP.

**Problems this revamp must resolve**
- Identity is too narrow — everything says "WordPress websites," with no signal of full-stack, apps, portals, or the growth/automation capability of the group.
- Trust-credibility bugs: homepage stat counters render "0+", testimonial name typos, a broken footer Blog link, a mismatched "Booking & Appointment" link, and a non-functional YouTube link.
- Information architecture bloat: several solution pages are duplicated three times under different parents, causing SEO cannibalization and a confusing mega-menu.
- Visual tone: dark-by-default theme reads heavy for the SMB/institutional audience and reduces readability and conversion.

---

## 3. Goals & Objectives

### 3.1 Primary business goal
Convert qualified visitors into consultation/enquiry leads by establishing GigaWebZone as a capable, trustworthy, full-lifecycle digital partner.

### 3.2 Strategic objectives
1. **Reposition** the brand from WordPress shop to full-stack studio, without discarding WordPress authority.
2. **Build trust** so a visitor feels safe entrusting a project — through proof, transparency of process, and credibility markers.
3. **Showcase breadth and depth** of capability across web, apps, and portals.
4. **Cross-sell the group** — surface GigaBizZone (AI growth & automation) as the natural next step after a build.
5. **Modernize the experience** — light-default design with dark-mode toggle, fast, mobile-first, accessible.
6. **Protect SEO equity** through a disciplined migration.

### 3.3 The trust mandate (the core purpose)
Every page must answer the four questions a hesitant buyer silently asks:
- *Can they actually do this?* (capability proof)
- *Have they done it for someone like me?* (relevant evidence)
- *Will they deliver on time and communicate?* (process transparency)
- *Is it safe to choose them?* (credentials, guarantees, real people)

---

## 4. Success Metrics (KPIs)

| Category | Metric | Target direction |
|---|---|---|
| Conversion | Consultation/enquiry form submissions | Increase |
| Conversion | Enquiry rate (% of sessions submitting) | Increase |
| Engagement | Avg. pages/session; portfolio & service-page depth | Increase |
| Engagement | Bounce rate on key landing pages | Decrease |
| Trust | Scroll-depth to testimonial/case-study sections | Increase |
| SEO | Indexed pages retained post-migration; ranking for target keywords | Retain/Improve |
| Performance | Core Web Vitals (LCP, INP, CLS) | Pass in both themes |
| Cross-sell | Click-throughs to GigaBizZone | Track + grow |

*Note: baselines should be captured from current Google Analytics/Search Console before launch.*

---

## 5. Target Audience & Personas

GigaWebZone serves Indian SMBs and institutions. Representative personas (grounded in current clients):

1. **The Institution Decision-Maker** — college principal, trust secretary, foundation head (e.g. Seth Hirachand Mutha College, Namita Education Foundation). Values credibility, references, online-learning capability, long-term support.
2. **The Professional / Practice Owner** — doctor, consultant, author, astrologer, energy expert (e.g. Dr Mohan Venkatesh Pulle, Gauranga Das). Values a professional image, clarity, reliability, and being understood.
3. **The SME Founder / Business Owner** — e-commerce, manufacturing, warehousing, agro, services (e.g. GroundZero, Sattvam Agro, Bhavya Warehousing). Values ROI, sales growth, modern functionality, speed.
4. **The Fintech / Regulated-Services Owner** — loan/financial services (e.g. MyLoanMantra). Values trust signals, security, and a frictionless customer journey.
5. **The Growth-Stage Buyer (cross-sell target)** — an existing or new client who, after a build, needs leads and automation → routed to GigaBizZone.

Each service and industry page should be written so at least one persona sees themselves immediately.

---

## 6. Brand Positioning & Messaging Strategy

### 6.1 Positioning statement
> GigaWebZone is a full-stack digital build studio for Indian businesses — engineering high-performing websites, applications, and portals, with deep WordPress specialism at its core and an AI-powered growth engine (GigaBizZone) under the same roof.

### 6.2 Messaging hierarchy
- **Primary message:** "We build the digital systems your business runs on — and we deliver, on time."
- **Supporting pillars:** Full-stack engineering · App development · Portals & platforms · WordPress expertise.
- **Proof spine:** 400+ businesses · 5 years operating · DPIIT-recognised · named clients · 45+ live projects.
- **Growth bridge:** "Beyond building — we help you grow," linking to GigaBizZone.

### 6.3 The WordPress framing (important)
WordPress is **not** removed or downplayed as a competency — it is repositioned from "the whole identity" to "a flagship specialty." Messaging: *"WordPress specialists who also engineer full-stack."* This reassures existing WordPress demand while signaling expanded capability.

### 6.4 The two-brand relationship
GigaWebZone (build) and GigaBizZone (grow/automate) are two brands of one entity, GigaWebZone LLP. The site presents the full lifecycle, with growth/automation delivered through GigaBizZone.

GigaWebZone offers its **own GigaWebZone-branded client app and CRM** — a white-label platform (built on GoHighLevel agency infrastructure) that clients experience entirely under the GigaWebZone brand. Site copy can therefore confidently say "our branded CRM and client app"; it should not claim the underlying engine was built from scratch, and the GoHighLevel layer need not be named publicly. This is accurate, demoable, and a genuine differentiator.

### 6.5 Tone of voice
Confident, specific, benefit-led, jargon-light, and honest. Short headlines; concrete claims backed by proof; no hollow superlatives. Indian-business-aware (UPI, WhatsApp, vernacular context where relevant).

---

## 7. Scope

### 7.1 In scope
- Full content and IA redesign across the nine primary pages (Section 10).
- Light-default visual redesign with dark-mode toggle and a token-based design system.
- Trust framework, case studies, testimonials, credentials.
- Lead-capture forms integrated with the CRM.
- GigaBizZone cross-brand integration.
- SEO migration (redirect map, page de-duplication).
- Blog retained and re-linked.

### 7.2 Out of scope (this phase)
- Rebuilding GigaBizZone (separate brand/site).
- Building the CRM product itself.
- Paid-media campaign creation (separate workstream).
- Multilingual site (note as a future consideration).

### 7.3 Platform decision (LOCKED — Next.js)
**The new site will be built on Next.js**, replacing the current WordPress/Elementor build. See Section 16 for stack implications. All content/UX requirements in this PRD remain valid; the platform choice actively strengthens the repositioning, because the site itself becomes a live demonstration of the company's Next.js/full-stack capability. (Note: GigaWebZone continues to *offer* WordPress as a service — building its own site in Next.js simply proves the broader capability while WordPress remains a flagship specialty.)

---

## 8. Information Architecture / Sitemap

Primary navigation (the nine pages this PRD covers):

1. **Home**
2. **Web Development** (Full-Stack)
3. **App Development** (Mobile + Web)
4. **Portals & Platforms** (E-commerce, LMS, Booking, Membership, Directory/Database)
5. **WordPress** (Expertise hub)
6. **Industries** (deduplicated solutions)
7. **Portfolio**
8. **About**
9. **Contact**

Secondary/utility: Blog/Insights, GigaBizZone (cross-link, may live in nav or as a recurring section), Privacy Policy, Terms, sitemap.xml.

**IA principles**
- One canonical page per topic — eliminate the triple-duplicated solution pages; 301-redirect retired URLs.
- Services organized by *capability*; Industries organized by *audience*; the two interlink (e.g. "E-commerce" capability ↔ "Retail/Fashion" industry).
- Maximum two levels of nav depth; no overwhelming mega-menu.

---

## 9. Global / Site-Wide Requirements

### 9.1 Header & navigation
- Logo; primary nav (9 items, condensed via grouped dropdowns if needed); **dark-mode toggle**; persistent primary CTA ("Get a Free Consultation").
- Sticky on scroll; fully responsive; keyboard-accessible.

### 9.2 Footer
- Concise services/industries columns (no duplicate-page sprawl), contact block, social links (all functional — fix YouTube), compliance badges (DPIIT, Udyam), GigaBizZone link, legal links. Correct the Blog link.

### 9.3 Theming (light default + dark toggle)
- **Light mode is default.** Token-based system: semantic tokens (`--bg`, `--surface`, `--text-primary`, `--text-muted`, `--border`, `--brand`, `--brand-contrast`) defined for light on `:root`, overridden under `[data-theme="dark"]`.
- Light: near-white background (~#FAFAFB), near-black text (~#1A1D24). Dark: soft charcoal (~#0F1115), light text (~#E6E8EC). Never pure black/white.
- Brand accent identical in both themes; respect `prefers-color-scheme` on first visit, explicit toggle overrides.
- WCAG AA contrast (≥4.5:1 body text) verified in **both** themes.
- Visual DNA harmonized with GigaBizZone so the two read as siblings.

### 9.4 Conversion & lead capture
- Primary CTA repeated at natural decision points on every page.
- Forms feed the CRM (GigaBizZone/GoHighLevel) with source tracking; WhatsApp quick-contact (existing +91 8108400599).
- Minimal-friction form fields; spam protection (note: avoid CAPTCHAs that harm UX where possible).

### 9.5 SEO
- Unique title/meta/OG per page; semantic headings; schema.org markup (Organization, LocalBusiness, BreadcrumbList, Review/AggregateRating, CreativeWork for portfolio, FAQPage where used).
- XML sitemap; clean canonical strategy; fast, crawlable.

### 9.6 Performance & technical NFRs
- Core Web Vitals pass on mobile in both themes; optimized/next-gen images (WebP/AVIF); lazy-loading; minimal render-blocking.
- HTTPS; security headers; uptime monitoring.

### 9.7 Accessibility
- WCAG 2.1 AA: alt text, focus states, keyboard nav, semantic landmarks, accessible color contrast, reduced-motion support.

### 9.8 Analytics & compliance
- GA4 + Search Console + event tracking on CTAs/forms; consent handling compliant with India's DPDP Act 2023; privacy-preserving cookie defaults.

---

## 10. Page-by-Page Requirements

> For each page: **Purpose** (its job in the trust journey), **Primary audience/intent**, **Required sections**, **Trust elements**, **CTAs**, **SEO focus**, **Success criteria.**

### 10.1 Home
- **Purpose:** Establish in 5 seconds *what GigaWebZone is now* (full-stack studio, not just WordPress) and earn enough trust to explore or enquire.
- **Intent:** Orientation + credibility + routing.
- **Required sections:**
  1. Hero — repositioned headline + subhead + primary/secondary CTA + credibility strip (400+ businesses · 5 years · DPIIT-recognised). **Fix: real numbers, no "0+".**
  2. Capability pillars — Full-Stack Web Dev · App Development · Portals & Platforms · WordPress (4 cards, equal weight, WordPress as specialty).
  3. Proof band — animated, *accurate* counters (projects, clients, years) with live values.
  4. Featured work — 6 curated portfolio items with industry tags, linking to Portfolio.
  5. Why choose us — proof-led differentiators (on-time delivery, conversion-driven design, mobile-first, ongoing support).
  6. Testimonials — 3–4 strongest, named, with title/organization (typos corrected).
  7. Industries served — quick grid linking to Industries.
  8. **GigaBizZone band** — "Beyond building, we help you grow" (core value, services, SMB benefits, link out).
  9. Process snapshot — 3–4 step "how we work" for delivery confidence.
  10. Final CTA + footer.
- **Trust elements:** credentials, named testimonials, real metrics, recognizable client logos/sites.
- **CTAs:** "Get a Free Consultation" (primary), "See our work" (secondary).
- **SEO focus:** brand + "full stack web development company India / Pune," "website development company."
- **Success criteria:** clear comprehension of expanded positioning; high scroll-through to proof; CTA clicks.

### 10.2 Web Development (Full-Stack)
- **Purpose:** Prove serious engineering capability beyond WordPress.
- **Intent:** Evaluate technical depth and fit.
- **Required sections:** intro/positioning; what we build (custom web apps, full-stack sites, headless, API/integration work, performance engineering); tech stack (front-end, back-end, databases, cloud) — concrete and current; process & delivery model; relevant portfolio filtered to web/tech projects; FAQs; CTA.
- **Trust elements:** named stack, architecture/process clarity, relevant case study, on-time-delivery messaging.
- **CTAs:** consultation; "discuss your project."
- **SEO focus:** "full stack web development," "custom web application development India."
- **Success criteria:** visitor believes GigaWebZone can build complex custom software, not just sites.

### 10.3 App Development (Mobile + Web)
- **Purpose:** Establish credible app-development capability (a new pillar).
- **Required sections:** mobile (Android/iOS, cross-platform) and web-app capability; use cases; stack/approach; UX process; security & maintenance; relevant work or honest "now offering" framing if portfolio is thin; FAQs; CTA.
- **Trust elements:** process rigor, security/QA mention, any app proof; transparent capability statement.
- **CTAs:** consultation.
- **SEO focus:** "mobile app development company India," "web application development."
- **Success criteria:** app enquiries; perceived competence.
- **Content note:** Keep two different claims distinct. (a) **Bespoke mobile/web app development** — if custom-app case studies are limited, lead with process, capability, and approach rather than implying a deep track record. (b) **The GigaWebZone-branded client app & CRM** — a genuine, live, demoable product (white-label, used by clients under the GigaWebZone brand). Present (b) within the CRM/client-app and growth narrative; do not let it stand in as proof of (a). Honesty across both protects trust.

### 10.4 Portals & Platforms
- **Purpose:** Show GigaWebZone builds complex, functional platforms — the high-value work.
- **Required sections:** overview; **sub-sections per portal type** — E-commerce, Learning Management (LMS), Booking & Appointments, Membership/Community, Directory/Database & dynamic web apps; for each: what it does, features, who it's for, example/portfolio link; integrations (payments/UPI, WhatsApp, etc.); CTA.
- **Trust elements:** real examples mapped to types (e.g. e-commerce: Ayuratan, GZDrones, Sattvam Agro; LMS/e-learning: Linguist, The K Junction, college platforms; directory/dynamic: "Advance Dynamic-Database" portfolio category).
- **CTAs:** consultation; per-type "discuss your portal."
- **SEO focus:** "ecommerce website development," "LMS development India," "membership website," "booking website."
- **Success criteria:** higher-value platform enquiries.

### 10.5 WordPress (Expertise hub)
- **Purpose:** Retain and reinforce WordPress authority — reassure the existing demand stream while framing it as one specialty.
- **Required sections:** WordPress positioning ("specialists, proven at scale"); capability spread (custom themes/plugins, Gutenberg blocks, headless WordPress, REST API, WooCommerce, AI integration, automation); management & care (security, maintenance, performance, backup/migration, white-label, troubleshooting); why WordPress / when it's the right choice; WordPress portfolio; CTA.
- **Trust elements:** depth of sub-services (already a genuine strength), maintenance/support = long-term reliability, white-label = trusted by other agencies.
- **CTAs:** consultation; "WordPress support plans."
- **SEO focus:** "WordPress development company India," "WooCommerce," "headless WordPress," "WordPress maintenance services."
- **Success criteria:** preserves existing WordPress lead flow + ranking.

### 10.6 Industries
- **Purpose:** Let each buyer self-identify and see relevant proof ("they've done this for someone like me").
- **Required sections:** industry grid → individual industry views (consolidated, **deduplicated**): Education & E-learning; Healthcare; Professional Services; E-commerce/Retail & Fashion; Real Estate & Hospitality; Financial Services; Nonprofit; Manufacturing/Industrial & Warehousing; Technology/Media. Each: pains addressed, relevant capabilities, matching portfolio, a testimonial from that sector, CTA.
- **Trust elements:** sector-specific testimonials and live projects (the portfolio maps cleanly to these).
- **CTAs:** consultation per industry.
- **SEO focus:** "[industry] website development India."
- **Success criteria:** strong relevance signal; deduplicated, non-cannibalizing pages.

### 10.7 Portfolio
- **Purpose:** The proof engine — demonstrate volume, range, and quality of delivered work.
- **Required sections:** filterable gallery (by capability type *and* industry); each item: screenshot, client/site, category tags, link to a project-detail page; project-detail template (challenge → solution → result, stack, live link, testimonial if available). Headline with real volume ("45+ live projects / 400+ businesses").
- **Trust elements:** real, clickable live sites; outcomes where available; breadth across sectors.
- **CTAs:** "Start your project."
- **SEO focus:** project pages as long-tail/branded entries; CreativeWork schema.
- **Success criteria:** deep engagement; portfolio→contact path conversion.
- **Content note:** Migrate all 45 existing projects (Appendix A); prioritize converting at least 6–10 into full case studies with measurable outcomes.

### 10.8 About
- **Purpose:** Humanize the company and convert capability into *trust in the people*.
- **Required sections:** company story & mission; the operator/founder (Kiran Mulay) — the credible "operator who has built, sold, and delivered" narrative; team/expertise; values & working approach; credentials & recognitions (DPIIT DIPP119348, Udyam UDYAM-MH-26-0247635, LLPIN AAV-4776, 5 years, debt-free, 400+ relationships); the two-brand group (GigaWebZone + GigaBizZone); why clients trust us; CTA.
- **Trust elements:** real founder story, verifiable credentials, longevity, group structure.
- **CTAs:** consultation; "meet the team"/"contact."
- **SEO focus:** brand, "about GigaWebZone," founder name.
- **Success criteria:** perceived legitimacy and stability.

### 10.9 Contact
- **Purpose:** Make enquiring effortless and reassuring.
- **Required sections:** short, low-friction enquiry form (with optional project-type/budget selectors feeding CRM routing); direct channels (phone +91 8108400599, email, WhatsApp); office address (NarayanGaon, Junnar + Pune presence); working hours; map; response-time expectation; reassurance microcopy ("Free consultation, no obligation").
- **Trust elements:** real address, fast-response promise, multiple contact modes, privacy reassurance (DPDP-compliant).
- **CTAs:** submit enquiry; WhatsApp; call.
- **SEO focus:** "contact GigaWebZone," local SEO (LocalBusiness schema, Google Business Profile alignment).
- **Success criteria:** primary conversion point; high completion rate.

---

## 11. Content Strategy

- **Voice:** confident, specific, honest, benefit-led (Section 6.5).
- **Proof-first writing:** every capability claim paired with evidence (a project, a metric, a credential).
- **Consistency:** standardize client names/titles; **fix all testimonial typos** (e.g. "Gauranga Das," "Anuja Brahma," "Suneelkumar Singh").
- **Case studies:** convert top projects into challenge/solution/result narratives.
- **Blog/Insights:** retain, re-link correctly, and align topics to the new pillars (full-stack, apps, portals) alongside existing WordPress/industry content.
- **CTAs:** consistent primary ("Get a Free Consultation"); secondary tuned per page.

---

## 12. Trust & Credibility Framework (the spine of the site)

Because the stated purpose is to make clients confident to hand over work, trust elements are **requirements, not decoration**, and must recur site-wide:

1. **Evidence:** 45+ live projects, filterable; 6–10 full case studies with outcomes.
2. **Voices:** named testimonials with title + organization + (ideally) photo and linked live site.
3. **Credentials:** DPIIT, Udyam, LLPIN, years operating, debt-free, 400+ relationships — shown on Home, About, footer.
4. **Process transparency:** a clear "how we work" with timelines and communication cadence — directly addresses "will they deliver on time?"
5. **On-Time Delivery Commitment (adopted):** a defined, named delivery commitment — echoing GigaBizZone's Confidence 30 Guarantee — shown on Home, service pages, and Contact. Exact terms (scope covered, what counts as "on time," and the remedy if a deadline is missed) must be defined precisely and reviewed before publication, since it is a binding commercial promise. Avoid vague wording; specificity is what builds trust and protects the business.
6. **Real people:** founder story and team.
7. **Reachability:** multiple contact modes + stated response time.
8. **Risk reduction:** free consultation; consider a delivery commitment echoing GigaBizZone's guarantee ethos.

---

## 13. Design Direction

- Light-default, dark-toggle, token-based system (Section 9.3).
- Modern, spacious, premium agency/SaaS aesthetic; strong typographic hierarchy; subtle depth and motion; mobile-first.
- Sibling visual DNA with GigaBizZone (shared system, distinct accent).
- Avoid: heavy all-dark default, cluttered Elementor-style stacks, generic stock heroes, generic-AI gradients.
- A detailed design-generation brief already exists (for Claude Design) and should be treated as the companion to this PRD.

---

## 14. Functional Requirements

- Theme toggle with persistence and system-preference detection.
- Filterable portfolio (capability + industry) with project-detail template.
- CRM-integrated lead forms with source/UTM capture and routing by project type.
- WhatsApp contact integration.
- Blog/Insights with categories.
- Search (optional, recommended for portfolio/blog).
- Accessible, responsive components across breakpoints.

---

## 15. Non-Functional Requirements

- **Performance:** CWV pass (mobile, both themes); image optimization; lazy-load.
- **Accessibility:** WCAG 2.1 AA.
- **Security:** HTTPS, security headers, hardened CMS/stack, spam protection.
- **Compliance:** DPDP Act 2023 (consent, privacy policy, data handling); TRAI rules for any commercial messaging.
- **Scalability/maintainability:** component-based, documented design tokens, easy content updates.
- **Browser/device support:** current evergreen browsers; Android/iOS mobile.

---

## 16. Technical & Platform (Next.js — decided)

The site will be built on **Next.js** (React), replacing the current WordPress/Elementor build. This decision directly reinforces the repositioning: the company's own site becomes a working demonstration of its Next.js/full-stack capability.

**Stack & implementation notes**
- **Framework:** Next.js (App Router) using SSR/SSG/ISR for fast, SEO-friendly rendering and strong Core Web Vitals.
- **Styling/theming:** CSS variables (design tokens) with light-default/dark-toggle implemented via a theme provider (e.g. `next-themes`) that handles system-preference detection, persistence, and SSR without a flash of incorrect theme.
- **Content/CMS (sub-decision required):** decide how Blog/Insights and editable content are managed — options include **headless WordPress** (reuse existing content and authoring familiarity), a **modern headless CMS** (e.g. Sanity, Contentful, Payload), or **file-based MDX**. This choice drives the blog migration in Section 17.
- **Forms/CRM:** server actions / API routes posting into the branded CRM (Section 18) with source/UTM capture.
- **Hosting:** a Next.js-optimized host (e.g. Vercel) or equivalent, with HTTPS, security headers, and uptime monitoring.
- **Component system:** reusable, token-driven components sharing visual DNA with GigaBizZone so the two brands read as siblings.

**Implication:** because this is a full re-platform (not a redesign on the same CMS), URLs and templates are rebuilt from scratch — which makes the migration plan in Section 17 critical to protect SEO equity.

---

## 17. SEO & Migration Plan

This is a **full re-platform** from WordPress to Next.js, so every URL and template is rebuilt — disciplined migration is essential to protect SEO equity.

1. Capture baselines before launch (GA4, Search Console: top pages, keywords, backlinks).
2. Build a **URL redirect map**: every existing WordPress URL → its new Next.js canonical (301). Preserve slugs where sensible to retain ranking equity.
3. **De-duplicate** the triplicated solution pages into single canonical Industry pages (301 the retired ones).
4. **Migrate Blog/Insights content** per the CMS sub-decision (Section 16); retain or 301 each post URL; fix the broken internal Blog link.
5. Re-implement metadata, headings, and schema with parity or improvement over the old pages.
6. Submit a new sitemap; monitor Search Console for crawl errors and ranking shifts post-launch; keep old content reachable via redirects rather than deletion.

---

## 18. CRM, Branded Client App & Lead Capture

- GigaWebZone provides its **own GigaWebZone-branded client app and CRM** — a white-label solution running on GoHighLevel agency infrastructure. **Clients see and use the GigaWebZone brand, not GoHighLevel.** It is a genuine, demoable product and a legitimate proof point for the CRM / lead-automation offering.
- Public site copy should call it "the GigaWebZone client app & CRM" or "our branded CRM and client portal" — accurate and confident. The underlying GoHighLevel infrastructure is internal detail and is not named publicly.
- All site forms route into this CRM with source/UTM attribution.
- Segment enquiries by project type (web / app / portal / WordPress / growth) for routing and follow-up automation.
- Growth / automation / marketing enquiries are routed into the GigaBizZone workflow.
- Honor DPDP Act 2023 consent at the point of capture.

---

## 19. Project Phases & Roadmap

| Phase | Focus | Indicative window |
|---|---|---|
| 0 | Decisions (platform) + quick fixes (counters, broken links, typos) | Week 1–2 |
| 1 | Strategy & IA lock, positioning, copy hierarchy, page de-duplication plan | Week 2–4 |
| 2 | Design system (light/dark), homepage + key templates | Week 4–6 |
| 3 | Build + content writing + case studies + CRM forms | Week 6–10 |
| 4 | Migration (301s), QA (both themes, mobile, a11y), launch, monitor | Week 10–12 |

---

## 20. Risks & Assumptions

**Risks**
- SEO equity loss if redirects are mishandled → mitigate with a complete redirect map and post-launch monitoring.
- Over-claiming new capabilities (apps/CRM) without proof → mitigate with honest "now offering" framing and rapid case-study creation.
- Re-platform execution risk (full WordPress → Next.js rebuild + migration) → mitigate with a complete redirect map, a content/blog migration plan, and staged QA on a staging environment.
- The On-Time Delivery Commitment is a binding promise → define its terms precisely, review before publishing, and track delivery performance so it can be honored consistently.
- Brand confusion between GigaWebZone and GigaBizZone → mitigate with clear "one house, two brands" framing.

**Assumptions**
- Existing testimonials and projects can be used/displayed with permission.
- Compliance credentials are current and verifiable.
- CRM (GoHighLevel) is available for form integration.

---

## 21. Decisions Locked & Remaining Questions

**Locked (v1.1)**
- **Platform:** Next.js (Section 16).
- **CRM / client app:** GigaWebZone-branded white-label client app & CRM on GoHighLevel infrastructure (Section 18).
- **On-Time Delivery Commitment:** adopted, echoing GigaBizZone's guarantee (Section 12) — terms to be finalized.

**Still to decide**
1. **Content/CMS for Next.js:** headless WordPress vs. modern headless CMS vs. MDX — affects blog migration (Sections 16–17).
2. **On-Time Delivery Commitment terms:** exact scope, definition of "on time," and remedy if missed — define precisely and review before publishing (a binding commercial promise).
3. **Brand model:** GigaWebZone presents the full lifecycle ("powered by GigaBizZone") vs. strict build-only with referral.
4. **Brand accent color:** does GigaWebZone adopt a defined hue, and how does it relate to GigaBizZone's palette (sibling DNA)?
5. **Budget & timeline** confirming the roadmap in Section 19.

---

## Appendix A — Current Portfolio Inventory (45 live projects)

*Retrieved from the existing site for migration. Tags reflect current site categorization.*

| # | Project (site) | Category tag(s) |
|---|---|---|
| 1 | khsi.in | Fashion & Beauty |
| 2 | siddharthcollegebadlapur.edu.in | Education Institutions |
| 3 | siddharthbedcollege.edu.in | Education Institutions |
| 4 | preranaclasses.in | Education Institutions |
| 5 | gaurangadarshandas.com | Fitness & Wellness; Professional Services |
| 6 | astrotattva.com | Professional Services |
| 7 | microdataglobal.com | Commercial Solutions |
| 8 | samavesh.life | Education Institutions; Professional Services |
| 9 | shmutha.org | Education Institutions |
| 10 | enthalpyasia.com | Professional Services |
| 11 | myloanmantra.co.in | Financial Services |
| 12 | yogeshprabhu.com | Education Institutions |
| 13 | devintech.net | E-Commerce platform |
| 14 | sharadeyconsultants.com | Job Board and Recruitment |
| 15 | an-enterprises.co.in | Commercial Solutions |
| 16 | ayuratan.com | E-Commerce; Fashion & Beauty; Fitness & Wellness |
| 17 | thakkerassociates.com | Institutional Solutions; Professional Services |
| 18 | suradkarelectrical.com | Professional Services |
| 19 | tanishagroup.in | Commercial Solutions |
| 20 | fourcodsindia.in | Nonprofit Organisations |
| 21 | energyscience.in | Professional Services |
| 22 | sostahk.org | Education Institutions |
| 23 | aurascience.in | Professional Services |
| 24 | vastuaura.in | Professional Services |
| 25 | ibdp7.com | Education Institutions |
| 26 | 5dayswebsite.in | Technology and Digital |
| 27 | fidelityinternationalexports.in | Commercial Solutions |
| 28 | rptoindia.com | Automotive Industry; Professional Services |
| 29 | jaikritspeakerbureau.com | Entertainment and Media; Event Management |
| 30 | borneohospitals.com | Healthcare Providers |
| 31 | propvistaaviation.com | Automotive Industry; Travel & Hospitality |
| 32 | auraphotoscience.com | Professional Services |
| 33 | hotelsamudracity.in | Travel & Hospitality |
| 34 | daivjyotsh.com | Education Institutions; Professional Services |
| 35 | jaikritbranding.com | Technology and Digital |
| 36 | vastumyhome.com | Professional Services |
| 37 | gzdrones.com | E-Commerce platform |
| 38 | kfpclwarehouse.in | Commercial Solutions |
| 39 | groundzero.net.in | Automotive Industry; E-Commerce platform |
| 40 | sattvamagro.in | E-Commerce platform |
| 41 | bhavyawarehousing.com | Commercial Solutions |
| 42 | thekjunction.com | E-Commerce; Online Learning Platform; Professional Services |
| 43 | linguist.co.in | Education Institutions; Online Learning Platform |
| 44 | sadhubellacollege.org | Education Institutions |
| 45 | doctorwordpress.in | Technology and Digital |

**Existing portfolio taxonomy (to rationalize):** Portfolio types — Advance Dynamic/Database, Business, E-Commerce, E-Learning. Industry tags (19) — Automotive, Commercial Solutions, E-Commerce, Education Institutions, Entertainment & Media, Event Management, Fashion & Beauty, Financial Services, Fitness & Wellness, Healthcare Providers, Industrial, Institutional Solutions, Job Board & Recruitment, Nonprofit, Online Learning Platform(s), Professional Services, Technology & Digital, Travel & Hospitality.

---

## Appendix B — Testimonial Inventory (correct names/titles before publishing)

| Client | Title / Organization | Sector |
|---|---|---|
| Dr Mohan Venkatesh Pulle | Lung Surgeon | Healthcare |
| Dr. Santosh Madrewar | CEO, Borneo Hospitals | Healthcare |
| Gauranga Das | Director, Govardhan Ecovillage | Professional/Spiritual |
| Anuja Brahma | Principal, Seth Hirachand Mutha College | Education |
| Rahul Ambegaokar | Founder & CEO, GroundZero LLP | E-commerce/Auto |
| Nagesh Jadhav | Founder & CEO, Namita Education Foundation | Education |
| Suneelkumar Singh | Owner, MyLoanMantra | Financial Services |
| Mukesh Shah | Energy Expert | Professional Services |

---

## Appendix C — Immediate Fixes (independent of redesign)

- Replace homepage "0+" counters with real values.
- Fix footer Blog link (→ /gigawebzone-blog/).
- Fix "Booking & Appointment" link to point to the correct booking page (not travel & hospitality).
- Make the header YouTube social item a real link (or remove).
- Correct testimonial name spellings.
- Begin planning de-duplication of triplicated solution pages.

---

*End of PRD v1.0 — prepared for stakeholder review. Companion artifact: GigaWebZone design-generation brief (for Claude Design).*

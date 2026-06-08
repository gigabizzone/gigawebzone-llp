import type { ReactNode } from "react";

export type IndustryProject = { name: string; tag: string; domain: string };

export type Industry = {
  key: string;
  tab: string;
  count: string;
  icon: ReactNode;
  title: string;
  intro: string;
  pains: string[];
  caps: string[];
  projects: IndustryProject[];
  quote?: { text: string; name: string; title: string; initials: string };
  proof?: string;
  ctaLabel: string;
};

const ti = { fill: "none" as const, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export const INDUSTRIES: Industry[] = [
  {
    key: "edu",
    tab: "Education & E-learning",
    count: "10+",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" /></svg>,
    title: "Education & E-learning",
    intro: "Websites, admissions portals and learning platforms for colleges, schools, coaching institutes and independent educators.",
    pains: [
      "Admissions & enquiries scattered across calls, forms and paper.",
      "No online learning or structured content delivery.",
      "Dated sites that don't reflect the institution's standing.",
    ],
    caps: ["Admissions portals", "LMS / e-learning", "Student dashboards", "Events & notices", "Online payments"],
    projects: [
      { name: "Seth Hirachand Mutha College", tag: "Education", domain: "shmutha.org" },
      { name: "The K Junction", tag: "E-learning", domain: "thekjunction.com" },
      { name: "Prerana Classes", tag: "Coaching", domain: "preranaclasses.in" },
    ],
    quote: {
      text: "Our admissions portal handles thousands of students without a hiccup — documented, maintainable, and delivered on the date they promised.",
      name: "Anuja Brahma",
      title: "Principal, Seth Hirachand Mutha College",
      initials: "AB",
    },
    ctaLabel: "Discuss an education project",
  },
  {
    key: "health",
    tab: "Healthcare",
    count: "live",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><path d="M12 21s-8-4.6-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.4-8 11-8 11z" /><path d="M12 8v4M10 10h4" /></svg>,
    title: "Healthcare",
    intro: "Hospital, clinic and wellness websites with services, doctors, departments and patient enquiry or booking flows.",
    pains: [
      "Patients can't easily find services or enquire/book.",
      "Doctors, departments and specialities aren't clearly presented.",
      "Trust and credibility don't come across online.",
    ],
    caps: ["Department & doctor listings", "Appointment enquiry", "Patient info", "Multi-location", "Local SEO"],
    projects: [
      { name: "Borneo Hospitals", tag: "Healthcare", domain: "borneohospitals.com" },
      { name: "Ayuratan", tag: "Wellness", domain: "ayuratan.com" },
      { name: "Gauranga Das", tag: "Wellness", domain: "gaurangadarshandas.com" },
    ],
    quote: {
      text: "They understood the clinic workflow better than vendors twice their size — patients now find exactly what they need.",
      name: "Dr. Santosh Madrewar",
      title: "CEO, Borneo Hospitals",
      initials: "SM",
    },
    ctaLabel: "Discuss a healthcare project",
  },
  {
    key: "prof",
    tab: "Professional Services",
    count: "8+",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>,
    title: "Professional Services",
    intro: "Polished sites for consultants, firms, experts and practitioners — clarity, credibility and effortless enquiries.",
    pains: [
      "Expertise and credentials aren't communicated clearly.",
      "The site looks dated next to competitors.",
      "It's hard for prospects to enquire or book.",
    ],
    caps: ["Service pages", "Credibility & bio", "Enquiry forms", "Booking", "Blog / insights"],
    projects: [
      { name: "Thakker & Associates", tag: "Professional", domain: "thakkerassociates.com" },
      { name: "Astrotattva", tag: "Consulting", domain: "astrotattva.com" },
      { name: "Energy Science", tag: "Expert practice", domain: "energyscience.in" },
    ],
    quote: {
      text: "My practice finally has an online presence that matches the quality of the work itself.",
      name: "Mukesh Shah",
      title: "Energy Expert",
      initials: "MS",
    },
    ctaLabel: "Discuss a professional site",
  },
  {
    key: "ecom",
    tab: "E-commerce & Retail",
    count: "8+",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><path d="M3 9l1-5h16l1 5M4 9h16v11H4zM9 13h6" /></svg>,
    title: "E-commerce, Retail & Fashion",
    intro: "Online stores for D2C brands, retail, fashion and agro — built to convert and easy to run day to day.",
    pains: [
      "No proper online sales channel — or one that loses customers.",
      "A clunky checkout hurting conversion.",
      "Catalog, inventory and orders that are painful to manage.",
    ],
    caps: ["WooCommerce / custom", "UPI & cards", "Inventory", "Coupons & offers", "Shipping"],
    projects: [
      { name: "Ayuratan", tag: "Wellness commerce", domain: "ayuratan.com" },
      { name: "GroundZero", tag: "Auto commerce", domain: "groundzero.net.in" },
      { name: "Devintech", tag: "E-commerce", domain: "devintech.net" },
    ],
    quote: {
      text: "Checkout conversion jumped after the rebuild — and the numbers speak for themselves.",
      name: "Rahul Ambegaokar",
      title: "Founder & CEO, GroundZero LLP",
      initials: "RA",
    },
    ctaLabel: "Discuss an online store",
  },
  {
    key: "realestate",
    tab: "Real Estate & Hospitality",
    count: "live",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>,
    title: "Real Estate & Hospitality",
    intro: "Property, hotel and travel sites that showcase the experience, build trust and capture enquiries.",
    pains: [
      "Listings, rooms and amenities are hard to browse.",
      "No clean way to capture enquiries or bookings.",
      "Visuals don't sell the experience.",
    ],
    caps: ["Listings & galleries", "Enquiry & booking", "Amenities", "Location & maps", "Mobile-first"],
    projects: [
      { name: "Hotel Samudra City", tag: "Hospitality", domain: "hotelsamudracity.in" },
      { name: "PropVista Aviation", tag: "Travel & aviation", domain: "propvistaaviation.com" },
    ],
    proof: "Live hospitality & travel projects in production — explore more in the full portfolio.",
    ctaLabel: "Discuss a property or hotel site",
  },
  {
    key: "fintech",
    tab: "Financial Services",
    count: "live",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>,
    title: "Financial Services",
    intro: "Trust-first sites and applications for loans, advisory and regulated services — security and a frictionless journey.",
    pains: [
      "Trust and security aren't conveyed convincingly.",
      "Complex products are hard to explain simply.",
      "Drop-off in long application journeys.",
    ],
    caps: ["Secure forms", "Application journeys", "Trust signals", "Compliance-aware", "Integrations"],
    projects: [
      { name: "MyLoanMantra", tag: "Loans & finance", domain: "myloanmantra.co.in" },
      { name: "Sharadey Consultants", tag: "Advisory", domain: "sharadeyconsultants.com" },
    ],
    quote: {
      text: "Applications flow smoothly now, and customers trust the experience from the first screen.",
      name: "Suneelkumar Singh",
      title: "Owner, MyLoanMantra",
      initials: "SS",
    },
    ctaLabel: "Discuss a fintech project",
  },
  {
    key: "nonprofit",
    tab: "Nonprofit",
    count: "live",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>,
    title: "Nonprofit & Foundations",
    intro: "Mission-driven sites for nonprofits and foundations — tell the story, grow support, and accept donations.",
    pains: [
      "The story and impact don't land online.",
      "No easy way to collect donations or volunteers.",
      "Limited budget and in-house tech help.",
    ],
    caps: ["Story & impact", "Donations", "Volunteer sign-up", "Events", "Low-maintenance"],
    projects: [
      { name: "Four CODS India", tag: "Nonprofit", domain: "fourcodsindia.in" },
      { name: "Samavesh", tag: "Foundation", domain: "samavesh.life" },
    ],
    quote: {
      text: "They got our mission and built something we're genuinely proud to share with supporters.",
      name: "Nagesh Jadhav",
      title: "Founder & CEO, Namita Education Foundation",
      initials: "NJ",
    },
    ctaLabel: "Discuss a nonprofit site",
  },
  {
    key: "mfg",
    tab: "Manufacturing & Warehousing",
    count: "6+",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><path d="M2 20h20M4 20V9l5 3V9l5 3V4l6 4v12" /></svg>,
    title: "Manufacturing & Warehousing",
    intro: "Corporate and commercial sites for manufacturers, warehousing, industrial and B2B businesses — credible and clear.",
    pains: [
      "B2B credibility isn't established online.",
      "Products and capabilities are poorly presented.",
      "No structured lead or RFQ capture.",
    ],
    caps: ["Company & capability", "Product catalog", "Enquiry / RFQ", "B2B-focused", "SEO"],
    projects: [
      { name: "KFPCL Warehouse", tag: "Warehousing", domain: "kfpclwarehouse.in" },
      { name: "Bhavya Warehousing", tag: "Logistics", domain: "bhavyawarehousing.com" },
      { name: "Tanisha Group", tag: "Commercial", domain: "tanishagroup.in" },
    ],
    proof: "Multiple industrial & warehousing builds live in production — see the full portfolio for more.",
    ctaLabel: "Discuss a B2B / industrial site",
  },
  {
    key: "tech",
    tab: "Technology & Media",
    count: "5+",
    icon: <svg viewBox="0 0 24 24" stroke="currentColor" {...ti}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
    title: "Technology & Media",
    intro: "Sharp, fast, on-brand sites for tech companies, agencies, media and creators — modern and distinctive.",
    pains: [
      "The brand looks behind the technology it sells.",
      "Slow, dated sites hurting credibility.",
      "Hard to stand out in a crowded space.",
    ],
    caps: ["Modern design", "Performance", "CMS / blog", "Branding", "Integrations"],
    projects: [
      { name: "Jaikrit Speaker Bureau", tag: "Media & events", domain: "jaikritspeakerbureau.com" },
      { name: "Jaikrit Branding", tag: "Media & branding", domain: "jaikritbranding.com" },
      { name: "Doctor WordPress", tag: "Technology", domain: "doctorwordpress.in" },
    ],
    proof: "Modern builds for tech & media brands — explore the full portfolio for the latest.",
    ctaLabel: "Discuss a tech / media site",
  },
];

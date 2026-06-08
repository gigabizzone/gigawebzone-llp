/**
 * Full case studies (challenge → solution → result) for the strongest projects
 * — the project-detail template at /portfolio/[slug]. Outcomes are kept
 * qualitative/honest; the only hard metric (+42% checkout) comes from a real
 * client testimonial.
 */

export type CaseStudy = {
  slug: string;
  name: string;
  domain: string;
  sector: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  results: { v: string; k: string }[];
  testimonial?: { quote: string; name: string; title: string; initials: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "borneo-hospitals",
    name: "Borneo Hospitals",
    domain: "borneohospitals.com",
    sector: "live · healthcare",
    tags: ["Healthcare", "Portal"],
    summary: "A hospital that finally reads like one — across every department, on every device.",
    challenge:
      "A multi-department hospital with no clear way for patients to find services, locate the right specialist, or enquire online — and a site that didn't convey the institution's credibility.",
    solution:
      "A structured platform with department and doctor directories, clear service pages, and low-friction patient enquiry flows — built to load fast and rank in local search.",
    result:
      "Patients self-serve information and enquiries, and the hospital presents its specialists with the authority they deserve — across every department, on every device.",
    stack: ["WordPress", "Custom theme", "PHP", "SEO"],
    results: [
      { v: "Multi-dept", k: "Unified platform" },
      { v: "Mobile-first", k: "Patients-first UX" },
      { v: "Local SEO", k: "Found in search" },
    ],
    testimonial: {
      quote:
        "They understood the clinic workflow better than vendors twice their size — patients now find exactly what they need.",
      name: "Dr. Santosh Madrewar",
      title: "CEO, Borneo Hospitals",
      initials: "SM",
    },
  },
  {
    slug: "seth-hirachand-mutha-college",
    name: "Seth Hirachand Mutha College",
    domain: "shmutha.org",
    sector: "live · education",
    tags: ["Education", "Admissions portal"],
    summary: "Admissions for thousands of students, run through one reliable portal.",
    challenge:
      "A respected college whose admissions and enquiries were scattered across calls, forms and paper — with a site that didn't reflect its standing.",
    solution:
      "A structured college platform with an admissions portal, clear program information, events and notices, and student-facing flows that handle thousands of students.",
    result:
      "Admissions run through one reliable portal — documented, maintainable, and delivered on the date promised.",
    stack: ["WordPress", "Custom theme", "Admissions portal", "PHP"],
    results: [
      { v: "Admissions", k: "One reliable portal" },
      { v: "Thousands", k: "Students handled" },
      { v: "On-time", k: "Delivered as promised" },
    ],
    testimonial: {
      quote:
        "Our admissions portal handles thousands of students without a hiccup — documented, maintainable, and delivered on the date they promised.",
      name: "Anuja Brahma",
      title: "Principal, Seth Hirachand Mutha College",
      initials: "AB",
    },
  },
  {
    slug: "myloanmantra",
    name: "MyLoanMantra",
    domain: "myloanmantra.co.in",
    sector: "live · financial services",
    tags: ["Fintech", "Web app"],
    summary: "A trust-first loan journey customers believe from the first screen.",
    challenge:
      "A loan-services business where trust and security weren't conveyed online, and long application journeys caused drop-off.",
    solution:
      "A trust-first site with clear product explanations, strong trust signals, and a secure, multi-step application journey designed to reduce friction.",
    result:
      "Applications flow smoothly and customers trust the experience from the first screen.",
    stack: ["Web app", "Secure forms", "PHP", "Integrations"],
    results: [
      { v: "Trust-first", k: "Credible from screen one" },
      { v: "Secure", k: "Protected applications" },
      { v: "Frictionless", k: "Fewer drop-offs" },
    ],
    testimonial: {
      quote:
        "Applications flow smoothly now, and customers trust the experience from the first screen.",
      name: "Suneelkumar Singh",
      title: "Owner, MyLoanMantra",
      initials: "SS",
    },
  },
  {
    slug: "groundzero",
    name: "GroundZero",
    domain: "groundzero.net.in",
    sector: "live · e-commerce",
    tags: ["E-commerce", "Automotive"],
    summary: "A WordPress refresh that turned into a commerce platform that converts.",
    challenge:
      "An automotive accessories brand came for a WordPress refresh — but the real problem was a commerce experience that wasn't converting.",
    solution:
      "A performance-focused commerce build with a streamlined catalog and checkout, tuned for speed and conversion.",
    result:
      "Checkout conversion climbed after the rebuild — the numbers spoke for themselves.",
    stack: ["WordPress", "WooCommerce", "Performance", "Payments"],
    results: [
      { v: "+42%", k: "Checkout conversion" },
      { v: "Performance", k: "Fast by default" },
      { v: "Commerce", k: "Built to convert" },
    ],
    testimonial: {
      quote:
        "We came for a WordPress refresh and left with a proper commerce platform. Checkout conversion is up 42% — the numbers speak.",
      name: "Rahul Ambegaokar",
      title: "Founder & CEO, GroundZero LLP",
      initials: "RA",
    },
  },  {
    slug: "the-k-junction",
    name: "The K Junction",
    domain: "thekjunction.com",
    sector: "live · e-learning + commerce",
    tags: ["E-learning", "Commerce"],
    summary: "Learning and commerce under a single, seamless roof.",
    challenge:
      "A combined learning-and-commerce idea that needed accounts, course content and checkout — all in one coherent platform.",
    solution:
      "A unified platform with member accounts, structured learning content and an integrated store and checkout.",
    result:
      "Learners and buyers move through one seamless experience, with content and commerce under a single roof.",
    stack: ["WordPress", "LMS", "WooCommerce", "Accounts"],
    results: [
      { v: "Unified", k: "Learning + commerce" },
      { v: "Accounts", k: "Member journeys" },
      { v: "Checkout", k: "Integrated store" },
    ],
  },
  {
    slug: "ayuratan",
    name: "Ayuratan",
    domain: "ayuratan.com",
    sector: "live · e-commerce",
    tags: ["E-commerce", "WooCommerce"],
    summary: "A wellness brand selling direct, with a store the team can actually run.",
    challenge:
      "A wellness brand with strong products but no proper online store — and a checkout that lost customers.",
    solution:
      "A WooCommerce store with a clean catalog, UPI and card payments, and a conversion-tuned checkout, easy for the team to run day to day.",
    result:
      "The brand sells direct to customers online with a store that's fast to browse and simple to manage.",
    stack: ["WordPress", "WooCommerce", "UPI", "Payments"],
    results: [
      { v: "WooCommerce", k: "D2C store" },
      { v: "UPI & cards", k: "Frictionless checkout" },
      { v: "Self-serve", k: "Easy to manage" },
    ],
  },];

export const caseStudyBySlug = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);

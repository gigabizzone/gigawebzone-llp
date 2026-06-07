/**
 * Portfolio inventory — all 45 live projects (PRD Appendix A), with the
 * gallery filter category, display tags, and a flag for the projects that have
 * a full case-study detail page (PRD §10.7: convert 6–10 into case studies).
 */

export type PortfolioCat =
  | "edu"
  | "prof"
  | "commercial"
  | "ecom"
  | "tech"
  | "hospitality"
  | "health"
  | "finance"
  | "nonprofit";

export type Project = {
  name: string;
  domain: string;
  cat: PortfolioCat;
  tags: string[];
  /** Slug for the internal case-study page; only set when caseStudy is true. */
  slug?: string;
};

export const PROJECTS: Project[] = [
  { name: "KHSI", domain: "khsi.in", cat: "ecom", tags: ["E-commerce", "Fashion"] },
  { name: "Siddharth College, Badlapur", domain: "siddharthcollegebadlapur.edu.in", cat: "edu", tags: ["Education"] },
  { name: "Siddharth B.Ed College", domain: "siddharthbedcollege.edu.in", cat: "edu", tags: ["Education"] },
  { name: "Prerana Classes", domain: "preranaclasses.in", cat: "edu", tags: ["Coaching"] },
  { name: "Gauranga Das", domain: "gaurangadarshandas.com", cat: "prof", tags: ["Wellness", "Professional"] },
  { name: "Astrotattva", domain: "astrotattva.com", cat: "prof", tags: ["Consulting"] },
  { name: "Microdata Global", domain: "microdataglobal.com", cat: "commercial", tags: ["Commercial", "Data"] },
  { name: "Samavesh", domain: "samavesh.life", cat: "edu", tags: ["Education", "Community"] },
  { name: "Seth Hirachand Mutha College", domain: "shmutha.org", cat: "edu", tags: ["Education"], slug: "seth-hirachand-mutha-college" },
  { name: "Enthalpy Asia", domain: "enthalpyasia.com", cat: "prof", tags: ["Professional"] },
  { name: "MyLoanMantra", domain: "myloanmantra.co.in", cat: "finance", tags: ["Fintech"], slug: "myloanmantra" },
  { name: "Yogesh Prabhu", domain: "yogeshprabhu.com", cat: "edu", tags: ["Education"] },
  { name: "Devintech", domain: "devintech.net", cat: "ecom", tags: ["E-commerce"] },
  { name: "Sharadey Consultants", domain: "sharadeyconsultants.com", cat: "prof", tags: ["Recruitment"] },
  { name: "AN Enterprises", domain: "an-enterprises.co.in", cat: "commercial", tags: ["Commercial"] },
  { name: "Ayuratan", domain: "ayuratan.com", cat: "ecom", tags: ["E-commerce", "Wellness"], slug: "ayuratan" },
  { name: "Thakker & Associates", domain: "thakkerassociates.com", cat: "prof", tags: ["Professional"] },
  { name: "Suradkar Electrical", domain: "suradkarelectrical.com", cat: "prof", tags: ["Professional"] },
  { name: "Tanisha Group", domain: "tanishagroup.in", cat: "commercial", tags: ["Commercial"] },
  { name: "Four CODS India", domain: "fourcodsindia.in", cat: "nonprofit", tags: ["Nonprofit"] },
  { name: "Energy Science", domain: "energyscience.in", cat: "prof", tags: ["Professional"] },
  { name: "Sostahk", domain: "sostahk.org", cat: "edu", tags: ["Education"] },
  { name: "Aura Science", domain: "aurascience.in", cat: "prof", tags: ["Professional"] },
  { name: "Vastu Aura", domain: "vastuaura.in", cat: "prof", tags: ["Vastu", "Professional"] },
  { name: "IBDP7", domain: "ibdp7.com", cat: "edu", tags: ["Education"] },
  { name: "5 Days Website", domain: "5dayswebsite.in", cat: "tech", tags: ["Technology"] },
  { name: "Fidelity Intl Exports", domain: "fidelityinternationalexports.in", cat: "commercial", tags: ["Exports", "Commercial"] },
  { name: "RPTO India", domain: "rptoindia.com", cat: "commercial", tags: ["Automotive"] },
  { name: "Jaikrit Speaker Bureau", domain: "jaikritspeakerbureau.com", cat: "tech", tags: ["Media", "Events"] },
  { name: "Borneo Hospitals", domain: "borneohospitals.com", cat: "health", tags: ["Healthcare"], slug: "borneo-hospitals" },
  { name: "PropVista Aviation", domain: "propvistaaviation.com", cat: "hospitality", tags: ["Aviation", "Travel"] },
  { name: "Aura Photoscience", domain: "auraphotoscience.com", cat: "prof", tags: ["Professional"] },
  { name: "Hotel Samudra City", domain: "hotelsamudracity.in", cat: "hospitality", tags: ["Hospitality"] },
  { name: "Daivjyotsh", domain: "daivjyotsh.com", cat: "edu", tags: ["Education", "Professional"] },
  { name: "Jaikrit Branding", domain: "jaikritbranding.com", cat: "tech", tags: ["Branding", "Media"] },
  { name: "Vastu My Home", domain: "vastumyhome.com", cat: "prof", tags: ["Vastu"] },
  { name: "GZDrones", domain: "gzdrones.com", cat: "ecom", tags: ["E-commerce"] },
  { name: "KFPCL Warehouse", domain: "kfpclwarehouse.in", cat: "commercial", tags: ["Warehousing"] },
  { name: "GroundZero", domain: "groundzero.net.in", cat: "ecom", tags: ["E-commerce", "Automotive"], slug: "groundzero" },
  { name: "Sattvam Agro", domain: "sattvamagro.in", cat: "ecom", tags: ["Agro", "E-commerce"], slug: "sattvam-agro" },
  { name: "Bhavya Warehousing", domain: "bhavyawarehousing.com", cat: "commercial", tags: ["Warehousing"] },
  { name: "The K Junction", domain: "thekjunction.com", cat: "edu", tags: ["E-learning", "Commerce"], slug: "the-k-junction" },
  { name: "Linguist", domain: "linguist.co.in", cat: "edu", tags: ["E-learning"], slug: "linguist" },
  { name: "Sadhubella College", domain: "sadhubellacollege.org", cat: "edu", tags: ["Education"] },
  { name: "Doctor WordPress", domain: "doctorwordpress.in", cat: "tech", tags: ["Technology"] },
];

export const PORTFOLIO_FILTERS: { key: PortfolioCat | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "edu", label: "Education & E-learning" },
  { key: "prof", label: "Professional" },
  { key: "commercial", label: "Commercial & Industrial" },
  { key: "ecom", label: "E-commerce" },
  { key: "tech", label: "Technology & Media" },
  { key: "hospitality", label: "Hospitality & Travel" },
  { key: "health", label: "Healthcare" },
  { key: "finance", label: "Financial" },
  { key: "nonprofit", label: "Nonprofit" },
];

export const projectUrl = (domain: string) => `https://${domain}`;
export const countFor = (key: PortfolioCat | "all") =>
  key === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === key).length;

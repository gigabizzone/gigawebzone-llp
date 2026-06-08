/**
 * Single source of truth for navigation, contact details and the primary CTA
 * target. Centralized so Header, Footer and pages stay in sync.
 */

export type NavLink = { label: string; href: string };

/** Primary navigation — the 9-page IA from PRD §8 (Home is the logo/brand). */
export const NAV_LINKS: NavLink[] = [
  { label: "Web Development", href: "/web-development" },
  { label: "App Development", href: "/app-development" },
  { label: "Portals & Platforms", href: "/portals-platforms" },
  { label: "WordPress", href: "/wordpress" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Primary conversion target ("Get a Free Consultation") — Calendly 30-min booking. */
export const CONSULT_HREF = "https://calendly.com/gigawebzone/30min";

export const CONTACT = {
  phoneDisplay: "+91 8108 4005 99",
  phoneHref: "tel:+918108400599",
  whatsappHref: "https://wa.me/918108400599",
  email: "mail@gigawebzone.com",
  address:
    "GigaWebZone LLP, Datta Krupa, Devachi Jali, Manjarwadi Road, Narayangaon, Junnar, Maharashtra 410504",
  hours: "Mon–Sat · 8am – 8pm IST · Sun closed",
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/gigawebzone-llp",
  instagram: "https://www.instagram.com/gigawebzone/",
  facebook: "https://www.facebook.com/gigawebzone/",
  youtube: "https://www.youtube.com/@kiranmulay4262",
  pinterest: "https://in.pinterest.com/gigawebzone/",
};

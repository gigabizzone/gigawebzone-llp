/**
 * SEO helpers — site constants and JSON-LD builders.
 *
 * Notes:
 * - Fresh-site SEO: no legacy WordPress redirect map (the old site had no
 *   Search Console history / traffic to preserve).
 * - Not local-SEO-first: the business is virtual with national & international
 *   clients, so the main entity is an Organization (not a LocalBusiness) with a
 *   global service area. The real registered address is still included as a
 *   trust signal.
 */

export const SITE_URL = "https://www.gigawebzone.com";
export const SITE_NAME = "GigaWebZone";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/assets/logo-horizontal.png`;

export const SOCIAL_PROFILES = [
  "https://www.linkedin.com/company/gigawebzone",
  "https://www.instagram.com/gigawebzone",
  "https://www.youtube.com/@gigawebzone",
];

/** Site-wide Organization entity — referenced by other schema via @id. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "GigaWebZone",
    legalName: "GigaWebZone LLP",
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "Full-stack web and app development studio — custom web apps, mobile apps, complex portals and premium WordPress. DPIIT-recognised, 400+ businesses served.",
    foundingDate: "2011",
    founder: { "@type": "Person", name: "Kiran Mulay" },
    areaServed: "Worldwide",
    knowsAbout: [
      "Web Development",
      "App Development",
      "WordPress",
      "E-commerce",
      "LMS",
      "Portal Development",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Datta Krupa, Devachi Jali, Manjarwadi Road, Narayangaon",
      addressLocality: "Junnar",
      addressRegion: "Maharashtra",
      postalCode: "410504",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8108-400599",
      email: "mail@gigawebzone.com",
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: ["en", "hi", "mr"],
    },
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/** BreadcrumbList from {name, path} items (path relative, e.g. "/about"). */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "/" : it.path}`,
    })),
  };
}

export function serviceJsonLd(opts: {
  serviceType: string;
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": ORG_ID },
    areaServed: "Worldwide",
  };
}

/** CreativeWork for a portfolio case study. */
export function creativeWorkJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  liveUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    sameAs: opts.liveUrl,
    creator: { "@id": ORG_ID },
  };
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { CASE_STUDIES } from "@/lib/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/web-development", priority: 0.9, freq: "monthly" },
    { path: "/app-development", priority: 0.9, freq: "monthly" },
    { path: "/portals-platforms", priority: 0.9, freq: "monthly" },
    { path: "/wordpress", priority: 0.9, freq: "monthly" },
    { path: "/industries", priority: 0.8, freq: "monthly" },
    { path: "/portfolio", priority: 0.8, freq: "weekly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/privacy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  const caseStudies: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE_URL}/portfolio/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...caseStudies];
}

import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowRight } from "@/components/icons";

type Pillar = {
  num: string;
  title: string;
  body: string;
  chips: string[];
  href: string;
  icon: React.ReactNode;
  specialty?: boolean;
};

const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    body: "Custom front-ends and robust back-ends — React, Next.js, Laravel, Node. Fast, secure, and architected to scale with you.",
    chips: ["React / Next.js", "Laravel", "Node · APIs"],
    href: "/web-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 4l-2 16" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "App Development",
    body: "Mobile and web apps that feel native and load instantly — Flutter, React Native and PWAs, from prototype to the app stores.",
    chips: ["Flutter", "React Native", "PWA"],
    href: "/app-development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Portals & Platforms",
    body: "E-commerce, LMS, booking, membership and directory platforms — multi-role systems with the dashboards and automation to run them.",
    chips: ["E-commerce", "LMS", "Booking", "Membership"],
    href: "/portals-platforms",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "WordPress Expertise",
    body: "Twelve years and 400+ builds deep. Custom themes, headless WordPress, WooCommerce and rescue work — done properly, not with page-builder bloat.",
    chips: ["Custom themes", "Headless WP", "WooCommerce"],
    href: "/wordpress",
    specialty: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M5 8l3.5 9L12 8l3.5 9L19 8" />
      </svg>
    ),
  },
];

export function ServicePillars() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">What we build</span>
          <h2>Four disciplines, one engineering standard.</h2>
          <p>
            From a marketing site to a multi-tenant portal — we scope it, design it, and
            ship production-grade software your team can grow on.
          </p>
        </div>
        <div className="pillars">
          {PILLARS.map((p) => (
            <TiltCard
              key={p.num}
              className={`pillar reveal tilt${p.specialty ? " is-wp" : ""}`}
            >
              {p.specialty ? (
                <span className="badge-specialty">Signature specialty</span>
              ) : (
                <span className="pnum">{p.num}</span>
              )}
              <div className="pic">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="chips">
                {p.chips.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
              <Link
                className="arrow-link"
                style={{ marginTop: 18, display: "inline-flex" }}
                href={p.href}
              >
                Explore
                <ArrowRight />
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

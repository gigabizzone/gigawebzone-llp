import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";
import { ArrowRight } from "@/components/icons";

type Work = {
  title: string;
  desc: string;
  tags: string[];
  feature?: boolean;
  ph: string;
  cta: string;
};

const WORK: Work[] = [
  {
    title: "Borneo Hospitals",
    desc: "A multi-department hospital platform — services, doctors and patient enquiry flows, built and maintained end to end.",
    tags: ["Healthcare", "Portal"],
    feature: true,
    ph: "project shot · 1280×720",
    cta: "View case study",
  },
  {
    title: "Linguist",
    desc: "An online learning platform with courses and student dashboards.",
    tags: ["Education", "LMS"],
    ph: "project shot",
    cta: "View",
  },
  {
    title: "Ayuratan",
    desc: "A WooCommerce store for a wellness brand, tuned to convert.",
    tags: ["E-commerce", "WooCommerce"],
    ph: "project shot",
    cta: "View",
  },
  {
    title: "MyLoanMantra",
    desc: "A trust-first loan-services journey with secure application flows.",
    tags: ["Fintech", "Web App"],
    ph: "project shot",
    cta: "View",
  },
  {
    title: "The K Junction",
    desc: "A combined learning-and-commerce platform with accounts, content and checkout.",
    tags: ["E-learning", "Commerce"],
    feature: true,
    ph: "project shot · 1280×720",
    cta: "View case study",
  },
  {
    title: "Sattvam Agro",
    desc: "An agro-commerce store with catalog, payments and orders.",
    tags: ["Agro", "E-commerce"],
    ph: "project shot",
    cta: "View",
  },
];

export function FeaturedWork() {
  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Selected work</span>
          <h2>Live builds across the industries we know.</h2>
          <p>
            Clinics, colleges, professional firms and commerce brands — real platforms in
            production. (Project screenshots are placeholders for now.)
          </p>
        </div>
        <div className="pf-grid">
          {WORK.map((w) => (
            <TiltCard
              key={w.title}
              className={`pf-card reveal tilt${w.feature ? " pf-feature" : ""}`}
            >
              <div
                className="shot ph"
                data-ph={w.ph}
                style={w.feature ? { minHeight: 300 } : undefined}
              />
              <div className="meta">
                <div className="tags">
                  {w.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <h3>{w.title}</h3>
                <p className="desc">{w.desc}</p>
                <Link className="arrow-link go" href="/portfolio">
                  {w.cta}
                  <ArrowRight />
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

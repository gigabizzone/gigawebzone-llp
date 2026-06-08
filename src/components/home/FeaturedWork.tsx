import Link from "next/link";
import { TiltCard } from "@/components/ui/TiltCard";
import { ProjectShot } from "@/components/ui/ProjectShot";
import { ArrowRight } from "@/components/icons";

type Work = {
  title: string;
  desc: string;
  tags: string[];
  feature?: boolean;
  domain: string;
  cta: string;
};

const WORK: Work[] = [
  {
    title: "Borneo Hospitals",
    desc: "A multi-department hospital platform — services, doctors and patient enquiry flows, built and maintained end to end.",
    tags: ["Healthcare", "Portal"],
    feature: true,
    domain: "borneohospitals.com",
    cta: "View case study",
  },
  {
    title: "Seth Hirachand Mutha College",
    desc: "An admissions portal handling thousands of students — documented, maintainable, delivered on time.",
    tags: ["Education", "Portal"],
    domain: "shmutha.org",
    cta: "View",
  },
  {
    title: "Ayuratan",
    desc: "A WooCommerce store for a wellness brand, tuned to convert.",
    tags: ["E-commerce", "WooCommerce"],
    feature: true,
    domain: "ayuratan.com",
    cta: "View case study",
  },
  {
    title: "MyLoanMantra",
    desc: "A trust-first loan-services journey with secure application flows.",
    tags: ["Fintech", "Web App"],
    domain: "myloanmantra.co.in",
    cta: "View",
  },
  {
    title: "The K Junction",
    desc: "A combined learning-and-commerce platform with accounts, content and checkout.",
    tags: ["E-learning", "Commerce"],
    feature: true,
    domain: "thekjunction.com",
    cta: "View case study",
  },
  {
    title: "GroundZero",
    desc: "A performance-focused commerce build for an automotive accessories brand.",
    tags: ["E-commerce", "Automotive"],
    domain: "groundzero.net.in",
    cta: "View",
  },
];

export function FeaturedWork() {
  return (
    <section className="section sec-aurora" id="portfolio">
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
              <ProjectShot
                domain={w.domain}
                alt={`${w.title} website screenshot`}
                style={w.feature ? { minHeight: 300 } : undefined}
                sizes="(max-width: 620px) 100vw, (max-width: 1080px) 50vw, 380px"
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

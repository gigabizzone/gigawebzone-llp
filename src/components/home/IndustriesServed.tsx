import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";

const INDUSTRIES = [
  "Education & E-learning",
  "Healthcare",
  "Professional Services",
  "E-commerce & Retail",
  "Real Estate & Hospitality",
  "Financial Services",
  "Nonprofit",
  "Manufacturing & Warehousing",
  "Technology & Media",
];

export function IndustriesServed() {
  return (
    <section className="section sec-aurora">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Industries we serve</span>
          <h2>Proven across the sectors we know.</h2>
          <p>
            From clinics to colleges to commerce — we&apos;ve shipped for businesses like
            yours, across nine industries.
          </p>
        </div>
        <div className="uc-grid reveal">
          {INDUSTRIES.map((industry) => (
            <Link className="uc" href="/industries" key={industry}>
              {industry}
            </Link>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: "center", marginTop: 34 }}>
          <Button href="/industries" variant="ghost" size="lg">
            Explore all industries
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

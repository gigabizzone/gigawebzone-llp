import type { Metadata } from "next";
import { CenteredHero } from "@/components/service/CenteredHero";
import { SectionHead } from "@/components/service/SectionHead";
import { IndustriesExplorer } from "@/components/industries/IndustriesExplorer";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { CONSULT_HREF } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { PROJECT_COUNT } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Industries We Build For — Education, Healthcare, E-commerce & more",
  description:
    "GigaWebZone builds websites, portals and apps across industries — education, healthcare, professional services, e-commerce, real estate, financial services, nonprofit, manufacturing and technology. See sector proof.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <CenteredHero
        current="Industries"
        eyebrow="Industries"
        title={<>Built for your industry, <span className="grad-text">proven with your peers.</span></>}
        lead="Clinics, colleges, professional firms, founders and brands — we've shipped for businesses like yours. Pick your sector and see the proof."
        proof={[
          { count: 9, label: "industries served" },
          { count: PROJECT_COUNT, suffix: "+", label: "live projects" },
          { count: 400, suffix: "+", label: "businesses served" },
        ]}
        ctas={
          <div className="hero-ctas reveal" data-d="3" style={{ justifyContent: "center" }}>
            <Button href="#explore" variant="primary" size="lg">
              Find your industry
              <ArrowRight />
            </Button>
            <Button href={CONSULT_HREF} variant="ghost" size="lg">
              Get a Free Consultation
            </Button>
          </div>
        }
      />

      <section className="section" id="explore">
        <div className="wrap">
          <SectionHead
            eyebrow="Find your sector"
            title="Choose your industry — see the pains we solve and the proof."
          />
          <IndustriesExplorer />
        </div>
      </section>

      <section className="cta-band" id="contact">
        <div className="glow" />
        <div className="wrap">
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
            Your sector, your build
          </span>
          <h2 className="reveal" data-d="1">
            Don&apos;t see your industry? We&apos;ve probably built for it.
          </h2>
          <p className="reveal" data-d="2">
            Across {PROJECT_COUNT}+ live projects and 400+ businesses, the patterns repeat. Tell us your
            sector and goals — we&apos;ll show you the most relevant proof and a clear path
            forward.
          </p>
          <div className="hero-ctas reveal" data-d="3" style={{ justifyContent: "center" }}>
            <Button href={CONSULT_HREF} variant="primary" size="lg">
              Get a Free Consultation
              <ArrowRight />
            </Button>
            <Button href="/portfolio" variant="ghost" size="lg">
              See full portfolio
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

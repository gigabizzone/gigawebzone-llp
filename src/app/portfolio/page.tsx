import type { Metadata } from "next";
import Link from "next/link";
import { CenteredHero } from "@/components/service/CenteredHero";
import { SectionHead } from "@/components/service/SectionHead";
import { PageCta } from "@/components/service/PageCta";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { ProjectShot } from "@/components/ui/ProjectShot";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/icons";
import { caseStudyBySlug } from "@/lib/data/caseStudies";
import { PROJECTS, projectUrl } from "@/lib/data/projects";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Portfolio — ${PROJECTS.length}+ Live Projects`,
  description: `Explore GigaWebZone's portfolio — ${PROJECTS.length}+ live websites, portals and stores across education, healthcare, e-commerce, professional services, manufacturing and more. Filter by category and visit the live sites.`,
  alternates: { canonical: "/portfolio" },
};

const featured = caseStudyBySlug("borneo-hospitals")!;

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <CenteredHero
        current="Portfolio"
        eyebrow="Our work"
        title={<>{PROJECTS.length}+ live projects. <span className="grad-text">Proof, not promises.</span></>}
        lead="Every one of these is in production, serving a real business. Filter by category, then click through to the live site — the work speaks for itself."
        proof={[
          { count: PROJECTS.length, suffix: "+", label: "live projects" },
          { count: 400, suffix: "+", label: "businesses served" },
          { count: 9, label: "industries" },
        ]}
      />

      <section className="section tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Featured case study"
            title="Borneo Hospitals — a hospital that finally reads like one."
          />
          <div className="why-grid">
            <div className="reveal">
              <div className="pt-card">
                <ProjectShot
                  domain={featured.domain}
                  alt={`${featured.name} website screenshot`}
                  style={{ aspectRatio: "16 / 11" }}
                  sizes="(max-width: 920px) 100vw, 560px"
                />
                <div className="pc-meta">
                  <span className="nm">{featured.name}</span>
                  <span className="ex">{featured.sector}</span>
                </div>
              </div>
              <div className="case-results">
                {featured.results.map((r) => (
                  <div className="cr" key={r.k}>
                    <div className="v">{r.v}</div>
                    <div className="k">{r.k}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" data-d="2">
              <div className="id-section">
                <div className="id-label">The challenge</div>
                <p style={{ color: "var(--text-2)", fontSize: 16 }}>{featured.challenge}</p>
              </div>
              <div className="id-section">
                <div className="id-label">Our solution</div>
                <p style={{ color: "var(--text-2)", fontSize: 16 }}>{featured.solution}</p>
              </div>
              <div className="id-section">
                <div className="id-label">The result</div>
                <p style={{ color: "var(--text-2)", fontSize: 16 }}>{featured.result}</p>
              </div>
              <div className="id-section">
                <div className="id-label">Stack</div>
                <div className="id-caps">
                  {featured.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              {featured.testimonial ? (
                <div className="id-quote">
                  <blockquote>&ldquo;{featured.testimonial.quote}&rdquo;</blockquote>
                  <div className="who">
                    <span className="av">{featured.testimonial.initials}</span>
                    <span>
                      <span className="nm">{featured.testimonial.name}</span>
                      <span className="ti">{featured.testimonial.title}</span>
                    </span>
                  </div>
                </div>
              ) : null}
              <div className="hero-ctas" style={{ marginTop: 20 }}>
                <Button href={`/portfolio/${featured.slug}`} variant="primary" className="id-cta">
                  Read the full case study
                </Button>
                <Button
                  href={projectUrl(featured.domain)}
                  variant="ghost"
                  className="id-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the live site
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="wrap">
          <SectionHead center eyebrow="The full library" title={`Browse all ${PROJECTS.length} live projects.`}>
            Filter by category, then visit any site. Projects tagged{" "}
            <Link href="#work" className="accent-text">Case study</Link> open a full
            write-up.
          </SectionHead>
          <PortfolioGallery />
        </div>
      </section>

      <PageCta
        eyebrow="Your project next"
        title="Like what you see? Let's add yours to the list."
        lead="Book a free, no-pressure consultation. We'll review your goals and come back with a clear, honest scope — usually within one working day."
      />
    </>
  );
}

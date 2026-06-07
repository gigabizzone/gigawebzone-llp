import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { PageCta } from "@/components/service/PageCta";
import { ArrowUpRight } from "@/components/icons";
import { CASE_STUDIES, caseStudyBySlug } from "@/lib/data/caseStudies";
import { projectUrl } from "@/lib/data/projects";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudyBySlug(slug);
  if (!cs) return { title: "Case study" };
  return {
    title: `${cs.name} — Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="hero-bg">
          <div className="hero-grid-lines" />
          <div className="hero-aurora">
            <div className="hero-glow g1" />
            <div className="hero-glow g2" />
            <div className="hero-glow g3" />
          </div>
        </div>
        <div className="wrap" style={{ position: "relative", zIndex: 2, maxWidth: 920 }}>
          <nav className="breadcrumb reveal" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/portfolio">Portfolio</Link>
            <span className="sep">/</span>
            <span className="cur">{cs.name}</span>
          </nav>
          <span className="eyebrow reveal" data-d="1" style={{ marginTop: 18 }}>
            Case study · {cs.tags.join(" · ")}
          </span>
          <h1 className="reveal" data-d="1">{cs.name}</h1>
          <p className="lead reveal" data-d="2">{cs.summary}</p>
          <div className="hero-ctas reveal" data-d="3">
            <Button href={projectUrl(cs.domain)} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
              Visit the live site
              <ArrowUpRight />
            </Button>
            <Button href="/portfolio" variant="ghost" size="lg">
              Back to portfolio
            </Button>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="why-grid">
            <div className="reveal">
              <div className="pt-card">
                <div className="shot ph" data-ph={`screenshot · ${cs.domain}`} style={{ aspectRatio: "16/11" }} />
                <div className="pc-meta">
                  <span className="nm">{cs.name}</span>
                  <span className="ex">{cs.sector}</span>
                </div>
              </div>
              <div className="case-results">
                {cs.results.map((r) => (
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
                <p style={{ color: "var(--text-2)", fontSize: 16 }}>{cs.challenge}</p>
              </div>
              <div className="id-section">
                <div className="id-label">Our solution</div>
                <p style={{ color: "var(--text-2)", fontSize: 16 }}>{cs.solution}</p>
              </div>
              <div className="id-section">
                <div className="id-label">The result</div>
                <p style={{ color: "var(--text-2)", fontSize: 16 }}>{cs.result}</p>
              </div>
              <div className="id-section">
                <div className="id-label">Stack</div>
                <div className="id-caps">
                  {cs.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              {cs.testimonial ? (
                <div className="id-quote">
                  <blockquote>&ldquo;{cs.testimonial.quote}&rdquo;</blockquote>
                  <div className="who">
                    <span className="av">{cs.testimonial.initials}</span>
                    <span>
                      <span className="nm">{cs.testimonial.name}</span>
                      <span className="ti">{cs.testimonial.title}</span>
                    </span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Your project next"
        title="Want a result like this? Let's scope it."
        lead="Book a free, no-pressure consultation. We'll review your goals and come back with a clear, honest scope — usually within one working day."
      />
    </>
  );
}

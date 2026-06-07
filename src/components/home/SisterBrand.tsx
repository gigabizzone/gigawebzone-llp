import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/icons";

const SERVICES = [
  {
    title: "Lead Generation",
    sub: "Qualified pipeline",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8z" />
      </svg>
    ),
  },
  {
    title: "AI Automation",
    sub: "Workflows that run themselves",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Managed CRM",
    sub: "We run it for you",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.9" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    sub: "Outcome-priced growth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-3-3-4 4" />
      </svg>
    ),
  },
];

export function SisterBrand() {
  return (
    <section className="section sister" id="sister">
      <div className="wrap">
        <div className="sister-card reveal">
          <div className="aurora" aria-hidden="true">
            <span className="a1" />
            <span className="a2" />
            <span className="a3" />
          </div>
          <div className="sister-inner">
            <div>
              <span className="sister-eyebrow">
                Part of the house · <span className="gz grad-text">GigaBizZone</span>
              </span>
              <h2>Beyond building, we help you grow.</h2>
              <p className="lead">
                Once your platform is live, our sister brand <strong>GigaBizZone</strong>{" "}
                turns it into a pipeline — AI automation, lead generation and managed CRM,
                priced on the outcomes they create.
              </p>
              <div className="sister-services">
                {SERVICES.map((s) => (
                  <div className="sister-svc" key={s.title}>
                    <span className="ic">{s.icon}</span>
                    <span>
                      <span className="t">{s.title}</span>
                      <span className="s">{s.sub}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="sister-cta">
                <Button
                  href="https://gigabizzone.com"
                  variant="light"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore GigaBizZone
                  <ArrowUpRight />
                </Button>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "rgba(255,255,255,.6)",
                  }}
                >
                  Priced on outcomes, not hours.
                </span>
              </div>
            </div>
            <div className="sister-logo-badge" aria-hidden="true">
              <span className="ring r1" />
              <span className="ring r2" />
              <span className="gz-word">
                <span className="grad">GigaBizZone</span>
                <small>GROW · AUTOMATE · CONVERT</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

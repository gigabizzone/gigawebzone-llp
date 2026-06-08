import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { CONTACT, CONSULT_HREF } from "@/lib/site";

/**
 * Final CTA band for inner pages (`.cta-band`). Uses id="contact" so the global
 * header "Free Consultation" action scrolls here on every page.
 */
export function PageCta({
  title,
  lead,
  eyebrow = "Let's build",
}: {
  title: string;
  lead: string;
  eyebrow?: string;
}) {
  return (
    <section className="cta-band" id="contact">
      <div className="glow" />
      <div className="wrap">
        <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
          {eyebrow}
        </span>
        <h2 className="reveal" data-d="1">
          {title}
        </h2>
        <p className="reveal" data-d="2">
          {lead}
        </p>
        <div className="hero-ctas reveal" data-d="3" style={{ justifyContent: "center" }}>
          <Button href={CONSULT_HREF} variant="primary" size="lg">
            Get a Free Consultation
            <ArrowRight />
          </Button>
          <Button href={`mailto:${CONTACT.email}`} variant="ghost" size="lg">
            {CONTACT.email}
          </Button>
        </div>
      </div>
    </section>
  );
}

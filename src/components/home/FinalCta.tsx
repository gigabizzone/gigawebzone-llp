import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/icons";
import { CONTACT, CONSULT_HREF } from "@/lib/site";

/**
 * Final CTA band. Its id="contact" is the scroll target for the header / hero
 * "Free Consultation" actions (Phase 1). In Phase 4 the primary CTA repoints to
 * the dedicated /contact page.
 */
export function FinalCta() {
  return (
    <section className="cta-band" id="contact">
      <div className="glow" />
      <div className="wrap">
        <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
          Let&apos;s build
        </span>
        <h2 className="reveal" data-d="1">
          Tell us what you&apos;re building. We&apos;ll show you how.
        </h2>
        <p className="reveal" data-d="2">
          Book a free, no-pressure consultation. We&apos;ll review your goals and come back
          with a clear, honest scope — usually within one working day.
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

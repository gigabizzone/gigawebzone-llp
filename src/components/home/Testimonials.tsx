import Image from "next/image";
import { Star } from "@/components/icons";
import { TESTIMONIALS } from "@/lib/data/testimonials";

const HOME_TESTIMONIALS = TESTIMONIALS.slice(0, 6);

export function Testimonials() {
  return (
    <section className="section tst">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Client voices</span>
          <h2>Trusted by the people who run the place.</h2>
        </div>
        <div className="tst-grid">
          {HOME_TESTIMONIALS.map((t) => (
            <figure className="tst-card reveal" key={t.name}>
              <div className="quote-mark">&ldquo;</div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption className="who">
                <span className="av">
                  {t.image ? (
                    <Image src={t.image} alt={t.name} width={46} height={46} />
                  ) : (
                    t.initials
                  )}
                </span>
                <span>
                  <span className="nm">{t.name}</span>
                  <span className="ti">{t.title}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Star } from "@/components/icons";

type Testimonial = {
  initials: string;
  name: string;
  title: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    initials: "SM",
    name: "Dr. Santosh Madrewar",
    title: "CEO, Borneo Hospitals",
    quote:
      "The booking portal they built cut our front-desk calls in half. They understood the clinic workflow better than vendors twice their size.",
  },
  {
    initials: "AB",
    name: "Anuja Brahma",
    title: "Principal, Seth Hirachand Mutha College",
    quote:
      "Our admissions portal handles 6,000 students without a hiccup. Documented, maintainable, and delivered on the date they promised.",
  },
  {
    initials: "RA",
    name: "Rahul Ambegaokar",
    title: "Founder & CEO, GroundZero LLP",
    quote:
      "We came for a WordPress refresh and left with a proper commerce platform. Checkout conversion is up 42% — the numbers speak.",
  },
];

export function Testimonials() {
  return (
    <section className="section tst">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Client voices</span>
          <h2>Trusted by the people who run the place.</h2>
        </div>
        <div className="tst-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="tst-card reveal" key={t.name}>
              <div className="quote-mark">&ldquo;</div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption className="who">
                <span className="av">{t.initials}</span>
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

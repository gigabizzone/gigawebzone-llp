import { CountUp } from "@/components/ui/CountUp";
import { Check } from "@/components/icons";

const REASONS = [
  {
    title: "Conversion-driven by default",
    body: "Every build is designed around the action that matters to your business — enquiries, sales, sign-ups.",
  },
  {
    title: "Mobile-first, genuinely fast",
    body: "Core Web Vitals taken seriously — most builds ship at 90+ Lighthouse out of the gate.",
  },
  {
    title: "Modern, maintainable stack",
    body: "Clean code and documented handovers — so your next developer thanks us, not curses us.",
  },
  {
    title: "On-time delivery, every time",
    body: "An agreed date up front and an On-Time Delivery Commitment behind it — plus ongoing support after launch.",
  },
];

export function WhyChoose() {
  return (
    <section className="section why" id="why">
      <div className="wrap why-grid">
        <div className="reveal">
          <span className="eyebrow">Why GigaWebZone</span>
          <h2 style={{ fontSize: "clamp(30px,4vw,46px)", margin: "18px 0 14px" }}>
            Proof over promises.
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 18 }}>
            We&apos;re an engineering partner that ships measurable outcomes — on time.
            Conversion-driven design, mobile-first builds, and a modern stack that
            won&apos;t box you in.
          </p>
          <div className="why-list">
            {REASONS.map((r) => (
              <div className="why-item" key={r.title}>
                <span className="tick">
                  <Check />
                </span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="stats reveal" data-d="2">
          <div className="stat">
            <div className="v">
              <CountUp to={400} />
              <span className="suf">+</span>
            </div>
            <div className="k">Businesses served</div>
          </div>
          <div className="stat">
            <div className="v">
              <CountUp to={15} />
              <span className="suf">+</span>
            </div>
            <div className="k">Years of experience</div>
          </div>
          <div className="stat">
            <div className="v">
              <CountUp to={98} />
            </div>
            <div className="k">Avg Lighthouse score</div>
          </div>
          <div className="stat">
            <div className="v">
              <CountUp to={38} />
              <span className="suf">%</span>
            </div>
            <div className="k">Avg conversion lift</div>
          </div>
        </div>
      </div>
    </section>
  );
}

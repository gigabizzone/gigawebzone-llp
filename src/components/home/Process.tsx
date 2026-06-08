const STEPS = [
  {
    num: "01",
    title: "Discover & scope",
    body: "Goals, requirements, and a fixed scope, timeline and quote.",
    when: "Week 1",
  },
  {
    num: "02",
    title: "Design & architect",
    body: "UX, a design system, and the technical architecture — signed off before code.",
    when: "Week 1–2",
  },
  {
    num: "03",
    title: "Build & test",
    body: "Agile sprints with weekly demos, a staging link, and continuous QA.",
    when: "Week 2 on",
  },
  {
    num: "04",
    title: "Launch & support",
    body: "Deploy, performance & SEO checks, monitoring and an ongoing care plan.",
    when: "Launch +",
  },
];

export function Process() {
  return (
    <section className="section tint">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">How we work</span>
          <h2>A clear process, delivered on time.</h2>
          <p>
            You always know what&apos;s being built, what it costs, and when it lands — no
            black boxes.
          </p>
        </div>
        <div className="steps steps-connected">
          {STEPS.map((s) => (
            <div className="step reveal" key={s.num}>
              <div className="sn">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              <span className="when">{s.when}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

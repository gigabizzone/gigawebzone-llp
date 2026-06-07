export type Step = {
  num: string;
  title: string;
  body: string;
  when: string;
};

/** `.steps` — the numbered "how we work" process grid. */
export function Steps({ steps, threeUp }: { steps: Step[]; threeUp?: boolean }) {
  return (
    <div className={`steps${threeUp ? " steps-3" : ""}`}>
      {steps.map((s, i) => (
        <div className="step reveal" data-d={i + 1} key={s.num}>
          <div className="sn">{s.num}</div>
          <h4>{s.title}</h4>
          <p>{s.body}</p>
          <span className="when">{s.when}</span>
        </div>
      ))}
    </div>
  );
}

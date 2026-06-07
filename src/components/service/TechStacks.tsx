export type StackCat = {
  heading: string;
  items: { name: string; sub?: string }[];
};

/** `.stacks` — four-column tech-stack columns with bullet dots. */
export function TechStacks({ cats }: { cats: StackCat[] }) {
  return (
    <div className="stacks">
      {cats.map((cat, i) => (
        <div className="stackcat reveal" data-d={i + 1} key={cat.heading}>
          <h4>{cat.heading}</h4>
          <ul>
            {cat.items.map((it) => (
              <li key={it.name}>
                <span className="dot" />
                {it.name}
                {it.sub ? <small>{it.sub}</small> : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

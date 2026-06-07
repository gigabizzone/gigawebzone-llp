export default function Home() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
      <h1 style={{ fontSize: 34, marginBottom: 12 }}>
        GigaWebZone — Next.js starter
      </h1>
      <p style={{ color: "#4c5360", lineHeight: 1.6 }}>
        This is the app scaffold (it gives you the <code>package.json</code> and{" "}
        <code>src/</code> that Claude Code looks for). Build each page from the
        HTML design reference, porting components into <code>src/app</code> and
        using the design tokens already copied into{" "}
        <code>src/app/globals.css</code>.
      </p>
      <p style={{ color: "#4c5360", lineHeight: 1.6, marginTop: 16 }}>
        Put the design files from this project into a{" "}
        <code>design-reference/</code> folder here, then point Claude Code at
        them section by section.
      </p>
    </main>
  );
}

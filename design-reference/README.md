# GigaWebZone — Next.js starter

A minimal Next.js (App Router) scaffold so your editor / Claude Code has the
`package.json` and `src/` it expects. The full design lives as a **reference**
(the HTML/CSS/JS files); recreate it here, page by page.

## Setup
```bash
cd gigawebzone-app
npm install
npm run dev        # http://localhost:3000
```

## Add the design reference
Copy the HTML design files (the 9 `.html` pages + the `assets/` folder) into:
```
gigawebzone-app/
├─ package.json
├─ src/app/            ← build the real pages here
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css      ← design tokens already ported
└─ design-reference/   ← drop the HTML/CSS/JS + assets here
```

## Build with Claude Code
Work one section at a time, e.g.:
> "Use `@design-reference/GigaWebZone Homepage.html` and
> `@design-reference/assets/gwz.css` as the visual spec. Recreate the header
> and hero as React components in `src/app`, reusing the tokens already in
> `globals.css`."

## Notes
- The design tokens (colors, fonts, spacing, light/dark) are in
  `src/app/globals.css` — start there.
- Fonts: add Space Grotesk, Manrope and Space Mono (Google Fonts) via
  `next/font` or a `<link>` in `layout.tsx`.
- Pages to build: Home, Web Development, App Development, Portals & Platforms,
  WordPress, Industries, Portfolio, About, Contact.

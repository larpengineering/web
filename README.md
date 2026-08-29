# larp.engineering

> serious software. less serious theater.

The public surface for **larp engineering**, built as a restrained, text-led studio page instead of a generic agency template.

## stack

- Next.js `16.3.3`, App Router, static export
- React `19.2.8`
- TypeScript and Tailwind CSS 4
- Bricolage Grotesque + IBM Plex Mono, vendored through Fontsource
- Vitest and Testing Library
- GitHub Pages deployment from `main`

## design posture

The site is a restrained, text-led conversion surface: warm white, near-black, quiet gray, strong type, and no decorative props. The page keeps one primary action, states the offer in plain language, and uses the public source as proof instead of inventing case studies, metrics, or a logo wall.

The source of truth lives in:

- `src/app/page.tsx` for the document and copy
- `src/app/globals.css` for the visual system and responsive behavior
- `src/app/layout.tsx` for public metadata
- `src/app/opengraph-image.png` for link previews

## work locally

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## prove it

```bash
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```

`pnpm build` emits the deployable static site to `out/`. Every push to `main` runs the same verification before GitHub Pages publishes it.

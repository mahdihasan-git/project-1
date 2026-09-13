# Dev Stack Builder

A React + Vite + TypeScript + Tailwind CSS website where developers can browse
technologies and assemble their own "stack".

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Notes

- Technology data lives in `public/data/technologies.json` and is fetched at
  runtime (not bundled), so the loading state in `src/hooks/useTechnologies.ts`
  is genuine.
- The shared orange → pink → violet brand gradient is defined once in
  `src/index.css` (`--brand-from`, `--brand-via`, `--brand-to`). Change those
  three values to re-theme the whole app (brand name, hero heading highlight,
  and primary buttons).
- Technology icons are loaded from `icon.icepanel.io` URLs in the JSON data —
  an internet connection is needed to see them render.
- Toast notifications (add / duplicate / remove / remove all) use
  `react-toastify`.

# Preventiva Norte

Marketing site for Preventiva Norte, a protective-netting installation
company serving Porto, Braga and the Norte de Portugal region (child
safety nets, cat-proofing, bird control). Built with Next.js (App
Router), React, TypeScript and Tailwind CSS, serving Portuguese content
at `/` and Spanish content at `/es`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Copy `.env.example` to `.env.local` and fill in the analytics
(`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_GOOGLE_ADS_ID`)
and lead-capture (`NEXT_PUBLIC_WEB3FORMS_KEY`) keys before deploying —
see `.env.example` for details.

## Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Documentation

- [`DESIGN.md`](./DESIGN.md) — shared design tokens/components reference
  for the Preventiva group of sites, plus build lessons from this repo.
- [`PREVENTIVA_NORTE_IDENTITY.md`](./PREVENTIVA_NORTE_IDENTITY.md) — this
  site's brand facts (contact details, service area, colors).

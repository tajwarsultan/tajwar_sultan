# tajwarsultan.dev

Personal portfolio of Tajwar Sultan, built with Next.js (App Router) and Tailwind CSS v4.

## Develop

```bash
npm install
```

```bash
npm run dev
```

## Editing content

All copy lives in `app/lib/siteData.js` — projects, work experience, education, languages and the tech stack.
Employment history mirrors the CV in `public/`; keep the two in sync.

## Contact form

The form sends through EmailJS. Copy `.env.example` to `.env.local` and fill in the three keys.
Without them, submitting the form opens the visitor's mail app with the message pre-filled.

## Design notes

- Colours are CSS variables in `app/globals.css`, with light and dark themes.
- Fonts: Bricolage Grotesque (display), Geist (text), Geist Mono (labels).
- The contour-map artwork is generated at build time in `app/lib/topo.js`.

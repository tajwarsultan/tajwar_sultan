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

## Tools slider

The logos at the bottom of the hero come from `toolRows` in `app/lib/siteData.js`. To add one, add an entry with
its simple-icons name and run `npm run sprite`, which rebuilds `public/tools.svg`.

## Blog

Articles are Markdown files in `content/blog`. The number at the start of the filename sets the order.
Each file starts with `title`, `description`, `date`, `art` and `tags`. `art` names one of the illustrations in `app/components/ArticleArt.js`. Add a file and it appears on `/blog`,
the home page, the sitemap and `/llms.txt`.

## CV

`/cv` renders the CV from the same data as the site. `public/Tajwar-Sultan-CV.pdf` is that page printed to A4,
so after changing `siteData.js`, open `/cv`, print to PDF (A4, no margins, background graphics on) and replace the file.

## Contact form

The form sends through EmailJS. Copy `.env.example` to `.env.local` and fill in the three keys.
Without them, submitting the form opens the visitor's mail app with the message pre-filled.

## Deployment

The site is hosted on Netlify at https://tajwarsultan.netlify.app. Every push to `main` triggers a production
deploy, and every pull request gets its own preview URL.

Production deploys use Netlify credits. If a deploy from `main` shows as skipped, check the team's Billing page:
when credits run out, production deploys pause until the next billing cycle, while previews keep working. Once
credits are back, use Deploys → Trigger deploy in Netlify, or push a new commit to `main`.

Set the three `NEXT_PUBLIC_EMAILJS_*` variables in Netlify's environment settings so the contact form can send.

## Design notes

- Colours are CSS variables in `app/globals.css`, with light and dark themes.
- Fonts: Bricolage Grotesque (display), Geist (text), Geist Mono (labels).
- The contour-map artwork is generated at build time in `app/lib/topo.js`.

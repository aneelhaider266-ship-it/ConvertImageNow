# ConvertImageNow

Free browser-based image conversion and resizing tools.

**Live site:** https://convertimagenow.com

## Supported formats

- **Input:** JPG, PNG, WebP, and AVIF where the browser supports AVIF decoding.
- **Output:** JPG, PNG, and WebP.
- **Not currently supported:** HEIC / HEIF.

Selected image files are processed in the browser with image decoding and Canvas APIs rather than uploaded to a conversion server. The website still makes normal requests to load pages and resources; see the Privacy Policy for site-data details.

## Stack

- Next.js 15.5.29 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Node.js 22.x
- Sharp 0.35.5

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Project structure

- `app/` — App Router pages, metadata, sitemap, and robots rules
- `components/` — shared layout, converter, resizer, and contact components
- `lib/` — image conversion logic, FAQs, and blog content
- `public/` — static assets

## Deployment

The project is connected to Vercel. Use Node.js 22.x for builds and keep the GitHub lockfile in sync with `package.json`.

Before promoting a change to production, verify the Vercel deployment and test the main converter on desktop and mobile.

## Contact form

The current `app/api/contact/route.ts` logs submissions but does not send email. Connect an email provider and configure its API key in Vercel before relying on form delivery.

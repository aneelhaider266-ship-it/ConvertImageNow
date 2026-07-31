# ConvertImageNow
## 🌐 Website

ConvertImageNow is a free online image converter that supports PNG, JPG, WebP, and AVIF formats.

👉 https://www.convertimagenow.com

Free, browser-based image converter — Next.js 15 + TypeScript + Tailwind CSS.
All image conversion happens client-side via the Canvas API. No files are
ever uploaded to a server.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — pages (App Router)
- `components/` — Header, Footer, ImageConverter, ContactForm
- `lib/` — image conversion logic, FAQ + blog content

## Deploying

See the step-by-step deployment guide provided separately for:
1. Pushing this code to GitHub
2. Importing the repo into Vercel
3. Connecting the convertimagenow.com domain
4. Configuring DNS + HTTPS

## Wiring up the contact form

`app/api/contact/route.ts` currently logs submissions but does not send
email. To deliver messages to contact@convertimagenow.com, connect an email
provider such as [Resend](https://resend.com) (see comments in that file)
and add the resulting API key as an Environment Variable in Vercel.

Free, browser-based image converter — Next.js 15 + TypeScript + Tailwind CSS.
All image conversion happens client-side via the Canvas API. No files are
ever uploaded to a server.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `app/` — pages (App Router)
- `components/` — Header, Footer, ImageConverter, ContactForm
- `lib/` — image conversion logic, FAQ + blog content

## Deploying

See the step-by-step deployment guide provided separately for:
1. Pushing this code to GitHub
2. Importing the repo into Vercel
3. Connecting the convertimagenow.com domain
4. Configuring DNS + HTTPS

## Wiring up the contact form

`app/api/contact/route.ts` currently logs submissions but does not send
email. To deliver messages to contact@convertimagenow.com, connect an email
provider such as [Resend](https://resend.com) (see comments in that file)
and add the resulting API key as an Environment Variable in Vercel.

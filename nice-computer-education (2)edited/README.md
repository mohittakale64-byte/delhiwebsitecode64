# Nice Computer Education — Next.js Website

Marketing website for **Nice Computer Education**, a computer training institute in West Vinod Nagar, East Delhi.

## Stack

- **Next.js 15** (App Router) + **TypeScript 5**
- **React 19**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Radix UI** + custom shadcn components
- **Framer Motion** for animations
- **React Hook Form + Zod** for forms

## Pages

- `/` — Home (hero, courses, stats, gallery, testimonials, contact)
- `/courses/typing` — Typing (English & Marathi)
- `/courses/ms-office` — MS Office Suite
- `/courses/advanced-excel` — Advanced Excel & Data Analysis
- `/courses/tally-gst` — Tally with GST & Taxation
- `/courses/graphics-designing` — Graphics Designing
- `/courses/programming` — C & Python Programming

All pages are **statically generated** at build time (zero server runtime cost).

## Development

```bash
yarn install
yarn dev      # http://localhost:3000
```

## Production

```bash
yarn build
yarn start
```

## Deployment

This project is a standard Next.js + TypeScript app and can be deployed to:

- **Vercel** — push to GitHub and connect the repo (zero config)
- **Netlify** — works out of the box with the Next.js runtime
- Any Node.js host that can run `yarn build && yarn start`

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Home page
│   ├── providers.tsx        # Client providers (Toaster, Tooltip)
│   ├── globals.css          # Tailwind 4 + theme tokens
│   ├── not-found.tsx        # 404 page
│   └── courses/
│       ├── typing/page.tsx
│       ├── ms-office/page.tsx
│       ├── advanced-excel/page.tsx
│       ├── tally-gst/page.tsx
│       ├── graphics-designing/page.tsx
│       └── programming/page.tsx
├── components/
│   ├── CoursePage.tsx       # Shared course page template
│   └── ui/                  # 55 shadcn/ui components
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── lib/
    └── utils.ts             # cn() helper

public/                       # Static assets (course images, logo, gallery, favicon, sitemap, robots.txt)
```

## Contact

- Phone: +91 98918 02542
- Location: West Vinod Nagar, East Delhi – 110092 (near Vinod Nagar Metro)

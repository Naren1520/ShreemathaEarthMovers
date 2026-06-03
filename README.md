# Shreematha Earthmovers

A modern and responsive web application built with Next.js 16 for showcasing earthmoving, construction, and infrastructure services. The platform is optimized for performance, SEO, and user experience using the App Router architecture, Tailwind CSS, and Vercel Analytics.

---

##  Tech Stack

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion
* Swiper.js
* Lucide React Icons
* Vercel Analytics

---

##  Features

* Modern responsive design
* Fast static page generation
* SEO-friendly architecture
* Optimized image delivery with `next/image`
* Lazy loading for media assets
* Interactive animations using Framer Motion
* Mobile-first navigation
* Analytics integration with Vercel
* Scalable component-based structure

---

##  Project Structure

```text
Shreematha-Earthmovers/
│
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── machinery/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── GlobalElements.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── MachinerySection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/
│       ├── StatsSection.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Loader.tsx
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── machinery/
│   │   ├── projects/
│   │   └── gallery/
│   │
│   ├── videos/
│   │   ├── vdo2.mp4
│   │   └── vdo3.mp4
│   │
│   └── favicon.ico
│
├── lib/
│   ├── constants.ts
│   ├── data.ts
│   └── utils.ts
│
├── hooks/
│   └── useScrollAnimation.ts
│
├── types/
│   └── index.ts
│
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── package.json
├── package-lock.json
└── README.md
```

---

##  Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

##  Development

Start the development server:

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

##  Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

---

## 📜 Available Scripts

| Command       | Description               |
| ------------- | ------------------------- |
| npm run dev   | Start development server  |
| npm run build | Generate production build |
| npm run start | Start production server   |
| npm run lint  | Run ESLint checks         |

---

##  Performance Optimizations

* Static Site Generation (SSG)
* Automatic code splitting
* Optimized image loading
* Lazy-loaded assets
* Tailwind CSS optimization
* Vercel Analytics integration
* SEO-friendly routing structure

---

##  Deployment

The project can be deployed on:

* Vercel (Recommended)
* Netlify
* AWS Amplify
* DigitalOcean App Platform
* Any platform supporting Next.js

Before deployment:

* Configure environment variables if required
* Verify image domains in `next.config.ts`
* Optimize large media files
* Enable CDN caching for static assets

---

##  Author

**Naren S J**

---

##  License

This project is developed for Shreematha Earthmovers and is intended for business and portfolio use.

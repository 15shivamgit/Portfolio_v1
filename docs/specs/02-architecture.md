# 02 — Technical Architecture

A static single-page app. There is no server or database of ours. Vercel serves the built files, and the browser talks directly to Web3Forms and Google Analytics.

```text
Browser
  ├── Vercel: static HTML, JS, CSS, images and PDFs
  ├── Web3Forms: contact form submissions, delivered to email
  └── Google Analytics: page views
```

## Stack

| Layer | Choice | Why |
|---|---|---|
| Build | Vite 7 | Already in place, and fast |
| UI | React 19 | Already in place |
| Routing | React Router 7 | Client-side routes with page transitions |
| Styling | Tailwind CSS 4 with CSS variables | Theme tokens switch light and dark in one place |
| Animation | Framer Motion 12 | Scroll-linked values, layout animation and exit animation |
| Smooth scroll | Lenis | Consistent wheel scrolling |
| Icons | Lucide | Already in place |
| Fonts | Fontsource, self-hosted | No third-party font requests |
| Forms | Web3Forms | Free, and needs no backend ([D-004](DECISIONS.md#d-004--web3forms-replaces-the-express-backend)) |
| Hosting | Vercel | Free tier, deploys from `main` |

## Folder layout

```
src/
├── App.jsx               # routes and the page-transition boundary
├── main.jsx              # fonts, global CSS, React root
├── index.css             # theme tokens, base styles, CSS-only animations
├── data/                 # all content (03-data-model.md)
├── lib/motion.js         # easing, shared Lenis handle, intro state
├── hooks/                # useTheme, usePageTitle, useMediaQuery
├── components/
│   ├── Layout.jsx        # Lenis, intro, progress bar, cursor, page transition
│   ├── Navbar.jsx  Footer.jsx  ExperienceCard.jsx
│   ├── home/             # Hero, ProjectStack, Bento, ProcessDraw
│   ├── mocks/Mocks.jsx   # coded product illustrations and ProjectVisual
│   └── ui/               # reusable animated pieces
└── pages/                # one file per route
public/
├── images/               # optimized WebP: projects, certs, goer, hisaab, portrait
├── certificates/         # original certificate files
├── og.png  favicon.svg  robots.txt  sitemap.xml
└── Shivam_Kumar_Full_Stack_Developer.pdf
docs/                     # this documentation
vercel.json               # SPA rewrite and image cache header
```

## Key flows

**Routing.** `vercel.json` rewrites any path without a file extension to `index.html`, so direct links load the app and React Router takes over.

**Page change.** `AnimatedRoutes` keys `PageTransition` on the pathname inside `AnimatePresence mode="wait"`. The old page exits behind a saffron wipe, `scroller.toTop()` resets the scroll position, and the new page enters.

**Theme.** A small inline script in `index.html` reads `localStorage` before first paint and sets `data-theme`. `useTheme` toggles it and uses the View Transitions API for a circular reveal from the click point, falling back to an instant switch. All colours come from CSS variables in `index.css`.

**Smooth scroll.** `Layout` creates one Lenis instance and stores it in `lib/motion.js` as `scroller`, so the modal and menu can pause scrolling. Lenis is not created under reduced motion.

**Contact.** `Contact.jsx` posts `FormData` to `https://api.web3forms.com/submit` with the access key from `VITE_WEB3FORMS_KEY`. See [`guides/contact-form.md`](../guides/contact-form.md).

## Environment variables

| Name | Purpose | Where it is set |
|---|---|---|
| `VITE_WEB3FORMS_KEY` | Web3Forms access key | Local `.env` (git-ignored) and Vercel project settings |

Vite embeds `VITE_` variables in the public JavaScript. That is expected for this key, which Web3Forms designs for client-side use. Never give a real secret a `VITE_` prefix.

## Build output

`vite.config.js` splits vendor code into `react` and `motion` chunks. The JavaScript is about 530 kB across three chunks before compression, and about 170 kB gzipped. `dist/` is about 9 MB, mostly certificate PDFs and images that load only on demand.

## Technical constraints

- **Client-side rendering.** Page content needs JavaScript. `index.html` carries site-wide metadata and a `noscript` line. Prerendering is in the parking lot.
- **CSS layers.** Global rules sit in `@layer base` and `@layer components`, so Tailwind utilities can override them. An unlayered rule beats every utility, and this caused real bugs during the build.
- **Sticky sections.** `ProjectStack` and `ScrollGallery` use `position: sticky`, which `overflow: hidden` on an ancestor breaks. That is why `overflow-x` on `body` uses `clip`.

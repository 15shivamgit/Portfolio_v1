# Shivam Kumar: Portfolio

Personal portfolio of Shivam Kumar, Full Stack Developer.

**Live site:** https://shivam-v1-sigma.vercel.app

## Stack

React 19, Vite, Tailwind CSS 4, Framer Motion, Lenis and React Router. Contact messages go through Web3Forms, so the site needs no backend.

## Run locally

```bash
npm install
cp .env.example .env   # add your Web3Forms access key
npm run dev
```

| Command           | What it does          |
| ----------------- | --------------------- |
| `npm run dev`     | Start the dev server  |
| `npm run build`   | Production build      |
| `npm run preview` | Preview the build     |
| `npm run lint`    | Run ESLint            |

## Editing content

All content lives in `src/data`, so most updates need no component changes.

| File                 | Holds                                                   |
| -------------------- | ------------------------------------------------------- |
| `profile.js`         | Name, links, stats, skills, education, live updates     |
| `experience.js`      | Work history                                            |
| `projects.js`        | Every project and its case study                        |
| `certificates.js`    | Certificates, with files in `public/certificates`       |

## Environment variables

| Name                 | Purpose                                                                                        |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_KEY` | Access key from [web3forms.com](https://web3forms.com). Add it in Vercel project settings too. |

## Documentation

Specs, decisions, task plans and how-to guides are in [`docs/`](docs/README.md).

## Accessibility

The site honours the system reduced-motion setting and supports keyboard navigation, including the certificate viewer and the before/after slider.

# Running and deploying

## Local

Needs Node.js and npm.

```bash
npm install
cp .env.example .env   # add VITE_WEB3FORMS_KEY
npm run dev
```

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run lint` | ESLint |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build |

## Release flow

1. Create a branch from `main`.
2. Make the change, then run `npm run lint` and `npm run build`.
3. Push, and open a pull request.
4. Merge to `main`. Vercel deploys it.
5. Check the live site: https://shivam-v1-sigma.vercel.app

## Git identity

Commits on this repository use `15shivambgs@gmail.com`. Pushes need the `15shivamgit` GitHub account, so check which account is active if a push is refused with a 403.

## Vercel

| Setting | Value |
|---|---|
| Environment variable | `VITE_WEB3FORMS_KEY` |
| Routes | `vercel.json` sends paths without a file extension to `index.html` |
| Image caching | `/images/*` is cached for 7 days |

Because images are cached, give a replaced image a new file name if it must update at once.

## After a deploy

- [ ] Home loads, and the theme toggle works.
- [ ] A direct link such as `/projects/hisaab` loads.
- [ ] The resume downloads.
- [ ] No errors in the browser console.

## Changing the domain

The canonical domain appears in `index.html` (canonical, share tags and structured data), `public/robots.txt`, `public/sitemap.xml` and `README.md`. Update them all, and log the change in `specs/DECISIONS.md`.

## Secrets

Never commit `.env`. Only `.env.example`, with empty values, belongs in Git. If a secret is committed, rotate it first. Deleting the file does not remove it from history.

# 03 — Data Model

There is no database. Content lives in plain JavaScript modules in `src/data/`, and pages render from them. `?` marks an optional field.

## `projects.js`

`projects` is an array, and its order is the display order. There are 15 projects: 5 flagship, 3 data, 2 web and 5 early.

| Field | Type | Meaning |
|---|---|---|
| `slug` | string | URL part. Stable and unique. |
| `title`, `short`, `summary` | string | Name, card text, case study text |
| `tier` | `flagship` \| `data` \| `web` \| `early` | Where it appears. Flagship goes on Home; early goes in the compact list. |
| `categories` | string[] | Filter IDs from `projectFilters` |
| `period`, `status` | string | Shown as written |
| `tech`, `highlights` | string[] | Case study lists. Cards show only the first few technologies. |
| `repo?`, `live?` | URL | Public links, shown only when present |
| `privateRepo?` | boolean | Shows the private label |
| `image?` | path | Card and hero screenshot |
| `gallery?` | path[] | Extra screenshots on the case study |
| `mock?` | `saas` \| `chat` \| `store` \| `phone` | Animated visual in place of `image` |
| `mockIsReal?` | boolean | The visual shows real screens, so no illustration label |
| `flow?` | `ticket` | Extra labelled illustration section |
| `screens?` | `{src, label}[]` | Real app screens on the case study |
| `beforeAfter?` | boolean | Adds the raw-CSV-to-dashboard slider |
| `stats?` | `{value, suffix?, label}[]` | Counted numbers |

`rawLaunchHeader` and `rawLaunchRows` hold real rows from the Space Launch dataset, for the slider.

## `certificates.js`

`certificates` holds 17 entries, newest first, with `certFilters` for the filters. `goerCertificate` points at the GOER entry.

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Stable key, and used to look up `goer`, `rmat` and `aps` |
| `title`, `issuer`, `date` | string | As printed on the certificate |
| `topic` | `dev` \| `data` \| `cloud` \| `other` | Filter |
| `thumb` | path | WebP in `public/images/certs/` |
| `file` | path | Original in `public/certificates/`. Its extension sets the download name. |
| `verify?` | URL | A stable public link only |
| `credential?`, `note?` | string | Shown in the viewer or on the card |
| `skills` | string[] | Stored for future use. Not rendered today. |

## `experience.js`

`experience` is ordered newest first. Fields: `role`, `company`, `type`, `period`, `location`, `current?`, `points[]`, `skills[]`. Only the first three `points` show until "Show more" is used.

## `profile.js`

| Export | Used by |
|---|---|
| `profile` | Contact details, links, resume path, statement, summary and rotator words |
| `heroStats` | Home numbers |
| `pings` | Home toasts |
| `process` | "How I work" |
| `claims` | Claim vs Proof. Each `to` must be a real `/projects/:slug`. |
| `skills`, `education` | About |
| `marqueeTech` | Home marquee |

## `goer.js`

`goerHero` and `goerPhotos` are `{src, ratio, caption}` objects. `ratio` must match the image, so the gallery can reserve its width before the image loads. Captions say only what the photo shows.

## Values that live in more than one place

These are not derived from the data, so update them by hand. [`guides/content-updates.md`](../guides/content-updates.md) has a checklist.

| Value | Places |
|---|---|
| Flagship count ("Five products") | `pages/Home.jsx`, `heroStats` |
| Hisaab tests (446) | `heroStats`, `claims`, `pings`, `projects.js`, `home/Bento.jsx` |
| SaaS counts (59 PRs, 280 test files) | `heroStats`, `claims`, `projects.js`, `home/Bento.jsx` |
| Store test files (66 = 57 + 9) | `projects.js`, `home/Bento.jsx` |
| Current job | `experience.js`, `pings`, `home/Hero.jsx`, `home/Bento.jsx` |
| Project routes | `public/sitemap.xml` |
| Role and links | `index.html` metadata, `profile.js` |

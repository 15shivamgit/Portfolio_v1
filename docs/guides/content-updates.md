# Updating content

All content is in `src/data/`. Field details are in [`specs/03-data-model.md`](../specs/03-data-model.md). Check any new fact against [`specs/05-data-sources.md`](../specs/05-data-sources.md).

## Add a project

1. Convert a screenshot to WebP and put it in `public/images/projects/`, about 1400 px wide.
2. Add an entry to `src/data/projects.js`. Its position in the array sets its display order.
3. Add `/projects/<slug>` to `public/sitemap.xml`.
4. If it is flagship, update "Five products" in `pages/Home.jsx` and the first item of `heroStats`.
5. Run `npm run dev` and check the card and the case study.

For a private project, set `privateRepo: true`, use a public-safe name, and leave out `repo` and `live`.

## Add a certificate

1. Put the original in `public/certificates/`.
2. Put a WebP thumbnail in `public/images/certs/`.
3. Add an entry to `src/data/certificates.js`, newest first, copying the title and date from the certificate.
4. Add `verify` only if the link is stable. Do not use a link with `X-Amz-` or an expiry in it.

## Change jobs

1. Add the role at the top of `src/data/experience.js`, and move `current: true` to it.
2. Update the current-job text in `home/Hero.jsx`, `home/Bento.jsx` and `pings` in `data/profile.js`.

## Update a number

Numbers such as test counts appear in several files. Search for the old value across `src/` and update every match. The known list is in [`specs/03-data-model.md`](../specs/03-data-model.md).

## Replace the resume

Replace the PDF in `public/`. If the name changes, update `resume` and `resumeName` in `data/profile.js`.

## Add a photo

1. Keep the original in `docs/certificates/`, which is git-ignored.
2. Make a WebP copy in `public/images/`, no wider than about 1400 px.
3. For the GOER gallery, add it to `src/data/goer.js` with the correct `ratio`. Use a caption that says only what the photo shows.

Only publish photos of other people with their consent.

## Before you finish

```bash
npm run lint
npm run build
```

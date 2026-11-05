# Parking lot

Ideas and gaps found along the way that are **not** being built now. Each entry says where it came up. Add new entries at the end.

## Prerender pages for search and sharing — found during the redesign, 2026-11-05

Pages render in the browser, and every route shares the same description and share image from `index.html`. Prerendering each route would give per-page metadata and text without JavaScript. Revisit if the site needs to rank for more than Shivam's name.

## Split code by route — found during the redesign, 2026-11-05

All pages load in one bundle. Lazy-loading routes would shrink the first load. Decide after the Lighthouse run in T3.7, since it may not matter.

## Show GOER and project media as video — found during the redesign, 2026-11-05

Short screen recordings of Hisaab or BhaktiYatra could replace some stills. This needs real recordings and a plan for file size.

## Replace illustrations with real screens — found during the redesign, 2026-11-05

The SaaS, chat and store projects use illustrations because no screens were shareable. Sanitized screenshots would be stronger evidence, if they can be made safe to publish.

## Show certificate skills — found while writing the data model, 2026-11-05

Each certificate has a `skills` list that nothing renders. Use it in the viewer or filter, or remove it.

## Derive repeated numbers from one place — found while writing the data model, 2026-11-05

Figures such as 446 tests appear in several files (`03-data-model.md`). Named constants would prevent them drifting apart.

## Unused certificate image — found while writing the docs, 2026-11-05

`public/certificates/irm_certificate.jpg` is not referenced by the code. The GOER thumbnail is made from it, so keep the original somewhere safe before deleting. Tracked as T3.11.

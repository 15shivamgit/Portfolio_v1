# Phase 2 Task Plan (Design system and motion)

Mark `[x]` when done. Requirement IDs refer to `docs/specs/01-requirements.md`, and H IDs to `docs/specs/06-module-h.md`.
**Status: complete.** All tasks landed in `2be3c34`, merged through PR #1.

---

## Milestone M5 — Design system

- [x] **T2.1 — Theme tokens.** Light and dark CSS variables, Tailwind theme mapping and layered global CSS. *(A5, D-003)*
- [x] **T2.2 — Type.** Bricolage Grotesque, Geist, Geist Mono and Instrument Serif italic.
- [x] **T2.3 — Theme toggle.** Persisted choice, no flash on load, circular reveal. *(A5, H19)*
- [x] **T2.4 — Site shell.** Navbar, mobile menu, footer, skip link and scroll progress. *(A3, A4, A7, A10, H15, H16)*
- [x] **T2.5 — Page transitions and intro.** *(H13, H14)*
- [x] **T2.6 — Smooth scroll.** One shared Lenis instance. *(N1)*

## Milestone M6 — Motion components

- [x] **T2.7 — Text.** Split characters and words, scroll-lit statement, word rotator. *(H1, H2)*
- [x] **T2.8 — Numbers.** Count-up and odometer. *(H5, H10)*
- [x] **T2.9 — Interactive pieces.** Magnetic buttons, spotlight cards, marquee and cursor ring. *(H18, H19)*
- [x] **T2.10 — Product illustrations.** SaaS, chat, store and booking mocks, scaled to their frame. *(C4, D-006)*

## Milestone M7 — Pages

- [x] **T2.11 — Home.** Hero, numbers, stacked projects, bento, process, experience, before and after, GOER band, closing section and toasts. *(B1–B9, H1–H3, H5, H6, H8, H9, H17)*
- [x] **T2.12 — Work.** Filters, search, cards, early-builds list and cursor tour. *(C1, C2, C6, H7, H18)*
- [x] **T2.13 — Case studies.** Real screenshots shown in full, real Hisaab screens, the booking illustration and next-project link. *(C3–C5, D-007)*
- [x] **T2.14 — About.** Claim vs Proof, skills and timelines. *(D1–D4, H8, H11)*
- [x] **T2.15 — Certificates.** Deck, filtered grid and viewer. *(E1–E4, H4)*
- [x] **T2.16 — Achievements.** GOER, gallery, RMAT gauge and odometer, and quiz. *(F1–F4, H10, H17, D-015)*
- [x] **T2.17 — Contact.** Fields, button states, confetti, copy email and errors. *(G2–G5, H12, D-013)*
- [x] **T2.18 — 404 page.** *(A1, H19)*

## Milestone M8 — Assets and SEO

- [x] **T2.19 — Optimize images.** Project screenshots and certificates as WebP. Certificate thumbnails rendered from their PDFs.
- [x] **T2.20 — Portrait.** High-resolution cutout for the hero and share image.
- [x] **T2.21 — SEO files.** Metadata, structured data, share image, favicon, `robots.txt` and `sitemap.xml`. *(A9)*

## Exit check

Run in Chromium at desktop and mobile sizes, using temporary scripts (D-017).

- [x] Route, theme, filter, search, tour, certificate viewer and download checks pass.
- [x] Form states pass against a mocked API, including API failure.
- [x] No console errors or horizontal overflow.
- [x] Reduced motion leaves the content visible.
- [x] `npm run lint` and `npm run build` pass.

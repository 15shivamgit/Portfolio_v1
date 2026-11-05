# Phase 1 Task Plan (Foundation and truthful content)

Mark `[x]` when done. Requirement IDs refer to `docs/specs/01-requirements.md`.
**Status: complete.** All tasks landed in `2be3c34`, merged through PR #1.

---

## Milestone M1 — Clean the repository

- [x] **T1.1 — Remove the committed `.env`.** Removed `backend/.env` from current files and ignored `.env` files. *(N4. History is handled in T3.3.)*
- [x] **T1.2 — Remove the backend.** Deleted `backend/` in favour of Web3Forms. *(G1, D-004)*
- [x] **T1.3 — Remove dead code.** Deleted `aaa.jsx`, `achi.jsx`, `App.css`, an unused Tailwind config and the inspect-block hook. *(D-009)*
- [x] **T1.4 — Remove the localhost widget and other leftovers.** Moved the Google verification file into `public/` so it is actually served.
- [x] **T1.5 — Remove private and outdated files.** Removed the marksheet image and old resumes, and added the current resume. *(D-008)*

## Milestone M2 — One data layer

- [x] **T1.6 — Create `src/data/`.** Moved projects, certificates, experience and profile out of page components. This ended two project lists that disagreed. *(03-data-model)*
- [x] **T1.7 — Switch to slugs.** Project routes use stable slugs in place of numeric IDs. *(A1, C7)*

## Milestone M3 — Correct the content

- [x] **T1.8 — Fix identity details.** Consistent name, correct phone number and correct GitHub link. *(D-002)*
- [x] **T1.9 — Add experience.** Quark Consulting, Talent Glider and Shanti Infosoft, with full LinkedIn descriptions. *(D4)*
- [x] **T1.10 — Rebuild the project list.** Reviewed every repository, the resume and LinkedIn. Added the flagship projects and fixed names, spelling and statuses. *(C1, C3, D-006)*
- [x] **T1.11 — Check every certificate against its file.** Corrected titles and dates, removed a fake credential ID and expired signed links, and added missing certificates. *(E1, D-011)*
- [x] **T1.12 — Replace vanity stats with sourced numbers.** Removed items such as "100% Dedication". *(B2)*
- [x] **T1.13 — Remove RGC India.** *(D-010)*

## Milestone M4 — Basics that were broken

- [x] **T1.14 — Fix deep links.** Added the `vercel.json` rewrite. *(A2)*
- [x] **T1.15 — Fix the contact form.** Connected Web3Forms. A real test message from a local build got a success response from the API. *(G1, D-016. Inbox delivery from the live domain is T3.1.)*
- [x] **T1.16 — Fix page behaviour.** Scroll resets on navigation, and each page has its own title. *(A6)*
- [x] **T1.17 — Fix certificate downloads.** Download names and extensions are correct. *(E3)*
- [x] **T1.18 — Load fonts.** The old CSS named fonts that never loaded. They are now self-hosted.

## Exit check

- [x] `npm run lint` passes.
- [x] `npm run build` passes.

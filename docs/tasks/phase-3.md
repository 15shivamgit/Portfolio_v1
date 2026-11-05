# Phase 3 Task Plan (Launch and hardening)

Work in order. Mark `[x]` when done. One commit per task, referencing the task ID.
Requirement IDs refer to `docs/specs/01-requirements.md`.
**Status: in progress.**

---

## Milestone M9 — Launch

- [x] **T3.0a — Merge and deploy.** PR #1 is merged to `main`. On 2026-11-05 the live site served the new title and bundle, and `/projects`, `/about`, `/projects/hisaab`, `/sitemap.xml` and `/og.png` returned 200.
- [x] **T3.0b — Set the form key in Vercel.** Confirmed: the live bundle contains the key.
- [x] **T3.0c — Rotate old credentials.** Done by Shivam (reported 2026-11-05).
- [ ] **T3.1 — Test the form on the live site.** Send one real message from the live domain in a normal browser and confirm it arrives. *(G6)*
- [ ] **T3.2 — Submit the sitemap** in Google Search Console. *(Owner: Shivam)*

## Milestone M10 — Repository

- [x] **T3.3 — Rewrite Git history.** Removed `backend/.env` from every commit and force-pushed `main` and `redesign-2026`, with Shivam's go-ahead. A fresh clone has no trace of the old credentials. *(D-018)*
- [ ] **T3.3a — Ask GitHub Support to purge the old commits.** They stay reachable by commit ID through closed PR #1 until GitHub removes them, and only GitHub Support can do that. *(Owner: Shivam. N5, D-018)*
- [x] **T3.4 — Commit these docs.** Includes the narrower `.gitignore` rule. *(D-014)*
- [x] **T3.5 — Update the GitHub repository homepage** to the canonical domain. *(D-012)*
- [ ] **T3.6 — Delete the merged `redesign-2026` branch.** Local `main` already follows the rewritten history.

## Milestone M11 — Verification

- [ ] **T3.7 — Audit the live site.** Run Lighthouse and an accessibility review. Fix findings or park them. *(N3)*
- [ ] **T3.8 — Test on real devices and browsers.** Check a real phone, Safari and Firefox using [`guides/testing.md`](../guides/testing.md). Add the browser checks to the repository. *(N2, N6, D-017)*

## Milestone M12 — Content follow-ups

- [ ] **T3.9 — Align the resume and LinkedIn** with the certificates. *(Owner: Shivam. `05-data-sources.md`, D-011)*
- [ ] **T3.10 — Fix the Space Launch dashboard.** The overview screenshot mixes `$` and `₹` in its cost cards and shows the "Mission Type" filter twice. Fix it in Power BI, then update the images. *(Owner: Shivam)*
- [ ] **T3.11 — Remove the unused `public/certificates/irm_certificate.jpg`.** *(PARKING-LOT)*

## Exit check

- [ ] Phase 3 exit criteria in `specs/04-roadmap.md` are met.

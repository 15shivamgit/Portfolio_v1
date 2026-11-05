# Decisions Log

Add new entries at the end and do not rewrite old ones. To change a decision, add a new entry that points back at the old one. Each entry records a choice or a deviation from the specs.

---

## D-001 — Keep Vite and React

**Date:** 2026-11-05
**Context:** The site could have moved to Next.js for server rendering.
**Decision:** Keep the existing Vite and React stack.
**Why:** It already deploys on Vercel, and the site has no dynamic data. The cost is client-side rendering, which is noted in the parking lot.

## D-002 — The site targets a job

**Date:** 2026-11-05
**Decision:** Name is Shivam Kumar. Goal is a job. The headline role is Full Stack Developer.
**Why:** Chosen by Shivam. It replaces mixed "Shivam Singh" and "Shivam Kumar" naming and a long list of role labels.

## D-003 — Warm off-white theme with saffron

**Date:** 2026-11-05
**Decision:** Warm off-white background, black text, one saffron accent and a dark toggle. Reel-inspired, not copied.
**Why:** Chosen by Shivam. It replaces the blue and purple gradients that looked generic, and an automatic dark mode with no toggle.

## D-004 — Web3Forms replaces the Express backend

**Date:** 2026-11-05
**Context:** The form called `localhost:5000`, so it could not work on the live site. The Express and MongoDB backend had never been deployed for it.
**Decision:** Remove `backend/` and use Web3Forms.
**Why:** Chosen by Shivam. It is free and leaves no server to run. Messages go to email and are no longer stored in a database.

## D-005 — Reel animations use real data only

**Date:** 2026-11-05
**Context:** The reference reel included sale notifications, reviews, price changes and competitor comparisons.
**Decision:** Keep the motion and replace the content: real updates, certificates, the RMAT score and Claim vs Proof. No testimonials section.
**Why:** Fake social proof is easy for a recruiter to spot, and no real testimonials exist.

## D-006 — Private projects use anonymized names and illustrations

**Date:** 2026-11-05
**Decision:** Private repositories use the resume's anonymized names. Where no shareable screens exist, an animated coded illustration stands in and is labelled as one.
**Why:** This shows the work without exposing private code or names. The labels keep it honest.

## D-007 — Hisaab uses real screens

**Date:** 2026-11-05
**Decision:** Replace the Hisaab illustration with real app screenshots. Remove the illustration label for this project through `mockIsReal`.
**Why:** Shivam supplied screenshots and confirmed they show dummy data.

## D-008 — Private details stay off the site

**Date:** 2026-11-05
**Decision:** Show only "Begusarai, Bihar", not the home address. Remove marksheets, and all marks except the MCA CGPA.
**Why:** Approved by Shivam. The address and marksheets add risk without helping a recruiter.

## D-009 — Inspect blocking removed

**Date:** 2026-11-05
**Decision:** Remove the hook that disabled right-click and developer tools keys.
**Why:** Approved by Shivam. It protects nothing, and it gets in the way of the developers this site wants to impress.

## D-010 — RGC India is removed

**Date:** 2026-11-05
**Context:** The project's listed stack could not be matched to the live site, so it was raised for confirmation.
**Decision:** Remove it from the site.
**Why:** Shivam's instruction.

## D-011 — Certificates outrank the resume

**Date:** 2026-11-05
**Context:** Some resume and LinkedIn entries differ from the certificates (see `05-data-sources.md`).
**Decision:** The site follows the certificate. Shivam will align the resume and LinkedIn.

## D-012 — Canonical domain

**Date:** 2026-11-05
**Decision:** `shivam-v1-sigma.vercel.app` is the main link, used in the canonical tag, sitemap, structured data and share metadata.
**Why:** Shivam's choice. The GitHub repository's homepage field still shows an older domain (T3.5).

## D-013 — CSS confetti

**Date:** 2026-11-05
**Context:** Framer Motion keyframes for the confetti jumped directly to their end state, so nothing was visible.
**Decision:** Use a CSS keyframe animation driven by custom properties.
**Result:** Pieces were confirmed mid-animation in the browser. A plain CSS animation also has fewer moving parts for a short one-off effect.

## D-014 — Source photos stay out of Git

**Date:** 2026-11-05
**Decision:** Originals stay in `docs/certificates/`, which is git-ignored. Optimized WebP copies go in `public/images/`.
**Note:** This narrows an earlier ignore rule covering all of `docs/`, so that these documents can be committed.

## D-015 — GOER team photos are published

**Date:** 2026-11-05
**Decision:** Publish team photos on Home and Achievements.
**Why:** Shivam confirmed that everyone has consented.

## D-016 — Form submits as FormData

**Date:** 2026-11-05
**Context:** The first real send failed. A JSON request's CORS preflight returned 403, and so did a plain POST from a headless browser and from `curl`. A visible browser then got `200 success` using `FormData`.
**Decision:** Send `FormData`. It needs no preflight and is the form that has been tested end to end.
**Unknown:** JSON was never retried from a visible browser, so the block may have been aimed at headless clients rather than JSON.
**Consequence:** Automated tests must mock this API. Test the real path in a visible browser.

## D-017 — Scratch checks stayed out of the repository

**Date:** 2026-11-05
**Decision:** Browser checks for the redesign ran from temporary scripts, not from a committed test suite.
**Consequence:** Those checks are not repeatable from the repository. T3.8 and N6 cover this.

## D-018 — Git history rewritten to remove the old .env

**Date:** 2026-11-05
**Context:** `backend/.env` was committed in the public repository's history. Its credentials had already been rotated.
**Decision:** With Shivam's go-ahead, remove that one file from all 42 commits and force-push `main` and `redesign-2026`.
**Result:** A fresh clone contains neither the file nor the old values. Commit authors, dates, messages and the final code are unchanged, but every commit ID changed.
**Limit:** Closed PR #1 keeps a read-only reference to the old commits, so GitHub still serves them by ID. Only GitHub Support can purge them (T3.3a). This is why rotating the credentials was the fix that mattered.
**Scope:** Only this file was removed. Files deleted in the redesign, such as old resumes and the marksheet image, remain in history.
**Consequence:** Any older clone must be re-cloned. Pushing from one would bring the old history back.

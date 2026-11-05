# 04 — Phased Roadmap

One developer working with Claude Code. Phases are a sequence, not a calendar. Task lists are in `docs/tasks/`, and their checkboxes are the source of progress.

## Phase 1 — Foundation and truthful content (done)

Goal: remove what is broken or unsafe, and make every fact correct and traceable.

**Scope:** A1–A2, A6 · C7 · D3–D4 · G1, G4 · N4.

**Exit criteria, all met:** one data layer · the old backend, committed `.env` and localhost calls are gone from current files · content matches its sources · lint and build pass.

## Phase 2 — Design system and motion (done)

Goal: the new look on every page, with Module H in place.

**Scope:** A3–A5, A7–A10 · B1–B9 · C1–C6 · D1–D2 · E1–E4 · F1–F4 · G2–G3, G5 · H1–H19 · N1.

**Exit criteria, all met:** all 12 reel animations are on the site · interaction checks pass on desktop and mobile · no console errors · no horizontal overflow · reduced motion leaves a complete site.

## Phase 3 — Launch and hardening (current)

Goal: the live site is verified in real conditions and the repository is clean.

**Done so far:** the redesign is merged to `main` through PR #1 and deployed · the form key is set in Vercel · old credentials are rotated · the old `.env` is removed from every branch's history.

**Remaining scope:** G6 · N2 · N3 · N5 · N6, plus housekeeping.

**Exit criteria:**
- A real message from the live domain reaches the inbox.
- The site has been checked on a real phone and in Safari and Firefox.
- Lighthouse and accessibility findings are fixed or parked.
- Git history is rewritten (done), and GitHub Support has purged the old commits.

## After Phase 3

Nothing is committed beyond this. Candidates are in `PARKING-LOT.md`. Keep the site current as projects and roles change, using [`guides/content-updates.md`](../guides/content-updates.md).

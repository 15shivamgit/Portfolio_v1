# 00 — Product Overview

The personal portfolio of Shivam Kumar, Full Stack Developer. It is a fast, heavily animated website that helps a recruiter or hiring manager decide to get in touch.

**Live site:** https://shivam-v1-sigma.vercel.app
**Repository:** https://github.com/15shivamgit/Portfolio_v1 (public)

## Problem

The previous site looked generic and undersold the work. It showed 0 work experiences, listed only some projects, had inconsistent names and numbers, and its contact form pointed at `localhost`. A recruiter could not quickly see what Shivam builds or trust the details.

## Audience

| Reader | What they want | What serves them |
|---|---|---|
| **Recruiter** (primary) | Role fit in under a minute | Hero, numbers, experience, resume download |
| **Hiring manager or developer** | Proof of real engineering | Case studies, Claim vs Proof, source links |
| **Non-technical visitor** | A way to make contact | Contact form, email, phone |

## Goals

- **G1:** Within the first screen, a visitor knows the name, the role and that Shivam is open to work.
- **G2:** Within one scroll, a visitor sees evidence: numbers, products and current employment.
- **G3:** Contact takes one click, from every page.
- **G4:** The site is memorable, with motion on every page and a look that does not resemble a template.
- **G5:** Every claim can be traced to a source (`05-data-sources.md`).
- **G6:** Hosting and services cost nothing.

## Non-goals

- Blog, CMS, admin panel or login.
- A custom backend or database.
- Testimonials, because no real ones exist ([D-005](DECISIONS.md#d-005--reel-animations-use-real-data-only)).
- Freelance positioning. The stated goal is a job ([D-002](DECISIONS.md#d-002--the-site-targets-a-job)).

## Design direction

Warm off-white, black text and one saffron accent, with a dark theme toggle. Large type, an italic serif accent and motion that responds to scrolling. Inspired by a reel of landing-page animations, but not a copy of it. See `06-module-h.md`.

## Success measures

These are checks, not analytics targets, because the site has too little traffic for targets to mean anything.

- A visitor can reach the resume and the contact form from the first screen.
- No fact on the site contradicts its source.
- A real message sent from the live site reaches the inbox.
- The site stays usable with reduced motion enabled and on a phone.

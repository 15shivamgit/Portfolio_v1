# 05 — Data Sources

**Policy:** every fact on the site must trace to a source below. If it cannot, it does not go on the site. Numbers, dates and titles are copied, not estimated.

## Content sources

When sources disagree, the higher row wins.

| Rank | Source | Used for | In this repository? |
|---|---|---|---|
| 1 | The certificate or score report itself | Certificate titles, issuers, dates, credential IDs, scores | Yes, `public/certificates/` |
| 2 | Shivam's direct statement | Decisions, consent, confirmations | Logged in `DECISIONS.md` |
| 3 | Resume and LinkedIn text | Experience, education, flagship project facts and numbers | No, kept privately |
| 4 | LinkedIn screenshots | Full experience descriptions | No, `docs/certificates/` is git-ignored |
| 5 | GitHub repositories and READMEs | Public project details, links, tech stacks | External |
| 6 | Earlier site content | GOER and RMAT details not found elsewhere | Git history |

## Rules for specific content

- **Private projects.** Use the anonymized names from the resume. Never publish internal product names, client names or private URLs. Numbers come only from the resume or LinkedIn text.
- **Project status must be honest.** Keep qualifiers such as "Staging", "Tested locally", "Deployment pending" and "tested through a stub provider".
- **AI assistance is disclosed.** Flagship case studies say they were built with Claude Code, as the resume does.
- **Illustrations are labelled.** Their sample text and prices are not real data.
- **Hisaab screenshots** show dummy data, as confirmed by Shivam ([D-007](DECISIONS.md#d-007--hisaab-uses-real-screens)).
- **Photos of other people.** The GOER photos are published with everyone's consent, as confirmed by Shivam ([D-015](DECISIONS.md#d-015--goer-team-photos-are-published)).
- **Testimonials and reviews.** Real ones only. None exist today, so there is no such section.

## Known differences from the resume

The site follows the certificates. These resume and LinkedIn entries should be updated to match (T3.9).

| Item | Resume or LinkedIn | Certificate |
|---|---|---|
| AWS date | Sep 2025 | March 2025 |
| Microsoft title | Fundamental AI Concepts | Azure AI Fundamentals |
| IBM title | IBM Design Thinking Practitioner | IBM and Design Thinking |

## External services

| Service | Purpose | Cost | Failure behaviour |
|---|---|---|---|
| Vercel | Hosting | Free tier | Site is down |
| Web3Forms | Contact form delivery | Free tier | Error message with the email address, and typed text kept |
| Google Analytics | Page views (`G-MZ36Q3YNCS`) | Free | No effect on the site |
| Google and Rankpilot verification | Site ownership tags in `index.html` | Free | No effect on the site |

## External links to keep alive

| Links | Note |
|---|---|
| Project repositories, live sites and Power BI dashboards | Listed in `projects.js` |
| Saylor, Mind Luster and GeeksforGeeks verification | Listed in `certificates.js` |

All 24 of these links resolved when checked on 2026-11-05.

**Removed because they stopped working:** the Skill India verification links were temporary signed URLs and returned 403. The old BhaktiYatra live link returned 404. RGC India was removed by request ([D-010](DECISIONS.md#d-010--rgc-india-is-removed)).

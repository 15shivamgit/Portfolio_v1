# 01 — Functional Requirements

Priorities: **P0** = must-have for launch · **P1** = should-have · **P2** = future.
Status: **Done** = built and checked in Chromium · **Open** = not finished or not verified.
Requirement IDs are used in task lists and commit messages, so keep them stable.

---

## Module A — Site shell

| ID | Requirement | Priority | Status |
|---|---|---|---|
| A1 | Routes: `/`, `/projects`, `/projects/:slug`, `/about`, `/certificates`, `/achievements`, `/contact`, and a 404 page for anything else. | P0 | Done |
| A2 | Direct links and refreshes work on every route. | P0 | Done |
| A3 | Navigation with an active indicator, a resume download and a theme toggle. It hides on scroll down and returns on scroll up. | P0 | Done |
| A4 | Full-screen mobile menu that closes after a link is chosen. | P0 | Done |
| A5 | Light and dark themes. The choice persists, and the saved theme applies before first paint. | P0 | Done |
| A6 | Each page has its own title. Navigating to a new page starts at the top. | P0 | Done |
| A7 | Footer on every page with email, page links and social links. | P0 | Done |
| A8 | No horizontal overflow at 390 px or 1440 px wide. | P0 | Done |
| A9 | SEO basics: description, canonical URL, share image, Person structured data, `robots.txt`, `sitemap.xml`. | P1 | Done |
| A10 | Skip link, visible focus states and labelled icon buttons. | P1 | Done |

## Module B — Home

| ID | Requirement | Priority | Status |
|---|---|---|---|
| B1 | Hero with name, rotating description, role summary, open-to-work status, photo, and links to work and resume. | P0 | Done |
| B2 | Key numbers: products built, tests, merged PRs, CGPA and RMAT score. | P0 | Done |
| B3 | The 5 flagship projects as stacked scroll cards. | P0 | Done |
| B4 | "What I bring" bento grid. | P1 | Done |
| B5 | "How I work" process, drawn on scroll. | P1 | Done |
| B6 | Work experience timeline. | P0 | Done |
| B7 | Before and after slider from raw CSV to dashboard. | P1 | Done |
| B8 | GOER band linking to Achievements, then a closing contact section. | P1 | Done |
| B9 | Real updates shown as small toasts on desktop, and dismissible. | P2 | Done |

**Acceptance (B1):** at 1366×768, the hero fits in one screen without clipping the name.

## Module C — Work

| ID | Requirement | Priority | Status |
|---|---|---|---|
| C1 | Grid of flagship, data and web projects, plus a compact list of early builds. | P0 | Done |
| C2 | Filter by category, search by name or technology, a visible result count and an empty state. | P1 | Done |
| C3 | A case study per project: status, summary, tech, highlights, and source and live links where they exist. | P0 | Done |
| C4 | Private repositories are labelled as private. Illustrations are labelled as illustrations. | P0 | Done |
| C5 | Hisaab shows real app screens. BhaktiYatra shows real screenshots plus a labelled booking illustration. | P1 | Done |
| C6 | A guided cursor tour of real dashboards, which the visitor can take over. | P2 | Done |
| C7 | An unknown slug shows the 404 page. | P0 | Done |

## Module D — About

| ID | Requirement | Priority | Status |
|---|---|---|---|
| D1 | Summary, photo, how Shivam works and a resume download. | P0 | Done |
| D2 | "Claim vs Proof": each skill claim links to a project that demonstrates it. | P1 | Done |
| D3 | Skills grouped by area. | P0 | Done |
| D4 | Experience and education timelines. | P0 | Done |

**Constraint:** no marksheets, and no marks below the MCA CGPA ([D-008](DECISIONS.md#d-008--private-details-stay-off-the-site)).

## Module E — Certificates

| ID | Requirement | Priority | Status |
|---|---|---|---|
| E1 | All certificates in a filterable grid, with a shuffling deck in the page header. | P0 | Done |
| E2 | A viewer with the certificate image, original file, download and, where available, a verification link. | P0 | Done |
| E3 | Downloaded files have a clear name with the correct extension. | P1 | Done |
| E4 | Viewer closes with Escape, the close button or a click outside, and returns focus. | P1 | Done |

**Constraint:** verification links must be stable. Temporary signed URLs are not allowed.

## Module F — Achievements

| ID | Requirement | Priority | Status |
|---|---|---|---|
| F1 | GOER 2025: team photo, details, mentor, team and certificate. | P0 | Done |
| F2 | Photo gallery that moves sideways on desktop scroll and swipes on mobile. | P1 | Done |
| F3 | RMAT score with a gauge and rolling digits, ending on exactly 240 and 96%. | P1 | Done |
| F4 | National quiz result with its certificate. | P2 | Done |

## Module G — Contact

| ID | Requirement | Priority | Status |
|---|---|---|---|
| G1 | Form with name, email, optional phone and message, sent through Web3Forms. | P0 | Done |
| G2 | The button shows sending, success and error states. Celebration only follows a confirmed send. | P0 | Done |
| G3 | On failure, typed text is kept and the email address is offered. | P0 | Done |
| G4 | A hidden honeypot field silently drops simple bots. | P1 | Done |
| G5 | Email (with copy), phone, location, LinkedIn, GitHub and resume are visible. | P0 | Done |
| G6 | A real message sent from the live domain reaches the inbox. | P0 | Open |

**Acceptance (G2):** given the API returns an error, no success state or confetti appears and the form still holds the text.

G6 is open because the real send was made from a local build, not from the live domain.

## Module H — Motion

Specified in `06-module-h.md`.

## Non-functional

| ID | Requirement | Priority | Status |
|---|---|---|---|
| N1 | Reduced-motion users get a readable, complete site. | P0 | Done |
| N2 | Works on real phones and in Safari and Firefox. | P0 | Open |
| N3 | Lighthouse and an accessibility audit run on the live site, with findings fixed or parked. | P1 | Open |
| N4 | No secrets in the repository's current files. | P0 | Done |
| N5 | No credentials anywhere in Git history. | P1 | Open |
| N6 | Browser checks live in the repository and run on demand. | P2 | Open |

N5 is open because, although every branch is clean, GitHub still serves the old commits by ID until its Support team removes them (T3.3a).

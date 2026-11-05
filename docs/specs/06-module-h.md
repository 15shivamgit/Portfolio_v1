# 06 — Module H: Motion

The animation system. Motion is a main feature of this site, but it must never hide content, block a task or misrepresent facts.

## Rules

1. **Honest motion.** A moving number ends on its true value. Success animations follow confirmed results only.
2. **Content first.** Text remains in the page for screen readers while it animates.
3. **Reduced motion is complete.** With the system setting on, everything stays visible and usable.
4. **Touch gets less.** Effects that need a pointer are desktop only.
5. **Loops only run in view.** Mock and carousel timers stop when off screen.
6. **One easing.** `EASE` in `lib/motion.js` is the default, and `EASE_IN_OUT` is for full-screen wipes.

## The 12 reel animations

Four came from sales pages and are adapted to real data ([D-005](DECISIONS.md#d-005--reel-animations-use-real-data-only)).

| ID | Reel name | On this site | Page | Component |
|---|---|---|---|---|
| H1 | Hero reveal | Name characters rise from a mask, then the photo opens | Home, page titles | `home/Hero`, `ui/Text` (`SplitChars`) |
| H2 | Word rotator | "I build …" cycles without moving the layout | Home | `ui/WordRotator` |
| H3 | Sale pings | Toasts with real updates, each shown once. Desktop only. | Home | `ui/Pings` |
| H4 | Review shuffle | A shuffling deck of real certificates | Certificates | `ui/CertStack` |
| H5 | Count-up stats | Numbers count up in view | Home, case studies | `ui/Numbers` (`CountUp`) |
| H6 | Bento build | Cards scatter and assemble with scrolling | Home | `home/Bento` |
| H7 | Cursor tour | A scripted cursor walks through real dashboards. Desktop only. | Work | `pages/Projects` (`CursorTour`) |
| H8 | Process draw | A line draws through steps, and through timelines | Home, About | `home/ProcessDraw`, `ui/Timeline` |
| H9 | Before and after | Raw CSV against the finished dashboard | Home, Space Launch | `ui/BeforeAfter` |
| H10 | Price roll | RMAT digits roll like a meter | Achievements | `ui/Numbers` (`Odometer`) |
| H11 | Us vs them | Claim vs Proof | About | `pages/About` (`ClaimVsProof`) |
| H12 | Click to success | Button morphs through states, with confetti on a real send | Contact | `pages/Contact` (`SubmitButton`) |

## Additions

| ID | Effect | Component |
|---|---|---|
| H13 | First-visit intro curtain, once per session | `Layout` (`Intro`) |
| H14 | Saffron page-transition wipe | `Layout` (`PageTransition`) |
| H15 | Sliding active pills in navigation and filters | Framer `layoutId` |
| H16 | Scroll progress bar | `Layout` (`ScrollProgress`) |
| H17 | Stacked flagship cards, scroll-lit statement, sideways gallery and parallax footer name | `home/ProjectStack`, `ui/Text` (`ScrollText`), `ui/ScrollGallery`, `Footer` |
| H18 | Pointer effects: trailing cursor ring, magnetic buttons, card tilt and spotlight, hero chips and glow, floating project preview | `ui/Interactive`, `home/Hero`, `pages/Projects` |
| H19 | Circular theme reveal, marquees, animated filters and the 404 tilt | `hooks/useTheme`, `ui/Interactive`, `pages/*` |

## Timings

| Effect | Value |
|---|---|
| Intro curtain | Holds 1.05 s, exits in 0.8 s. The hero waits for it. |
| Word rotator | Changes every 2.2 s |
| Toasts | First after 7 s, then every 5.2 s |
| Certificate deck | Shuffles every 2.8 s, and pauses on hover |
| Claim vs Proof | Advances every 3.6 s, and stops for good once clicked |
| Before and after | One 3.6 s demonstration sweep, until the visitor takes over |
| Default reveal | 0.8 s |

## Behaviour by device and setting

| Effect | Desktop | Touch | Reduced motion |
|---|---|---|---|
| Lenis smooth scroll | On | On | Off |
| Cursor ring, tilt and magnetic | On | Off | Framer reduces transform motion |
| Toasts and cursor tour pointer | On | Hidden | Toasts still appear. The tour does not auto-play. |
| Rotator, deck and auto-advance | On | On | Off |
| Sideways gallery | Scroll-driven | Swipe row | Scroll-driven |
| Marquees, ping dots and confetti | On | On | Off |

## Known implementation notes

- **Confetti is CSS, not Framer.** Keyframes with these values jumped straight to their end state in Framer ([D-013](DECISIONS.md#d-013--css-confetti)).
- **Mocks scale with CSS `zoom`.** `ScaledMock` sizes each illustration to its frame, keeping proportions on any card.
- **Avoid `layoutId` inside scaled parents.** Layout projection fought the stacked cards' scale, so the SaaS mock's tenant highlight uses a colour transition.
- **`pathLength` with `non-scaling-stroke` breaks dashes,** so scroll-drawn lines do not combine them.

To add or change an animation, see [`guides/animations.md`](../guides/animations.md).

# Testing

The repository has no automated test suite yet. `npm run lint` and `npm run build` are the only repeatable checks. The redesign's browser checks ran from temporary scripts that were not committed (D-017). This checklist records what they covered, so it can be repeated by hand and later automated (T3.8).

## Screens

Check at 390×844, 1366×768 and 1440×900:

- [ ] No horizontal scrolling on any page.
- [ ] The hero fits at 1366×768.
- [ ] Light and dark themes both look right.
- [ ] No errors in the console.

## Navigation

- [ ] Every nav link works, and the active pill moves.
- [ ] A new page starts at the top and has its own title.
- [ ] A direct link to a case study loads.
- [ ] An unknown URL shows the 404 page.
- [ ] The mobile menu opens, navigates and closes.
- [ ] The theme survives a reload.

## Work

- [ ] The Mobile filter shows 1 of 15.
- [ ] Searching "razorpay" shows 2 of 15.
- [ ] Searching nonsense shows the empty state, and "Clear filters" restores 15 of 15.
- [ ] The cursor tour advances, and pauses on hover.

## Certificates

- [ ] Shuffle changes the top card.
- [ ] A certificate opens in the viewer and closes with Escape.
- [ ] Download gives a clear file name with the right extension.

## Achievements

- [ ] The RMAT digits end on 240, and the percentage ends on 96%.
- [ ] The gallery moves sideways on desktop and swipes on a phone.

## Contact

Mock the API for the first three checks. See [`contact-form.md`](contact-form.md).

- [ ] A send shows the sending state, then success, and clears the form.
- [ ] The button returns to idle after about 5 seconds.
- [ ] An API failure shows an error and keeps the text.
- [ ] One real message from the live site reaches the inbox, using a visible browser.

## Reduced motion

- [ ] With the setting on, all text and sections are visible.
- [ ] The rotator and deck do not auto-play.

## Not yet tested

- Real phones
- Safari and Firefox
- A Lighthouse run and a full accessibility audit

These are tracked as T3.7 and T3.8.

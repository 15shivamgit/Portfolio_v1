# Working with animations

The full list and rules are in [`specs/06-module-h.md`](../specs/06-module-h.md).

## Reuse before writing

| You want | Use |
|---|---|
| Fade and rise on scroll | `ui/Reveal` |
| Section heading with an eyebrow and intro | `SectionHead` in `ui/Text` |
| Large heading, character by character | `SplitChars` in `ui/Text` |
| Number that counts up | `CountUp` in `ui/Numbers` |
| Card with tilt and spotlight | `SpotlightCard` in `ui/Interactive` |
| Button with hover and magnetic effect | `Button` in `ui/Interactive` |
| Endless band of text | `Marquee` in `ui/Interactive` |
| Timeline that draws while scrolling | `ui/Timeline` |

## Easing

Import `EASE` from `lib/motion.js` for entrances. Use `EASE_IN_OUT` for full-screen wipes.

## Checklist for a new effect

- [ ] The content is correct if the animation never runs. Screen-reader text is present, as in `SplitChars`.
- [ ] Loops pause off screen. Use `useInView`, as `useLoop` does in `mocks/Mocks.jsx`.
- [ ] Timers and listeners are cleaned up on unmount.
- [ ] Pointer effects check `isFinePointer()`, or `pointerType === "mouse"`.
- [ ] It works with reduced motion on. Global `MotionConfig` handles Framer transforms, but JavaScript timers and CSS animations need their own check.
- [ ] Light and dark themes both look right. Prefer theme tokens such as `bg-card` and `text-ink`.
- [ ] There is no horizontal overflow at 390 px wide.
- [ ] Any number it animates ends on the true value.

## Common problems

| Symptom | Cause |
|---|---|
| A utility class has no effect | A global rule is outside `@layer` in `index.css` |
| A sticky section does not stick | An ancestor has `overflow: hidden` |
| A scroll-drawn line looks wrong | `pathLength` combined with `vector-effect: non-scaling-stroke` |
| A highlight jumps inside a scaled card | `layoutId` inside a scaled parent |
| An element appears in its end state | Framer keyframe values. Try a CSS animation, as with the confetti (D-013). |

To test reduced motion in Chrome, open DevTools, go to Rendering, and set "Emulate CSS media feature prefers-reduced-motion".

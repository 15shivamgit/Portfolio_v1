export const EASE = [0.22, 1, 0.36, 1];
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];

/* Lets anything outside the Layout reach the single Lenis instance. */
export const scroller = {
  lenis: null,
  toTop() {
    if (this.lenis) this.lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  },
  stop() {
    this.lenis?.stop();
  },
  start() {
    this.lenis?.start();
  },
};

function readIntroSeen() {
  try {
    return sessionStorage.getItem("intro-seen") === "1";
  } catch {
    return true;
  }
}

/* Read once per load, so the hero knows whether to wait for the intro curtain. */
export const introSeen = readIntroSeen();
export const heroDelay = introSeen ? 0.15 : 1.25;

export const isFinePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

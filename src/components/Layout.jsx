import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence, MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CustomCursor } from "./ui/Interactive";
import { EASE_IN_OUT, introSeen, scroller } from "../lib/motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent" style={{ scaleX }} />;
}

/* A short curtain on the first visit of a session, never again after that. */
function Intro() {
  const [show, setShow] = useState(!introSeen);

  useEffect(() => {
    if (introSeen) return undefined;
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {
      /* Without session storage the intro just plays on each load. */
    }
    const id = setTimeout(() => setShow(false), 1050);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-accent text-on-accent"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE_IN_OUT }}
        >
          <div className="overflow-hidden">
            <motion.p
              className="font-display text-5xl font-semibold tracking-tight sm:text-7xl"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "-110%" }}
              transition={{ duration: 0.6, ease: EASE_IN_OUT }}
            >
              Shivam Kumar
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PageTransition({ children }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] } }}
        exit={{ opacity: 0, y: -14, transition: { duration: 0.28 } }}
      >
        {children}
        <Footer />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[55] bg-accent"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0, transition: { duration: 0.6, ease: EASE_IN_OUT, originY: { duration: 0 } } }}
        exit={{ scaleY: 1, originY: 1, transition: { duration: 0.32, ease: EASE_IN_OUT, originY: { duration: 0 } } }}
      />
    </>
  );
}

export default function Layout({ children }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    scroller.lenis = lenis;
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      scroller.lenis = null;
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <Intro />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main id="main">{children}</main>
      </div>
    </MotionConfig>
  );
}

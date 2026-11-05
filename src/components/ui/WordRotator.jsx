import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "../../lib/motion";

/* #2 Word rotator. Every word sits invisibly in one grid cell, so the widest
   one reserves the space and the line never jumps. */
export default function WordRotator({ words, interval = 2200, className = "" }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduced]);

  return (
    <span className={`relative inline-grid overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em] ${className}`}>
      <span className="sr-only">{words.join(", ")}</span>
      {words.map((w) => (
        <span key={w} aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {w}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden="true"
          className="col-start-1 row-start-1 whitespace-nowrap"
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-105%", opacity: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

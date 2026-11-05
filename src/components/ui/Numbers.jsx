import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { EASE } from "../../lib/motion";

/* #5 Count-up stats */
export function CountUp({ value, decimals = 0, suffix = "", duration = 1.8, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();
  const format = (v) => `${v.toFixed(decimals)}${suffix}`;

  useEffect(() => {
    if (!inView || !ref.current) return undefined;
    if (reduced) {
      ref.current.textContent = format(value);
      return undefined;
    }
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v);
      },
    });
    return () => controls.stop();
    // format only depends on decimals and suffix, which are listed below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, decimals, suffix, duration, reduced]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {format(0)}
    </span>
  );
}

function Digit({ digit, delay, inView }) {
  const DIGITS = 10;
  return (
    <span className="inline-block h-[1em] overflow-hidden leading-none" aria-hidden="true">
      <motion.span
        className="flex flex-col"
        initial={{ y: 0 }}
        animate={inView ? { y: `-${(DIGITS + digit) * 1}em` } : { y: 0 }}
        transition={{ duration: 2.1, ease: EASE, delay }}
      >
        {[0, 1].map((round) =>
          Array.from({ length: DIGITS }, (_, n) => (
            <span key={`${round}-${n}`} className="h-[1em] leading-none tabular-nums">
              {n}
            </span>
          ))
        )}
      </motion.span>
    </span>
  );
}

/* #10 Price roll, used for the RMAT score: digits spin like a meter. */
export function Odometer({ value, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const chars = String(value).split("");
  return (
    <span ref={ref} className={`inline-flex ${className}`}>
      <span className="sr-only">{value}</span>
      {chars.map((c, i) => (
        <Digit key={i} digit={Number(c)} delay={i * 0.12} inView={inView} />
      ))}
    </span>
  );
}

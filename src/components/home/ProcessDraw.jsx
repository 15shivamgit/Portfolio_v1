import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { process } from "../../data/profile";

function Step({ step, index, total, progress }) {
  const a = index / total;
  const b = (index + 0.6) / total;
  const opacity = useTransform(progress, [a, b], [0.32, 1]);
  const scale = useTransform(progress, [a, b], [0.5, 1]);
  const fill = useTransform(progress, [a, b], ["var(--card)", "var(--accent)"]);
  const color = useTransform(progress, [a, b], ["var(--muted)", "var(--on-accent)"]);

  return (
    <motion.li style={{ opacity }} className="relative pl-14 md:pl-0">
      <motion.span
        style={{ scale, backgroundColor: fill, color }}
        className="absolute left-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-line font-mono text-sm font-medium md:relative md:mb-5"
      >
        {index + 1}
      </motion.span>
      <h3 className="text-2xl">{step.title}</h3>
      <p className="mt-2 text-sm text-muted">{step.text}</p>
    </motion.li>
  );
}

/* #8 Process draw: a line draws through the steps with the scroll position. */
export default function ProcessDraw() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });

  return (
    <div ref={ref} className="relative">
      <svg className="absolute left-0 right-0 top-[-10px] hidden h-16 w-full md:block" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 32 C 100 -8, 150 72, 250 32 S 400 -8, 500 32 S 650 72, 750 32 S 900 -8, 1000 32" fill="none" stroke="var(--line)" strokeWidth="2" />
        <motion.path d="M0 32 C 100 -8, 150 72, 250 32 S 400 -8, 500 32 S 650 72, 750 32 S 900 -8, 1000 32" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" style={{ pathLength: progress }} />
      </svg>
      <div aria-hidden="true" className="absolute bottom-4 left-[21px] top-2 w-0.5 bg-line md:hidden">
        <motion.div className="h-full w-full origin-top bg-accent" style={{ scaleY: progress }} />
      </div>
      <ol className="relative grid gap-9 md:grid-cols-5 md:gap-6">
        {process.map((step, i) => (
          <Step key={step.title} step={step} index={i} total={process.length} progress={progress} />
        ))}
      </ol>
    </div>
  );
}

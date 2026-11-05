import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE } from "../../lib/motion";

/* #1 Hero reveal: each character rises out of a mask. */
export function SplitChars({ text, delay = 0, stagger = 0.035, className }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {text.split("").map((ch, i) => (
        <span key={i} aria-hidden="true" className="-mx-[0.09em] -mb-[0.2em] inline-block overflow-hidden px-[0.09em] pb-[0.2em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "115%", rotate: 8 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 0.95, ease: EASE, delay: delay + i * stagger }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Section titles: words rise one at a time when scrolled into view. */
export function SplitWords({ text, className, as = "h2", delay = 0 }) {
  const Tag = as;
  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ staggerChildren: 0.05, delayChildren: delay }}
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] mr-[0.24em] align-bottom">
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "110%" }, show: { y: 0, transition: { duration: 0.8, ease: EASE } } }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

function ScrollWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.26em]">
      {children}
    </motion.span>
  );
}

/* A statement that lights up word by word as you scroll past it. */
export function ScrollText({ text, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrollWord key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </ScrollWord>
      ))}
    </p>
  );
}

export function SectionHead({ eyebrow, title, intro, className = "", align = "left" }) {
  return (
    <div className={`${align === "center" ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <motion.p
          className="eyebrow mb-4"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="text-accent-ink">/</span> {eyebrow}
        </motion.p>
      )}
      <SplitWords text={title} className="text-4xl sm:text-5xl lg:text-6xl" />
      {intro && (
        <motion.p
          className="mt-5 text-lg text-muted max-w-2xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { EASE } from "../../lib/motion";

/* #8 Process draw, second use: the line draws itself down the career as you scroll. */
export default function Timeline({ items, render }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <div ref={ref} className="relative pl-8 sm:pl-12">
      <div className="absolute bottom-2 left-[7px] top-2 w-px bg-line sm:left-[11px]" />
      <motion.div className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-accent sm:left-[11px]" style={{ scaleY }} />
      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <motion.span
              className="absolute -left-8 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-accent bg-bg sm:-left-12 sm:h-[23px] sm:w-[23px]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
            >
              <span className="h-[5px] w-[5px] rounded-full bg-accent sm:h-[9px] sm:w-[9px]" />
            </motion.span>
            {render(item)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ChevronsLeftRight } from "lucide-react";
import { rawLaunchHeader, rawLaunchRows } from "../../data/projects";

/* #9 Before / after: real rows from the raw CSV against the finished dashboard. */
export default function BeforeAfter({ after = "/images/projects/space-overview.webp", afterAlt = "Space Launch Analytics Power BI dashboard" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduced = useReducedMotion();
  const pos = useMotionValue(50);
  const clip = useMotionTemplate`inset(0 ${useTransform(pos, (v) => 100 - v)}% 0 0)`;
  const left = useMotionTemplate`${pos}%`;
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState(50);

  useEffect(() => {
    if (!inView || touched || reduced) return undefined;
    const controls = animate(pos, [50, 16, 84, 50], {
      duration: 3.6,
      ease: "easeInOut",
      delay: 0.3,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, touched, reduced, pos]);

  return (
    <div ref={ref} className="relative aspect-[4/3] select-none overflow-hidden rounded-3xl border border-line bg-[#1a1510] shadow-soft sm:aspect-[16/9]" style={{ touchAction: "pan-y" }}>
      <img src={after} alt={afterAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
      <span className="absolute right-3 top-3 z-10 rounded-full bg-[#1a1510]/85 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-widest text-[#f6f0e7] backdrop-blur">After: dashboard</span>

      <motion.div className="absolute inset-0 overflow-hidden bg-[#1a1510] p-4 pt-14 font-mono text-[#f6f0e7] sm:p-6 sm:pt-16" style={{ clipPath: clip }} aria-hidden="true">
        <div className="overflow-hidden">
          <table className="w-full min-w-[34rem] border-collapse text-left text-[0.62rem] sm:text-[0.76rem]">
            <thead>
              <tr className="text-[#ff9d57]">
                {rawLaunchHeader.map((h) => (
                  <th key={h} className="border-b border-white/15 py-2 pr-3 font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rawLaunchRows.map((row) => (
                <tr key={row[0]} className="text-white/75">
                  {row.map((cell, i) => (
                    <td key={i} className="border-b border-white/5 py-1.5 pr-3 whitespace-nowrap sm:py-2.5">
                      {cell === "" ? <span className="text-[#ff7a1a]">NULL</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[0.68rem] text-white/50">launches.csv, first of 7,500 rows</p>
      </motion.div>
      <motion.span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 font-mono text-[0.66rem] uppercase tracking-widest text-on-accent" style={{ opacity: useTransform(pos, [8, 22], [0, 1]) }}>
        Before: raw CSV
      </motion.span>

      <motion.div className="pointer-events-none absolute inset-y-0 z-20 w-0.5 -translate-x-1/2 bg-accent" style={{ left }}>
        <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-on-accent shadow-lg">
          <ChevronsLeftRight size={18} />
        </span>
      </motion.div>

      <input
        type="range"
        min="0"
        max="100"
        value={value}
        aria-label="Compare the raw CSV with the finished dashboard"
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        onChange={(e) => {
          const v = Number(e.target.value);
          setTouched(true);
          setValue(v);
          pos.set(v);
        }}
      />
    </div>
  );
}

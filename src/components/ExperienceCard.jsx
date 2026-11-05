import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EASE } from "../lib/motion";

const VISIBLE = 3;

export default function ExperienceCard({ job }) {
  const [open, setOpen] = useState(false);
  const extra = job.points.length - VISIBLE;

  return (
    <article>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="text-2xl sm:text-3xl">{job.role}</h3>
        {job.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent-ink">
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent ping-dot" /> Current
          </span>
        )}
      </div>
      <p className="mt-1.5 font-medium">
        {job.company} <span className="font-normal text-muted">· {job.type}</span>
      </p>
      <p className="mt-0.5 font-mono text-xs text-muted">
        {job.period} · {job.location}
      </p>
      <ul className="mt-3 max-w-2xl space-y-1 text-muted">
        {job.points.slice(0, VISIBLE).map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            className="max-w-2xl space-y-1 overflow-hidden text-muted"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {job.points.slice(VISIBLE).map((p) => (
              <li key={p} className="first:pt-1">{p}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {extra > 0 && (
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent-ink">
          {open ? "Show less" : `Show ${extra} more`}
          <ChevronDown size={15} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      )}
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {job.skills.map((s) => (
          <li key={s} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{s}</li>
        ))}
      </ul>
    </article>
  );
}

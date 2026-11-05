import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { EASE } from "../../lib/motion";
import { pings } from "../../data/profile";

/* #3 Sale pings, adapted: real updates only. Plays each one once, then stays out of the way. */
export default function Pings() {
  const [index, setIndex] = useState(-1);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed || index >= pings.length) return undefined;
    const wait = index === -1 ? 7000 : 5200;
    const id = setTimeout(() => setIndex((i) => i + 1), wait);
    return () => clearTimeout(id);
  }, [index, closed]);

  const ping = !closed && index >= 0 ? pings[index] : null;

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 hidden md:block" aria-live="off">
      <AnimatePresence mode="wait">
        {ping && (
          <motion.div
            key={ping.text}
            className="pointer-events-auto flex max-w-sm items-center gap-3 rounded-2xl border border-line bg-card/95 py-2.5 pl-3 pr-2 shadow-soft backdrop-blur"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <span className="relative h-2 w-2 shrink-0 rounded-full bg-accent ping-dot" />
            <div className="min-w-0 leading-snug">
              <p className="font-mono text-[0.62rem] uppercase tracking-widest text-accent-ink">{ping.label}</p>
              <p className="text-sm">{ping.text}</p>
            </div>
            <button type="button" aria-label="Dismiss updates" onClick={() => setClosed(true)} className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-soft hover:text-ink">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Shuffle } from "lucide-react";
import { EASE } from "../../lib/motion";

const VISIBLE = 5;

/* #4 Review shuffle, adapted: a deck of real certificates instead of reviews. */
export default function CertStack({ items, onOpen }) {
  const [order, setOrder] = useState(() => items.map((c) => c.id));
  const [flying, setFlying] = useState(null);
  const [paused, setPaused] = useState(false);
  const busy = useRef(false);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduced = useReducedMotion();

  const shuffle = () => {
    if (busy.current) return;
    busy.current = true;
    const top = order[0];
    setFlying(top);
    setTimeout(() => {
      setOrder((o) => [...o.slice(1), o[0]]);
      setFlying(null);
      busy.current = false;
    }, 420);
  };

  useEffect(() => {
    if (!inView || paused || reduced) return undefined;
    const id = setInterval(shuffle, 2800);
    return () => clearInterval(id);
    // shuffle only reads the latest order through this effect's re-run.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, paused, reduced, order]);

  const byId = Object.fromEntries(items.map((c) => [c.id, c]));

  return (
    <div ref={ref} onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <div className="relative mx-auto aspect-[4/3] w-[min(100%,27rem)]">
        {order.slice(0, VISIBLE).map((id, i) => {
          const cert = byId[id];
          const isFlying = flying === id;
          return (
            <motion.button
              key={id}
              type="button"
              onClick={() => i === 0 && onOpen(cert)}
              tabIndex={i === 0 ? 0 : -1}
              aria-hidden={i !== 0}
              aria-label={i === 0 ? `View ${cert.title} certificate` : undefined}
              className="absolute inset-0 overflow-hidden rounded-2xl border border-line bg-white shadow-soft"
              style={{ zIndex: VISIBLE - i, cursor: i === 0 ? "pointer" : "default" }}
              initial={false}
              animate={
                isFlying
                  ? { x: "72%", y: -18, rotate: 12, scale: 0.98, opacity: 1 }
                  : { x: i * 11, y: i * -11, rotate: i === 0 ? -2 : i * 2.2 - 2, scale: 1 - i * 0.035, opacity: i >= VISIBLE - 1 ? 0 : 1 }
              }
              transition={{ duration: 0.55, ease: EASE }}
            >
              <img src={cert.thumb} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
            </motion.button>
          );
        })}
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button type="button" onClick={shuffle} className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-soft">
          <Shuffle size={15} /> Shuffle
        </button>
        <p className="max-w-[16rem] truncate text-sm text-muted">{byId[order[0]].title}</p>
      </div>
    </div>
  );
}

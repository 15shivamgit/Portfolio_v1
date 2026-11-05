import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Check, Database, Layers, Monitor, Server, Smartphone, WifiOff } from "lucide-react";
import { SpotlightCard } from "../ui/Interactive";
import { CountUp } from "../ui/Numbers";

function Cell({ children, progress, from, className }) {
  const start = 0.08 + (from.i ?? 0) * 0.07;
  const end = Math.min(start + 0.55, 1);
  const x = useTransform(progress, [start, end], [from.x ?? 0, 0]);
  const y = useTransform(progress, [start, end], [from.y ?? 0, 0]);
  const rotate = useTransform(progress, [start, end], [from.r ?? 0, 0]);
  const scale = useTransform(progress, [start, end], [0.86, 1]);
  const opacity = useTransform(progress, [start, start + 0.2], [0, 1]);
  return (
    <motion.div style={{ x, y, rotate, scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

function Title({ icon: Icon, children, sub }) {
  return (
    <div>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent-ink">
        <Icon size={19} />
      </span>
      <h3 className="mt-4 text-2xl">{children}</h3>
      {sub && <p className="mt-2 text-sm text-muted">{sub}</p>}
    </div>
  );
}

const LAYERS = [
  { icon: Monitor, label: "Screen", tech: "React, Next.js, Tailwind" },
  { icon: Server, label: "API", tech: "NestJS, Express, FastAPI" },
  { icon: Layers, label: "Workers", tech: "BullMQ, Redis" },
  { icon: Database, label: "Database", tech: "MySQL, PostgreSQL, MongoDB" },
];

const BARS = [38, 62, 46, 78, 58, 92, 70];

/* #6 Bento build: the grid assembles itself from scattered pieces as you scroll. */
export default function Bento() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "start 25%"] });

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-3">
      <Cell progress={scrollYProgress} from={{ x: -90, y: 50, r: -5, i: 0 }} className="md:col-span-2">
        <SpotlightCard tilt={2} className="h-full p-6 sm:p-8">
          <Title icon={Layers} sub="From the database and API to the screen people use.">Full stack, start to finish</Title>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {LAYERS.map((l, i) => (
              <motion.li
                key={l.label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-bg/60 px-3.5 py-3"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.1 }}
              >
                <l.icon size={17} className="shrink-0 text-accent-ink" />
                <span className="min-w-0 leading-tight">
                  <span className="block text-sm font-medium">{l.label}</span>
                  <span className="block truncate text-xs text-muted">{l.tech}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </SpotlightCard>
      </Cell>

      <Cell progress={scrollYProgress} from={{ x: 90, y: -30, r: 6, i: 1 }}>
        <SpotlightCard className="flex h-full flex-col justify-between bg-accent p-6 text-on-accent sm:p-8" style={{ background: "var(--accent)" }}>
          <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest">
            <span className="relative h-2 w-2 rounded-full bg-current ping-dot" /> Right now
          </p>
          <div className="mt-10">
            <h3 className="text-3xl">Web Developer</h3>
            <p className="mt-1 opacity-85">Quark Consulting, Indore · since Aug 2026</p>
          </div>
        </SpotlightCard>
      </Cell>

      <Cell progress={scrollYProgress} from={{ x: -60, y: 70, r: 4, i: 2 }}>
        <SpotlightCard className="h-full p-6 sm:p-8">
          <Title icon={Check}>Tested like it matters</Title>
          <div className="mt-5 space-y-2.5">
            {[
              { v: 446, s: "", l: "tests on Hisaab" },
              { v: 280, s: "+", l: "test files on the SaaS" },
              { v: 66, s: "", l: "test files on the store" },
            ].map((row) => (
              <p key={row.l} className="flex items-baseline gap-2 border-b border-line pb-2.5 text-sm text-muted last:border-0">
                <CountUp value={row.v} suffix={row.s} className="font-display text-2xl font-semibold text-ink" /> {row.l}
              </p>
            ))}
          </div>
        </SpotlightCard>
      </Cell>

      <Cell progress={scrollYProgress} from={{ y: 100, r: -3, i: 3 }}>
        <SpotlightCard className="h-full p-6 sm:p-8">
          <Title icon={Bot} sub="Streaming Gemini answers, with pgvector search over a business's own content.">AI that reads your data</Title>
          <div className="mt-5 flex items-end gap-1.5" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((d) => (
              <motion.span key={d} className="h-2 w-2 rounded-full bg-accent" animate={{ y: [0, -7, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.1, repeat: Infinity, delay: d * 0.14 }} />
            ))}
          </div>
        </SpotlightCard>
      </Cell>

      <Cell progress={scrollYProgress} from={{ x: 70, y: 60, r: -5, i: 4 }}>
        <SpotlightCard className="h-full p-6 sm:p-8">
          <Title icon={Smartphone} sub="Hisaab has no internet permission at all. Built in 10 days, tested on real phones.">Android, offline by design</Title>
          <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted"><WifiOff size={12} /> Data stays on the phone</span>
        </SpotlightCard>
      </Cell>

      <Cell progress={scrollYProgress} from={{ y: 80, r: 3, i: 5 }} className="md:col-span-3">
        <SpotlightCard tilt={1.5} className="grid h-full items-end gap-6 p-6 sm:p-8 md:grid-cols-[1fr_1.6fr]">
          <div>
            <h3 className="text-2xl">Data background</h3>
            <p className="mt-2 text-sm text-muted">Six months of real-world analysis in Python and SQL still shapes how I think about reports and accuracy.</p>
          </div>
          <div className="flex h-24 items-end gap-2" aria-hidden="true">
            {BARS.map((h, i) => (
              <motion.span
                key={i}
                className={`flex-1 origin-bottom rounded-t-lg ${i === 5 ? "bg-accent" : "bg-soft"}`}
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.07 }}
              />
            ))}
          </div>
        </SpotlightCard>
      </Cell>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Lock, MousePointer2, Search } from "lucide-react";
import { ProjectVisual } from "../components/mocks/Mocks";
import { BrowserFrame, SpotlightCard } from "../components/ui/Interactive";
import { SectionHead, SplitChars } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";
import { EASE } from "../lib/motion";
import { projectFilters, projects } from "../data/projects";

const TOUR = [
  { label: "Launch overview", src: "/images/projects/space-overview.webp", url: "space-launch / overview", spot: [38, 48] },
  { label: "Launch sites", src: "/images/projects/space-sites.webp", url: "space-launch / launch-sites", spot: [62, 58] },
  { label: "IPL analysis", src: "/images/projects/ipl-analysis.webp", url: "ipl / data-analysis", spot: [44, 62] },
  { label: "IPL performance", src: "/images/projects/ipl-performance.webp", url: "ipl / performance", spot: [70, 42] },
];

/* #7 Cursor tour: a scripted cursor walks through the real dashboards. */
function CursorTour() {
  const [active, setActive] = useState(0);
  const [cursor, setCursor] = useState({ x: 12, y: 8, click: 0 });
  const [paused, setPaused] = useState(false);
  const tabs = useRef([]);
  const frame = useRef(null);
  const inView = useInView(frame, { margin: "-15% 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || paused || reduced) return undefined;
    const timers = [];
    let alive = true;

    const run = (index) => {
      if (!alive) return;
      const tab = tabs.current[index];
      const box = frame.current;
      if (tab && box) {
        const t = tab.getBoundingClientRect();
        const b = box.getBoundingClientRect();
        setCursor((c) => ({ ...c, x: ((t.left + t.width / 2 - b.left) / b.width) * 100, y: ((t.top + t.height / 2 - b.top) / b.height) * 100 }));
      }
      timers.push(
        setTimeout(() => {
          setCursor((c) => ({ ...c, click: c.click + 1 }));
          setActive(index);
        }, 900)
      );
      timers.push(
        setTimeout(() => {
          const [x, y] = TOUR[index].spot;
          setCursor((c) => ({ ...c, x, y }));
        }, 1400)
      );
      timers.push(setTimeout(() => run((index + 1) % TOUR.length), 3300));
    };

    run((active + 1) % TOUR.length);
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
    // The loop restarts from the latest tab only when it is paused or resumed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, paused, reduced]);

  return (
    <div ref={frame} className="relative" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <BrowserFrame label={TOUR[active].url}>
        <div className="flex gap-1 overflow-x-auto border-b border-line p-2" role="tablist" aria-label="Dashboards">
          {TOUR.map((t, i) => (
            <button
              key={t.label}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className="relative shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium"
            >
              {active === i && <motion.span layoutId="tour-tab" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className={`relative ${active === i ? "text-bg" : "text-muted"}`}>{t.label}</span>
            </button>
          ))}
        </div>
        <div className="relative aspect-[16/9] overflow-hidden bg-[#0b1220]">
          <AnimatePresence initial={false}>
            <motion.img
              key={TOUR[active].src}
              src={TOUR[active].src}
              alt={`${TOUR[active].label} dashboard`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            />
          </AnimatePresence>
        </div>
      </BrowserFrame>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
        animate={{ left: `${cursor.x}%`, top: `${cursor.y}%`, opacity: paused ? 0 : 1 }}
        transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
      >
        <motion.span key={cursor.click} className="absolute -left-5 -top-5 h-10 w-10 rounded-full bg-accent" initial={{ scale: 0, opacity: 0.55 }} animate={{ scale: 1.4, opacity: 0 }} transition={{ duration: 0.6 }} />
        <MousePointer2 size={26} className="relative fill-accent text-card drop-shadow-lg" />
        <span className="absolute left-5 top-6 whitespace-nowrap rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-on-accent">Shivam</span>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <SpotlightCard tilt={3.5} className="flex h-full flex-col">
        <Link to={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden" aria-label={`${project.title} case study`}>
          <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover/spot:scale-[1.04]">
            <ProjectVisual project={project} />
          </div>
                  </Link>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-widest text-muted">
            {project.period}
            <span className="rounded-full bg-accent-soft px-2 py-0.5 normal-case tracking-normal text-accent-ink">{project.status}</span>
          </p>
          <h3 className="mt-2 text-2xl">
            <Link to={`/projects/${project.slug}`} className="hover:text-accent-ink">{project.title}</Link>
          </h3>
          <p className="mt-2 text-[0.95rem] text-muted">{project.short}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{t}</li>
            ))}
            {project.tech.length > 4 && <li className="px-1 py-0.5 text-xs text-muted">+{project.tech.length - 4}</li>}
          </ul>
          <div className="relative z-20 mt-auto flex items-center gap-2 pt-5">
            <Link to={`/projects/${project.slug}`} className="group/link mr-auto inline-flex items-center gap-1.5 text-sm font-medium">
              Case study <ArrowUpRight size={15} className="transition-transform group-hover/link:rotate-45" />
            </Link>
            {project.privateRepo && <span className="inline-flex items-center gap-1 text-xs text-muted"><Lock size={12} /> Private</span>}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source on GitHub`} className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:bg-soft"><Github size={15} /></a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:bg-soft"><ExternalLink size={15} /></a>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}

/* Early projects: a compact list with a preview image that follows the pointer. */
function EarlyList({ items }) {
  const [hover, setHover] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 24 });
  const sy = useSpring(y, { stiffness: 220, damping: 24 });

  return (
    <div onPointerMove={(e) => { x.set(e.clientX + 24); y.set(e.clientY - 90); }} onPointerLeave={() => setHover(null)}>
      <ul className="border-t border-line">
        {items.map((p, i) => (
          <motion.li
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onPointerEnter={(e) => e.pointerType === "mouse" && setHover(p)}
            className="group border-b border-line"
          >
            <Link to={`/projects/${p.slug}`} className="flex flex-wrap items-baseline gap-x-5 gap-y-1 py-5 transition-[padding] duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:hover:pl-4">
              <span className="font-mono text-xs text-muted">{p.period}</span>
              <span className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-ink sm:text-3xl">{p.title}</span>
              <span className="w-full text-sm text-muted sm:ml-auto sm:w-auto">{p.tech.slice(0, 3).join(" · ")}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>
        {hover?.image && (
          <motion.img
            key={hover.slug}
            src={hover.image}
            alt=""
            className="pointer-events-none fixed left-0 top-0 z-30 aspect-[16/10] w-72 rounded-2xl object-cover object-top shadow-2xl"
            style={{ x: sx, y: sy }}
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  usePageTitle("Work");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const matches = (p) =>
    (filter === "all" || p.categories.includes(filter)) &&
    (!q || `${p.title} ${p.short} ${p.tech.join(" ")}`.toLowerCase().includes(q));

  const main = projects.filter((p) => p.tier !== "early" && matches(p));
  const early = projects.filter((p) => p.tier === "early" && matches(p));
  const total = main.length + early.length;

  return (
    <>
      <section className="shell pt-32 sm:pt-44">
        <p className="eyebrow"><span className="text-accent-ink">/</span> Work</p>
        <h1 className="mt-5 text-[clamp(3.8rem,13vw,11rem)] font-bold leading-[0.88] tracking-[-0.055em]">
          <SplitChars text="Selected" delay={0.3} className="block" />
          <SplitChars text="projects" delay={0.55} className="block font-serif font-normal italic tracking-[-0.02em] text-accent-ink" />
        </h1>
        <motion.p className="mt-6 max-w-2xl text-lg text-muted" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8, ease: EASE }}>
          SaaS, e-commerce, AI chat, Android and data. Where a repository is private and has no screens I
          can share, the case study uses a coded illustration of what the product does.
        </motion.p>
      </section>

      <section className="shell mt-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-1" role="group" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button key={f.id} type="button" onClick={() => setFilter(f.id)} aria-pressed={filter === f.id} className="relative rounded-full px-4 py-2 text-sm font-medium">
                {filter === f.id && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className={`relative transition-colors ${filter === f.id ? "text-bg" : "text-muted hover:text-ink"}`}>{f.label}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <p className="whitespace-nowrap font-mono text-xs text-muted" aria-live="polite">{total} of {projects.length}</p>
            <label className="relative block w-full md:w-60">
              <span className="sr-only">Search projects</span>
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or tech" className="w-full rounded-full border border-line bg-card py-2 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent" />
            </label>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {main.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </div>
        {total === 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-dashed border-line py-16 text-center">
            <p className="font-display text-2xl font-semibold">Nothing matches that</p>
            <button type="button" onClick={() => { setFilter("all"); setQuery(""); }} className="mt-3 text-sm font-medium text-accent-ink underline underline-offset-4">Clear filters</button>
          </motion.div>
        )}
      </section>

      {early.length > 0 && (
        <section className="shell mt-24">
          <SectionHead eyebrow="Where it started" title="Early builds" intro="Smaller projects from when I was learning the basics." className="mb-10" />
          <EarlyList items={early} />
        </section>
      )}

      <section className="bg-soft mt-24 py-20 sm:py-28">
        <div className="shell">
          <SectionHead eyebrow="Dashboard tour" title="Take a walk through the data work" intro="Real screenshots from my Power BI projects. Hover to take over from the cursor." className="mb-10" />
          <CursorTour />
        </div>
      </section>
    </>
  );
}

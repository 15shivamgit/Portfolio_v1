import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Github, Lock, Sparkles } from "lucide-react";
import { ProjectVisual } from "../components/mocks/Mocks";
import BeforeAfter from "../components/ui/BeforeAfter";
import Reveal from "../components/ui/Reveal";
import { BrowserFrame, Button } from "../components/ui/Interactive";
import { CountUp } from "../components/ui/Numbers";
import { SectionHead, SplitWords } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";
import { EASE } from "../lib/motion";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

function frameLabel(project) {
  if (project.mockIsReal) return `${project.title} on Android`;
  if (project.mock) return "illustration of the product";
  return project.live?.replace(/^https?:\/\//, "").slice(0, 44) ?? project.slug;
}

function Screen({ screen, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], index % 2 ? [40, -40] : [-20, 20]);
  return (
    <motion.figure ref={ref} style={{ y }}>
      <Reveal delay={index * 0.08}>
        <img src={screen.src} alt={`${screen.label} screen`} loading="lazy" className="w-full rounded-[1.75rem] border-4 border-ink bg-white shadow-soft" />
        <figcaption className="mt-3 text-center text-sm text-muted">{screen.label}</figcaption>
      </Reveal>
    </motion.figure>
  );
}

function HeroVisual({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.96, clipPath: "inset(12% 8% round 28px)" }}
      animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% round 28px)" }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
      className="relative mt-10"
    >
      <BrowserFrame label={frameLabel(project)}>
        {project.mock ? (
          <div className="relative aspect-[4/3] sm:aspect-[16/9]">
            <ProjectVisual project={project} eager />
          </div>
        ) : project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} className="w-full" />
        ) : (
          <div className="relative aspect-[16/9]">
            <ProjectVisual project={project} eager />
          </div>
        )}
      </BrowserFrame>
    </motion.div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  usePageTitle(project?.title ?? "Not found");

  if (!project) return <NotFound />;
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <article className="shell pt-28 sm:pt-36">
        <Reveal y={10}>
          <Link to="/projects" className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" /> All work
          </Link>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-widest text-muted">
          <span>{project.period}</span>
          <span className="rounded-full bg-accent-soft px-2.5 py-0.5 normal-case tracking-normal text-accent-ink">{project.status}</span>
        </div>

        <SplitWords as="h1" text={project.title} delay={0.3} className="mt-4 max-w-5xl text-[clamp(2.6rem,7.5vw,6.2rem)] font-bold leading-[0.95] tracking-[-0.045em]" />

        <Reveal delay={0.5} y={14} className="mt-6 flex flex-wrap items-center gap-3">
          {project.live && <Button href={project.live} external icon={ExternalLink}>Open project</Button>}
          {project.repo && <Button href={project.repo} external icon={Github} variant="ghost">View source</Button>}
          {project.privateRepo && (
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-muted"><Lock size={14} /> Private repository</span>
          )}
        </Reveal>

        <HeroVisual project={project} />

        {project.stats && (
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:flex">
            {project.stats.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col-reverse justify-end bg-bg p-6 odd:last:col-span-2">
                <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"><CountUp value={s.value} suffix={s.suffix ?? ""} /></dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="eyebrow mb-4"><span className="text-accent-ink">/</span> Overview</p>
            <p className="font-display text-[clamp(1.4rem,2.5vw,2.1rem)] font-medium leading-[1.2] tracking-[-0.025em]">{project.summary}</p>
            {project.tier === "flagship" && (
              <p className="mt-6 flex items-start gap-2.5 text-sm text-muted">
                <Sparkles size={15} className="mt-0.5 shrink-0 text-accent-ink" />
                Built with AI-assisted development (Claude Code). I drove the product decisions, reviewed the output and tested it.
              </p>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4"><span className="text-accent-ink">/</span> Tech</p>
            <motion.ul className="flex flex-wrap gap-1.5" initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.04 }}>
              {project.tech.map((t) => (
                <motion.li key={t} variants={{ hidden: { opacity: 0, scale: 0.7 }, show: { opacity: 1, scale: 1 } }} className="rounded-full border border-line bg-card px-3 py-1 text-sm">{t}</motion.li>
              ))}
            </motion.ul>
          </Reveal>
        </div>

        <section className="mt-16">
          <p className="eyebrow mb-5"><span className="text-accent-ink">/</span> What it does</p>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <Reveal as="li" key={h} delay={(i % 2) * 0.06} y={14} className="flex items-start gap-3 bg-bg p-5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-on-accent"><Check size={14} strokeWidth={3} /></span>
                <span>{h}</span>
              </Reveal>
            ))}
          </ul>
        </section>

        {project.screens && (
          <section className="mt-20">
            <SectionHead eyebrow="The app" title="Real screens, from a real phone" className="mb-12" />
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {project.screens.map((s, i) => (
                <Screen key={s.src} screen={s} index={i} />
              ))}
            </div>
          </section>
        )}

        {project.flow && (
          <section className="mt-20">
            <SectionHead eyebrow="Booking flow" title="Seat holds and e-tickets" intro="An illustration of how a booking works: a seat is held until payment or expiry, then the ticket goes out as a PDF with a QR code." className="mb-8" />
            <Reveal>
              <BrowserFrame label="illustration of the booking flow">
                <div className="aspect-[4/3] sm:aspect-[16/9]">
                  <ProjectVisual project={{ mock: project.flow, title: `${project.title} booking` }} />
                </div>
              </BrowserFrame>
            </Reveal>
          </section>
        )}

        {project.beforeAfter && (
          <section className="mt-20">
            <SectionHead eyebrow="Before and after" title="Raw CSV to dashboard" className="mb-8" />
            <BeforeAfter />
          </section>
        )}

        {project.gallery && (
          <section className="mt-20 grid gap-5 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.1}>
                <BrowserFrame>
                  <img src={src} alt={`${project.title} screen ${i + 1}`} loading="lazy" className="w-full" />
                </BrowserFrame>
              </Reveal>
            ))}
          </section>
        )}
      </article>

      <section className="shell py-24">
        <Link to={`/projects/${next.slug}`} className="group block rounded-[2rem] bg-ink p-8 text-bg sm:p-14">
          <p className="font-mono text-xs uppercase tracking-widest opacity-60">Next project</p>
          <p className="mt-3 flex flex-wrap items-center gap-4 font-display text-[clamp(2.2rem,6vw,5rem)] font-bold leading-none tracking-[-0.045em]">
            {next.title}
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-500 group-hover:rotate-45 sm:h-16 sm:w-16">
              <ArrowUpRight size={26} />
            </span>
          </p>
        </Link>
      </section>
    </>
  );
}

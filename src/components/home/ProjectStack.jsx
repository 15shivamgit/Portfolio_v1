import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import { ProjectVisual } from "../mocks/Mocks";
import { flagship } from "../../data/projects";

function StackCard({ project, index, total, progress }) {
  const scale = useTransform(progress, [index / total, 1], [1, 1 - (total - index - 1) * 0.035]);

  return (
    <div className="md:sticky md:h-[calc(100svh-7rem)] md:min-h-[32rem]" style={{ top: `calc(5.5rem + ${index * 14}px)` }}>
      <motion.article
        style={{ scale }}
        className="flex h-full origin-top flex-col overflow-hidden rounded-[2rem] border border-line bg-card shadow-soft md:grid md:max-h-[40rem] md:grid-cols-[1.02fr_1.15fr]"
      >
        <div className="flex flex-col p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted">
            <span className="text-accent-ink">0{index + 1}</span>
            <span>/</span>
            <span>{project.period}</span>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 normal-case tracking-normal text-accent-ink">{project.status}</span>
          </div>
          <h3 className="mt-5 text-3xl sm:text-[2.6rem]">{project.title}</h3>
          <p className="mt-4 text-[1.05rem] text-muted">{project.short}</p>

          {project.stats && (
            <dl className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
              {project.stats.slice(0, 3).map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="text-xs text-muted">{s.label}</dt>
                  <dd className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}{s.suffix}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-auto pt-6">
            <ul className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 6).map((t) => (
                <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-muted">{t}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link to={`/projects/${project.slug}`} className="group inline-flex items-center gap-2 font-medium">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-bg transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
                View case study
              </Link>
              {project.privateRepo && (
                <span className="inline-flex items-center gap-1.5 text-xs text-muted"><Lock size={12} /> Private repo</span>
              )}
            </div>
          </div>
        </div>
        <div className="relative h-72 sm:h-96 md:h-auto" data-cursor>
          <ProjectVisual project={project} />
          {project.mock && !project.mockIsReal && (
            <span className="absolute bottom-2.5 right-3 font-mono text-[0.58rem] uppercase tracking-widest text-white/45">Illustration</span>
          )}
        </div>
      </motion.article>
    </div>
  );
}

/* Flagship projects stack on top of each other while scrolling. */
export default function ProjectStack() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="space-y-6 md:space-y-10">
      {flagship.map((project, i) => (
        <StackCard key={project.slug} project={project} index={i} total={flagship.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Hero from "../components/home/Hero";
import ProjectStack from "../components/home/ProjectStack";
import Bento from "../components/home/Bento";
import ProcessDraw from "../components/home/ProcessDraw";
import ExperienceCard from "../components/ExperienceCard";
import BeforeAfter from "../components/ui/BeforeAfter";
import Timeline from "../components/ui/Timeline";
import Pings from "../components/ui/Pings";
import Reveal from "../components/ui/Reveal";
import { Button, Marquee } from "../components/ui/Interactive";
import { CountUp } from "../components/ui/Numbers";
import { ScrollText, SectionHead, SplitWords } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";
import { heroStats, marqueeTech, profile } from "../data/profile";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { goerHero } from "../data/goer";

function AchievementBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section className="shell pt-20 sm:pt-28">
      <Reveal y={30}>
        <Link ref={ref} to="/achievements" className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[21/9]">
          <motion.img src={goerHero.src} alt={goerHero.caption} loading="lazy" style={{ y, scale: 1.18 }} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 text-white sm:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] opacity-80">GOER 2025 national finalist</p>
              <p className="mt-2 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-none tracking-[-0.04em]">Top 10 universities in India</p>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={22} />
            </span>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}

export default function Home() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Pings />

      <section className="border-y border-line py-5" aria-label="Technologies I work with">
        <Marquee items={marqueeTech} itemClass="font-display text-2xl font-medium tracking-tight sm:text-3xl" />
      </section>

      <section className="shell py-24 sm:py-36">
        <ScrollText text={profile.statement} className="font-display text-[clamp(2.1rem,5.8vw,5rem)] font-semibold leading-[1.04] tracking-[-0.04em]" />
      </section>

      <section className="shell pb-20 sm:pb-28" aria-label="Key numbers">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-5">
          {heroStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} y={18} className={`flex flex-col-reverse justify-end bg-bg p-6 sm:p-7 ${i === 0 ? "col-span-2 lg:col-span-1" : ""}`}>
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
              <dd className="font-display text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="shell py-16 sm:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="Selected work" title="Five products, built end to end" />
          <Reveal y={12}>
            <Button to="/projects" variant="ghost">All {projects.length} projects</Button>
          </Reveal>
        </div>
        <ProjectStack />
      </section>

      <section className="bg-soft py-20 sm:py-28">
        <div className="shell">
          <SectionHead eyebrow="What I bring" title="What I bring to a team" className="mb-12" />
          <Bento />
        </div>
      </section>

      <section className="shell py-24 sm:py-32">
        <SectionHead eyebrow="How I work" title="Spec first, then ship" intro={profile.howIWork} className="mb-16" />
        <ProcessDraw />
      </section>

      <section className="shell grid gap-12 pb-24 sm:pb-32 lg:grid-cols-[1fr_1.7fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Experience" title="Where I've worked" />
          <Reveal className="mt-7" y={12}>
            <Button to="/about" variant="ghost">More about me</Button>
          </Reveal>
        </div>
        <Timeline items={experience} render={(job) => <ExperienceCard job={job} />} />
      </section>

      <section className="bg-soft py-20 sm:py-28">
        <div className="shell">
          <SectionHead
            eyebrow="From data to decisions"
            title="Drag to see what the work actually does"
            intro="The left side is the raw launches.csv. The right side is the Power BI dashboard I built from it in my Space Launch Analytics project."
            className="mb-10"
          />
          <Reveal y={30}>
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      <AchievementBand />

      <section className="shell py-28 text-center sm:py-40">
        <p className="eyebrow">Hiring for a Full Stack role?</p>
        <SplitWords text="Let's talk about what you're building" as="h2" className="mx-auto mt-5 max-w-4xl text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.05em]" />
        <Reveal delay={0.25} y={14} className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/contact" variant="accent" icon={ArrowUpRight}>Get in touch</Button>
          <Button href={`mailto:${profile.email}`} variant="ghost" icon={Mail}>Email me</Button>
        </Reveal>
      </section>
    </>
  );
}

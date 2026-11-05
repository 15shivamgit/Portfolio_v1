import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download, GraduationCap } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";
import Reveal from "../components/ui/Reveal";
import Timeline from "../components/ui/Timeline";
import { Button, SpotlightCard } from "../components/ui/Interactive";
import { ScrollText, SectionHead, SplitChars } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";
import { EASE } from "../lib/motion";
import { claims, education, profile, skills } from "../data/profile";
import { experience } from "../data/experience";

/* #11 Us vs them, adapted: what a resume claims against the evidence behind it. */
function ClaimVsProof() {
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!inView || touched || reduced) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % claims.length), 3600);
    return () => clearInterval(id);
  }, [inView, touched, reduced]);

  const current = claims[active];

  return (
    <div ref={ref} className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-3xl border border-line bg-card p-4 sm:p-6">
        <p className="eyebrow px-3 pb-3">What a resume says</p>
        <ul>
          {claims.map((c, i) => (
            <li key={c.claim}>
              <button
                type="button"
                onClick={() => {
                  setActive(i);
                  setTouched(true);
                }}
                aria-pressed={active === i}
                className="relative w-full rounded-2xl px-3 py-3 text-left font-display text-xl font-semibold tracking-tight sm:text-2xl"
              >
                {active === i && <motion.span layoutId="claim-pill" className="absolute inset-0 rounded-2xl bg-soft" transition={{ type: "spring", stiffness: 340, damping: 32 }} />}
                <span className={`relative transition-colors ${active === i ? "text-ink" : "text-muted"}`}>
                  {c.claim}
                  {active === i && <motion.span className="absolute left-0 top-1/2 h-0.5 bg-accent" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.55, ease: EASE, delay: 0.1 }} />}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex min-h-72 flex-col justify-between overflow-hidden rounded-3xl bg-accent p-7 text-on-accent sm:p-10">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em]">The proof</p>
        <AnimatePresence mode="wait">
          <motion.div key={current.claim} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45, ease: EASE }}>
            <p className="font-display text-[clamp(1.5rem,2.8vw,2.4rem)] font-semibold leading-[1.12] tracking-tight">{current.proof}</p>
            <Link to={current.to} className="group mt-6 inline-flex items-center gap-2 font-medium underline-offset-4 hover:underline">
              See the project <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function About() {
  usePageTitle("About");

  return (
    <>
      <section className="shell pt-32 sm:pt-44">
        <p className="eyebrow"><span className="text-accent-ink">/</span> About</p>
        <h1 className="mt-5 text-[clamp(3.4rem,11vw,9rem)] font-bold leading-[0.9] tracking-[-0.055em]">
          <SplitChars text="Builder," delay={0.3} className="block" />
          <span className="block font-serif font-normal italic tracking-[-0.02em] text-accent-ink">
            <SplitChars text="data mind." delay={0.55} />
          </span>
        </h1>
      </section>

      <section className="shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_2fr]">
        <Reveal y={30}>
          <figure className="mx-auto w-full max-w-[21rem] lg:mx-0">
            <img src="/images/shivam-aks.webp" alt="Shivam Kumar at AKS University, Satna" loading="lazy" className="aspect-[3/4] w-full rounded-[2rem] object-cover shadow-soft" />
            <figcaption className="mt-3 text-sm text-muted">At AKS University, Satna</figcaption>
          </figure>
        </Reveal>
        <div>
          <ScrollText text={profile.summary} className="font-display text-[clamp(1.6rem,3.2vw,2.7rem)] font-medium leading-[1.14] tracking-[-0.03em]" />
          <Reveal className="mt-8 grid gap-5 text-muted sm:grid-cols-2">
            <p>{profile.howIWork}</p>
            <p>{profile.careAbout}</p>
          </Reveal>
          <Reveal className="mt-8" y={12}>
            <Button href={profile.resume} download={profile.resumeName} icon={Download}>Download resume</Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-28">
        <div className="shell">
          <SectionHead eyebrow="Claim vs proof" title="Anyone can list a skill" intro="So here is what each one looks like in real work." className="mb-12" />
          <ClaimVsProof />
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <SectionHead eyebrow="Toolbox" title="What I work with" className="mb-12" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={(i % 3) * 0.08} className={group.group === "Backend" || group.group === "Testing & DevOps" ? "lg:row-span-1" : ""}>
              <SpotlightCard tilt={3} className="h-full p-6">
                <h3 className="text-xl">{group.group}</h3>
                <motion.ul
                  className="mt-4 flex flex-wrap gap-1.5"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.035, delayChildren: 0.15 }}
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={{ hidden: { opacity: 0, scale: 0.7, y: 8 }, show: { opacity: 1, scale: 1, y: 0 } }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="relative z-20 rounded-full border border-line bg-bg px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent-ink"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell grid gap-12 pb-20 sm:pb-28 lg:grid-cols-[1fr_1.7fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Experience" title="Where I've worked" />
        </div>
        <Timeline items={experience} render={(job) => <ExperienceCard job={job} />} />
      </section>

      <section className="shell grid gap-12 pb-28 lg:grid-cols-[1fr_1.7fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead eyebrow="Education" title="Where I learned" />
        </div>
        <Timeline
          items={education}
          render={(e) => (
            <div>
              <h3 className="flex items-center gap-2.5 text-2xl">
                {e.title}
                {e.note && <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-0.5 font-sans text-xs font-medium tracking-normal text-accent-ink"><GraduationCap size={12} /> {e.note}</span>}
              </h3>
              <p className="mt-1.5 text-muted">{e.place}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{e.period}</p>
            </div>
          )}
        />
      </section>
    </>
  );
}

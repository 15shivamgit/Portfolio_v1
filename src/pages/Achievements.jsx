import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check, MapPin, Trophy, Users } from "lucide-react";
import CertModal from "../components/ui/CertModal";
import Reveal from "../components/ui/Reveal";
import ScrollGallery from "../components/ui/ScrollGallery";
import { Button, SpotlightCard } from "../components/ui/Interactive";
import { CountUp, Odometer } from "../components/ui/Numbers";
import { SectionHead, SplitChars } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";
import { EASE } from "../lib/motion";
import { certificates, goerCertificate } from "../data/certificates";
import { goerHero, goerPhotos } from "../data/goer";

const RMAT_SKILLS = ["Business Logic", "Analytical Reasoning", "Decision Making", "Risk Thinking"];
const TEAM = "Aditi Singh (student leader), Yukti Singh, Pranaw Gautam, Shivam Kumar, Sana Khan, Smriti Nigam, Rahul Dwivedi, Sahendra Singh, Ankush Gupta, Akanksha Garg";

function Gauge({ percent }) {
  const R = 86;
  const C = Math.PI * R;
  return (
    <svg viewBox="0 0 200 112" className="w-full max-w-[17rem]" role="img" aria-label={`${percent} percent`}>
      <path d={`M14 100 A ${R} ${R} 0 0 1 186 100`} fill="none" stroke="var(--line)" strokeWidth="14" strokeLinecap="round" />
      <motion.path
        d={`M14 100 A ${R} ${R} 0 0 1 186 100`}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={C}
        initial={{ strokeDashoffset: C }}
        whileInView={{ strokeDashoffset: C * (1 - percent / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 2.1, ease: EASE, delay: 0.2 }}
      />
    </svg>
  );
}

export default function Achievements() {
  usePageTitle("Achievements");
  const [open, setOpen] = useState(null);
  const rmat = certificates.find((c) => c.id === "rmat");
  const aps = certificates.find((c) => c.id === "aps");

  return (
    <>
      <section className="shell pt-32 sm:pt-44">
        <p className="eyebrow"><span className="text-accent-ink">/</span> Achievements</p>
        <h1 className="mt-5 flex flex-wrap items-baseline gap-x-5 text-[clamp(4.4rem,17vw,15rem)] font-bold leading-[0.85] tracking-[-0.06em]">
          <SplitChars text="Top" delay={0.3} />
          <SplitChars text="10" delay={0.48} className="font-serif font-normal italic tracking-[-0.03em] text-accent-ink" />
        </h1>
        <motion.p className="mt-6 max-w-3xl text-xl text-muted sm:text-2xl" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.7, ease: EASE }}>
          Universities in India, at the national final of the Game of Enterprise Risk 2025.
        </motion.p>
      </section>

      <section className="shell mt-12">
        <motion.figure
          initial={{ opacity: 0, clipPath: "inset(10% 6% round 32px)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% round 32px)" }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
        >
          <img src={goerHero.src} alt={goerHero.caption} className="aspect-[4/3] w-full object-cover sm:aspect-[21/10]" />
        </motion.figure>
      </section>

      <section className="shell mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <SpotlightCard tilt={1.5} className="h-full p-7 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent-ink"><Trophy size={15} /> National finalist</span>
            <h2 className="mt-5 text-3xl sm:text-4xl">GOER 2025, Institute of Risk Management India</h2>
            <p className="mt-4 text-muted">
              Our MCA team from AKS University, Satna moved through multiple competitive stages to reach the
              national final, alongside premier institutes including IIMs, Symbiosis, Welingkar and Parul
              University. The competition tested analytical thinking, teamwork and risk-based decision-making.
            </p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-2.5"><Calendar size={16} className="text-accent-ink" /> 5 July 2025</li>
              <li className="flex items-center gap-2.5"><MapPin size={16} className="text-accent-ink" /> SDA Bocconi Asia Center, Mumbai</li>
              <li className="flex items-center gap-2.5 sm:col-span-2"><Users size={16} className="shrink-0 text-accent-ink" /> Team Intrepid Explorers, mentored by Prof. Akhilesh A. Waoo</li>
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm text-muted">{TEAM}</p>
          </SpotlightCard>
        </Reveal>
        <Reveal delay={0.12}>
          <button type="button" onClick={() => setOpen(goerCertificate)} data-cursor aria-label="View the GOER 2025 certificate" className="group relative block h-full min-h-96 w-full overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
            <img src={goerCertificate.thumb} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute bottom-4 left-4 rounded-full bg-[#15120e] px-3 py-1.5 text-sm font-medium text-[#faf6f0]">View certificate</span>
          </button>
        </Reveal>
      </section>

      <div className="mt-24">
        <ScrollGallery photos={goerPhotos} eyebrow="Mumbai, July 2025" title="The final, in pictures" />
      </div>

      <section className="py-20 sm:py-28">
        <div className="shell">
          <SectionHead eyebrow="RMAT" title="Risk Management Aptitude Test" className="mb-12" />
          <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-card p-7 sm:p-12 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <Gauge percent={96} />
              <p className="-mt-14 font-display text-[clamp(3.6rem,8vw,5.5rem)] font-bold leading-none tracking-[-0.05em]">
                <Odometer value={240} />
              </p>
              <p className="mt-2 font-mono text-sm text-muted">out of 250, which is <CountUp value={96} suffix="%" className="font-semibold text-accent-ink" /></p>
            </div>
            <div>
              <p className="text-lg text-muted">
                A computer-adaptive standardised exam that assesses business logic, problem solving, decision
                making, risk thinking and analytical reasoning. Taken on 10 May 2025.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {RMAT_SKILLS.map((s, i) => (
                  <Reveal as="li" key={s} delay={i * 0.08} y={12} className="flex items-center gap-2.5 rounded-2xl border border-line px-3.5 py-3 text-sm font-medium">
                    <Check size={16} className="text-accent-ink" /> {s}
                  </Reveal>
                ))}
              </ul>
              <button type="button" onClick={() => setOpen(rmat)} className="mt-6 text-sm font-medium text-accent-ink underline underline-offset-4">View score report</button>
            </div>
          </div>
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="eyebrow mb-4"><span className="text-accent-ink">/</span> National quiz</p>
            <p className="font-display text-[clamp(4rem,12vw,8rem)] font-bold leading-none tracking-[-0.05em]"><CountUp value={50} /><span className="text-muted">/50</span></p>
            <h2 className="mt-4 text-2xl sm:text-3xl">Exploring AI Tools and Techniques</h2>
            <p className="mt-3 text-muted">A national level online quiz by APS University, Rewa, held on World Computer Day, February 2025.</p>
            <button type="button" onClick={() => setOpen(aps)} className="mt-4 text-sm font-medium text-accent-ink underline underline-offset-4">View certificate</button>
          </Reveal>
          <Reveal delay={0.12}>
            <button type="button" onClick={() => setOpen(aps)} data-cursor aria-label="View the APS University quiz certificate" className="block w-full overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
              <img src={aps.thumb} alt="" loading="lazy" className="w-full transition-transform duration-700 hover:scale-105" />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="shell flex flex-wrap items-center justify-between gap-6 border-t border-line py-16">
        <h2 className="text-3xl sm:text-4xl">See what else I've done</h2>
        <div className="flex flex-wrap gap-3">
          <Button to="/certificates" variant="ghost">All certificates</Button>
          <Button to="/projects">View projects</Button>
        </div>
      </section>

      <CertModal cert={open} onClose={() => setOpen(null)} />
    </>
  );
}

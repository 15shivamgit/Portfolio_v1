import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";
import CertModal from "../components/ui/CertModal";
import CertStack from "../components/ui/CertStack";
import { SpotlightCard } from "../components/ui/Interactive";
import { CountUp } from "../components/ui/Numbers";
import { SplitChars } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";
import { EASE } from "../lib/motion";
import { certFilters, certificates } from "../data/certificates";

export default function Certificates() {
  usePageTitle("Certificates");
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const shown = certificates.filter((c) => filter === "all" || c.topic === filter);
  const verifiable = certificates.filter((c) => c.verify).length;

  return (
    <>
      <section className="shell grid items-center gap-12 pt-32 sm:pt-44 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="eyebrow"><span className="text-accent-ink">/</span> Certificates</p>
          <h1 className="mt-5 text-[clamp(3.2rem,9.5vw,8rem)] font-bold leading-[0.9] tracking-[-0.055em]">
            <SplitChars text="Always" delay={0.3} className="block" />
            <SplitChars text="learning" delay={0.5} className="block font-serif font-normal italic tracking-[-0.02em] text-accent-ink" />
          </h1>
          <motion.div className="mt-8 flex gap-10" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7, ease: EASE }}>
            <div>
              <p className="font-display text-5xl font-semibold tracking-[-0.04em]"><CountUp value={certificates.length} /></p>
              <p className="mt-1 text-sm text-muted">Certificates</p>
            </div>
            <div>
              <p className="font-display text-5xl font-semibold tracking-[-0.04em]"><CountUp value={verifiable} /></p>
              <p className="mt-1 text-sm text-muted">Verifiable online</p>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 40, rotate: 4 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.45 }}>
          <CertStack items={certificates} onOpen={setOpen} />
        </motion.div>
      </section>

      <section className="shell py-20 sm:py-28">
        <div className="mb-8 flex flex-wrap gap-1" role="group" aria-label="Filter certificates">
          {certFilters.map((f) => (
            <button key={f.id} type="button" onClick={() => setFilter(f.id)} aria-pressed={filter === f.id} className="relative rounded-full px-4 py-2 text-sm font-medium">
              {filter === f.id && <motion.span layoutId="cert-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className={`relative transition-colors ${filter === f.id ? "text-bg" : "text-muted hover:text-ink"}`}>{f.label}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93, transition: { duration: 0.2 } }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <SpotlightCard tilt={3} className="flex h-full flex-col">
                  <button type="button" onClick={() => setOpen(c)} className="relative block aspect-[4/3] w-full overflow-hidden bg-white" aria-label={`View ${c.title} certificate`}>
                    <img src={c.thumb} alt="" loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/spot:scale-105" />
                  </button>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-mono text-[0.68rem] uppercase tracking-widest text-muted">{c.date}</p>
                    <h2 className="mt-2 text-xl">{c.title}</h2>
                    <p className="mt-1 text-sm text-muted">{c.issuer}</p>
                    {c.note && <p className="mt-1 text-sm font-medium text-accent-ink">{c.note}</p>}
                    <div className="relative z-20 mt-auto flex items-center gap-3 pt-4 text-sm">
                      <button type="button" onClick={() => setOpen(c)} className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
                        <ExternalLink size={14} /> View
                      </button>
                      {c.verify && (
                        <a href={c.verify} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-accent-ink underline-offset-4 hover:underline">
                          <ShieldCheck size={14} /> Verify
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <CertModal cert={open} onClose={() => setOpen(null)} />
    </>
  );
}

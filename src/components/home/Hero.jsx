import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { SplitChars } from "../ui/Text";
import WordRotator from "../ui/WordRotator";
import { Button } from "../ui/Interactive";
import { EASE, heroDelay } from "../../lib/motion";
import { profile } from "../../data/profile";

const CHIPS = [
  { label: "React", className: "left-[-6%] top-[14%]", depth: 26, delay: 0 },
  { label: "Next.js", className: "right-[-7%] top-[6%]", depth: -20, delay: 0.1 },
  { label: "Node.js", className: "right-[-11%] top-[48%]", depth: 34, delay: 0.2 },
  { label: "TypeScript", className: "left-[-13%] top-[56%]", depth: -30, delay: 0.3 },
  { label: "Python", className: "right-[2%] bottom-[8%]", depth: 18, delay: 0.4 },
];

function Chip({ chip, mx, my }) {
  const x = useTransform(mx, [-0.5, 0.5], [-chip.depth, chip.depth]);
  const y = useTransform(my, [-0.5, 0.5], [-chip.depth, chip.depth]);
  return (
    <motion.span style={{ x, y }} className={`absolute z-20 ${chip.className}`}>
      <motion.span
        className="block rounded-full border border-line bg-card px-3 py-1.5 font-mono text-xs shadow-soft"
        initial={{ opacity: 0, scale: 0.4, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.5, delay: heroDelay + 0.9 + chip.delay },
          scale: { type: "spring", stiffness: 260, damping: 16, delay: heroDelay + 0.9 + chip.delay },
          y: { duration: 3.6 + chip.delay * 3, repeat: Infinity, ease: "easeInOut", delay: heroDelay + 1.4 + chip.delay },
        }}
      >
        {chip.label}
      </motion.span>
    </motion.span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const glowX = useMotionValue(-999);
  const glowY = useMotionValue(-999);
  const glow = useMotionTemplate`radial-gradient(520px circle at ${glowX}px ${glowY}px, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)`;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
        glowX.set(e.clientX - r.left);
        glowY.set(e.clientY - r.top);
      }}
    >
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0"
        style={{ maskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, #000 30%, transparent 78%)", WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, #000 30%, transparent 78%)" }}
      />
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ background: glow }} />
      <motion.div
        aria-hidden="true"
        className="absolute -right-[15%] -top-[20%] h-[60vw] w-[60vw] rounded-full opacity-40 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 70%)" }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="shell relative flex flex-1 flex-col justify-center pb-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.45fr_1fr]">
          <motion.div style={{ y: textY, opacity: fade }}>
            <motion.p
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/70 px-3.5 py-1.5 text-sm backdrop-blur"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: heroDelay }}
            >
              <span className="relative h-2 w-2 rounded-full bg-accent ping-dot" />
              Open to Full Stack Developer roles
            </motion.p>

            <h1 className="mt-6 font-display text-[clamp(3.6rem,min(12.6vw,21vh),10.5rem)] font-bold leading-[0.88] tracking-[-0.055em]">
              <SplitChars text="Shivam" delay={heroDelay + 0.05} className="block" />
              <SplitChars text="Kumar" delay={heroDelay + 0.28} className="block" />
            </h1>

            <motion.p
              className="mt-7 text-[clamp(1.5rem,3.4vw,2.6rem)] leading-tight tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: heroDelay + 0.65 }}
            >
              I build <WordRotator words={profile.rotator} className="font-serif italic text-accent-ink" />
            </motion.p>

            <motion.p
              className="mt-5 max-w-xl text-lg text-muted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: heroDelay + 0.78 }}
            >
              Full Stack Developer working with React, Next.js, Node.js, TypeScript and Python.
              Currently a Web Developer at Quark Consulting.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: heroDelay + 0.9 }}
            >
              <Button to="/projects" icon={ArrowUpRight}>See my work</Button>
              <Button href={profile.resume} download={profile.resumeName} icon={Download} variant="ghost">Download resume</Button>
            </motion.div>
          </motion.div>

          <motion.div className="relative mx-auto mb-16 w-[min(72vw,22rem)] lg:mb-0 lg:w-full lg:max-w-[23rem]" style={{ y: photoY }}>
            <motion.div
              className="relative aspect-square"
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(75% at 50% 50%)" }}
              transition={{ duration: 1.2, ease: EASE, delay: heroDelay + 0.3 }}
            >
              <div className="absolute inset-0 rounded-full bg-accent" />
              <div className="absolute inset-[9%] rounded-full border border-white/25" />
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <motion.img
                  src="/images/shivam.webp"
                  alt="Portrait of Shivam Kumar"
                  width="896"
                  height="800"
                  fetchPriority="high"
                  className="absolute bottom-0 left-1/2 w-[94%] max-w-none -translate-x-1/2"
                  initial={{ y: "22%", scale: 1.1 }}
                  animate={{ y: "0%", scale: 1 }}
                  transition={{ duration: 1.3, ease: EASE, delay: heroDelay + 0.35 }}
                />
              </div>
            </motion.div>
            {CHIPS.map((chip) => (
              <Chip key={chip.label} chip={chip} mx={mx} my={my} />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="shell relative flex items-center justify-between border-t border-line py-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: heroDelay + 1.1 }}
      >
        <span>{profile.location}</span>
        <span className="hidden sm:inline">MCA 2026 · CGPA 8.82</span>
        <span className="flex items-center gap-1.5">
          Scroll
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ArrowDown size={13} />
          </motion.span>
        </span>
      </motion.div>
    </section>
  );
}

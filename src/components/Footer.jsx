import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "./ui/Interactive";
import { profile } from "../data/profile";

const SOCIALS = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Instagram", href: profile.instagram },
  { label: "X", href: profile.x },
];

const PAGES = [
  { label: "Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Certificates", to: "/certificates" },
  { label: "Achievements", to: "/achievements" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["42%", "0%"]);

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink pt-8 text-bg">
      <Marquee items={["Open to Full Stack Developer roles", "Let's build something useful"]} speed={32} itemClass="font-display text-3xl font-semibold tracking-tight sm:text-4xl" />

      <div className="shell mt-14 grid gap-10 sm:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="max-w-sm text-lg opacity-80">{profile.statement}</p>
          <a href={`mailto:${profile.email}`} className="group mt-5 inline-flex items-center gap-2 font-display text-xl font-semibold text-[#ff9d57] sm:text-2xl">
            {profile.email}
            <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-widest opacity-60">Pages</p>
          <ul className="mt-4 space-y-1.5">
            {PAGES.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="opacity-85 transition-opacity hover:opacity-100 hover:underline">{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-widest opacity-60">Elsewhere</p>
          <ul className="mt-4 space-y-1.5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="opacity-85 transition-opacity hover:opacity-100 hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-current/15 pt-5 text-sm opacity-70">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}, India</p>
      </div>

      <div className="mt-4 overflow-hidden" aria-hidden="true">
        <motion.p style={{ y }} className="whitespace-nowrap text-center font-display text-[13.8vw] font-bold leading-[0.82] tracking-[-0.05em] text-[#ff7a1a]">
          Shivam Kumar
        </motion.p>
      </div>
    </footer>
  );
}

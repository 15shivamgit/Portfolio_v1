import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { EASE, scroller } from "../lib/motion";
import { profile } from "../data/profile";

const NAV = [
  { name: "Home", to: "/" },
  { name: "Work", to: "/projects" },
  { name: "About", to: "/about" },
  { name: "Certificates", to: "/certificates" },
  { name: "Achievements", to: "/achievements" },
  { name: "Contact", to: "/contact" },
];

function ThemeButton() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line transition-colors hover:bg-soft"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={theme} initial={{ y: 18, rotate: -70, opacity: 0 }} animate={{ y: 0, rotate: 0, opacity: 1 }} exit={{ y: -18, rotate: 70, opacity: 0 }} transition={{ duration: 0.3 }}>
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { pathname } = useLocation();

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(y > previous && y > 420);
    setScrolled(y > 24);
  });

  useEffect(() => {
    if (open) scroller.stop();
    else scroller.start();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4"
        animate={{ y: hidden && !open ? "-220%" : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex max-w-[78rem] items-center justify-between gap-3 rounded-full border py-1.5 pl-4 pr-1.5 backdrop-blur-xl transition-all duration-500 ${
            scrolled || open ? "border-line bg-card/85 shadow-soft" : "border-transparent bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5" aria-label="Shivam Kumar, home" onClick={() => setOpen(false)}>
            <motion.span whileHover={{ rotate: -8, scale: 1.06 }} className="grid h-8 w-8 place-items-center rounded-xl bg-accent font-display text-sm font-bold text-on-accent">
              SK
            </motion.span>
            <span className="font-display text-[1.05rem] font-semibold tracking-tight">Shivam Kumar</span>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className="relative rounded-full px-3.5 py-2 text-sm font-medium">
                {isActive(item.to) && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className={`relative transition-colors ${isActive(item.to) ? "text-bg" : "text-muted hover:text-ink"}`}>{item.name}</span>
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <a href={profile.resume} download={profile.resumeName} className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-on-accent transition-transform hover:scale-[1.03] sm:inline-flex">
              <Download size={15} /> Resume
            </a>
            <ThemeButton />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full bg-ink text-bg lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-6 pb-8 pt-28 lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <ul className="space-y-1">
              {NAV.map((item, i) => (
                <li key={item.to} className="overflow-hidden">
                  <motion.div initial={{ y: "110%" }} animate={{ y: 0 }} exit={{ y: "110%" }} transition={{ duration: 0.6, ease: EASE, delay: 0.08 + i * 0.05 }}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline gap-3 py-1.5 font-display text-[2.6rem] font-semibold leading-tight tracking-tight ${isActive(item.to) ? "text-accent-ink" : ""}`}
                    >
                      <span className="font-mono text-xs font-normal text-muted">0{i + 1}</span>
                      {item.name}
                    </NavLink>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }} exit={{ opacity: 0 }} href={profile.resume} download={profile.resumeName} className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 font-medium text-on-accent">
              <Download size={16} /> Download resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

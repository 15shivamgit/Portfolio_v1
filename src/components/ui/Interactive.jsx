import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { isFinePointer } from "../../lib/motion";

/* Pulls its child gently toward the pointer. */
export function Magnetic({ children, strength = 0.28, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

const BUTTON_STYLES = {
  primary: "bg-ink text-bg",
  accent: "bg-accent text-on-accent",
  ghost: "border border-line bg-card/60 text-ink backdrop-blur",
};

/* A pill whose label slides up and swaps on hover. */
export function Button({ to, href, onClick, children, icon: Icon = ArrowUpRight, variant = "primary", download, external, className = "", type }) {
  const inner = (
    <>
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full">{children}</span>
        <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0">
          {children}
        </span>
      </span>
      {Icon && (
        <span className="relative grid h-7 w-7 place-items-center overflow-hidden rounded-full bg-current/10">
          <Icon size={15} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
        </span>
      )}
    </>
  );
  const cls = `group inline-flex items-center gap-3 rounded-full py-2.5 pl-5 pr-2.5 text-[0.95rem] font-medium whitespace-nowrap transition-shadow hover:shadow-soft ${BUTTON_STYLES[variant]} ${className}`;

  let el;
  if (to) el = <Link to={to} className={cls}>{inner}</Link>;
  else if (href)
    el = (
      <a href={href} className={cls} download={download} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  else el = <button type={type ?? "button"} onClick={onClick} className={cls}>{inner}</button>;

  return <Magnetic>{el}</Magnetic>;
}

/* Tilts in 3D and carries a soft light under the pointer. */
export function SpotlightCard({ children, className = "", tilt = 5, ...rest }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [tilt, -tilt]), { stiffness: 180, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-tilt, tilt]), { stiffness: 180, damping: 20 });
  const [fine] = useState(isFinePointer);

  return (
    <motion.div
      ref={ref}
      style={fine ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={`group/spot relative isolate overflow-hidden rounded-3xl border border-line bg-card shadow-soft ${className}`}
      onPointerMove={(e) => {
        if (!fine || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        px.set(x / r.width);
        py.set(y / r.height);
        ref.current.style.setProperty("--mx", `${x}px`);
        ref.current.style.setProperty("--my", `${y}px`);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)" }}
      />
      {children}
    </motion.div>
  );
}

/* Infinite band of items. Content is doubled, so -50% loops without a seam. */
export function Marquee({ items, speed = 38, reverse = false, className = "", itemClass = "" }) {
  return (
    <div
      className={`marquee overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
    >
      <div className="marquee-track" data-reverse={reverse} style={{ "--marquee-speed": `${speed}s` }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span key={item} className={`flex items-center whitespace-nowrap ${itemClass}`}>
                {item}
                <span className="mx-6 text-accent" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Ring that trails the pointer on desktop. The native cursor stays visible. */
export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 480, damping: 36, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 480, damping: 36, mass: 0.35 });
  const [hovering, setHovering] = useState(false);
  const [fine] = useState(isFinePointer);

  useEffect(() => {
    if (!fine) return undefined;
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHovering(Boolean(e.target.closest?.("a, button, input, textarea, [data-cursor]")));
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [fine, x, y]);

  if (!fine) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-accent"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? 52 : 26,
        height: hovering ? 52 : 26,
        backgroundColor: hovering ? "rgba(232, 89, 12, 0.14)" : "rgba(232, 89, 12, 0)",
      }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    />
  );
}

/* Browser window frame used around screenshots */
export function BrowserFrame({ children, label, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-card shadow-soft ${className}`}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        {label && <span className="ml-3 truncate font-mono text-[0.7rem] text-muted">{label}</span>}
      </div>
      {children}
    </div>
  );
}

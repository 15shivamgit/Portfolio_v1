import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "../components/ui/Interactive";
import { SplitChars } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found");
  const ref = useRef(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 80, damping: 16 });
  const my = useSpring(useMotionValue(0), { stiffness: 80, damping: 16 });
  const rotateY = useTransform(mx, [-0.5, 0.5], [-18, 18]);
  const rotateX = useTransform(my, [-0.5, 0.5], [14, -14]);

  return (
    <section
      ref={ref}
      className="dot-grid flex min-h-[100svh] flex-col items-center justify-center px-5 text-center"
      onPointerMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <motion.h1 style={{ rotateX, rotateY, transformPerspective: 800 }} className="font-display text-[clamp(7rem,30vw,20rem)] font-bold leading-none tracking-[-0.06em] text-accent">
        <SplitChars text="404" delay={0.3} stagger={0.08} />
      </motion.h1>
      <p className="mt-2 max-w-md text-lg text-muted">This page wandered off. The rest of the site is still here.</p>
      <div className="mt-7"><Button to="/">Back to home</Button></div>
    </section>
  );
}

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SectionHead } from "./Text";

/* Scrolling down moves the photos sideways on desktop. On phones it is a plain swipe row. */
export default function ScrollGallery({ photos, eyebrow, title }) {
  const wrap = useRef(null);
  const track = useRef(null);
  const [distance, setDistance] = useState(0);
  const desktop = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useLayoutEffect(() => {
    if (!track.current) return undefined;
    const measure = () => setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [desktop]);

  return (
    <section ref={wrap} className="bg-soft" style={desktop ? { height: `calc(100vh + ${distance}px)` } : undefined}>
      <div className={desktop ? "sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden py-8" : "py-16"}>
        <div className="shell">
          <SectionHead eyebrow={eyebrow} title={title} />
        </div>
        <div className={desktop ? "" : "mt-8 snap-x snap-mandatory overflow-x-auto pb-3"}>
          <motion.ul ref={track} style={desktop ? { x } : undefined} className="flex w-max gap-4 px-5 md:gap-5 md:px-[max(1.25rem,calc((100vw-76rem)/2))]">
            {photos.map((p) => (
              <li key={p.src} className="snap-center">
                <figure className="h-[52svh] md:h-[56vh]" style={{ aspectRatio: p.ratio }}>
                  <img src={p.src} alt={p.caption} loading="lazy" decoding="async" className="h-full w-full rounded-3xl object-cover shadow-soft" />
                  <figcaption className="mt-2 max-w-full truncate px-1 text-sm text-muted">{p.caption}</figcaption>
                </figure>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

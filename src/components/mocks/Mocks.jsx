import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Activity, Archive, Check, Code2, CreditCard, FileText, GlassWater, Lock, ShoppingBag, Sparkles } from "lucide-react";
import { EASE } from "../../lib/motion";

/* Coded illustrations for projects whose repos are private. They show what each
   product does, never real data or screens. Loops run only while in view. */

function useLoop(length, ms) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-5% 0px" });
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    const id = setInterval(() => setStep((s) => (s + 1) % length), ms);
    return () => clearInterval(id);
  }, [inView, length, ms]);
  return { ref, step, inView };
}

const SURFACE = "relative h-full w-full overflow-hidden bg-[#1a1510] text-[#f6f0e7] font-sans";

function Bar({ w, delay = 0, active }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
      <motion.div
        className="h-full rounded-full bg-[#ff7a1a]"
        initial={{ width: 0 }}
        animate={{ width: active ? w : 0 }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      />
    </div>
  );
}

export function SaasMock() {
  const { ref, step, inView } = useLoop(3, 2800);
  const tenants = ["Client A", "Client B", "Client C"];
  const nav = [
    { icon: Activity, label: "Audit log" },
    { icon: CreditCard, label: "Billing" },
    { icon: Code2, label: "Public API" },
  ];
  const paths = [
    "M0 66 C 30 60, 50 44, 80 46 S 130 20, 160 26 S 210 14, 240 8",
    "M0 50 C 30 62, 60 30, 90 38 S 140 44, 170 22 S 215 26, 240 14",
    "M0 70 C 40 66, 60 56, 95 40 S 145 36, 175 30 S 220 10, 240 12",
  ];
  const tiles = [
    { label: "Keywords", w: ["72%", "48%", "86%"] },
    { label: "Site health", w: ["88%", "64%", "76%"] },
    { label: "AI mentions", w: ["41%", "66%", "58%"] },
  ];
  return (
    <div ref={ref} className={SURFACE}>
      <div className="flex h-full">
        <div className="hidden w-[25%] shrink-0 flex-col gap-1 border-r border-white/10 p-3 sm:flex">
          <p className="mb-1 font-mono text-[0.56rem] uppercase tracking-widest text-white/50">Tenants</p>
          {tenants.map((t, i) => (
            <div key={t} className={`rounded-lg px-2.5 py-1.5 text-[0.72rem] transition-colors duration-500 ${step === i ? "bg-[#ff7a1a] font-semibold text-[#13100c]" : "text-white/70"}`}>
              {t}
            </div>
          ))}
          <div className="mt-4 space-y-2 border-t border-white/10 pt-3">
            {nav.map((n) => (
              <p key={n.label} className="flex items-center gap-2 px-1 text-[0.66rem] text-white/60"><n.icon size={11} /> {n.label}</p>
            ))}
          </div>
          <p className="mt-auto flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-[0.62rem] text-white/60"><Lock size={10} /> SSO + 2FA</p>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-[0.82rem] font-semibold">{tenants[step]} overview</p>
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[0.6rem]"><Sparkles size={9} className="text-[#ff7a1a]" /> AI search</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {tiles.map((t, i) => (
              <div key={t.label} className="min-w-0 rounded-xl bg-white/5 p-2">
                <p className="truncate text-[0.58rem] text-white/60">{t.label}</p>
                <div className="mt-1.5"><Bar w={t.w[step]} active={inView} delay={i * 0.08} /></div>
              </div>
            ))}
          </div>
          <div className="flex min-h-0 flex-1 flex-col rounded-xl bg-white/5 p-2.5">
            <p className="font-mono text-[0.56rem] uppercase tracking-widest text-white/50">Rank tracking</p>
            <svg viewBox="0 0 240 80" className="mt-1 min-h-0 w-full flex-1" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              {[20, 40, 60].map((y) => <line key={y} x1="0" x2="240" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />)}
              <motion.path key={step} d={paths[step]} fill="none" stroke="#ff7a1a" strokeWidth="2.2" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: inView ? 1 : 0 }} transition={{ duration: 1.6, ease: EASE }} />
            </svg>
          </div>
          <div className="space-y-1.5 rounded-xl bg-white/5 p-2.5">
            <p className="font-mono text-[0.56rem] uppercase tracking-widest text-white/50">Crawl queue</p>
            <Bar w={["82%", "46%", "68%"][step]} active={inView} />
            <Bar w={["38%", "74%", "52%"][step]} active={inView} delay={0.1} />
          </div>
        </div>
      </div>
    </div>
  );
}

const ANSWER = "Yes. We ship across India, and orders usually leave within two working days.";

export function ChatMock() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-5% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const id = setInterval(() => setCount((c) => (c >= ANSWER.length + 60 ? 0 : c + 1)), 38);
    return () => clearInterval(id);
  }, [inView]);

  const typing = count > 0 && count < 16;
  const shown = count >= 16 ? ANSWER.slice(0, count - 16) : "";
  const done = shown.length >= ANSWER.length;

  return (
    <div ref={ref} className={SURFACE}>
      <div className="absolute inset-0 opacity-60 p-5 hidden sm:block" aria-hidden="true">
        <div className="h-3 w-2/5 rounded-full bg-white/10" />
        <div className="mt-3 h-2 w-3/5 rounded-full bg-white/10" />
        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
      </div>
      <div className="absolute inset-2 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#241d16] shadow-2xl sm:inset-auto sm:bottom-4 sm:right-4 sm:top-4 sm:w-[72%]">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="relative h-2 w-2 rounded-full bg-[#ff7a1a] ping-dot" />
          <p className="text-[0.75rem] font-semibold">Website assistant</p>
          <span className="ml-auto font-mono text-[0.56rem] text-white/50">one script tag</span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden p-3 text-[0.74rem] leading-snug">
          <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-[#ff7a1a] px-3 py-1.5 text-[#13100c]">Do you deliver across India?</p>
          {typing && (
            <div className="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2.5" aria-hidden="true">
              {[0, 1, 2].map((d) => (
                <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-white/70" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }} />
              ))}
            </div>
          )}
          {shown && (
            <p className="max-w-[88%] rounded-2xl rounded-bl-sm bg-white/10 px-3 py-1.5">
              {shown}
              {!done && <span className="ml-0.5 inline-block h-3 w-[2px] translate-y-0.5 bg-[#ff7a1a] [animation:blink_.8s_steps(1)_infinite]" />}
            </p>
          )}
          {done && (
            <motion.span initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex w-fit items-center gap-1 rounded-full border border-white/15 px-2 py-0.5 text-[0.6rem] text-white/70">
              <FileText size={9} /> Source: shipping-faq.pdf
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}

export function StoreMock() {
  const { ref, step } = useLoop(4, 1600);
  const items = [
    { name: "Steel bottle", price: "₹449", icon: GlassWater },
    { name: "Desk organizer", price: "₹699", icon: Archive },
    { name: "Canvas tote", price: "₹299", icon: ShoppingBag },
  ];
  const labels = ["Added to cart", "Re-priced on the server", "Stock updated", "GST invoice ready"];
  return (
    <div ref={ref} className={SURFACE}>
      <div className="grid h-full grid-rows-[auto_1fr] gap-3 p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <p className="text-[0.82rem] font-semibold">Storefront</p>
          <div className="relative">
            <ShoppingBag size={16} />
            <motion.span key={step} initial={{ scale: 0.4 }} animate={{ scale: 1 }} className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-[#ff7a1a] text-[0.55rem] font-bold text-[#13100c]">1</motion.span>
          </div>
        </div>
        <div className="grid min-h-0 grid-cols-[1.35fr_1fr] gap-3">
          <div className="grid min-h-0 grid-rows-3 gap-2">
            {items.map((it, i) => (
              <motion.div key={it.name} animate={{ x: step === 0 && i === 1 ? 4 : 0 }} className={`flex min-h-0 min-w-0 items-center gap-2 rounded-xl bg-white/5 p-2 sm:gap-3 ${i === 1 ? "ring-1 ring-[#ff7a1a]" : ""}`}>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${i === 1 ? "bg-[#ff7a1a] text-[#13100c]" : "bg-white/10"}`}><it.icon size={15} /></span>
                <span className="min-w-0 text-[0.62rem] leading-tight sm:text-[0.72rem]">
                  <span className="block truncate">{it.name}</span>
                  <span className="block font-semibold">{it.price}</span>
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex min-h-0 min-w-0 flex-col gap-2 rounded-xl bg-[#f6f0e7] p-3 text-[#15120e]">
            <p className="font-mono text-[0.56rem] uppercase tracking-widest text-[#6b6358]">Checkout</p>
            <div className="flex flex-wrap gap-1 text-[0.6rem] font-medium">
              <span className={`rounded-full px-2 py-0.5 transition-colors duration-500 ${step % 2 === 0 ? "bg-[#e8590c] text-white" : "bg-black/10"}`}>Razorpay</span>
              <span className={`rounded-full px-2 py-0.5 transition-colors duration-500 ${step % 2 === 1 ? "bg-[#e8590c] text-white" : "bg-black/10"}`}>COD</span>
            </div>
            <div className="mt-auto flex items-baseline justify-between border-t border-black/10 pt-2 text-[0.7rem]">
              <span>Total</span><span className="font-display text-lg font-bold">₹699</span>
            </div>
            <div className="flex gap-1">
              {labels.map((l, i) => (
                <div key={l} className="h-1 flex-1 overflow-hidden rounded-full bg-black/10">
                  <motion.div className="h-full bg-[#e8590c]" animate={{ width: i <= step ? "100%" : "0%" }} transition={{ duration: 0.5, ease: EASE }} />
                </div>
              ))}
            </div>
            <motion.p key={labels[step]} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-1 text-[0.62rem] leading-tight">
              <Check size={12} className="shrink-0 text-[#e8590c]" /> <span className="truncate">{labels[step]}</span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}

const QR_SIZE = 13;
const inFinder = (x, y) => (x < 4 && y < 4) || (x > QR_SIZE - 5 && y < 4) || (x < 4 && y > QR_SIZE - 5);
const finderOn = (x, y) => {
  const fx = x > QR_SIZE - 5 ? x - (QR_SIZE - 4) : x;
  const fy = y > QR_SIZE - 5 ? y - (QR_SIZE - 4) : y;
  return fx < 3 && fy < 3;
};
const QR = Array.from({ length: QR_SIZE * QR_SIZE }, (_, i) => {
  const x = i % QR_SIZE;
  const y = Math.floor(i / QR_SIZE);
  if (inFinder(x, y)) return finderOn(x, y);
  return Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453) % 1 > 0.5;
});

export function TicketMock() {
  const { ref, step } = useLoop(60, 1000);
  const left = 599 - step;
  const held = 13;
  return (
    <div ref={ref} className={SURFACE}>
      <div className="flex h-full gap-3 p-3 sm:p-4">
        <div className="flex min-w-0 flex-[1.15] flex-col rounded-xl bg-white/5 p-3">
          <div className="flex flex-wrap items-center justify-between gap-1.5">
            <p className="truncate text-[0.74rem] font-semibold">Choose seats</p>
            <span className="shrink-0 rounded-full bg-[#ff7a1a] px-2 py-0.5 font-mono text-[0.58rem] font-semibold text-[#13100c]">
              Held {String(Math.floor(left / 60)).padStart(2, "0")}:{String(left % 60).padStart(2, "0")}
            </span>
          </div>
          <div className="my-auto grid grid-cols-6 gap-1.5 py-2">
            {Array.from({ length: 24 }, (_, i) => (
              <motion.span
                key={i}
                className="aspect-square rounded-[4px]"
                animate={{ backgroundColor: i === held ? "#ff7a1a" : [2, 3, 8, 16, 21].includes(i) ? "rgba(255,255,255,0.34)" : "rgba(255,255,255,0.1)", scale: i === held ? [1, 1.14, 1] : 1 }}
                transition={{ duration: 1.4, repeat: i === held ? Infinity : 0 }}
              />
            ))}
          </div>
          <p className="truncate text-[0.6rem] text-white/55">Seat held until payment or expiry</p>
        </div>
        <div className="flex min-w-0 flex-1 flex-col rounded-xl bg-[#f6f0e7] p-3 text-[#15120e]">
          <p className="font-mono text-[0.56rem] uppercase tracking-widest text-[#6b6358]">E-ticket</p>
          <p className="truncate text-[0.8rem] font-semibold">Pilgrimage tour</p>
          <div className="mx-auto my-auto grid aspect-square w-[min(82%,9rem)] gap-px py-2" style={{ gridTemplateColumns: `repeat(${QR_SIZE}, 1fr)` }}>
            {QR.map((on, i) => (
              <span key={i} className="aspect-square rounded-[1px]" style={{ background: on ? "#15120e" : "transparent" }} />
            ))}
          </div>
          <p className="flex items-center gap-1 truncate text-[0.6rem] text-[#6b6358]"><Check size={10} className="shrink-0 text-[#e8590c]" /> PDF sent by email</p>
        </div>
      </div>
    </div>
  );
}

const PHONE_SCREENS = ["dashboard", "udhaar", "reports", "about"];

/* Hisaab has real screenshots, so this frame cycles through them. */
export function PhoneMock() {
  const { ref, step } = useLoop(PHONE_SCREENS.length, 2600);
  return (
    <div ref={ref} className={`${SURFACE} grid place-items-center p-3`}>
      <div className="relative aspect-[9/20] h-full overflow-hidden rounded-[1.5rem] border-[3px] border-white/25 bg-white">
        <AnimatePresence initial={false}>
          <motion.img
            key={PHONE_SCREENS[step]}
            src={`/images/hisaab/${PHONE_SCREENS[step]}.webp`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-top"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

const MOCKS = { saas: SaasMock, chat: ChatMock, store: StoreMock, ticket: TicketMock, phone: PhoneMock };

/* Mocks are designed at about 640px wide. CSS zoom keeps them in proportion in any frame. */
function ScaledMock({ Mock, label, className }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const fit = () => {
      el.style.zoom = String(Math.min(1.75, Math.max(0.78, el.parentElement.clientWidth / 640)));
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`h-full w-full ${className}`} role="img" aria-label={label}>
      <div ref={ref} className="h-full w-full">
        <Mock />
      </div>
    </div>
  );
}

export function ProjectVisual({ project, eager = false, className = "" }) {
  const Mock = project.mock ? MOCKS[project.mock] : null;
  if (Mock) return <ScaledMock Mock={Mock} label={project.mockIsReal ? `${project.title} app screens` : `Illustration of ${project.title}`} className={className} />;
  if (project.image) {
    return <img src={project.image} alt={`${project.title} screenshot`} loading={eager ? "eager" : "lazy"} decoding="async" className={`h-full w-full object-cover object-left-top ${className}`} />;
  }
  return (
    <div className={`dot-grid grid h-full w-full place-items-center bg-soft ${className}`}>
      <span className="font-display text-2xl font-semibold text-muted">{project.title}</span>
    </div>
  );
}

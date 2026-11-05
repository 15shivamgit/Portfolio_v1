import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Check, Copy, Download, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Magnetic } from "../components/ui/Interactive";
import Reveal from "../components/ui/Reveal";
import { SplitChars } from "../components/ui/Text";
import usePageTitle from "../hooks/usePageTitle";
import { EASE } from "../lib/motion";
import { profile } from "../data/profile";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const EMPTY = { name: "", email: "", phone: "", message: "" };

const CONFETTI = Array.from({ length: 22 }, (_, i) => {
  const angle = (i / 22) * Math.PI * 2;
  const reach = 90 + (i % 5) * 34;
  return { x: Math.cos(angle) * reach, y: Math.sin(angle) * reach - 40, r: (i * 47) % 360, tone: ["#e8590c", "#ff9d57", "#15120e", "#f6c177"][i % 4], round: i % 3 === 0 };
});

/* #12 Click to success: the button morphs through its states, and celebrates only a real send. */
function SubmitButton({ status }) {
  const label = { idle: "Send message", sending: "Sending", success: "Message sent", error: "Try again" }[status];
  const Icon = { idle: Send, sending: Loader2, success: Check, error: AlertCircle }[status];
  const done = status === "success";

  return (
    <div className="relative">
      <motion.button
        type="submit"
        disabled={status === "sending" || done}
        layout
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        className={`relative inline-flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full px-7 font-medium transition-colors duration-300 sm:w-auto sm:min-w-56 ${
          done ? "bg-accent text-on-accent" : "bg-ink text-bg"
        } disabled:cursor-default`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={status} className="flex items-center gap-3" initial={{ y: 26, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -26, opacity: 0 }} transition={{ duration: 0.28, ease: EASE }}>
            <motion.span
              animate={status === "sending" ? { rotate: 360 } : done ? { scale: [0.3, 1.35, 1] } : { rotate: 0 }}
              transition={status === "sending" ? { duration: 0.9, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
              className="grid"
            >
              <Icon size={18} strokeWidth={done ? 3 : 2} />
            </motion.span>
            {label}
          </motion.span>
        </AnimatePresence>
      </motion.button>
      {done && (
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-20 sm:left-28">
          {CONFETTI.map((c, i) => (
            <span
              key={i}
              className={`confetti absolute h-2.5 w-2 ${c.round ? "rounded-full" : "rounded-[2px]"}`}
              style={{ background: c.tone, "--x": `${c.x}px`, "--y": `${c.y}px`, "--r": `${c.r}deg` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required, textarea, autoComplete }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className="group relative block">
      <Tag
        name={name}
        type={textarea ? undefined : type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        rows={textarea ? 5 : undefined}
        placeholder=" "
        className="peer w-full resize-none border-b border-line bg-transparent pb-2.5 pt-6 text-lg outline-none"
      />
      <span className="pointer-events-none absolute left-0 top-6 origin-left text-lg text-muted transition-all duration-300 peer-focus:-translate-y-5 peer-focus:scale-75 peer-focus:text-accent-ink peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:scale-75">
        {label}{required && " *"}
      </span>
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] peer-focus:scale-x-100" />
    </label>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(profile.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          window.location.href = `mailto:${profile.email}`;
        }
      }}
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium transition-colors hover:bg-soft"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={String(copied)} className="flex items-center gap-1.5" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -8, opacity: 0 }} transition={{ duration: 0.18 }}>
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Contact() {
  usePageTitle("Contact");
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const change = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (new FormData(e.currentTarget).get("botcheck")) return;

    if (!WEB3FORMS_KEY) {
      setError(`The form isn't connected yet. Please email me at ${profile.email}.`);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      // FormData keeps this a simple request. A JSON body triggers a CORS preflight, which the API rejects.
      const body = new FormData();
      Object.entries({
        access_key: WEB3FORMS_KEY,
        subject: `Portfolio message from ${form.name}`,
        from_name: "Shivam Kumar Portfolio",
        replyto: form.email,
        ...form,
      }).forEach(([key, value]) => body.append(key, value));

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Send failed");
      setStatus("success");
      setForm(EMPTY);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setError(`That didn't go through. Please try again, or email me at ${profile.email}.`);
      setStatus("error");
    }
  };

  return (
    <>
      <section className="shell pt-32 sm:pt-44">
        <p className="eyebrow"><span className="text-accent-ink">/</span> Contact</p>
        <h1 className="mt-5 flex flex-wrap items-baseline gap-x-[0.25em] text-[clamp(3.6rem,11vw,9.5rem)] font-bold leading-[0.95] tracking-[-0.055em]">
          <SplitChars text="Let's" delay={0.3} />
          <SplitChars text="talk" delay={0.45} className="font-serif font-normal italic tracking-[-0.02em] text-accent-ink" />
        </h1>
      </section>

      <section className="shell grid gap-14 py-16 sm:py-24 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <Reveal>
            <p className="text-xl text-muted">I'm looking for Full Stack Developer roles. If you're hiring, or just want to talk about what you're building, send me a message.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 divide-y divide-line border-y border-line">
            <div className="flex items-center gap-4 py-4">
              <Mail size={18} className="shrink-0 text-accent-ink" />
              <a href={`mailto:${profile.email}`} className="min-w-0 flex-1 truncate font-medium hover:underline">{profile.email}</a>
              <CopyEmail />
            </div>
            <div className="flex items-center gap-4 py-4">
              <Phone size={18} className="shrink-0 text-accent-ink" />
              <a href={profile.phoneHref} className="font-medium hover:underline">{profile.phone}</a>
            </div>
            <div className="flex items-center gap-4 py-4">
              <MapPin size={18} className="shrink-0 text-accent-ink" />
              <span className="font-medium">{profile.location}, India</span>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-2">
            {[
              { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
              { label: "GitHub", href: profile.github, icon: Github },
            ].map((s) => (
              <Magnetic key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2.5 font-medium transition-colors hover:bg-soft">
                  <s.icon size={16} /> {s.label} <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" />
                </a>
              </Magnetic>
            ))}
            <Magnetic>
              <a href={profile.resume} download={profile.resumeName} className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 font-medium text-on-accent">
                <Download size={16} /> Resume
              </a>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="rounded-[2rem] border border-line bg-card p-6 shadow-soft sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" name="name" value={form.name} onChange={change} required autoComplete="name" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={change} required autoComplete="email" />
            </div>
            <div className="mt-5"><Field label="Phone" name="phone" type="tel" value={form.phone} onChange={change} autoComplete="tel" /></div>
            <div className="mt-5"><Field label="Your message" name="message" value={form.message} onChange={change} required textarea /></div>
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <SubmitButton status={status} />
              <div aria-live="polite" className="min-h-5 text-sm">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-accent-ink">Thanks! I'll get back to you soon.</motion.p>
                  )}
                  {status === "error" && (
                    <motion.p key="err" role="alert" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: [0, -5, 5, -3, 0] }} exit={{ opacity: 0 }} className="text-accent-ink">{error}</motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  );
}

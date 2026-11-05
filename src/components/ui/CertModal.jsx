import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, ShieldCheck, X } from "lucide-react";
import { EASE, scroller } from "../../lib/motion";

export default function CertModal({ cert, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!cert) return undefined;
    const previous = document.activeElement;
    scroller.stop();
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      scroller.start();
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [cert, onClose]);

  const ext = cert?.file.split(".").pop();
  const downloadName = cert ? `Shivam_Kumar_${cert.title.replace(/[^a-z0-9]+/gi, "_")}.${ext}` : "";

  return createPortal(
    <AnimatePresence>
      {cert && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={cert.title}
        >
          <motion.div
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-card shadow-2xl"
            initial={{ y: 40, scale: 0.94, rotate: -1.5 }}
            animate={{ y: 0, scale: 1, rotate: 0 }}
            exit={{ y: 24, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-5">
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {cert.issuer} · {cert.date}
                  {cert.note ? ` · ${cert.note}` : ""}
                </p>
              </div>
              <button ref={closeRef} onClick={onClose} aria-label="Close certificate" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-colors hover:bg-soft">
                <X size={18} />
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-soft p-3 sm:p-5">
              <img src={cert.thumb} alt={`${cert.title} certificate`} className="mx-auto max-h-[58vh] w-auto rounded-lg shadow-soft" />
            </div>
            <div className="flex flex-wrap items-center gap-2 p-4">
              <a href={cert.file} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg">
                <ExternalLink size={15} /> Open original
              </a>
              <a href={cert.file} download={downloadName} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium">
                <Download size={15} /> Download
              </a>
              {cert.verify && (
                <a href={cert.verify} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium">
                  <ShieldCheck size={15} className="text-accent-ink" /> Verify
                </a>
              )}
              {cert.credential && <span className="ml-auto hidden truncate font-mono text-[0.68rem] text-muted sm:block">ID {cert.credential}</span>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

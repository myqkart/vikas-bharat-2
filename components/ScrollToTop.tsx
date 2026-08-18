"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER = 420;

export default function ScrollToTop() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 8, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.94 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.94 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduce ? "auto" : "smooth",
            })
          }
          className="fixed right-3 bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-40 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-[0_8px_22px_-8px_rgba(18,41,77,0.45)] ring-1 ring-border/60 md:right-6 md:bottom-24 md:h-12 md:w-12"
        >
          <ArrowUp size={18} strokeWidth={2.4} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

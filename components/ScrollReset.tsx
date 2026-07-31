"use client";

import { useEffect } from "react";

/**
 * Prevents restored / hash scroll from landing mid-hero on first paint.
 * Keeps real section hashes (#about, etc.) working.
 */
export default function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const hash = window.location.hash;
    const shouldPinTop = !hash || hash === "#" || hash === "#home";

    if (!shouldPinTop) return;

    const pin = () => window.scrollTo(0, 0);

    pin();
    const raf = requestAnimationFrame(pin);
    const t = window.setTimeout(pin, 0);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, []);

  return null;
}

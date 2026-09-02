"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { CheckCircle2, ChevronDown, X } from "lucide-react";
import { INDIAN_STATES } from "@/lib/indian-states";

const STORAGE = {
  submitted: "vb_lead_modal_submitted",
  dismissedAt: "vb_lead_modal_dismissed_at",
  lastShownAt: "vb_lead_modal_last_shown_at",
  dailyCount: "vb_lead_modal_daily_count",
  dailyDate: "vb_lead_modal_daily_date",
} as const;

const INITIAL_DELAY_MS = 2000;
const REAPPEAR_AFTER_DISMISS_MS = 3 * 60 * 1000;
const MAX_SHOWS_PER_DAY = 3;
const ACTIVITY_POLL_MS = 15_000;
const RECENT_ACTIVITY_MS = 45_000;

const fieldClass =
  "w-full rounded-[12px] border border-[#d8d2c4] bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-[#9aa3af] focus:border-indigo focus:ring-[3px] focus:ring-indigo/10";

const labelClass = "mb-1 block text-[13px] font-semibold text-ink";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function readStorage(key: string) {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private browsing */
  }
}

function getDailyShowCount() {
  const date = readStorage(STORAGE.dailyDate);
  if (date !== todayKey()) return 0;
  return Number(readStorage(STORAGE.dailyCount) ?? 0);
}

function recordShow() {
  const today = todayKey();
  const date = readStorage(STORAGE.dailyDate);
  const count = date === today ? Number(readStorage(STORAGE.dailyCount) ?? 0) : 0;
  writeStorage(STORAGE.dailyDate, today);
  writeStorage(STORAGE.dailyCount, String(count + 1));
  writeStorage(STORAGE.lastShownAt, String(Date.now()));
}

function shouldSkipRoute(pathname: string) {
  return pathname.startsWith("/careers");
}

function MarketingLeadForm({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [stateError, setStateError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const state = String(data.get("state") ?? "").trim();

    if (!state) {
      setStateError(true);
      return;
    }

    writeStorage(STORAGE.submitted, "1");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="pt-6 pb-2 text-center">
        <CheckCircle2 className="mx-auto h-11 w-11 text-success" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
          You&apos;re on the list!
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate">
          Our advisor will call you shortly to walk you through the grants and
          loans your business qualifies for.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition hover:bg-indigo"
        >
          Continue browsing
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="pt-4"
    >
      <div className="space-y-3">
        <label className="block">
          <span className={labelClass}>Your Name</span>
          <input
            className={fieldClass}
            name="name"
            required
            placeholder="Enter your full name"
            autoComplete="name"
          />
        </label>

        <label className="block">
          <span className={labelClass}>Mobile Number</span>
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            required
            placeholder="10-digit mobile number"
            autoComplete="tel"
            pattern="[6-9][0-9]{9}"
            title="Enter a valid 10-digit Indian mobile number"
          />
        </label>

        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
          />
        </label>

        <label className="block">
          <span className={labelClass}>Industry</span>
          <input
            className={fieldClass}
            name="industry"
            required
            placeholder="e.g. Manufacturing"
          />
        </label>

        <label className="block">
          <span className={labelClass}>State</span>
          <span className="relative block">
            <select
              name="state"
              required
              defaultValue=""
              onChange={() => setStateError(false)}
              className={`${fieldClass} appearance-none pr-10 ${stateError ? "border-error ring-[3px] ring-error/10" : ""}`}
            >
              <option value="" disabled>
                Select State
              </option>
              {INDIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]"
              aria-hidden
            />
          </span>
          {stateError ? (
            <p className="mt-1.5 text-xs text-error">Please select your state.</p>
          ) : null}
        </label>
      </div>

      <button
        type="submit"
        className="btn-shine mt-5 w-full rounded-full bg-gradient-to-r from-ink via-indigo to-marigold px-6 py-3 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(18,41,77,0.22)] transition hover:brightness-105"
      >
        Get a Free Callback
      </button>
      <p className="mt-2.5 text-center text-[11px] leading-relaxed text-slate">
        No spam. We call once to understand your needs.
      </p>
    </form>
  );
}

export default function MarketingLeadModal() {
  const pathname = usePathname();
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openRef = useRef(false);
  const splashDoneRef = useRef(false);
  const initialTimerRef = useRef<number | null>(null);
  const activityTimerRef = useRef<number | null>(null);
  const lastActivityRef = useRef(Date.now());

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const canShow = useCallback(() => {
    if (readStorage(STORAGE.submitted)) return false;
    if (getDailyShowCount() >= MAX_SHOWS_PER_DAY) return false;
    return true;
  }, []);

  const showModal = useCallback(() => {
    if (!canShow()) return;
    recordShow();
    setOpen(true);
  }, [canShow]);

  const closeModal = useCallback(() => {
    writeStorage(STORAGE.dismissedAt, String(Date.now()));
    setOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || shouldSkipRoute(pathname)) return;
    if (!canShow()) return;

    const scheduleInitialShow = () => {
      if (initialTimerRef.current) window.clearTimeout(initialTimerRef.current);

      const dismissedAt = readStorage(STORAGE.dismissedAt);
      const isFirstVisit = !dismissedAt;

      if (!isFirstVisit) return;

      initialTimerRef.current = window.setTimeout(() => {
        if (!openRef.current) showModal();
      }, INITIAL_DELAY_MS);
    };

    const onSplashComplete = () => {
      splashDoneRef.current = true;
      scheduleInitialShow();
    };

    window.addEventListener("vb:splash-complete", onSplashComplete);

    if (!document.querySelector(".splash-root")) {
      onSplashComplete();
    }

    return () => {
      window.removeEventListener("vb:splash-complete", onSplashComplete);
      if (initialTimerRef.current) window.clearTimeout(initialTimerRef.current);
    };
  }, [mounted, pathname, canShow, showModal]);

  useEffect(() => {
    if (!mounted || shouldSkipRoute(pathname) || open) return;
    if (!canShow()) return;

    const dismissedAt = Number(readStorage(STORAGE.dismissedAt) ?? 0);
    if (!dismissedAt) return;

    const markActivity = () => {
      lastActivityRef.current = Date.now();
    };

    const events = ["scroll", "click", "keydown", "mousemove", "touchstart"] as const;
    events.forEach((event) =>
      window.addEventListener(event, markActivity, { passive: true }),
    );

    activityTimerRef.current = window.setInterval(() => {
      const now = Date.now();
      const idleFor = now - lastActivityRef.current;
      const sinceDismiss = now - dismissedAt;
      const lastShown = Number(readStorage(STORAGE.lastShownAt) ?? 0);
      const sinceLastShow = now - lastShown;

      if (
        sinceDismiss >= REAPPEAR_AFTER_DISMISS_MS &&
        idleFor <= RECENT_ACTIVITY_MS &&
        sinceLastShow >= REAPPEAR_AFTER_DISMISS_MS
      ) {
        showModal();
      }
    }, ACTIVITY_POLL_MS);

    return () => {
      events.forEach((event) => window.removeEventListener(event, markActivity));
      if (activityTimerRef.current) window.clearInterval(activityTimerRef.current);
    };
  }, [mounted, pathname, open, canShow, showModal]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeModal]);

  if (!mounted || !open || shouldSkipRoute(pathname)) return null;

  return createPortal(
    <div className="fixed inset-0 z-[210] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close funding enquiry form"
        className="absolute inset-0 bg-ink/45 backdrop-blur-[8px]"
        onClick={closeModal}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full overflow-y-auto rounded-t-[24px] border border-[#ebe4d6] bg-white shadow-[0_20px_60px_rgba(18,41,77,0.18)] max-h-[calc(100dvh-env(safe-area-inset-bottom))] sm:max-h-none sm:max-w-[26rem] sm:overflow-visible sm:rounded-[24px]"
      >
        <div className="px-5 pb-4 pt-5 sm:px-7 sm:pt-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 pr-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-error">
                Wait — before you go
              </p>
              <h2
                id={titleId}
                className="mt-1.5 font-display text-[1.35rem] font-semibold leading-tight text-ink sm:text-[1.5rem]"
              >
                Which funding you qualify for?
              </h2>
              <p className="mt-1.5 text-[13px] leading-snug text-slate sm:text-sm sm:leading-relaxed">
                Leave your number — our advisor will call you back and tell you
                exactly which grants and loans your business is eligible for.
                Free, no commitment.
              </p>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#ebe4d6] text-ink transition hover:bg-[#f7f3ea]"
              aria-label="Close funding enquiry form"
            >
              <X size={17} strokeWidth={2.2} />
            </button>
          </div>

          <MarketingLeadForm onClose={closeModal} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

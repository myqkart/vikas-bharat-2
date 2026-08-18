"use client";

import {
  useCallback,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import CareerApplicationForm from "@/components/CareerApplicationForm";
import type { CareerRole } from "@/lib/careers";

export function CareerApplyButton({
  job,
  children = "Apply",
  className = "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-ink px-5 py-3 text-sm font-bold text-paper sm:w-auto",
}: {
  job: CareerRole;
  children?: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setOpen(true);
        }}
      >
        {children}
      </button>
      {open ? <CareerApplyModal job={job} onClose={close} /> : null}
    </>
  );
}

export default function CareerApplyModal({
  job,
  onClose,
}: {
  job: CareerRole;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[220] flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close application form"
        className="absolute inset-0 bg-ink/45 backdrop-blur-[8px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[100dvh] w-full flex-col overflow-hidden rounded-t-[24px] border border-[#ebe4d6] bg-white shadow-[0_20px_60px_rgba(18,41,77,0.18)] sm:max-h-[min(90vh,760px)] sm:max-w-[42rem] sm:rounded-[24px]"
      >
        <div className="flex shrink-0 items-start justify-between gap-3 px-5 pb-3 pt-5 sm:px-7 sm:pt-6">
          <div className="min-w-0 pr-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-marigold-dark">
              Apply now
            </p>
            <h2
              id={titleId}
              className="mt-1 font-display text-[1.35rem] font-semibold leading-snug text-ink sm:text-2xl"
            >
              {job.title}
            </h2>
            <p className="mt-1 text-sm leading-snug text-slate">
              {job.locationStreet}, {job.locationCity}
            </p>
            <p className="mt-0.5 text-xs text-slate">
              {job.type} · {job.workMode}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ebe4d6] text-ink hover:bg-[#f7f3ea]"
            aria-label="Close application form"
          >
            <X size={18} strokeWidth={2.2} />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-7 sm:pb-6">
          <CareerApplicationForm
            initialRole={job.slug}
            compact
            onClose={onClose}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}

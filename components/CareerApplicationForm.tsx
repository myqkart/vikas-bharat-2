"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileUp,
  IndianRupee,
  Mail,
  MapPin,
  Phone,
  Timer,
  Upload,
  UserRound,
} from "lucide-react";
import {
  careerRoles,
  careersPage,
  getCareerRole,
  resolveCareerSlug,
  type CareerRoleSlug,
} from "@/lib/careers";
import { gmailComposeHref, site } from "@/lib/content";

const fieldClass =
  "h-12 w-full rounded-[12px] border border-[#d8d2c4] bg-white py-3 pl-11 pr-3 text-base text-ink outline-none! transition placeholder:text-[#9aa3af] focus:border-indigo focus-visible:outline-none! sm:h-11 sm:text-sm";

const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

const ACCEPTED_RESUME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9]{10}$/;

function isResumeFile(file: File) {
  const name = file.name.toLowerCase();
  const byName =
    name.endsWith(".pdf") || name.endsWith(".doc") || name.endsWith(".docx");
  return byName || ACCEPTED_RESUME.includes(file.type);
}

export default function CareerApplicationForm({
  initialRole,
  compact = false,
  onClose,
}: {
  initialRole?: string;
  lockedRole?: boolean;
  compact?: boolean;
  onClose?: () => void;
}) {
  const resolved = initialRole ? resolveCareerSlug(initialRole) : "";
  const defaultRole =
    careerRoles.some((item) => item.slug === resolved) && resolved
      ? (resolved as CareerRoleSlug)
      : "";
  const job = defaultRole ? getCareerRole(defaultRole) : null;
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const role = defaultRole;

  const roleLabel = useMemo(
    () => job?.title ?? careerRoles.find((item) => item.slug === role)?.title ?? role,
    [job, role],
  );

  function resetFields(form?: HTMLFormElement) {
    form?.reset();
    setStep(1);
    setResumeFile(null);
    setResumeName("");
    setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    if (step === 1) {
      const name = String(data.get("name") ?? "").trim();
      const phone = String(data.get("phone") ?? "").trim();
      const email = String(data.get("email") ?? "").trim();
      const location = String(data.get("location") ?? "").trim();

      if (!name || !phone || !email || !location || !role) {
        setError("Please fill name, phone, email and location.");
        return;
      }
      if (!PHONE_RE.test(phone)) {
        setError("Enter a 10-digit mobile number.");
        return;
      }
      if (!EMAIL_RE.test(email)) {
        setError("Enter a valid email address.");
        return;
      }
      setStep(2);
      return;
    }

    const resume = resumeFile ?? (data.get("resume") as File | null);
    const experience = String(data.get("experience") ?? "").trim();

    if (!role) {
      setError("This opening is no longer available.");
      return;
    }
    if (!experience) {
      setError("Please add your years of experience.");
      return;
    }
    if (!resume || !(resume instanceof File) || resume.size === 0) {
      setError("Please upload your resume (PDF, DOC or DOCX).");
      return;
    }
    if (!isResumeFile(resume)) {
      setError("Resume must be a PDF, DOC or DOCX file.");
      return;
    }
    if (resume.size > MAX_RESUME_BYTES) {
      setError("Resume must be 5 MB or smaller.");
      return;
    }

    setSubmitting(true);
    data.set("role", role);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error || "Could not send the application.");
      }
    } catch (err) {
      setSubmitting(false);
      setError(
        err instanceof Error
          ? err.message
          : "Could not send the application. Please try again.",
      );
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const currentCtc = String(data.get("currentCtc") ?? "").trim();
    const expectedCtc = String(data.get("expectedCtc") ?? "").trim();
    const notice = String(data.get("notice") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Role: ${roleLabel}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Current location: ${location}`,
      `Years of experience: ${experience}`,
      `Current CTC: ${currentCtc || "—"}`,
      `Expected CTC: ${expectedCtc || "—"}`,
      `Notice period: ${notice || "—"}`,
      `Resume file: ${resume.name}`,
      message ? `Note:\n${message}` : "",
      "",
      "Please attach the resume file before sending this email.",
    ]
      .filter(Boolean)
      .join("\n");

    const href = `${gmailComposeHref(careersPage.applyEmail)}&su=${encodeURIComponent(
      `Career application — ${roleLabel} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.open(href, "_blank", "noopener,noreferrer");

    setSubmitting(false);
    setSubmitted(true);
    resetFields(form);
  }

  if (submitted) {
    return (
      <div className="rounded-[16px] border border-success/25 bg-success-bg p-5 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success" />
        <h3 className="mt-3 font-display text-xl font-semibold text-ink">
          Application received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate">
          A Gmail window should have opened to {careersPage.applyEmail}. Attach
          the same resume there and send. If it did not open, WhatsApp{" "}
          {site.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            onClose?.();
          }}
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-[14px] bg-ink px-5 text-sm font-bold text-white"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {!compact ? (
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-marigold-dark">
            Noida desk
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink">
            Apply for {roleLabel || "this role"}
          </h2>
        </div>
      ) : null}

      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-slate sm:text-sm">
          {step === 1 ? "Step 1 of 2 — contact details" : "Step 2 of 2 — experience & resume"}
        </p>
        <p className="text-[11px] font-bold tabular-nums text-ink">{step}/2</p>
      </div>
      <div
        className="mb-4 h-1 overflow-hidden rounded-full bg-[#ebe4d6]"
        aria-hidden="true"
      >
        <span
          className="block h-full rounded-full bg-ink transition-all"
          style={{ width: step === 1 ? "50%" : "100%" }}
        />
      </div>
      <p className="sr-only">
        Application step {step} of 2 for {roleLabel}
      </p>

      <input type="hidden" name="role" value={role} />

      <div className={step === 1 ? "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3" : "hidden"}>
        <label className="block">
          <span className={labelClass}>
            Full name <span className="text-error">*</span>
          </span>
          <span className="relative block">
            <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="name"
              required={step === 1}
              placeholder="Your name"
              autoComplete="name"
            />
          </span>
        </label>

        <label className="block">
          <span className={labelClass}>
            Phone <span className="text-error">*</span>
          </span>
          <span className="relative block">
            <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="phone"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              required={step === 1}
              placeholder="10-digit mobile"
              autoComplete="tel"
              pattern="[0-9]{10}"
            />
          </span>
        </label>

        <label className="block">
          <span className={labelClass}>
            Email <span className="text-error">*</span>
          </span>
          <span className="relative block">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="email"
              type="email"
              required={step === 1}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </span>
        </label>

        <label className="block">
          <span className={labelClass}>
            Current location <span className="text-error">*</span>
          </span>
          <span className="relative block">
            <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="location"
              required={step === 1}
              placeholder="Noida, Ghaziabad, Delhi…"
              autoComplete="address-level2"
            />
          </span>
        </label>
      </div>

      <div className={step === 2 ? "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3" : "hidden"}>
        <label className="block">
          <span className={labelClass}>
            Years of experience <span className="text-error">*</span>
          </span>
          <span className="relative block">
            <Timer className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="experience"
              required={step === 2}
              placeholder="e.g. 1.5 years"
            />
          </span>
        </label>

        <label className="block">
          <span className={labelClass}>Notice period</span>
          <span className="relative block">
            <Timer className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="notice"
              placeholder="Immediate / 15 days"
            />
          </span>
        </label>

        <label className="block">
          <span className={labelClass}>Current CTC</span>
          <span className="relative block">
            <IndianRupee className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="currentCtc"
              placeholder="e.g. 3.2 LPA"
            />
          </span>
        </label>

        <label className="block">
          <span className={labelClass}>Expected CTC</span>
          <span className="relative block">
            <IndianRupee className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="expectedCtc"
              placeholder="e.g. 4 LPA"
            />
          </span>
        </label>

        <label className="block sm:col-span-2">
          <span className={labelClass}>
            Resume <span className="text-error">*</span>
          </span>
          <span className="relative flex min-h-12 items-center rounded-[12px] border border-dashed border-[#d8d2c4] bg-[#fbf8f1] px-3 py-2.5 transition focus-within:border-indigo">
            <FileUp className="mr-2 h-4 w-4 shrink-0 text-indigo" />
            <span className="min-w-0 flex-1 truncate text-sm text-slate">
              {resumeName || "PDF, DOC or DOCX — max 5 MB"}
            </span>
            <span className="ml-2 inline-flex shrink-0 items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-xs font-bold text-white">
              <Upload className="h-3.5 w-3.5" />
              Choose
            </span>
            <input
              className="absolute inset-0 cursor-pointer opacity-0"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required={step === 2}
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;
                setResumeFile(file);
                setResumeName(file?.name ?? "");
                setError("");
              }}
            />
          </span>
        </label>

        <label className="block sm:col-span-2">
          <span className={labelClass}>Anything we should know?</span>
          <input
            className={`${fieldClass} pl-3`}
            name="message"
            placeholder="Join date, languages, note…"
          />
        </label>
      </div>

      {error ? <p className="mt-3 text-sm font-semibold text-error">{error}</p> : null}

      {step === 1 ? (
        <button
          type="submit"
          className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-ink px-5 text-sm font-bold text-white transition hover:bg-[#1a3558]"
        >
          Continue
          <ArrowRight className="h-4 w-4" />
        </button>
      ) : (
        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => {
              setError("");
              setStep(1);
            }}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border-2 border-ink/80 bg-white px-4 text-sm font-bold text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-ink px-4 text-sm font-bold text-white transition hover:bg-[#1a3558] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending…" : "Submit"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </form>
  );
}

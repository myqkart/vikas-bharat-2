"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Phone,
  Search,
  UserRound,
  type LucideIcon,
} from "lucide-react";

const fieldClass =
  "w-full rounded-[12px] border border-[#d8d2c4] bg-white py-3.5 pl-11 pr-4 text-[15px] text-ink outline-none transition placeholder:text-[#9aa3af] focus:border-indigo focus:ring-[3px] focus:ring-indigo/10";

const labelClass = "mb-1.5 block text-[14px] font-semibold text-ink";

type SelectOption = {
  label: string;
  value: string;
};

function SearchableSelect({
  name,
  placeholder,
  searchPlaceholder,
  options,
  value,
  onChange,
  icon: Icon,
  invalid = false,
}: {
  name: string;
  placeholder: string;
  searchPlaceholder: string;
  options: readonly SelectOption[];
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  invalid?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((option) =>
    option.label.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open]);

  function openMenu() {
    setQuery("");
    setActiveIndex(0);
    setOpen(true);
  }

  function selectOption(option: SelectOption) {
    onChange(option.value);
    setOpen(false);
  }

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, filtered.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter" && filtered[activeIndex]) {
      event.preventDefault();
      selectOption(filtered[activeIndex]);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          if (open) setOpen(false);
          else openMenu();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openMenu();
          }
        }}
        className={`${fieldClass} flex items-center text-left ${
          invalid
            ? "border-error focus:border-error focus:ring-error/10"
            : ""
        }`}
      >
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
        <span className={`min-w-0 flex-1 truncate ${selected ? "text-ink" : "text-[#9aa3af]"}`}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-[14px] border border-[#ddd6c8] bg-white p-2 shadow-[0_18px_45px_rgba(18,41,77,0.18)]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <input
              ref={searchRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActiveIndex(0);
              }}
              onKeyDown={handleSearchKeyDown}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full rounded-[10px] border border-[#ddd6c8] bg-[#faf8f3] py-2.5 pl-9 pr-3 text-sm text-ink outline-none placeholder:text-slate/70 focus:border-indigo focus:ring-2 focus:ring-indigo/10"
            />
          </div>
          <div className="mt-2 max-h-56 overflow-y-auto overscroll-contain" role="listbox">
            {filtered.length ? (
              filtered.map((option, index) => (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={value === option.value}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectOption(option)}
                  className={`flex w-full items-center gap-3 rounded-[9px] px-3 py-2.5 text-left text-sm transition ${
                    activeIndex === index
                      ? "bg-paper-deep text-ink"
                      : "text-slate hover:bg-paper"
                  }`}
                >
                  <span className="min-w-0 flex-1 truncate">{option.label}</span>
                  {value === option.value ? (
                    <Check className="h-4 w-4 shrink-0 text-success" />
                  ) : null}
                </button>
              ))
            ) : (
              <p className="px-3 py-6 text-center text-sm text-slate">
                No matching option
              </p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
] as const;

const SERVICE_OPTIONS: readonly SelectOption[] = [
  { value: "grants", label: "Government grants and schemes" },
  { value: "loans", label: "Business loans and funding" },
  { value: "registration", label: "Business registration" },
  { value: "certs", label: "Certifications and compliance" },
  { value: "growth", label: "Growth strategy" },
  { value: "other", label: "Other" },
];

const STATE_OPTIONS: readonly SelectOption[] = INDIAN_STATES.map((state) => ({
  value: state,
  label: state,
}));

export default function ContactInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [service, setService] = useState("");
  const [state, setState] = useState("");
  const [showSelectErrors, setShowSelectErrors] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!service || !state) {
      setShowSelectErrors(true);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[24px] border border-success/25 bg-success-bg p-8 text-center shadow-[0_8px_30px_rgba(18,41,77,0.06)] sm:p-10">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
          We&apos;ve got your details.
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate">
          A Vikas Bharat advisor will review your requirement and get in touch
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-[14px] bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[24px] border border-[#ebe4d6] bg-white p-6 shadow-[0_10px_40px_rgba(18,41,77,0.07)] sm:p-8 lg:p-9"
    >
      <div className="mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-marigold-dark">
          Tell us about your need
        </p>
        <h2 className="mt-2 font-display text-[32px] font-semibold leading-tight text-ink">
          Start your application
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-slate">
          Share a few details and we&apos;ll guide you to the right next step.
        </p>
      </div>

      <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>
            Full name <span className="text-error">*</span>
          </span>
          <span className="relative block">
            <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="name"
              required
              placeholder="Your name"
              autoComplete="name"
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
              required
              placeholder="you@example.com"
              autoComplete="email"
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
              required
              placeholder="10-digit mobile number"
              autoComplete="tel"
            />
          </span>
        </label>

        <label className="block">
          <span className={labelClass}>Company name</span>
          <span className="relative block">
            <Building2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9aa3af]" />
            <input
              className={fieldClass}
              name="company"
              placeholder="Business or startup name"
              autoComplete="organization"
            />
          </span>
        </label>

        <div className="block">
          <span className={labelClass}>
            Service required <span className="text-error">*</span>
          </span>
          <SearchableSelect
            name="service"
            placeholder="Select a service"
            searchPlaceholder="Search services..."
            options={SERVICE_OPTIONS}
            value={service}
            onChange={(nextValue) => {
              setService(nextValue);
              setShowSelectErrors(false);
            }}
            icon={BriefcaseBusiness}
            invalid={showSelectErrors && !service}
          />
          {showSelectErrors && !service ? (
            <p className="mt-1.5 text-xs text-error">Please select a service.</p>
          ) : null}
        </div>

        <div className="block">
          <span className={labelClass}>
            State <span className="text-error">*</span>
          </span>
          <SearchableSelect
            name="state"
            placeholder="Select state"
            searchPlaceholder="Search states..."
            options={STATE_OPTIONS}
            value={state}
            onChange={(nextValue) => {
              setState(nextValue);
              setShowSelectErrors(false);
            }}
            icon={MapPin}
            invalid={showSelectErrors && !state}
          />
          {showSelectErrors && !state ? (
            <p className="mt-1.5 text-xs text-error">Please select a state.</p>
          ) : null}
        </div>
      </div>

      <label className="mt-5 block">
        <span className={labelClass}>How can we help?</span>
        <span className="relative block">
          <FileText className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-[#9aa3af]" />
          <textarea
            className={`${fieldClass} min-h-[110px] resize-y pl-11`}
            name="message"
            rows={4}
            placeholder="Briefly describe your business and the support you need."
          />
        </span>
      </label>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-ink px-6 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#1a3558]"
      >
        Send enquiry
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-center text-[12px] leading-relaxed text-slate">
        Your information stays private. We never sell your details.
      </p>
    </form>
  );
}

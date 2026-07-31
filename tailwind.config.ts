import type { Config } from "tailwindcss";

/**
 * Design tokens for the Bahi Khata system.
 * CSS variables in app/globals.css are the source of truth for runtime;
 * theme values here mirror them so Tailwind utilities resolve correctly.
 */
export const colors = {
  ink: "#12294D",
  indigo: "#1E3E72",
  marigold: "#F5A623",
  "marigold-dark": "#D98C0F",
  paper: "#FBF6EC",
  "paper-deep": "#F3EBD9",
  success: "#1D8348",
  "success-bg": "#E7F4EC",
  error: "#C0392B",
  border: "#E4D9BE",
  charcoal: "#22262E",
  slate: "#5B6472",
} as const;

export const radii = {
  sm: "6px",
  md: "14px",
  lg: "24px",
} as const;

export const shadows = {
  card: "0 1px 2px rgba(18,41,77,0.04), 0 8px 24px -8px rgba(18,41,77,0.12)",
  raised:
    "0 4px 10px rgba(18,41,77,0.06), 0 16px 40px -12px rgba(18,41,77,0.18)",
} as const;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        indigo: "var(--color-indigo)",
        marigold: {
          DEFAULT: "var(--color-marigold)",
          dark: "var(--color-marigold-dark)",
        },
        paper: {
          DEFAULT: "var(--color-paper)",
          deep: "var(--color-paper-deep)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          bg: "var(--color-success-bg)",
        },
        error: "var(--color-error)",
        border: "var(--color-border)",
        charcoal: "var(--color-charcoal)",
        slate: "var(--color-slate)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: [
          "var(--font-plus-jakarta)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: radii.sm,
        md: radii.md,
        lg: radii.lg,
      },
      boxShadow: {
        card: "var(--shadow-card)",
        raised: "var(--shadow-raised)",
      },
    },
  },
};

export default config;

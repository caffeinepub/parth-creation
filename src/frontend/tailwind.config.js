/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        teal: {
          DEFAULT: "#0F5A55",
          dark: "#0B4A46",
        },
        gold: {
          DEFAULT: "#C6A35A",
          light: "#D8C8A6",
          muted: "#B7924B",
        },
        cream: "#F5F0E6",
        charcoal: "#1F1B16",
        "gray-brown": "#5E564D",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(15,90,85,0.07)",
        gold: "0 2px 12px 0 rgba(198,163,90,0.15)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // neutrals
        "ink-900": "#0f172a",   // near-black
        "ink-600": "#475569",   // muted copy
        // cheerful block colors
        lemon:  "#FFE76A",
        coral:  "#FF7A7A",
        teal:   "#5AD7C2",
        sky:    "#8CCBFF",
        lilac:  "#C6A5FF",
        peach:  "#FFB08A",
        mint:   "#B6F2A6",
        // CTA
        "brand-accent": "#111827", // dark ink for buttons on light bg
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(15, 23, 42, 0.08)",
        soft: "0 1px 0 rgba(15, 23, 42, 0.06)",
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Inter', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1.25rem", lg: "2rem" },
      },
    },
  },
  plugins: [],
};

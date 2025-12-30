import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        "tsg-primary": "#1e3a8a",
        "tsg-accent": "#93b0ff",
        "tsg-surface": "#ffffff",
        "tsg-surface-muted": "#e9f2ff",
        "tsg-border": "#d6e2ff",
        "tsg-dark": "#0f172a",
      },
    },
  },
  plugins: [typography],
};

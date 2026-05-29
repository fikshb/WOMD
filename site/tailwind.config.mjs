/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        // WOMD brand — see brand/design.md §3
        "brand-yellow": "#FDD82D",
        ink: "#2B2B2B", // Black Pearl
      },
      fontFamily: {
        headline: ['"Montserrat"', "sans-serif"],
        body: ['"Roboto"', "sans-serif"],
        display: ['"Moderniz"', "sans-serif"], // decorative — display use only
      },
      // Fluid type scale (clamp) — editorial, exposed. See docs/DECISIONS.md D-006
      fontSize: {
        display: ["clamp(2.75rem, 1.1rem + 7.2vw, 7rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        h2: ["clamp(2.6rem, 1.4rem + 5vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.4rem, 1.1rem + 1.3vw, 2.1rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.05rem, 0.98rem + 0.5vw, 1.4rem)", { lineHeight: "1.55" }],
        eyebrow: ["clamp(0.95rem, 0.8rem + 0.5vw, 1.2rem)", { letterSpacing: "0.28em" }],
        numeral: ["clamp(3.5rem, 2rem + 6vw, 8rem)", { lineHeight: "0.85", letterSpacing: "-0.03em" }],
      },
    },
  },
  plugins: [],
};

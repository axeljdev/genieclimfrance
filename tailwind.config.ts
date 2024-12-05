/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#219F0B",
        secondary: "#1E1E1E",
        tertiary: "#F9F9F9",
        hover: "#3EAB3D",
      },
      fontFamily: {
        emOne: ["var(--font-em-one)", "sans-serif"],
        kollektif: ["var(--font-kollektif)", "sans-serif"],
      },
      screens: {
        xl: "1400px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
} satisfies Config;

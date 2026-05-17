import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#2a2a2a",
          dark: "#1a1a1a",
          light: "#3a3a3a",
        },
        olive: {
          DEFAULT: "#4a5e1e",
          dark: "#344415",
          light: "#5d7626",
        },
        cream: {
          DEFAULT: "#f5f0e8",
          dark: "#e8e0d0",
        },
        wood: {
          walnut: "#3d1c0a",
          teak: "#8b4513",
          grey: "#9b8e7e",
          oak: "#c8955a",
          charcoal: "#2c2c2c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

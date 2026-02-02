import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f4257b",
        "background-light": "#f8f5f7",
        "background-dark": "#221017",
        "paper-light": "#fff0f5",
        "paper-dark": "#3d1d2b",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        handwriting: ["Caveat", "cursive"],
      },
      boxShadow: {
        card: "0 20px 40px -10px rgba(244, 37, 123, 0.15), 0 0 20px rgba(0,0,0,0.05)",
        glow: "0 0 15px rgba(244, 37, 123, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;

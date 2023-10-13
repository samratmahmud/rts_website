import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {"0": "#000000"},
        slate: {"900": "#0B0B2B"},
        gray: {"50": "#ffffff"},
        emerald: {"600": "#00E100"},
        pink: {"200": "#FAC3D4"},
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "2em"}],
      sm: ["14px", {}],
      md: ["16px", {lineHeight: "1.5em", letterSpacing: "0.02em"}],
      base: ["17px", {}],
      lg: ["18px", {lineHeight: "1.44em"}],
      xl: ["19px", {lineHeight: "1.26em"}],
      "2xl": ["20px", {lineHeight: "1.3em"}],
      "3xl": ["22px", {lineHeight: "2.18em"}],
      "4xl": ["24px", {lineHeight: "1.25em"}],
      "5xl": ["26px", {lineHeight: "1.23em", letterSpacing: "0.02em"}],
      "6xl": ["27px", {lineHeight: "1.48em"}],
      "7xl": ["30px", {lineHeight: "1.13em"}],
      "8xl": ["32px", {lineHeight: "1.25em", letterSpacing: "0.02em"}],
      "9xl": ["34px", {lineHeight: "1.12em"}],
      "10xl": ["36px", {lineHeight: "1.33em"}],
      "11xl": ["42px", {lineHeight: "1.33em"}],
      "12xl": ["44px", {lineHeight: "1.27em"}],
      "13xl": ["46px", {lineHeight: "1.22em"}],
      "14xl": ["48px", {}],
      "15xl": ["50px", {lineHeight: "1.08em"}],
      "16xl": ["60px", {lineHeight: "0.93em"}],
      "17xl": ["64px", {lineHeight: "1em"}],
      "18xl": ["70px", {lineHeight: "0.8em"}],
      "19xl": ["80px", {lineHeight: "0.7em"}],
      "20xl": ["140px", {}],
      "21xl": ["160px", {lineHeight: "0.4em"}],
    },
    shadows: {
      sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      md: "0px 2px 4px rgba(0, 0, 0, 0.30)",
      lg: "0px 2px 2px rgba(0, 0, 0, 0.50)",
    },
    fontFamily: {
      "regulator-nova": ["'Regulator Nova'", ...fontFamily.sans],
      "roc-grotesk": ["'Roc Grotesk'", ...fontFamily.sans],
      inter: ["'Inter'", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1020px",
      xl: "1245px",
    },
  },
  plugins: [],
};
export default config;

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
        slate: {
          "200": "#D9D9D9",
          "300": "rgba(11, 11, 43)",
          "900": "#0B0B2B",
        },
        emerald: {"600": "#00E100"},
        pink: {"200": "#FAC3D4"},
      },
    },
    fontSize: {
      xs: ["12px", {lineHeight: "2em"}],
      sm: ["14px", {}],
      md: ["16px", {lineHeight: "1.5em", letterSpacing: "-0.02em"}],
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
      "64px": ["64px", {lineHeight: "64px"}],
      "34px": ["34px", {lineHeight: "38px"}],
    },
    shadows: {
      sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      md: "0px 2px 4px rgba(0, 0, 0, 0.30)",
      lg: "0px 2px 2px rgba(0, 0, 0, 0.50)",
    },
    fontFamily: {
      "roc-grotesk": ["'Roc Grotesk'", ...fontFamily.sans],
      "regulator-nova": ["'Regulator Nova'", ...fontFamily.sans],
      abeezee: ["'ABeeZee'", ...fontFamily.sans],
      inter: ["'Inter'", ...fontFamily.sans],
    },
    backgroundImage: {
      homePage: "url('/picture/Mask group.png')",
      homePageMV: "url('/picture/Group 185.png')",
      card1: "url('/picture/Group 187.png')",
      card2: "url('/picture/Mask group (27).png')",
      card3: "url('/picture/Group 189.png')",
      card4: "url('/picture/RTS_RetainToSustain12 1.png')",
      inputbg: "url('/picture/AdobeStock_354009182_Preview.png')",
      solutions1:
        "url('/picture/stock-photo-happy-woman-zip-up-blue-sportive-jacket-before-rain-relaxin(1).png')",
      solutions1M: "url('/picture/Mask group (28).png')",
      solutions2: "url('/picture/Mask group (7).png')",
      solutions2Mob: "url('/picture/Group 224.png')",
      contactD: "url('/picture/Group 151.png')",
      contactM: "url('/picture/Mask group (38).png')",
      contactInfo: "url('/picture/AdobeStock_354009182_Preview (1).png')",
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
      xl: "1278px",
    },
  },
  plugins: [],
};
export default config;

const defaultTheme = require("tailwindcss/defaultTheme")
const typographyContent = require("./src/plugins/tailwindcss/typography-content")

module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: ["slick-dots", "slick-slide", "slick-track", "hs-form"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ...typographyContent,
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        gray: {
          DEFAULT: "#707070",
        },
        green: {
          DEFAULT: "#49a57f",
          hover: "#194130",
          light: "#f1f6f3",
          dark: "#0e231a",
        },
        coral: {
          DEFAULT: "#f87979",
          hover: "#d85e5e",
        },
        transparent: {
          DEFAULT: "rgba(255, 255, 255, 0)",
          dark: "rgba(0, 0, 0, 0)",
        },
        red: "#d85e5e",
      },
      fontFamily: {
        sans: ["arboria", ...defaultTheme.fontFamily.sans],
        display: ["arboria", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: [".75rem", "1rem"],
        sm: [".875rem", "1.25rem"],
        base: ["1rem", "1.7rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "1.95rem"],
        "3xl": ["1.775rem", "2.4rem"],
        "4xl": ["2.25rem", "2.85rem"],
        "5xl": ["3rem", "1.25"],
        "6xl": ["4rem", "1.1"],
        "7xl": ["5rem", "1.1"],
        "8xl": ["5.5rem", "1.1"],
      },
      zIndex: {
        "-1": "-1",
        999: "999",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      boxShadow: {
        none: "none",
        outline: "0 0 0 3px rgba(248, 121, 121, 0.35)",
        xl: "9px 12px 50px #19412d1a",
        "2xl": "0px 13px 16px rgba(25, 65, 45, 0.03)",
      },
      spacing: {
        4.5: "1.125rem",
        18: "4.5rem",
      },
      transitionProperty: {
        top: "top",
        left: "left",
        right: "right",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("./src/plugins/tailwindcss/typography-theme"),
    require("./src/plugins/tailwindcss/global"),
    require("./src/plugins/tailwindcss/utilities"),
    require("./src/plugins/tailwindcss/components/button"),
    require("./src/plugins/tailwindcss/components/toggler"),
    require("./src/plugins/tailwindcss/components/arrow"),
    require("./src/plugins/tailwindcss/components/form"),
    require("./src/plugins/tailwindcss/components/form-hubspot"),
    require("./src/plugins/tailwindcss/components/slick-carousel"),
  ],
}

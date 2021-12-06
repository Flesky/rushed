const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  purge: ["./public/**/*.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      width: {
        side: '12rem',
      }
    },
    screens: {
      sm: "500px",
      md: "750px",
      lg: "1000px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      primary: {
        light:"#DCFCE7",
        DEFAULT: "#22C55E",
      },
      yellow: {
        light: "#FEF9C3",
        DEFAULT: "#FACC15",
      },
      red: {
        light: "#FCA5A5",
        DEFAULT: "#DC2626",
      },
      white: "#FFFFFF",
      light: "#E5E7EB",
      muted: "#52525B",
      gray: "#3F3F46",
      dark: "#232323",
      black: "#101101",
    },
  },
  plugins: [],
};

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
        light: "#DCFCE7",
        DEFAULT: "#22C55E",
        dark: "#15803D",
      },
      yellow: {
        light: "#FEF9C3",
        DEFAULT: "#FACC15",
        dark: "#CA8A04",
      },
      red: {
        light: "#FECACA",
        DEFAULT: "#DC2626",
        dark: "#991B1B",
      },
      white: "#FFFFFF",
      light: "#E5E7EB",
      muted: "#9CA3AF",
      gray: "#3F3F46",
      dark: "#232323",
      black: "#101101",
    },
  },
  plugins: [],
};

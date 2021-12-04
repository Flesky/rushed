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
      primary: "#22C55E",
      warning: "#FACC15",
      danger: "#DC2626",
      white: "#FFFFFF",
      light: "#E5E7EB",
      muted: "#52525B",
      dark: "#232323",
      black: "#101101",
    },
  },
  plugins: [],
};

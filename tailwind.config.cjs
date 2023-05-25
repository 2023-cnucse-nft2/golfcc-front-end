/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#2C3834",
        secondary: "#4A5F58",
        inputgray: "#B8B8B8",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
  },
  plugins: [],
};

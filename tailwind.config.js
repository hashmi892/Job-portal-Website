/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: "1200px",
        Xs: "340px",
        ms:"876px",
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        mediumBlack:"#1c2331",
        halfWhite: "#eaeaea",
        mainColor: "#3c009d",
        "slate-gray": "#797979",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

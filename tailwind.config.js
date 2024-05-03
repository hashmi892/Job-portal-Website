/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ml: "1200px",
        Xs: "340px",
        ms: "876px",
        xms: "510px",
        xssm: "420px",
        xsm: "360px",
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        BtnBg1: "#612db5",
        BtnBg2: "#fff5e1",
        highLightText: "#1a2e35",
        mediumBlack: "#1c2331",
        halfWhite: "#eaeaea",
        mainColor: "#3c009d",
        // mainColor: "#60cfa5",
        "slate-gray": "#797979",
        lightgray: "#BCBCBC",
        mediumLight: "#D9D9D9",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        lightBlue: "rgb(204, 204, 255)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

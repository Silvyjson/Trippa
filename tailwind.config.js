/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8900B9",
        radioBg: "#D9D9D9",
        inputBorder: "#E0E0E0",
        textColor: "#404040",
        textColor1: "#C6C6C6",
        disable: "#F8F8F8"
      },
      fontFamily: {
        syne: "Syne"
      }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  variants: {},
};

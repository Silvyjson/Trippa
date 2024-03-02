/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#8900B9",
      },
      fontFamily: {
        syne: "Syne"
      }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  variants: {},
};

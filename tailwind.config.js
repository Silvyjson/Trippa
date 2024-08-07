/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8900B9",
        secondary: "#FFFFFF",
        highlight_purple: "#8900B91A",
        page_color: "#FBFBFB",
        radioBg: "#D9D9D9",
        inputBorder: "#E0E0E0",
        textColor: "#404040",
        gray_color: "#C6C6C6",
        disable: "#c2c2c2",
        search_input_color: "#F9FAFB",
      },
      fontFamily: {
        syne: "Syne",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
  variants: {},
};

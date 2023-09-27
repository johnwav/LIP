/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lGrey: "#D9D9D9",
        lBlue: "#1D4ED8",
        lVeryLigtBlue: "#F9FAFF",
        lSkie: "#F3FAFC",
        lSea: "#037092",
        lLightGrey: "#F3F3F3",
        lLighterGrey: "#F8F8F8",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: ".2fr, .8fr",
      },
      colors: {
        primary: "#0a0a0a ",
        secondary: "#777777",
        excel: "#206400",
        resalt: "#E0BC81",
        inputs: "#3C3B3B"
      },
    },
  },
  plugins: [],
};

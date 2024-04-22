/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "": "",
        "blue-151": "#374151",
        "dark-b5b": "#5C5B5B",
        "coffee-a15": "#331A15",
        "coffee-a1a": "#1B1A1A",
        "orange-577": "#E3B577",
      },
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

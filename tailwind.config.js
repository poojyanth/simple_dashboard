const { stat } = require('fs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_1 : "#FAFAFA",
        bg_2 : "#E0E0E0",
        statCard1: "#FFEFE7",
        statCard2: "#E8F0FB",
        statCard3: "#FDEBF9",
        statCardFont1: "#FF5151",
        statCardFont2: "#3786F1",
        statCardFont3: "#EE61CF",
      }
    },
  },
  plugins: [],
};

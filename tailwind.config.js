/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          turqouise: "#008080",
          lightGray: "#C3C3C3",
          darkGray: "#818181",
          white: "#FDFFFF",
          blue: "#0827F5",
          black: "#000000",
          pink: "#FF0081",
        },
      },
      fontFamily: {
        W95: ["VT323"],
      },
      fontSize: {
        "main-lg": "22px",
        "main-md": "18px",
        "main-sm": "14px",
      },
      spacing: {
        sm: "5px",
        md: "10px",
      },
    },
  },
  plugins: [],
};

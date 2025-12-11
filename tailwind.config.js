/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003049",
          dark: "#001a2b",
        },
        accent: {
          DEFAULT: "#C1121F",
          dark: "#780000",
        },
        secondary: {
          DEFAULT: "#669BBC",
        },
      },
    },
  },
  plugins: [],
};

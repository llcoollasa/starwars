/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const defaultThem = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'sans-serif'],
    }
  },
  plugins: [],
}
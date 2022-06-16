/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
}

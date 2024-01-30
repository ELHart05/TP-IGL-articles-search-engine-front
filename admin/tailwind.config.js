/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Pred': '#800020',
        'Pgreen': '#004D40'
      },
      fontFamily: {
        "second": ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
}

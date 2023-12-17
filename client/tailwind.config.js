/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#EC8607",
        "second": "#252A3A",
        "green": "#64928a",
        "dark-gray": "#727171"
      },
      fontFamily: {
        "main": ["Inter", "sans-serif"],
        "second": ["Ubuntu", "sans-serif"],
      },
      screens: {
        "2sm": "540px"
      }
    },
  },
  plugins: [],
}


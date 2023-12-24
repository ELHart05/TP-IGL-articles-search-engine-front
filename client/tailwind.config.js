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
        "dark-gray": "#727171",
        "background":"#F9F9F9",
      },
      fontFamily: {
        "main": ["Inter", "sans-serif"],
        "second": ["Ubuntu", "sans-serif"],
      },
      screens: {
        "2sm": "540px"
      },
      width: {
        '95': '95%',
        '50': '50%',
        '150': '150px',
        '30': '30px',

        '85': '85%',
        '15': '15px', 
      },
      height: {
        '15': '15px', 
        '50': '50px', 
        '30': '30px', 

      },
      fontSize: {
        '30': '30px',
        '20': '20px',

      },
      borderRadius:{
        '15':'15px',
      },
    },
  },
  plugins: [],
}


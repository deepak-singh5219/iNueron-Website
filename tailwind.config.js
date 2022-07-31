/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'code': ['Nanum Gothic Coding'],
    },
    screens:{
      'mobile':'300px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1380px',
      // => @media (min-width: 1280px) { ... }
    
    },
   
    extend: {},
  },
  plugins: [],
}

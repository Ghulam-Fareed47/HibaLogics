/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#4799F2',
        secondary: '#2687F0',
        secondaryblk:'#2E2E2E',
      },
      fontFamily: {
      // poppins:'poppins',
      sanssrf: [ 'sans-serif'],
      },
    
    },
  },
  plugins: [],
}

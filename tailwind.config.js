/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#4799F2',
        secondary: '#2687F0',
        navbg: '#f3f3f3',
        secondaryred:'#DE1924',
      },
      fontFamily: {
      poppins:'poppins',
      },
    
    },
  },
  plugins: [],
}

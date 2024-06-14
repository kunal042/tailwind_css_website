/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors : {
        'primary' : "#ee0181"
      },
      fontfamily :{
        'display' : ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}


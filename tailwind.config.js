/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainColor : "#F64F4F",
        textColor:'#4D5769'
      }
    },
  },
  plugins: [],
}
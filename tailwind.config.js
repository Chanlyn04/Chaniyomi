/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      pblack:["Poppins-Black", "sans-serif"],
      pregular: ["Poppins-Regular", "sans-serif"],
      
    },
  },
  plugins: ["nativewind/babel"],
}



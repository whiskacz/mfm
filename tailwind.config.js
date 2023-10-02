/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor100: '#CAF0F8',
        myColor200: '#90E0EF',
        myColor300: '#00B4D8',
        myColor400: '#0077B6',
        myColor500: '#03045E',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


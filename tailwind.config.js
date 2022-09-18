/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      bluePrimary: '#316BFF',
      redPrimary: '#FF543D',
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Unigeo64Bold: ['Unigeo64Bold', 'sans-serif'],
        ModeratMedium: ['ModeratMedium', 'sans-serif'],
        ModeratBold: ['ModeratBold', 'sans-serif'],
        ModeratRegular: ['ModeratRegular', 'sans-serif'],
      },
      colors: {
        black: '#050F0F',
        white: '#FFFFFF',
      },
      screens: {
        xs: '350px',
        xss: '400px',
      },
    },
  },
  plugins: [],
}

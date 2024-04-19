/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark-yellow': '#323232',
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

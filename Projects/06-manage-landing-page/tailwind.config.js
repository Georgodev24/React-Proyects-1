/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(12, 88%, 59%)',
        'primary-dark-blue': 'hsl(228, 39%, 23%)',
        'neutral-dark-blue': 'hsl(227, 12%, 61%)',
        'neutral-very-blue': 'hsl(233, 12%, 13%)',
        'neutral-pale-red': 'hsl(13, 100%, 96%)',
        'neutral-light-gray': 'hsl(0, 0%, 98%)',
        'hover-input': 'hsl(12, 100%, 81%)',
      },
      fontFamily: {
        main: ['"Be Vietnam Pro"', 'sans-serif'],
      },
      backgroundImage: {
        'open-menu': 'url("./images/icon-hamburger.svg")',
        'close-menu': 'url("./images/icon-close.svg")',
      },
      flex: {
        '1-0': '1 0 auto',
      },
    },
  },
  plugins: [],
}

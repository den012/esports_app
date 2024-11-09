/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '24' : '6rem',
        '36' : '9rem',
        '48' : '12rem',
        '64' : '16rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128' : '32rem',
      }
    },
  },
  plugins: [],
}
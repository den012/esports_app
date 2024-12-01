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
        '28' : '7rem',
        '36' : '9rem',
        '48' : '12rem',
        '52' : '13rem',
        '64' : '16rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128' : '32rem',
        '144' : '36rem',
        '192' : '48rem',
        '256' : '64rem',
        '320' : '80rem',
        '384' : '96rem',
        '448' : '112rem',
        '512' : '128rem',
      }
    },
  },
  plugins: [],
}
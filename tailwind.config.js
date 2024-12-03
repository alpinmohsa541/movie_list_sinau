/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customBlue: 'rgb(34, 150, 243)',
      customRed: 'rgb(255, 99, 71)',
      customGreen: 'rgb(0, 255, 0)',
      customYellow: 'rgb(255, 255, 0)',
      customPurple: 'rgb(128, 0, 128)',
      customOrange: 'rgb(255, 165, 0)',
      customPink: 'rgb(255, 192, 203)',
      customTeal: 'rgb(0, 128, 128)',
      customBrown: 'rgb(165, 42, 42)',
      customGray: 'rgb(128, 128, 128)',
      customWhite: 'rgb(255, 255, 255)',
      customBlack: 'rgb(0, 0, 0)',
      customSand: '228, 187, 151',
      seasheel: '254, 245, 239',
      lavender: '214, 227, 248',
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        tallenttree: {
          primary: '#76B852',
          secondary: '#114944',
          accent: '#C5E6F7',
          neutral: '#1B1B1B',
          'base-100': '#F2F1F0',
          'base-200': '#EAEAEA',
          'base-300': '#CFD6CF',
          'base-content': '#000000',
        },
      },
      'night',
      'cupcake',
      'bumblebee',
      'dracula',
      'synthwave',
    ],
    fontFamily: {
      Raleway: ['raleway', 'sans-serif'],
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#344562',
        light: '#878d9d',
        bgdark: '#e6e9f2',
        bglight: '#eff0f5',
        'details-main': '#3a4562',
        'details-light': 'rgba(56, 65, 93, 0.82)'
      },
      fontFamily: {
        proxima: ['Proxima'],
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}

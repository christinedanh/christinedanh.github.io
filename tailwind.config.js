const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        black: '#3E3C3D',
        "white-almost": '#FEFFFF',
        "light-primary": '#ECEDEF',
        "dark-primary": '#2E2E31',
        "dark-green": '#6E7C7B',
        "medium-green": "#91ACA9",
        "background-green": '#F3F7F7',
        "background-red": '#FAF3F4',
        "dark-red": '#A14F52',
      },
      fontFamily: {
        sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
        fraunces: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        'portfolio': '0px 2.07511px 20px rgba(118, 118, 118, 0.15)',
      }
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
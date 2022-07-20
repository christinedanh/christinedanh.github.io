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
      },
      fontFamily: {
        sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
        fraunces: ['Fraunces', ...defaultTheme.fontFamily.serif],
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
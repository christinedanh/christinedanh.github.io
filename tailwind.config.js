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
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: "0",
              color: "#1F2933",
              backgroundColor: "#F3F3F3"
            },
            code: {
              padding: "0.2em 0.4em",
              backgroundColor: "#F3F3F3",
              color: "#DD1144",
              fontWeight: "400",
              "border-radius": "0.25rem"
            },
            "code::before": false,
            "code::after": false,
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
      },
      fontFamily: {
        sans: ['Red Hat Text', ...defaultTheme.fontFamily.sans],
        serif: ['Lora', ...defaultTheme.fontFamily.serif],
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
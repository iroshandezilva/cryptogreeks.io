module.exports = {
  purge: [
      './public/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        'dark-bg': '#18181B',

        primary: '#E67E22',

      },
      fontFamily: {
        greek: 'Greek',
        augustus: 'Augustus',
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

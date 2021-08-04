const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        ...defaultTheme.spacing,
        'full': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

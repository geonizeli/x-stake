const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.ts",
    "./app/javascript/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        ...defaultTheme.spacing,
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

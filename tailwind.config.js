const plugin = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function (addVariant) {
      addVariant.addVariant("nextSibling", "& + ");
    },
  ],
};

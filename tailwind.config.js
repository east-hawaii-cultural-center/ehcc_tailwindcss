module.exports = {
  content: [
    "**/*.twig",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      dash: '"* "',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
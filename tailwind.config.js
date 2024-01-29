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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem'
      }
    },
    extend: {},
  },
  safelist: [
    'bx-container',
    'bx-container-margin',
    'bx-container-padding',
    'border',
    'rounded',
    'flex',
    'items-center',
    'object-cover',
    'my-8',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-container-bleed'),
  ],
};
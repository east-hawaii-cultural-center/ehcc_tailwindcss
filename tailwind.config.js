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
    'text-lg',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'font-bold',
  ],
  variants: {
    extend: {},
  },
  plugins: [
    // See https://flowbite.com/
    require('flowbite/plugin'),
    // See https://bustoutsolutions.github.io/tailwindcss-container-bleed/
    require('tailwindcss-container-bleed'),
  ],
};
let mix = require('laravel-mix');

mix.postCss('src/tailwind.pcss', 'dist', [
  require('tailwindcss'),
])

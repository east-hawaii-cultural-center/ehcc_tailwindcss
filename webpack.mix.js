let glob = require('glob-all')
let mix = require('laravel-mix');

mix.postCss('src/tailwind.css', 'dist', [
  require('tailwindcss'),
])

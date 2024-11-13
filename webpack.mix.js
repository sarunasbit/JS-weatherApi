let mix = require('laravel-mix');

mix.js('src/main.js', 'public/js')
.sass('src/scss/style.scss', 'css')
.setPublicPath('public');
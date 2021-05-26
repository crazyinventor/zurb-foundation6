let mix = require('laravel-mix');

mix.setPublicPath('dist/')
    .js('js/app.js', 'dist/')
    .sass('sass/app.scss', 'dist/');
axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
browserify   = require 'roots-browserify'
css_pipeline = require 'css-pipeline'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    browserify(files: 'assets/js/app.js', out: 'js/build.js'),
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true
  jade:
    pretty: true

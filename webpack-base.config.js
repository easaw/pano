'use strict'
var webpack = require('webpack')
var pkg = require('./package.json')

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: [ 'babel' ], exclude: [ /node_modules/ ] },
      { test: /\.json$/, loaders: [ 'json' ], exclude: [] }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('pano.js v' + pkg.version + ' | (c) Sinan Bolel', {
      raw: false, entryOnly: true
    })
  ],
  output: {
    library: 'Pano',
    libraryTarget: 'umd',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js']
  }
}

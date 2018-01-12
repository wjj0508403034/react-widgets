const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader", options: {
          sourceMap: true
        }
      }, {
        loader: "less-loader", options: {
          sourceMap: true
        }
      }]
    ]
  }
};
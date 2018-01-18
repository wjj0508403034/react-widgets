const path = require('path');
var webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const MinifyPlugin = require("babel-minify-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const TEM_PATH = path.resolve(ROOT_PATH, 'demo');

module.exports = {
  entry: {
    "huoyun.controls": "./src/index.js"
  },
  output: {
    filename: '[name].js?v=[hash]',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        query: {
          presets: ['es2015', 'react', 'stage-0',"minify"]
        },
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new MinifyPlugin({

    }),
    new HtmlwebpackPlugin({
      title: 'HuoYun Widgets Demo Page',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['huoyun.controls'],
      //要把script插入到标签里
      inject: 'body',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      }
    })
  ]
};
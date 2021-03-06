'use strict';

var path = require('path'),
  webpack = require('webpack'),
  htmlPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './app/js/main.jsx',
    background: './app/js/background.js'
  },
  output: {
    path: path.join(__dirname, 'release'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less'],
    modulesDirectories: ['node_modules'],
    alias: {
      linkify: path.join(__dirname, 'node_modules/linkifyjs/lib/linkify-string')
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new htmlPlugin({
      filename: 'index.html',
      template: './app/index.html'
    })
  ]
};
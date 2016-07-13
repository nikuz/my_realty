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
      config: path.join(__dirname, 'app/js/config'),
      linkify: path.join(__dirname, 'node_modules/linkifyjs/lib/linkify-string'),
      components: path.join(__dirname, 'app/js/components'),
      controllers: path.join(__dirname, 'app/js/controllers'),
      views: path.join(__dirname, 'app/js/views'),
      actions: path.join(__dirname, 'app/js/actions'),
      reducers: path.join(__dirname, 'app/js/reducers'),
      modules: path.join(__dirname, 'app/js/modules'),
      models: path.join(__dirname, 'app/js/models'),
      utils: path.join(__dirname, 'app/js/utils'),
      styles: path.join(__dirname, 'app/styles')
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
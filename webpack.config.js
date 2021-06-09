const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,         // regex
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react'
          ]
          }
        },
      },
      {
        test: /\.(css||scss)$/,
        exclude: /node_modules/,
        use: [                      // order matters!
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }  
    ],
  },
  devServer: {
    publicPath: '/client/',
    proxy: {                        // come up with endpoints first so you can include them in your proxies
      '/api/': 'http://localhost:3000/',
      '/images/': 'http://localhost:3000/', //? not sure if needed
      '/photos/': 'http://localhost:3000/' //? not sure if needed
    },
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  }
}
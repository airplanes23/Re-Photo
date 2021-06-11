const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regex
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          // order matters!
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg)$/, // |gif|woff|woff2|eot|ttf|svg|ico
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: "url-loader",
            // options: {
            //   // if file is greater than the limit (bytes), file-loader is used as fallback
            //   limit: 8192,
            // },
          },
        ],
      },
    ],
  },
  devServer: {
    host: "localhost",
    port: "8080",
    proxy: {
      // come up with endpoints first so you can include them in your proxies
      "/api/": "http://localhost:3000/",
      "/images/": "http://localhost:3000/", //? not sure if needed
      "/photos/": "http://localhost:3000/", //? not sure if needed
      "/collection": "http://localhost:3000/", //? not sure if needed
    },
    hot: true,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./client/index.html",
  //   }),
  //   new webpack.HotModuleReplacementPlugin(),
  // ],
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};

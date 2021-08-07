// Generated using webpack-cli https://github.com/webpack/webpack-cli

import HtmlWebPackPlugin from "html-webpack-plugin";
import path from "path";

const __dirname = path.resolve();
export default {
  entry: {
    index: "./src/index.js",
    controller: "./backend/controller/controller.js",
    model: "./backend/model/model.js",
    component: "./frontend/components/form.js",
    filterWords: "./backend/utils/filterWords.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name]-[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "index.html",
      template: __dirname + "/index.html",
    }),
  ],
};

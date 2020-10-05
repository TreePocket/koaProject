/*
 * @Author: your name
 * @Date: 2020-09-16 20:43:15
 * @LastEditTime: 2020-10-05 14:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koaProject/build/webpack.production.js
 */
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const minify = require('html-minifier').minify
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  output: {
    filename: "[name].[contenthash].js"
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../src/web/views/layouts'),
          to: '../views/layouts',
          transform(content) {
            return minify(content.toString(), {
              collapseWhitespace: true
            })
          }
        },
        {
          from: path.join(__dirname, '../src/web/components'),
          to: '../components',
          transform(content) {
            return minify(content.toString(), {
              collapseWhitespace: true
            })
          }
        },
        {
          from: path.join(__dirname, "../src/web/views/index.html"),
          to: "../views",
        },
      ]
    })
  ]
}

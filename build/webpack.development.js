/*
import { path } from 'path';
 * @Author: your name
 * @Date: 2020-09-16 20:43:04
 * @LastEditTime: 2020-10-05 15:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koaProject/build/webpack.development.js
 */
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
module.exports = {
  watch: true,
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '../src/web/views/layouts'), to: '../views/layouts' },
        { from: path.join(__dirname, '../src/web/components'), to: '../components' },
        { from: path.join(__dirname, '../src/web/views/index.html'), to: '../views/' },
      ]
    })
  ]
}

// soucemap 映射 便于调试
// 打包后的代码 -》 打包前的代码
// 压缩
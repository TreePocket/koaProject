/*
 * @Author: your name
 * @Date: 2020-09-16 20:32:43
 * @LastEditTime: 2020-10-05 15:36:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koaProject/webpack.config.js
 */
const { argv } = require('yargs')
const { merge } = require('webpack-merge')
const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AfterHtmlPlugin = require('./build/AfterHtmlPlugin')
//1.判断打包的环境
//2.遍历所有的入口文件

// 把 html 打包出来
const mode = argv.mode;
const envConfig = require(`./build/webpack.${mode}.js`)
console.log("当前打包环境：", argv.mode);

const files = glob.sync('./src/web/views/**/*.entry.js')

const entrys = {}
const htmlPlugins = [];

files.forEach(url => {
  if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js/.test(url)) {
    const entryKey = RegExp.$1
    const [pagesName, actionName] = entryKey.split("-")
    entrys[entryKey] = `./src/web/views/${pagesName}/${entryKey}.entry.js`
    htmlPlugins.push(new HtmlWebpackPlugin({
      filename: `../views/${pagesName}/pages/${actionName}.html`,
      inject: false,
      template: `./src/web/views/${pagesName}/pages/${actionName}.html`,
      chunks: ['runtime', entryKey]
    }))
  }
})

const baseConfig = {
  mode,
  entry: entrys,//入口文件是什么?
  output: {
    path: path.join(__dirname, "./dist/web/assets"),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.js$/, //以js结尾的
      use: ['babel-loader']
    }, {
      test: /\.css$/i, //以css结尾的
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin(),
    new AfterHtmlPlugin()
  ]
}



module.exports = merge(baseConfig, envConfig)
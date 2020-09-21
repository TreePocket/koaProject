/*
 * @Author: your name
 * @Date: 2020-09-21 21:28:00
 * @LastEditTime: 2020-09-21 22:03:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koaProject/build/AfterHtmlPlugin.js
 */
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');

function createHtml(type, array) {
  let result = "";
  if (type === "js") {
    array.forEach((url) => {
      result += `<script src="${url}"></script>`
    })
  }
  if (type === "css") {
    array.forEach((url) => {
      result += `<link href="${url}" rel="stylesheet"/>`
    })
  }
  return result;
}

class ConsoleLogOnBuildWebpackPlugin {
  //compiler webpack 编译对象
  //compilation 每一次构建
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      //拿取js css
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        pluginName,
        (data, cb) => {
          this.jsArray = data.assets.js
          this.cssArray = data.assets.css
          cb(null, data)
        }
      )

      //重新写入js  css
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        pluginName,
        (data, cb) => {
          const scriptString = createHtml('js', this.jsArray);
          const linkString = createHtml('css', this.cssArray);
          data.html = data.html.replace('<!-- injectcss -->', linkString);
          data.html = data.html.replace('<!-- injectjs -->', scriptString);
          cb(null, data)
        }
      )
    })
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
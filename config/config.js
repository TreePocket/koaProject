/*
 * @Author: your name
 * @Date: 2020-09-06 14:51:46
 * @LastEditTime: 2020-09-13 12:03:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/config/config.js
 */
import path from 'path';

let config = {
  viewsDir: path.join(__dirname, "../", "views"),
  staticDir: path.join(__dirname, "../", "assets")
};

//本地环境
if (process.env.NODE_ENV === "development") {
  const devConfig = {
    port: 3000,
    cache: false
  }
  config = { ...config, ...devConfig }
}
//线上环境
if (process.env.NODE_ENV === "production") {
  const proConfig = {
    port: 80,
    cache: 'memory'
  }
  config = { ...config, ...proConfig }
}

export default config;


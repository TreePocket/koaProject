/*
 * @Author: your name
 * @Date: 2020-09-06 14:46:47
 * @LastEditTime: 2020-09-28 21:24:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/app.js
 */
import Koa from 'koa';
import co from 'co';
import render from 'koa-swig';

import staticServe from 'koa-static';

import config from './config/config';
import initController from './controllers';

import { historyApiFallback } from 'koa2-connect-history-api-fallback';

import errorHander from './middlewares/errorHandler';

import log4js from 'log4js';
log4js.configure({
  appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
  categories: { default: { appenders: ["globalError"], level: "error" } }//错误级别为error的错误才会被写入错误日志文件中
});

const logger = log4js.getLogger("cheese");
logger.error("Cheese is too ripe!");


const app = new Koa();

//koa-swig 模板
app.context.render = co.wrap(render({
  root: config.viewsDir,
  cache: config.cache,
  varControls: ["[[", "]]"],//设置在页面中获取数据的模板格式 [[data]]
}))

//初始化中间件
app.use(staticServe(config.staticDir));

//初始化路由
initController(app);
//将白名单上的路由都代理到根路由上去
app.use(historyApiFallback('/', { whiteList: ['/api', '/books'] }));

//错误处理
errorHander.error(app, logger);

app.listen(config.port, () => {
  console.log(`server2222  is running at port ${config.port}`);
})
/*
import { deflate } from 'zlib';
 * @Author: your name
 * @Date: 2020-09-07 23:47:59
 * @LastEditTime: 2020-09-13 11:37:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/middlewares/errorHandler.js
 */
class Errorhander {
  static error(app, logger) {
    //全局错误捕获
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (e) {
        logger.error(e.message);
        ctx.body = "500服务器错误"
      }
    })

    //处理页面404
    app.use(async (ctx, next) => {
      await next();
      if (ctx.status === 404) {
        ctx.body = '友好的404'
      }
    })
  }
}

export default Errorhander;
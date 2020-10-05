/*
 * @Author: your name
 * @Date: 2020-09-06 15:02:27
 * @LastEditTime: 2020-10-05 15:06:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/controllers/IndexController.js
 */
import Controller from "./Controller";

class IndexController extends Controller {
  constructor() {
    super()
  }

  async actionIndex(ctx) {
    ctx.body = await ctx.render('index', {
      message: '后端输出的数据'
    });
  }
}

export default IndexController;
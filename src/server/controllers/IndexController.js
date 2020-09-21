/*
 * @Author: your name
 * @Date: 2020-09-06 15:02:27
 * @LastEditTime: 2020-09-07 23:28:36
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
    ctx.body = await ctx.render('index');
  }
}

export default IndexController;
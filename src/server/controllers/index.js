/*
 * @Author: your name
 * @Date: 2020-09-06 15:04:28
 * @LastEditTime: 2020-09-13 20:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/controllers/index.js
 */
import Router from "@koa/router";

import IndexController from "./IndexController";
import ApiController from "./ApiController";
import BooksController from "./BooksController";

const indexController = new IndexController();
const apiController = new ApiController();
const booksController = new BooksController();

const router = new Router();

function initController(app) {
  router.get('/', indexController.actionIndex);
  router.get('/api', apiController.actionDataList);
  router.get('/books/list', booksController.actionBookListPage);

  app.use(router.routes()).use(router.allowedMethods());
}

export default initController;


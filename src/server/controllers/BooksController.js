/*
 * @Author: your name
 * @Date: 2020-09-06 15:26:43
 * @LastEditTime: 2020-10-05 15:46:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/controllers/ApiController.js
 */
import Controller from './Controller';
import BooksModel from '../models/BooksModel';

class BooksController extends Controller {
  constructor() {
    super();
  }

  async actionBookListPage(ctx) {
    const booksModel = new BooksModel();
    const data = await booksModel.getBooksList();
    ctx.body = await ctx.render("books/pages/list", { data: data.data });
  }

  async actionBookCreatePage(ctx) {
    ctx.body = await ctx.render("books/pages/create");
  }
}

export default BooksController;
/*
 * @Author: your name
 * @Date: 2020-09-06 15:26:43
 * @LastEditTime: 2020-09-13 12:38:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/controllers/ApiController.js
 */
import Controller from './Controller';
import BooksModel from '../models/BooksModel';

class ApiController extends Controller {
  constructor() {
    super();
  }

  actionDataList(ctx) {
    ctx.body = {
      data: [{ id: 1, value: 1 }, { id: 2, value: 1 }]
    }
  }

  async actionBookList(ctx) {
    const booksModel = new BooksModel();
    ctx.body = await booksModel.getBooksList();
  }
}

export default ApiController;
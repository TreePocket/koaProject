/*
 * @Author: your name
 * @Date: 2020-09-13 12:29:44
 * @LastEditTime: 2020-09-13 21:40:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/models/BooksModel.js
 */
import SafeRequest from '../utils/safeRequest';
class BooksModel {
  //请求后端 PHP
  getBooksList() {
    return SafeRequest.fetch("PHP 后端接口")
  }

  findBook(id) {

  }
}

export default BooksModel;
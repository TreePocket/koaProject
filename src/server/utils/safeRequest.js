/*
 * @Author: your name
 * @Date: 2020-09-13 21:34:36
 * @LastEditTime: 2020-09-13 21:40:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /yii-node/utils/safeRequest.js
 */
import axios from 'axios'
class SafeRequest {
  static fetch(url) {
    let result = {
      code: 0,
      message: '',
      data: null
    }
    return new Promise((resolve) => {
      axios(url).then(data => {
        result.data = data.data;
        resolve(result)
      }).catch(e => {
        result.message = e.message
        result.code = 1
        result.data = [{
          id: 1,
          name: '《javascript 高级程序设计》'
        }, {
          id: 2,
          name: '《javascript 高级程序设计》'
        }]
        resolve(result)
      })
    })
  }
}

export default SafeRequest
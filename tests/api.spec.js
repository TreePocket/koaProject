/*
 * @Author: your name
 * @Date: 2020-09-13 23:41:28
 * @LastEditTime: 2020-09-13 23:44:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koaProject/tests/api.spec.js
 */
const request = require("supertest");
const expect = require("chai").expect;

describe("NODEJS API 测试", () => {
  it("获取图书列表接口是否正确", function (done) {

    request("http://localhost:3000")
      .get("/api")
      .expect(200)
      .end((err, res) => {
        expect(res.body.data.length).equal(2)
        expect(res.body.data[0].id).equal(1)
        done()
      });
  });
});
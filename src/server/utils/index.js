/*
 * @Author: your name
 * @Date: 2020-09-13 22:35:29
 * @LastEditTime: 2020-09-13 23:18:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /koaProject/utils/index.js
 */
(function () {
  var root =
    (typeof self == "object" && self.self === self && self) ||
    (typeof global == "object" && global.global === global && global) ||
    this ||
    {};

  // 基于可插拔的架构去写
  //  这里返回的其实是一个 new 好的 underscore 实例
  //   obj 始终是一个数组
  var _ = function (obj) {
    console.log("判断：", obj instanceof _, this);
    if (obj instanceof _) return obj;

    // 如果传入的不是 underscore 实例，则会 new 一个实例
    // new 出来的 Object.create(obj)
    if (!(this instanceof _)) return new _(obj);

    // 记录的是 _(data) 传入的 data 参数 [11, 22, 33]
    this._wrapped = obj;
  };

  _.each = function (array, fn) {
    for (let i = 0; i < array.length; i++) {
      fn(array[i], i);
    }
    return array;
  };
  _.map = function () { };

  // 节流函数
  // 每隔一段时间，执行一次函数
  // 第一次触发会立即执行
  // 如果在间隔时间内触发，会在间隔末尾再执行一次

  _.throttle = function (callback, timer) {
    let isFirst = true;
    let execDate = +new Date();
    let throttleId = null;
    return function () {
      if (isFirst) {
        callback();
        execDate = +new Date();
        isFirst = false;
      } else {
        const currentDate = +new Date();
        if (currentDate - execDate >= timer) {
          callback();
          execDate = +new Date();
        } else {
          if (throttleId) {
            clearTimeout(throttleId);
          }
          const timeWait = execDate + timer - +new Date();

          throttleId = setTimeout(() => {
            callback();
            execDate = +new Date();
          }, timeWait);
        }
      }
    };
  };

  // 判断传入的参数，是否是一个 function
  _.isFunction = function (obj) {
    return typeof obj == "function" || false;
  };

  //   obj 就是 underscore 本身
  //   遍历 underscore 上挂载的所有 function
  _.functions = function (obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      // 取到了真正的 function
      var func = (_[name] = obj[name]);
      _.prototype[name] = function () {
        // 融合参数
        var args = [this._wrapped];
        Array.prototype.push.apply(args, arguments);
        return func.apply(_, args); //chainResult(this, );
      };
    });
    return _;
  };

  _.mixin(_);

  root._ = _;
})();

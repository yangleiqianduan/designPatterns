'use strict';

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by yanglei on 2017/4/5.
 */
var foo = {
  a: {
    b: 1
  }
};
var bar = foo;
bar.a.b = 2;
console.log(foo.a.b);
console.log(foo === bar);

// 使用 immutable.js

var a = _immutable2.default.fromJS({
  a: {
    b: 1
  }
});
var b = a.setIn(['a', 'b'], 2); // 使用 setIn 赋值
console.log(a.getIn(['a', 'b'])); // 使用 getIn 取值
/**
 * Created by yanglei on 2017/4/5.
 */
let foo = {
  a: {
    b: 1
  }
};
let bar = foo;
bar.a.b = 2;
console.log(foo.a.b);
console.log(foo === bar);

// 使用 immutable.js
import Immutable from 'immutable';
let a = Immutable.fromJS({
  a: {
    b: 1
  }
});
let b = a.setIn(['a', 'b'], 2); // 使用 setIn 赋值
console.log(a.getIn(['a', 'b']));  // 使用 getIn 取值

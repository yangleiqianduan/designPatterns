"use strict";

/**
 * 策略模式
 * Created by yanglei on 2017/7/2.
 */

var validator = {
  // 所有可以的验证规则处理类存放的地方，后面会单独定义
  types: {},
  // 验证类型所对应的错误消息
  messages: [],
  // 当然需要使用的验证类型
  config: {},
  // 暴露的公开验证方法
  // 传入的参数是 key => value对
  validate: function validate(data) {
    var i, msg, type, checker, result_ok;
    // 清空所有的错误信息
    this.messages = [];
    for (i in data) {
      if (data.hasOwnProperty(i)) {
        type = this.config[i]; // 根据key查询是否有存在的验证规则
        checker = this.types[type]; // 获取验证规则的验证类
        if (!type) {
          continue; // 如果验证规则不存在，则不处理
        }
        if (!checker) {
          // 如果验证规则类不存在，抛出异常
          throw {
            name: "ValidationError",
            message: "No handler to validate type " + type
          };
        }
        result_ok = checker.validate(data[i]); // 使用查到到的单个验证类进行验证
        if (!result_ok) {
          msg = "Invalid value for *" + i + "*, " + checker.instructions;
          this.messages.push(msg);
        }
      }
    }
    return this.hasErrors();
  },
  // helper
  hasErrors: function hasErrors() {
    return this.messages.length !== 0;
  }
};

//然后剩下的工作，就是定义types里存放的各种验证类了，我们这里只举几个例子：

// 验证给定的值是否不为空
validator.types.isNonEmpty = {
  validate: function validate(value) {
    return value !== "";
  },
  instructions: "传入的值不能为空"
};
// 验证给定的值是否是数字
validator.types.isNumber = {
  validate: function validate(value) {
    return !isNaN(value);
  },
  instructions: "传入的值只能是合法的数字，例如：1, 3.14 or 2010"
};
// 验证给定的值是否只是字母或数字
validator.types.isAlphaNum = {
  validate: function validate(value) {
    return !/[^a-z0-9]/i.test(value);
  },
  instructions: "传入的值只能保护字母和数字，不能包含特殊字符"
};

//使用的时候，我们首先要定义需要验证的数据集合，然后还需要定义每种数据需要验证的规则类型，代码如下：

var data = {
  first_name: "Tom",
  last_name: "Xu",
  age: "unknown",
  username: "TomXu"
};
validator.config = {
  first_name: 'isNonEmpty',
  age: 'isNumber',
  username: 'isAlphaNum'
};

// 最后，获取验证结果的代码就简单了：

validator.validate(data);
if (validator.hasErrors()) {
  console.log(validator.messages.join("\n"));
}
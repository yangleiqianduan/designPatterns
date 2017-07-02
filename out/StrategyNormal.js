'use strict';

/**
 * 策略模式
 * Created by yanglei on 2017/7/2.
 */

var validator = {
  validate: function validate(value, type) {
    switch (type) {
      case 'isNonEmpty ':
        {
          return true; // NonEmpty 验证结果
        }
      case 'isNumber ':
        {
          return true; // Number 验证结果
        }
      case 'isAlphaNum ':
        {
          return true; // AlphaNum 验证结果
        }
      default:
        {
          return true;
        }
    }
  }
};
//  测试
console.log(validator.validate("123", "isNonEmpty"));
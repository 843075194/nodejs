//引入模型层
var model = require('../model/positionModel');

var find = async function () {
    return await model.find();
    //这个地方是返回了引入的
    //../model/positionModel这个文件里的find()方法;
  }


  module.exports = {
      find
  }

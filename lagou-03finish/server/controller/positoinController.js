//引入模型层
var model = require('../model/positionModel');

var find = async function () {
    return await model.find();
    //这个地方是返回了引入的
    //../model/positionModel这个文件里的find()方法;
  }
var add = async function (obj) {
    return await model.insertMany(obj);
  }

var getOne = async function (id) {
  return await model.getOne(id);
  }

var update = async function (id,obj) { 
  return await model.update(id,obj);
 }
 
 var remove = async function (obj) { 
   return await model.remove(obj);
  }
  module.exports = {
      find,
      add,
      getOne,
      update,
      remove
  }

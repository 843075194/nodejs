//引入数据库连接模块
var mongoose = require("../db/connect");

//获取约束构造函数
var Schema = mongoose.Schema;

//定义职位的约束
var positionSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

//根据约束与数据库中的集合名称  生成操作对象
var userModel = mongoose.model("users",positionSchema);

//插入数据库
var insert = async function (obj) {  
    return await userModel.insertMany(obj)
}

//查询
var find = async function (queryObject) { 
    return await userModel.find(queryObject);
//monngoose.model("users",positionSchema).find(queryObject);
 }

 //返回一个接口  供C层调用
 module.exports = {
     insert,find
 }
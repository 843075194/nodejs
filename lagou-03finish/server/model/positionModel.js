/* 
//负责连接数据库
var mongoose = require('mongoose');
//连接
mongoose.connect("mongodb://localhost:27017/lagou", 
{useNewUrlParser: true, useUnifiedTopology: true});
*/
//引入数据库连接模块
var mongoose = require('../db/connect');
//因为connect那边已经进行了数据库的连接，
//所以引入过来的话是连接数据库的状态

// 从它身上获取mongoose.Schema 
// 这个Schema用于约束我们插入的数据的字段名和字段值的类型
var Schema = mongoose.Schema;

//定义职位的约束
// 初始化一个Schema 用于约束users集合
// 定义职位的约束
var positionSchema = new Schema({
    companyLogo: {
        type: String
    },
    companyName: {
        type: String,
        required: true
    },
    positionName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    createTime: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    degree: {
        type:String,
        required: true
    },
    description: String
})
//根据约束与数据库中的集合名称 生成操作对象
//生成一个用于操作的对象
var positionModel = mongoose.model("positions", positionSchema);

/* positionModel.insertMany({
    companyName:"橘子",
    positionName:"小跟班",
    city:"北京",
    createTime:"2020-11-19",
    salary:"20K-21K"
},function (error,arr) {
    console.log(error,arr);
  })
  //arr返回
  [ { _id: '5fb63f3c8714b12b584e932f',
    companyName: '橘子',
    positionName: '小跟班',
    city: '北京',
    createTime: '2020-11-19',
    salary: '20K-21K',
    __v: 0 } ] */


    //返回一个查询的接口
   /*  var find =  function () {
            positionModel.find({},function (err,arr) {  
            console.log(err);
            console.log(arr);
        })
      }
      find();//返回的是一个数组 */

      var find = async function() {
        return await positionModel.find({})   
    }
     //这个拿到的数据就是表里的数据
     // find();//返回结果和上面一样

    var insertMany = async function (obj) { 
        return await positionModel.insertMany(obj)
     }
     //这个obj 在调用的时候传的其实就是fields这个表单内的元素

     var getOne = async function (id) {
         return await positionModel.findById(id);
       }
    
    var update = async function (id,obj) { 
        return await positionModel.findByIdAndUpdate(id,obj)
     }

     var remove = async function (obj) {
         console.log(1);
         return await positionModel.deleteOne(obj);
       }
    //返回一个接口，供C层进行调用，也就是controller控制层
    module.exports = {
        find,
        insertMany,
        getOne,
        update,
        remove
    }


    
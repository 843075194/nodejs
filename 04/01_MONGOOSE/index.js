// 引入
var mongoose = require("mongoose");
// 配置连接信息
mongoose.connect("mongodb://localhost:27017/qd2006", { useNewUrlParser: true, useUnifiedTopology: true })
// 从它身上获取mongoose.Schema 这个Schema用于约束我们插入的数据的字段名和字段值的类型
var Schema = mongoose.Schema;
// 初始化一个Schema 用于约束users集合
var userSchema = new Schema({
	username: String,
	password: {
		type: String,
		required: true
	},
	isPerson: {
		type: Boolean,
		required: true
	}
})

// 生成一个用于操作的对象 
var userModel = mongoose.model("users", userSchema);

// 用userModel进行操作
userModel.insertMany([{username: true, password: "今天下雨", isPerson: true}], function(error, arr) {
	console.log(error, arr);
});

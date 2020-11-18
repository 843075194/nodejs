// 引入mongoose 
var mongoose = require("../config/index.js");

// 获取schema
var Schema = mongoose.Schema;

// 定义position集合的Schema
var positionSchema = new Schema({
	filePath: {type: String, required: true},
	companyName: {type: String, required: true},
	positionName: {type: String, required: true},
	city: {type: String, required: true},
	salary: {type: String, required: true},
	type: {type: String, required: true},
	experience: {type: String, required: true},
	degree: {type: String, required: true},
	description: {type: String, required: true}
})

var positionModel = mongoose.model("positions", positionSchema);
console.log(Object.getPrototypeOf(positionModel))

let save = (arr) => {
	return positionModel.insertMany(arr);
}
let find = () => {
	return positionModel.find();
}
let remove = id => {
	return positionModel.findByIdAndRemove({_id: id})
}
let findOne = id => {
	return positionModel.findById({_id: id})
}
let update = (id, obj) => {
	return positionModel.findByIdAndUpdate(id, obj);
}

module.exports = {
	save, find, remove, findOne, update
}
var posModel = require("../model/positionModel");

let add = async (req, res, next) => {
	console.log(req.body);
	console.log("到达/api/position/add接口请指示...");
	try {
		let a = await posModel.save(req.body);
		
		res.render("../views/success.ejs", {
			data: JSON.stringify({"message": "success"})
		});
	} catch(e) {
		res.render("../views/error.ejs",{
			data: JSON.stringify({"message": "failed"})
		});
	}
}

let list = async (req, res, next) => {
	try {
		let arr = await posModel.find();
		console.log(arr)
		res.render("../views/success.ejs", {
			data: JSON.stringify({
				message: arr
			})
		});
	} catch (e) {
		res.render("../views/error.ejs",{
			data:JSON.stringify({ message:  "failed"})
		});
		return;
	}
}

let remove = async (req, res, next) => {
	try {
		let id = req.query.id;
		console.log(id)
		let result = await posModel.remove(id);
		res.render("../views/success.ejs", {
			data: JSON.stringify({
				message: "删除成功"
			})
		})
	} catch(e) {
		console.log(e)
		res.render("../views/error.ejs", {
			data: JSON.stringify({
				message: "删除失败"
			})
		})
	}
}
let findOne = async (req, res, next) => {
	try {
		let id = req.query.id;
		console.log(id)
		let result = await posModel.findOne(id);
		res.render("../views/success.ejs", {
			data: JSON.stringify({
				message: result
			})
		})
	} catch(e) {
		console.log(e)
		res.render("../views/error.ejs", {
			data: JSON.stringify({
				message: "查找失败"
			})
		})
	}
}

let update = async (req, res, next) => {
	try {
		let _id = req.body._id;
		let result = await posModel.update(_id, req.body);
		res.render("../views/success.ejs", {
			data: JSON.stringify({
				message: result
			})
		})
	}catch(e) {
		res.render("../views/error.ejs", {
			data: JSON.stringify({
				message: "修改失败"
			})
		})
	}
}

module.exports = {
	add, list, remove, findOne, update
}
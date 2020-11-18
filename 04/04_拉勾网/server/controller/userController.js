// 引入模型层的对象
var userModel = require("../model/userModel");
var jwt = require("jsonwebtoken");
var fs = require("fs");
var path = require("path");


var signin = async function(req, res, next) {
	try {
		var result = await userModel.findOne(req.body);
		if (result) {
			// 生成token
			var token = generateToken({username: req.body.username});
			res.render("../views/success.ejs", {
				data: JSON.stringify({"message": "success", token})
			});
		} else {
			res.render("../views/error.ejs", {
				data: JSON.stringify({"message": "failed"})
			});
		}
	} catch(err) {
		console.log(err);
		res.render("../views/error.ejs", {
			data: JSON.stringify({"message": "failed"})
		});
	}
}
// 注册
var signup = async function(req, res, next) {
	try {
		var one = await userModel.findOne({username: req.body.username});
		if (one) {
			res.render("../views/error.ejs", {
				data: JSON.stringify({"message": "exist"})
			});
		} else {
			var result = await userModel.insertMany(req.body);
			res.render("../views/success.ejs", {
				data: JSON.stringify({"message": "success"})
			});
		}
	} catch (e) {
		res.render("../views/error.ejs", {
			data: JSON.stringify({"message": "failed"})
		});
	}
	console.log(result);
}

// 定义函数 生成token
function generateToken(data) {
	// 读取私钥
	var privateKey = fs.readFileSync(path.resolve(__dirname, "../keys/private.key"));
	return jwt.sign(data, privateKey, {
		algorithm: 'RS256',
        expiresIn:'24h'
	})
}


// 定义函数 判定是否登录 
async function isLogin(req, res) {
}

module.exports = {
	signin, signup
}
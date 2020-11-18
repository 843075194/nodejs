var formidable = require("formidable");
var path = require("path");
var fs = require("fs");
var absPath = "http://localhost:3000/images/"
function uploads(req, res, next) {
	var form = new formidable();
	form.uploadDir = path.resolve(__dirname, "../public/images/");
	form.parse(req, function(err, fields, files) {
		var oldPath = files.companyLogo.path;
		var pathObj = path.parse(oldPath);
		var baseName = pathObj.name;
		var extName = files.companyLogo.name.slice(files.companyLogo.name.lastIndexOf("."))
		var newPath = files.companyLogo.path + extName;
		
		fs.rename(oldPath, newPath, function(err) {
			if (err) {
				res.render("../views/error.ejs",{
					data:JSON.stringify({ message:  "文件改名失败"})
				});
				return;
			}
			req.body = fields;
			req.body.filePath = absPath + baseName + extName;
			next();
		});
	})
}
module.exports = uploads;
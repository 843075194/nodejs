// fs模块重命名  
// 引入模块
var fs = require("fs");

// rename
fs.rename("index.html", "haha.txt", function(err) {
	console.log(err);
});


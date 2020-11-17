// 引入模块
var fs = require("fs");

// 调用模块功能 读取对应的文件
fs.readFile("./index.html", "utf-8", function(err, data) {
	// err 表示读取过程中可能发生的异常
	// data 表示读取完毕之后的内容
	console.log(err);
	console.log(data);
});


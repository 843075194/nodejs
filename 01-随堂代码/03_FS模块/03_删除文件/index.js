// 引入fs模块
var fs = require("fs");

// 删除
fs.unlink("index.html", function(err) {
	console.log("你好");
})

// 同步删除
// fs.unlinkSync("index.html")

console.log("哈哈");

// NodeJS的编程特点是 99% 异步代码 
// 回调函数中的第一个参数永远是错误对象

// Node的FS模块 每一个异步函数都有一个对应的同步函数

// 引入模块
var http = require("http");

// 使用它的功能 创建一个服务器对象
var server = http.createServer(function(req, res) {
	if (req.url === "/favicon.ico") {
		res.end("")
		return;
	}
	// 本函数用于处理前端的所有请求
	// req 就是前端请求对象 我们可以在它身上获取信息
	console.log(req.url);
	// console.log(req.method);
	// console.log(req.headers);
	res.setHeader("content-type", "text/html;charset=utf-8");
	if (req.url === "/a") {
		res.end("这是a页面的内容");
	} else if (req.url === "/b") {
		res.end("这是b页面的内容");
	} else if (req.url === "/c") {
		res.end("这是c页面的内容")
	}


	// res 就是后端响应对象
	// header("content-type: text/html;charset=utf-8")
	// res.end("这是Node给你返回的第一个响应");
});

// 监听到某个端口
server.listen(3000);
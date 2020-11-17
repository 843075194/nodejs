// 引入http
var http = require("http");
// 引入fs
var fs = require("fs");
// 引入url
var url = require("url");
// 搭建服务器
var server = http.createServer(function(req, res){
	if (req.url === "/favicon.ico") {
		res.end("");
		return;
	}

	var obj = url.parse(req.url, true);
	try {
		var data = fs.readFileSync("." + obj.pathname);
	}catch(e) {
		console.log(e);
	}
	res.end(data);
});

// 监听端口号
server.listen(3000);
// 引入net模块
var net = require("net");

// 创建
var chatServer = net.createServer();

var obj = {}
var i = 0;
// 等待客户端发送连接请求
chatServer.on("connection", function(client) {
	client.name = i;
	obj[i] = client;
	i++;
	// 监听这个客户端发送来的信息
	client.on("data", (message) => {
		console.log(message);
		for (var i in obj) {
			obj[i].write(client.name + "说" + message);
		}
	})
	// 如果出错 不能直接崩溃 而是要处理
	client.on("error", () => {
		console.log("断开连接了...")
	}) 
})

// 监听端口号
chatServer.listen(6000);
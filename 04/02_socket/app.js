// 为了将app转为原生实例 引入http模块
var http = require("http");
// 搭建服务器
var express = require("express");
// 因为要加入socket 所以要引入 socket.io
var socketIO = require("socket.io");
var app = express();

app.use(express.static("./WWW"));
// 将app转为原生实例
var server = http.Server(app);
// 将原生实例放入socketIO中
var serverSocket = socketIO(server);

serverSocket.on("connection", function(socket) {
    // 这个socket是前端的socket
    console.log("前端有连接请求发过来了");
    socket.on("msg", function(msg) {
        console.log(msg)

        serverSocket.emit("sendMsg", msg)
    })
})

// 不要再使用app去监听了 要使用server去监听
server.listen(3000);
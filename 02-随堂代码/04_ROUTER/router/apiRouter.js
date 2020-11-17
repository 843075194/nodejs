// 引入express
var express = require("express");
 
// 定义一个路由对象
var apiRouter = new express.Router();

// 将处理函数 不再挂载到app上 而是挂载到 router上
apiRouter.get("/regist", function() {
    console.log("regist");
})
apiRouter.get("/login", function() {
    console.log("login")
})

// 暴露apiRouter
module.exports = apiRouter;
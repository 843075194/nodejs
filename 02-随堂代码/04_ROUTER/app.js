// 引入express
var express = require("express");

// 生成app
var app = express();

// 引入apiRouter
var apiRouter = require("./router/apiRouter");
var phpRouter = require("./router/phpRouter");

app.use("/php/", phpRouter);
app.use("/api/", apiRouter)

// 调用监听方法
app.listen(3000);
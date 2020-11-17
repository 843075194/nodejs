// 引入模块
var express = require("express");
// 引入body-parser模块  这是一个中间件
var bodyParser = require("body-parser");


var url = require("url");

// 执行express
var app = express();

 // 配置body-parser
app.use(bodyParser.urlencoded({extended: false}));
// 使用express的静态中间件帮助我们实现静态资源托管
app.use("/WWW", express.static("./WWW")); 

// 让express搭建的服务器能够处理指定请求
app.use("/api/regist", function(req, res){
    // req是原生request对象增强之后的express对象 它依然可以使用原生的内容 也可以使用express给它添加的新内容
    // res也被增强过 
    // res.end("返回的是字符串"); 
    // res.end(JSON.stringify({a: 1}));
    // res.send({a: 2, c: 33});
    // end是原生的方法 只能接受字符串和buffer作为参数。 send是express给增强之后的方法，它的参数可以任意。
    res.send("注册成功");
})

// 处理get请求
// app.get("/api/get", function(req, res) {
//     // // 原生node中我们需要自己书写代码来获取get请求的数据
//     console.log(req.url)
//     var urlObj = url.parse(req.url, true);
//     console.log(urlObj.query)

//     // // Express中，我们可以直接 req.query对象获取数据
//     console.log(req.query)
//     res.send("这是get请求的处理结果");
// })  

// 处理post请求
app.post("/api/post", function(req, res) {
    console.log(req.body)
    res.send("这是post请求的处理结果")
})


// 动态路由
app.get("/api/a:name/b:age", function(req, res) {
    console.log("我是一个动态路由");
    console.log(req.params.name)
    console.log(req.params.age)
    res.send("我是动态路由的返回结果")
})

// 一个请求 多次处理
// app.get("/api/many", function(req, res, next) {
//     console.log("这是many的处理1");
//     next();
// })
// app.get("/api/many", function(req, res, ) {
//     console.log("这是many的处理");
// })

// 第二种写法
function once(req, res, next) {
    console.log("这是many的处理1");
    next();
}
function twice(req, res, ) {
    console.log("这是many的处理");
}
app.get("/api/many", once, twice);


// 监听端口号
app.listen(3000, "10.30.10.238", function() {
    console.log("服务器已经搭建完毕")
});

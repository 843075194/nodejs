# Express

这是一个Node的第三方模块。

这个模块的作用是为了帮助我们进行快速的服务器搭建。

## 官网

中文网址：https://www.expressjs.com.cn/

![1605578357898](D:\青岛2006\Node\02_week1day2\图片\1605578309121.png)

## 使用方式

### 引入模块

```
// 引入模块
var express = require("express");
```

### 创建服务器

```
// 执行express
var app = express();
```

### 监听端口和IP

当指定了第二个参数之后，就只能在地址栏中输入ip地址

```
// 监听端口号
app.listen(3000, "10.30.10.62", function() {
  console.log("服务器已经搭建完毕")
});
```

## 静态资源托管

处理静态资源要使用中间件   express.static

```
// 使用express的静态中间件帮助我们实现静态资源托管
app.use("/WWW", express.static("./WWW")); 
```

app.use 方法是app的一个加载中间件的方法。 第一个参数是 “路由”。或者叫做路径。

# POSTMAN

这是一个发送请求的工具

![1605579975837](D:\青岛2006\Node\02_week1day2\图片\1605579975837.png)



## Exprss处理请求

### app.use(path, callback)

```
app.use("/api/regist", function(req, res) {
    这个请求会在前端发送 http://localhost:3000/api/regist 的时候进行响应
})
```

### app.get(path, callback)

```
// 处理get请求
app.get("/api/get", function(req, res) {
    res.send("这是get请求的处理结果")
})
```

### app.post(path, callback)

```
app.post("/api/post", function(req, res) {
    res.send("这是post请求的处理结果")
})
```

### 动态路由

```
// 动态路由
app.get("/api/a:name/b:age", function(req, res) {
    console.log("我是一个动态路由");
    console.log(req.params.name)
    console.log(req.params.age)
    res.send("我是动态路由的返回结果")
})
```

前端发送的请求的URL:

```
http://10.30.10.62:3000/api/awanglaowu/b13
```

后端接受的数据:

![1605594990132](D:\青岛2006\Node\02_week1day2\图片\1605594990132.png)

注意的点：app.get的第一个参数中的冒号是固定的，冒号后面的是变量名 与 req.params的属性名对应

### 多函数处理

express允许对一个请求进行多次处理

在处理请求的配置中，添加多个函数

```
方式一:  一个请求 多次处理
app.get("/api/many", function(req, res, next) {
    console.log("这是many的处理1");
    next();
})
app.get("/api/many", function(req, res, ) {
    console.log("这是many的处理");
})

方式二:  一个请求 多次处理
function once(req, res, next) {
    console.log("这是many的处理1");
    next();
}
function twice(req, res, ) {
    console.log("这是many的处理");
}
app.get("/api/many", once, twice);

```





## Express获取请求的数据

### 获取get请求的数据

```
// 处理get请求
app.get("/api/get", function(req, res) {
    // Express中，我们可以直接 req.query对象获取数据
    console.log(req.query)
    res.send("这是get请求的处理结果");
})
```

>  输出结果:  { username: 'wanglaowu', password: '123456' }

### 获取post请求的数据

post请求与get请求有不同，需要中间件来处理，

中间件名称: body-parser

```
// 引入body-parser模块
var bodyParser = require("body-parser");

// 配置body-parser
app.use(bodyParser.urlencoded({extended: false}));

```

经过如上配置之后，我们就可以在任意的post请求的处理函数中，通过 `req.body `来获取对应的传递的数据

# 路由

是Express中的十分重要的概念之一

所谓的路由，指的是对URL处理的分配。

路由的处理方式有两种：一种直接往app上去挂载。 一种是通过router对象。

往APP上挂载:

```
// 让express搭建的服务器能够处理指定请求
app.use("/api/regist", function(req, res){ 
})

// 处理get请求
app.get("/api/get", function(req, res) { 
})

// 处理post请求
app.post("/api/post", function(req, res) { 
})


// 动态路由
app.get("/api/a:name/b:age", function(req, res) { 
})
```

通过router对象:

```
// 定义一个路由对象
var Router = express.Router;
var router = new Router();

// 将处理函数 不再挂载到app上 而是挂载到 router上
router.get("/regist", function() {
    console.log("regist");
})
router.get("/login", function() {
    console.log("login")
})
router.get("/list", function() {
    console.log("list");
})
router.get("/detail", function() {
    console.log("detail");
})
// 最后统一往app上进行挂载
app.use("/php/", router);

```

# 后端渲染

通过EJS模块

> 下载EJS模块: cnpm install ejs

> 不需要引入

> 新建一个views文件夹 与app.js同级别 在里面放后缀名为ejs的文件 文件内容自定义

> 语法：<%  %> 用于开辟一个js执行环境   <%=变量%>  =表示输出 等价于php中的 echo 也可以使用 <%-变量%> 
> 区别：如果是 = 会当做文本来处理 如果是 - 会当做html代码来处理

> 渲染方法：
>
> res.render("index.ejs", {
>
> ​    data: ["张&nbsp;三", "李四", "王五", "赵六"]
>
>  })

# Mongo数据库

> 官网：https://www.mongodb.com/
> 下载网址：https://www.mongodb.com/try/download/community

mongo数据库 也是与mysql类似的数据库应用程序。但是又有很大不同。

数据库应用程序分为两类：关系(结构)型数据库、非关系(非结构)型数据库

Mysql的层级关系： 字段 -> 表 -> 库 

Mongo的层级关系： 字段 -> 集合 -> 库

关系型数据库对表结构要求十分严格。如果一个表定下来了，那么它的每一条数据都是有对应的每一个字段的。

非关系型数据库对集合的结构要求不严格。集合里是允许多条数据各不相同的。

## 安装

安装完毕之后 同样的要将环境变量配置。

假设目录是：C:\Program Files\MongoDB\Server\3.4\bin

要将它配置到path中。

测试是否成功： mongo 回车 如果提示

![1605599513762](D:\青岛2006\Node\02_week1day2\图片\1605599513762.png)

说明安装成功。

## 创建数据库

创建一个空的目录 比如 c:/qd2006

调用命令： mongod --dbpath c:/qd2006

如果显示



![1605599687232](D:\青岛2006\Node\02_week1day2\图片\1605599687232.png)

说明数据库成功启动




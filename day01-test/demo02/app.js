/* 
    request  获取url传过来的信息
    response 给浏览器响应信息
*/
//表示引入http模块
var http = require('http');

const url = require('url');

http.createServer(function (request, response) {
    //console.log(request);
    
    //console.log(request.url);// ?name=zhangsan&age=20

    //设置响应头
    response.writeHead(200, { 'Content-Type': 'text/html;charset ="utf-8"' });
    //状态码是200 ，文件类型是html 
    //设置html编码的话需要加一句
    response.write("<head> <meta charset = 'UTF-8'></head>");
    //下面这句话是输出this is nodejs这句话
    //设置了html的字符编码格式后，在下面这一行里就可以写中文了，否则会是乱码
    response.write('你好this is nodejs ');

    if (request.url != '/favicon.ico') {

        var getValue = url.parse(request.url,true).query;

         console.log(url.parse(request.url).query);
         //如果不加true的话返回的是name=zhangsan&age=20

         console.log(url.parse(request.url,true).query);
         console.log('你好');
         
         //加true的话会返回一个对象{name:'张三',age:'20'}

        //getValue就是获取到的对象{name:'张三',age:'20'}

        console.log(`姓名：${getValue.name}--年龄:${getValue.age}`);
        //姓名：zhangsan--年龄：20
    }

    //表示给我们页面上面输出一句话并且结束响应
    response.end('Hello World');  //结束响应，必须写这一句话

}).listen(8080);//监听的端口号

console.log('Server running at http://127.0.0.1:8080/');


/* 
        const http = require("http")
        const host = "127.0.0.1";
        const port = 8080
        const server = http.createServer();
        server.on("request", (requstMsg, respone) => {
            console.log("请求来了",requstMsg.headers)
            //简单请求
            respone.writeHead(200, "OK", {"Content-Type": "text/html; charset=utf-8"});
            respone.end("最简单的http服务");
        })
        server.listen(port, host, () => {
            console.log("服务启动了")
        })
*/



/*
    req request  获取客户端传过来的信息
    res response  给浏览器响应信息
*/


//1、读取文件
// var fs = require('fs');

// //调用模板功能，读取响应的文件

// fs.readFile("./index.html",'utf-8',function (err,data) {
//     //err表示读取过程中可能发生的异常
//     //data表示读取完毕之后的内容
//     console.log(err);
//     console.log(data);

//   });

//2、重命名文件

/* var fs = require('fs');

//rename
fs.rename('haha1.txt', 'dandan.txt', function (err) {
    console.log(err);
});
 */

//3、删除文件
/* var fs = require('fs');
//删除
fs.unlink("index1.html", function (err) {
    console.log("哗啦啦啦");

}) */

//4、URL模块
//定义一个完整的url字符串
// var urlStr = "http://localhost:3000/php/regist.php?username=wanglaowu&password=123#ccc";

// //用于解析url字符串的模块
// var url = require("url");

// var obj = url.parse(urlStr)
// var objtrue = url.parse(urlStr,true)
// console.log(obj);
// console.log(objtrue);

// console.log(url.format({
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3001',
//     port: '3001',
//     hostname: 'localhost',
//     hash: '#ddd',
//     search: '?username=wanglaowu&password=123',
//     query: 'username=wanglaowu&password=123',
//     pathname: '/php/regist.php',
//     path: '/php/regist.php?username=wanglaowu&password=123'
// }));

//5、QueryString模块

// //定义query字符串
// var querystring = "username=wanglaowu&password=123";

// //专门处理query字符串
// var qs = require("querystring");

// var qsobj = qs.parse(querystring);

// console.log(qsobj);
// //querystring可以将字符串转化为对象
// //[Object:null prototype] {username:'wanglaowu',password:"123"}


//6、搭建静态资源服务器
/*
    req request  获取客户端传过来的信息
    res response  给浏览器响应信息
*/
//引入http
var http = require('http');
//引入fs
var fs = require('fs');
//引入url
var url = require("url");
//搭建服务器
var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type' : 'text/html;charset = "utf-8"'});
    res.write("<head> <meta charset = 'UTF-8'></head>")
    if (req.url === '/favicon.ico') {
        res.end('');
        return;
    }
    var obj = url.parse(req.url,true);
    try{
        var data = fs.readFileSync('.' + obj.pathname);
    }catch(e){
        console.log(e);
        
    }
    res.end(data);
  });

  server.listen(3000,()=>{
      console.log('服务启动了le ');
      
  });

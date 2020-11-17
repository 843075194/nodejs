
//6、搭建静态资源服务器
/*
    req request  获取客户端传过来的信息
    res response  给浏览器响应信息
*/

const http = require('http');

var url = require("url");

var fs = require('fs');

http.createServer(function (req, res) {

    let pathname = req.url;

    if (pathname != '/favicon.ico') {
        fs.readFile('./root1' + pathname, (err, data) => {
            if (err) {
                console.log('404');
                return;
            }
            res.writeHead(200,{'Content-Type':'text/html;charset ="utf-8"'});
            res.end(data);
        })


    }
    
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });

    res.end('Hello World');

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

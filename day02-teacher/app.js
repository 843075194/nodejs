


const http = require('http');

const fs = require('fs');

const common = require('./module/common.js');

const path = require('path');

const url = require('url');

http.createServer(function (req, res) {

    //http://127.0.0.1:8081/login.html
    //http://127.0.0.1:8081/index.html

    //1、获取地址
    let pathname = url.parse(req.url).pathname;

    console.log(url.parse(req.url).pathname);
    console.log(url.parse(req.url));
    
    //因为ajax请求的时候json后面会带别的东西
    //所以我们通过pathname可以去掉这些内容
    //我们拿到的数据是这样的
    /* 
    放在最下面了
    */
    pathname = pathname == '/' ? '/index.html' : pathname;

    //可以获取后缀名path.extname() 
    let extname = path.extname(pathname);
    // '.html'   '.css'  '.js'  类型这种
    //2、通过fs模块读取文件
    if (pathname != '/favicon.ico') {

        fs.readFile('./static' + pathname, (err, data) => {

            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
                res.end('404这个页面不存在');
            }
            //这个是引入模块
            let mime = common.getMime(extname);

            res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
            res.end(data);

        })

    }



}).listen(3000);


console.log('Server running at http://127.0.0.1:3000/');

/*
/
/css/public.css
/css/dmb.header.css
/css/zhanshi.css
/css/centerRight.css
/css/dmb.bottom.css
/css/zz.css
/css/Ngrade_login.css
/favicon.ico
*/

/*

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/image/bg/courseBg.png',
  path: '/image/bg/courseBg.png',
  href: '/image/bg/courseBg.png' }
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?20401036201958522',
  query: '20401036201958522',
  pathname: '/json/all.json',
  path: '/json/all.json?20401036201958522',
  href: '/json/all.json?20401036201958522' }
*/
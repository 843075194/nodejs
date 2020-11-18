


const http = require('http');
const fs = require('fs');
const common=require('./module/common.js');
const path=require('path');
const url=require('url');


http.createServer(function (req, res) {
  //1、获取地址
    let pathname=url.parse(req.url).pathname;   
    //css/public.css
    //css/dmb.header.css 
    //因为ajax请求的时候json后面会带别的东西
    //所以我们通过pathname可以去掉这些内容
    //我们拿到的数据是这样的
    pathname=pathname=='/'?'/index.html':pathname;    
    //默认是index.html这个页面  因为返回的第一条是/
    let extname=path.extname(pathname);
     //可以获取后缀名path.extname() 
     // '.html'   '.css'  '.js'  类型这种
    //2、通过fs模块读取文件
    if(pathname!='/favicon.ico'){
        fs.readFile('./static'+pathname,async (err,data)=>{
            if(err){                
                res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});  
                res.end('404这个页面不存在');               
            }
            let mime=await common.getFileMime(extname);
            res.writeHead(200, {'Content-Type': ' '+ mime +';charset="utf-8"'});  
          //res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});  
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
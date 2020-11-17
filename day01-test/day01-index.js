

/*
    req request  获取客户端传过来的信息
    res response  给浏览器响应信息
*/


//1、读取文件
// var fs = require('fs');

// //调用模板功能，读取响应的文件
//    export function readFile(path: PathLike | number, 
//    options: { encoding: BufferEncoding; flag?: string; } | string,
//    callback: (err: NodeJS.ErrnoException | null, data: string) => void): void;

// fs.readFile("./index.html",'utf-8',function (err,data) {
//     //err表示读取过程中可能发生的异常
//     //data表示读取完毕之后的内容
//     console.log(err);
//     console.log(data);

//   });

//2、重命名文件

// var fs = require('fs');

// //rename
// fs.rename('haha1.txt', 'dandan.txt', function (err) {
//     console.log(err);
// });


//3、删除文件

// var fs = require('fs');
// //删除
// fs.unlink("index1.html", function (err) {
//     console.log("哗啦啦啦");

// })

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
//querystring可以将字符串转化为对象
//[Object:null prototype] {username:'wanglaowu',password:"123"}


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
var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html;charset = "utf-8"' });

    res.write("<head> <meta charset = 'UTF-8'></head>")

    if (req.url === '/favicon.ico') {

        res.end('');
        
        return;
    }
    console.log(req.url);
    
    var obj = url.parse(req.url, true);

    try {
        var data = fs.readFileSync('.' + obj.pathname);
    } catch (e) {
        console.log(e);

    }
    res.end(data);
});

server.listen(3000, () => {
    console.log('服务启动了le ');

});

//7、fs.mkdir  创建目录

// var fs = require("fs");

// fs.mkdir("./html",(err)=>{

//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建成功');

// })

//8、fs.writeFile  创建并写入文件

// var fs = require('fs');
// fs.writeFile('./html/index.html','你好nodejs',function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建并写入文件成功');
//   })

//9、fs.appendFile 追加文件

//   var fs = require('fs');
//   fs.appendFile('./html/index2.html','今天天气很好',(err)=>{

//       if (err) {
//           console.log(err);
//           return;
//       }

//       console.log('appendFile 成功');

//   })
//不止会创建，而且还会添加内容

//10、fs.readFile 读取文件

//   var fs = require('fs');

//   fs.readFile('./html/index1.html',(err,data)=>{
//       if (err) {
//           console.log(err);
//           return;
//       }
//       console.log(data);
//       console.log(data.toString());
//       //把Buffer转化成string类型
//   })

//11、fs.readdir读取目录

//   var fs = require('fs');

//   fs.readdir("./html",(err,data)=>{
//       if (err) {
//           console.log(err);
//           return;
//       }
//       console.log(data);

//   })

//12、fs.rename 重命名  功能1、表示重命名 2、移动文件

// var fs = require("fs");

// fs.rename("./css/aaa.css",'./css/index.css',(err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('重命名成功');

// })
//这样就把aaa.css重命名成了index.css  

//13、fs.rmdir  删除目录
// var fs = require("fs");
// fs.rmdir('./aaa',(err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('删除目录成功');

// }) 

//14、fs.unlink  删除文件

// var fs = require('fs');

//  fs.unlink("./aaa/index.html",(err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('删除文件成功');
// })
// fs.readdir('./aaa',(err,data)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);

// })

/* ------------------------------------------- */
//练习小项目
//判断服务器上面有没有upload目录，如果没有创建这个目录，如果有的话不能操作
/* 
const fs = require('fs');

var path = './upload';

var con = '你好nodejs';

var text = './upload/index.html'

fs.stat('./upload', (err, data) => {
  if (err) {
    //执行创建目录
    mkdir(path);
    return;
  }

  if (data.isDirectory()) {
    console.log('upload目录已经存在');
    writeFile(text,con);
  } else {
    //首先删除文件，再去执行创建目录
    fs.unlink(path, (err) => {
      if (!err) {

        mkdir(path);

        writeFile(text,con);

      } else {
        console.log('请检查传入的数据是否正确');
      }
    })

  }
})

function mkdir(dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  })
}

function writeFile(dir, con) {
  fs.writeFile(dir, con, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('创建并写入文件成功');

  })
}
 */
/* ------------------------------------------- */
// var mkdirp = require('mkdirp');

// mkdirp('./uploaddir1/aaa/bb')

//wwwroot文件夹下面有images css js 以及index.html,找出wwwroot目录下面所有的目录

// var fs = require('fs');
// fs.writeFile('./html/index.html','你好nodejs',function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建并写入文件成功');
//   })

// var mkdirp = require('mkdirp');

// // mkdirp('./wwwroot')

// var fs = require('fs');

// mkdirp('./wwwroot/images,./wwwroot/css,./wwwroot/js')

//13、fs.rmdir  删除目录
// var fs = require("fs");
// fs.rmdir('./sss', (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('删除目录成功');

// })


/* -------------------------- */
var fs = require('fs')
var path = './root1';
var dirArr = [];
fs.readdir(path, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);

  (function getDir(i) {
    if (i === data.length) {
      console.log(dirArr);
      console.log('执行完成，退出递归');
      return;
    }
    //root1/css   root1/js  root1/img
    fs.stat(path + '/' + data[i], (error, stats) => {
      if (stats.isDirectory()) {
        dirArr.push(data[i]);
      }
      getDir(i + 1);
    })
  })(0) //一开始把i=0传入
})

// 读取目录下面的文件

// var fs = require('fs')

// var path = './aaa';

// fs.readdir(path,(err,data)=>{
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
//   //['css','img','index.html','js']
// })
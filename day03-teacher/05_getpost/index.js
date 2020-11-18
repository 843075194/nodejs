// 读取目录下面的文件
var fs = require('fs')

    var path = './static/css/zz.css';

    fs.readdir(path,(err,data)=>{

    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    //['css','img','index.html','js']
})
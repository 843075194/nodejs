// 读取目录下面的文件
var fs = require('fs')

    var path = './static/css/zz.css';

    fs.readFile(path,(err,data)=>{
        //这个可以把结构都读取出来
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
    //['css','img','index.html','js']
})
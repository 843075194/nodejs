const fs = require('fs');
const path = require('path');
const url = require('url');

//私有方法
let getFileMime = function (extname) {

    var data = fs.readFileSync('./data/mime.json'); //同步方法
    //readFile是读取这个mime.json里的每一项数据的
    //所以下面mimeObj就可以拿到每一项的值
    let mimeObj = JSON.parse(data.toString());
    //console.log(mimeObj);
    //'.json':'application/json'

    //data是buffer类型的，转成json串toString()
    // console.log(mimeObj[extname]);
    return mimeObj[extname];
    //这个extname是
    // let extname=path.extname(pathname);
    //可以获取后缀名path.extname() 
    // '.html'   '.css'  '.js'  类型这种
    //'.json':'application/json'
    //extname是每个文件的后缀名
}

exports.static = function (req, res, staticPath) {

    //1、获取地址
    let pathname = url.parse(req.url).pathname;
    //css/public.css
    //css/dmb.header.css 
    //console.log(pathname);

    pathname = pathname == '/' ? '/index.html' : pathname;

    let extname = path.extname(pathname);
    //可以获取后缀名path.extname() 
    // '.html'   '.css'  '.js'  类型这种
    //2、通过fs模块读取文件
    if (pathname != '/favicon.ico') {
        try {
            let data = fs.readFileSync('./' + staticPath + pathname);
            console.log(data);
            if (data) {
                let mime = getFileMime(extname);
                res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
                res.end(data);
            }
        } catch (error) {

        }
    }

}




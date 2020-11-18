const fs=require('fs');

exports.getMime = function (extname) {

    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        default:
            return 'text/html';

    }

}

exports.getFileMime = function (extname) {

    var data=fs.readFileSync('./data/mime.json'); //同步方法
    //readFile是读取这个mime.json里的每一项数据的
    //所以下面mimeObj就可以拿到每一项的值
    let mimeObj=JSON.parse(data.toString());   
    //data是buffer类型的，转成json串toString()
    // console.log(mimeObj[extname]);
    return mimeObj[extname];    
    // let extname=path.extname(pathname);
    //可以获取后缀名path.extname() 
     // '.html'   '.css'  '.js'  类型这种
    //extname是每个文件的后缀名

}




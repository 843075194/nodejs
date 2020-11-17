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

   return new Promise((resolve,reject)=>{
        fs.readFile('./data/mime.json',(err,data)=>{
            //readFile是读取这个mime.json里的每一项数据的
            //所以下面mimeObj就可以拿到每一项的值
            if(err){
                console.log(err);
                reject(err);
                return;
            }
            let mimeObj=JSON.parse(data.toString());
            //data是buffer类型的，转成json串toString()
            // console.log(mimeObj[extname]);

            resolve(mimeObj[extname]);
        })
   })

}




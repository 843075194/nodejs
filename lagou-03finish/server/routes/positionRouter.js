// M：Model  负责模型层
// V：View   负责视图层
// C：Controller 负责具体的执行逻辑

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

//引入C层
var positionController = require('../controller/positoinController');
var formidable = require("formidable");
var formaDate = require('../modules/formatDate')

router.get('/position', async function (req, res) {
    console.log("获取职位信息");
    try {
        var arr = await positionController.find();
        res.render("success", {
            data: JSON.stringify(arr)
        })
    } catch (error) {
        console.log(error);
        res.send({
            error: 1,
            data: "执行失败"
        })
    }
});

router.post('/position/add', doFile, async function (req, res) {

    try {
        // await positionController.add(fields)
        await positionController.add(req.qianfeng)
        res.render("success", {
            data: JSON.stringify({
                msg: "上传成功"
            })
        })

    } catch (err) {
        console.log(err);
        res.render("error", {
            data: JSON.stringify({
                msg: "上传失败"
            })
        })
    }

})

router.get("/position/getOne", async function (req, res) {
    // 获取前端传递过来的id
    var id = req.query.id;
    console.log(req.query.id);
    console.log(req.url);///position/getOne?id=5fb74c5f46ae272c5cb507a1
    //req.query指的就是前段传过来的json对象
    // 通过控制器 获取对应信息
    try {
        var obj = await positionController.getOne(id)
        res.render("success", {
            data: JSON.stringify({
                msg: obj
            })
        })
    } catch (err) {
        res.render("error", {
            data: JSON.stringify({
                msg: "查询失败"
            })
        })
    }
})

function doFile(req, res, next) {
    //使用formidable处理请求
    var form = new formidable();
    //设置上传路径
    form.uploadDir = path.resolve(__dirname, "../uploads");
    //使用parse方法进行解析req
    form.parse(req, function (err, fields, files) {
        console.log(fields);
        console.log(files);
        if (err) {
            res.render('error', {
                data: JSON.stringify({
                    msg: "文件上传失败"
                })
            })
            return;
        }
        var oldpath = files.companyLogo.path;
        // 通过path模块解析出最后一段 当做文件名
        var obj = path.parse(files.companyLogo.path);
        console.log(obj);
        // 获取上传过来的 文件的名字 截取其中的后缀名
        var extName = files.companyLogo.name.slice(files.companyLogo.name.lastIndexOf('.'));
        var newPath = path.resolve(__dirname, "../uploads/" + obj.name + extName);
        console.log(oldpath);
        //D:\李兰波老师视频\day01-nodejs\Node\teacher\lagou\server\uploads\upload_b14184e5a739a300343b8a7352680fbc
        console.log(newPath);
        //D:\李兰波老师视频\day01-nodejs\Node\teacher\lagou\server\uploads\upload_b14184e5a739a300343b8a7352680fbc.jpg
        fs.rename(oldpath, newPath, async function (err) {
            if (err) {
                res.render('error', {
                    data: JSON.stringify({
                        msg: "改名失败"
                    })
                })
                return;
            }
            //fields里面存储着我们表单存储的每一项的数据
            //但是目前里面没有companyLogo和createTime
            // 因为缺少了图片路径 补充一个
            fields.companyLogo = '/' + obj.name + extName;
            // 因为缺少了发布时间 补充一个
            fields.createTime = formaDate(new Date());

            console.log(fields);
            if (files.companyLogo.size === 0) {
                delete fields.companyLogo;
            }

            req.qianfeng = fields;
            console.log(req.qianfeng);
            next();
        })
    })
}

router.post("/position/update", doFile, async function (req, res) {
    //获取req.qianfeng
    //调用修改方法
    console.log(req.qianfeng._id);
    try {
        await positionController.update(req.qianfeng._id, req.qianfeng)
        res.render("success", {
            data: JSON.stringify({
                msg: "修改成功"
            })
        })
    } catch (error) {
        res.render("error", {
            data: JSON.stringify({
                msg: "修改失败"
            })
        })
    }
})

router.get("/position/remove",async function (req, res) {
    // var id = req.query.id;
    var obj = {_id:req.query.id}
    console.log(obj);
    console.log('删除到这了');
    //通过控制器 获取对应信息
    try {
        console.log('进来了');
        await positionController.remove(obj)
        res.render("success", {
            data: JSON.stringify({
                msg: "删除成功"
            })
        })
    } catch (error) {
        console.log(error);
        res.render("error", {
            data: JSON.stringify({
                msg: "删除失败"
            })
        })
    }
})


/* fields ==> 
{ companyName: '企鹅',
  positionName: '雪人',
  city: '北极',
  salary: '11k-22k',
  type: '玩吧',
  experience: '无',
  degree: '耐冻',
  description: '耐冻',
  companyLogo: '/upload_57ef4790ca7be85ab90337d05bf082b1.jpg',
  createTime: '2020-11-20  13:4:13' }
  这个是添加之后有的
  */

/* 
obj===>
{ root: 'D:\\',
  dir:
   'D:\\李兰波老师视频\\day01-nodejs\\Node\\teacher\\lagou\\server\\uploads',
  base: 'upload_b615d4a38fc43ceb7b56f23683b46313',
  ext: '',
  name: 'upload_b615d4a38fc43ceb7b56f23683b46313' }
*/

/* 
files===>
{ companyLogo:
   File {
     _events: [Object: null prototype] {},
     _eventsCount: 0,
     _maxListeners: undefined,
     size: 3315,
     path:
      'D:\\李兰波老师视频\\day01-nodejs\\Node\\teacher\\lagou\\server\\uploads\\upload_b615d4a38fc43ceb7b56f23683b46313',
     name: 'chengzi.jpg',
     type: 'image/jpeg',
     hash: null,
     lastModifiedDate: 2020-11-20T04:38:21.508Z,
     _writeStream:
      WriteStream {
        _writableState: [WritableState],
        writable: false,
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        path:
         'D:\\李兰波老师视频\\day01-nodejs\\Node\\teacher\\lagou\\server\\uploads\\upload_b615d4a38fc43ceb7b56f23683b46313',
        fd: null,
        flags: 'w',
        mode: 438,
        start: undefined,
        autoClose: true,
        pos: undefined,
        bytesWritten: 3315,
        closed: false } } }
*/




module.exports = router;



/* console.log(req.qianfeng);
    { companyName: '桃子',
    positionName: '吃水喝饭11',
    city: '青岛',
    salary: '12K',
    type: '玩',
    experience: '无',
    degree: '无',
    description: '玩就行',
    _id: '5fb74c5f46ae272c5cb507a1',
    createTime: '2020-11-21  16:20:33' } */
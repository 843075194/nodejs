// M：Model  负责模型层
// V：View   负责视图层
// C：Controller 负责具体的执行逻辑

var express = require('express');

var router = express.Router();
//引入C层
var positionController = require('../controller/positoinController');

router.get('/position',async function (req,res) {
     console.log("获取职位信息");
    try {
        var arr = await positionController.find();
            res.render("success",{
                data:JSON.stringify(arr)
            })
    } catch (error) {
        console.log(error);
        res.send({
            error:1,
            data:"执行失败"
        })
    }
  });
  module.exports = router;

 
  
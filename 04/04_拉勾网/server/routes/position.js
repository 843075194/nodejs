var uploads = require("../middleware/uploads");
// 引入express模块
let express = require("express");
// 使用路由模块
let router = express.Router();
// 引入控制器模块
let {add, list, remove, findOne, update} = require("../controller/posController");

// 挂载路由
router.use("/add", uploads, add);
router.use("/list", list);
router.use("/remove", remove);
router.use("/findOne", findOne);
router.use("/update", update);

// 暴露路由对象
module.exports = router;
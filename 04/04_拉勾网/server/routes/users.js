var express = require("express");

var router = express.Router();

var {signin, signup} = require("../controller/userController.js");


// 登录路由
router.use("/signin", signin);
router.use("/signup", signup);


module.exports = router;
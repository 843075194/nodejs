//引入express
var express = require('express');
//生成router
var userRouter = express.Router();
//引入控制器层
var userController = require("../controller/userController");

userRouter.post("/user/signin", userController.signin)

userRouter.post("/user/signup", userController.signup)

//暴露userRouter
module.exports = userRouter;
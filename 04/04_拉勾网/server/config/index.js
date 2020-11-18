// 引入mongoose模块
var mongoose = require("mongoose");
// 连接数据库
mongoose.connect("mongodb://localhost:27017/lagou", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// 暴露mongoose模块
module.exports = mongoose;
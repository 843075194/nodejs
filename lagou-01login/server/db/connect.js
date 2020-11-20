//负责连接数据库
var mongoose = require('mongoose');

//连接
mongoose.connect("mongodb://localhost:27017/lagou", {useNewUrlParser: true, useUnifiedTopology: true});

//暴露
module.exports = mongoose;
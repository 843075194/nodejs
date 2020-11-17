// 定义query字符串
var querystring = "username=wanglaowu&password=123";

// 专门处理query字符串
var qs = require("querystring");

var qsobj = qs.parse(querystring);

console.log(qsobj);
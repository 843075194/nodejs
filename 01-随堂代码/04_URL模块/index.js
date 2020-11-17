// 定义一个完整的URL字符串
var urlStr = "http://localhost:3000/php/regist.php?username=wanglaowu&password=123#ccc";
// 用于解析url字符串的模块
var url = require("url");

// url.parse() 方法用于解析url字符串
var obj = url.parse(urlStr, true);
// console.log(obj.pathname)
// console.log(obj.query)

// url.format
console.log(url.format({
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:3001',
  port: '3001',
  hostname: 'localhost',
  hash: '#ddd',
  search: '?username=wanglaowu&password=123',
  query: 'username=wanglaowu&password=123',
  pathname: '/php/regist.php',
  path: '/php/regist.php?username=wanglaowu&password=123'
}));

// JSON.parse  将JSON字符串解析为JSON对象
// JSON.stringify 将JSON对象解析为JSON字符串
// url.parse 将url字符串解析为url对象
// url.format 将url对象转为url字符串
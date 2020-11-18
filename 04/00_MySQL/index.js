// 引入模块
var mysql = require("mysql");

// 调用方法配置参数
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'qd2006'
});
 
connection.connect();
 
connection.query('insert into users values("wanglaoliu", "123456", "12")', function (error, results, fields) {
    console.log(error);
    console.log(results);
    console.log(fields);
});
 
connection.end();

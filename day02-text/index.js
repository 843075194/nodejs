

/*
    req request  获取客户端传过来的信息
    res response  给浏览器响应信息
*/

//  1、es6之前写的回调函数

// function getData(callback) { 

//     setTimeout(function () {
//         var name = '张三';
//         callback(name);
//         //callback调用的就是getData()括号里的函数
//       },100);
//  }

// //调用getData这个函数
//  getData(function (aaa) { 
//      console.log(aaa);
//   })

/* 2、Promise方法  
    resolve ： 成功的回调函数
    reject  ： 失败的回调函数 
    */

// var p = new Promise(function (resolve,reject) { 
//     setTimeout(function () {
//         var name = '张三';
//         resolve(name);
//         //在函数里进行调用，调用的是then里的函数
//         //把name传给了then函数里的data
//       },1000)
//  })

//  p.then(function (data) { 
//      console.log(data);

//   })

/* async  await  异步方法 */
// async function test() { 
//     return '您好nodejs'
//  }
//  async function main() { 
//      var data = await test();//获取异步方法里面的数据
//      console.log(data);

//   }
//   main();

//  ====>  进阶版

// async function test() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             var name = '张三 222';
//             resolve(name);
//         }, 0)
//     })
// }
// async function main() {
//     var data = await test();
//     //获取异步方法里面的数据
//     console.log(data);
// }
// main();



// var fs = require('fs')
// var path = './root1';
// var dirArr = [];
// fs.readdir(path, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
//   (function getDir(i) {
//     if (i === data.length) {
//       console.log(dirArr);
//       console.log('执行完成，退出递归');
//       return;
//     }
//     //root1/css   root1/js  root1/img
//     fs.stat(path + '/' + data[i], (error, stats) => {
//       if (stats.isDirectory()) {
//         dirArr.push(data[i]);
//       }
//       getDir(i + 1);
//     })
//   })(0) //一开始把i=0传入
// })


// 读取目录下面的文件
// var fs = require('fs')

//     var path = './root1';

//     fs.readdir(path,(err,data)=>{

//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     //['css','img','index.html','js']
// })
//1、定义一个isDir的方法判断一个资源到底是目录还是文件

// var fs = require('fs')
// var path = './root1';

// async function isDir(path) {
//     return new Promise((resolve, reject) => {
//         fs.stat(path, (error, stats) => {
//             // if (error) {
//             //     console.log(error);
//             //     reject(error);
//             //     return;
//             // }
//             if (stats.isDirectory()) {
//                 resolve(true);
//             } else {
//                 resolve(false);
//             }
//         })
//     })
// }

// //2、获取root1文件夹里的所有资源 循环遍历
// function main() {
//     //var path = './root1'
//     var dirArr = [];
//     fs.readdir(path, async (err, data) => {
//         // if (err) {
//         //     console.log(err);
//         //     return;
//         // }
//         for (let i = 0; i < data.length; i++) {
//             //在这里调用的上面的函数
//             //上面的函数返回是在if判断力，resolve(true)
//             //也就是说如果存在呢么传过来的就是true
//             if (await isDir(path + '/' + data[i])) {
//                 //如果是true的话就返回到新数组dirArr里
//                 dirArr.push(data[i]);
//             }
//         }
//         console.log(dirArr);
//     })
// }
// main();
//[ 'css', 'icon1', 'icon2', 'img', 'js' ]

/* --------------重新写了一遍----------------- */
// var fs = require('fs')
// var path = './root1';

// async function isDir(path) {
//     return new Promise((resolve, reject) => {
//         fs.stat(path, (error, stats) => {
//             if (stats.isDirectory()) {
//                 resolve(true);
//             } else {
//                 resolve(false);
//             }
//         })
//     })
// }
// //2、获取root1文件夹里的所有资源 循环遍历
// function main() {
//     var path = './root1'
//     var dirArr = [];
//     fs.readdir(path, async (err, data) => {
//         for (let i = 0; i < data.length; i++) {
//             //在这里调用的上面的函数
//             //上面的函数返回是在if判断力，resolve(true)
//             //也就是说如果存在呢么传过来的就是true
//             if (await isDir(path + '/' + data[i])) {
//                 //如果是true的话就返回到新数组dirArr里
//                 dirArr.push(data[i]);
//             }
//         }
//         console.log(dirArr);
//     })
// }
// main();
//[ 'css', 'icon1', 'icon2', 'img', 'js' ]


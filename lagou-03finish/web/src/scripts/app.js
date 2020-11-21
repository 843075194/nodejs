

var homeTpl = require("./views/home.html");
var positionTpl = require("./views/position.html");
var positionAddTpl = require("./views/position.add.html");
var positionUpdateTpl = require("./views/position.update.html");
console.log(homeTpl)

var userInfoTpl = require('./views/userInfo.html');

//这部分是使页面在初始化的时候就加载上了登录和注册两个按钮
var isSignin = false;
var greeting = "";
var userHTML = template.render(userInfoTpl, {
	isSignin,
	greeting
})
var $userModel = $('#userModel');
$userModel.html(userHTML);


// 这里写前端代码 因为用到了webpack  所以这里要使用commonjs规范
// 可以使用 $ 
var $home = $("#home");
var $position = $("#position");
var $content = $("#content");


$home.click(function () {
	$content.html(homeTpl);
})
function sendAjax() {
	$.ajax({
		url: "/api/position",
		type: "get",
		data: {},
		dataType: "json",
		success(data) {
			if (!data.error) {
				console.log(data.msg)
				// 成功的时候
				$content.html(template.render(positionTpl, {
					data: data.msg
				}));
				return;
			}
		}
	})
}
//position是职位列表
$position.click(function () {
	// 先发送请求 获取职位信息 
	// 当请求回来之后 我们可以将数据与模板结合生成html
	sendAjax();
	// $content.html(positionTpl);
})

//addbtn是内容区的添加按钮
$content.on("click", "#addbtn", function () {
	$content.html(positionAddTpl)
})
//posback这个是点击修改后的返回按钮
$content.on("click", "#posback", function () {
	sendAjax();
})
//possubmit这个是点击修改后的提交按钮
// 通过委托模式添加 添加职位表单的点击事件
//possubmit因为这个按钮有个link属性，这个属性是具体跳转哪个路由的
$content.on("click", "#possubmit", function () {
	console.log(111)
	// 原生上传ajax的话需要FormData 这是一个构造函数 专门用于实例化一个表单数据对象
	var url = $(this).attr("link")
	//这个地方的url，因为你点添加和你点修改弹出的html页面是不一样的
	//并且这两个页面都有提交这个按钮，所以我们绑定了不同的link属性
	//这样来区别到底该跳转到具体哪一个路由下面
	// 获取表单元素
	var $possave = $("#possave");
	// console.log($possave.serialize());  // 表单序列化 获取文本信息
	var fm = new FormData($possave[0]);
	// 发送ajax请求
	$.ajax({
		// url: "/api/position/add",
		url,
		data: fm,
		dataType: "json",
		method: "post",
		// 如果是文件上传 这里要额外配置两个配置项 
		// contentType   
		contentType: false,
		// processData
		processData: false,
		success(data) {
			sendAjax();
		}
	})
})

// //connect内容区域 的 修改  按钮

$content.on("click", ".pos-edit", function () {
	// 当点击修改的时候 
	console.log(111)
	// 获取当前这个信息的id
	var id = $(this).attr("posid");
	console.log(id)
	// 发送 ajax 把id给服务器 让服务器返回这个id对应的数据
	$.ajax({
		url: "/api/position/getOne",
		data: {
			id
		},
		dataType: "json",
		success(data) {
			console.log(data);
			// 请求成功之后 根据模板与数据 渲染形成html文本
			var html = template.render(positionUpdateTpl, {
				data: data.msg.msg
			})
			// console.log(html)
			//  使用html文件
			$content.html(html);
		}
	})
})

//删除操作
 $content.on("click", ".pos-remove", function () { 
	 var id = $(this).attr("posid");
	 $.ajax({
		url:'/api/position/remove',
		data: {
			id
		},		
		dataType: "json",
		success(data) {
			sendAjax();
		}
	})
 })


/* data  =====>
			{error: 0, msg: {…}}
			error: 0
			msg:
			msg: {_id: "5fb74c5f46ae272c5cb507a1", companyName: "桃子", positionName: "喝茶", city: "青岛", salary: "12K", …}
			__proto__: Object
			__proto__: Object */

var url = "";

$userModel.on('click', "#btn-signin", function () {
	url = "/api/user/signin";
	console.log(url);
	//  /api/user/signin
})

$userModel.on('click', "#btn-signup", function () {
	url = '/api/user/signup'
	console.log(url);
	//  /api/user/signup
})

//这个是点登录和注册弹出的提交的按钮
$userModel.on('click', "#user-submit", function () {
	//获取用户填写的表单数据
	var username = $("#username").val();
	var password = $("password").val();
	//拿到输入的用户名和密码
	console.log(url);
	//发送ajax给后端
	$.ajax({
		url,
		data: {
			username, password
		},
		type: "post",
		dataType: "json",
		success(data) {
			if (!data.error) {
				//成功的时候error是0，所以!0就是true了
				isSignin = true;
				greeting = data.msg.username;
				$userModel.html(template.render(userInfoTpl, {
					isSignin,
					greeting
				}))
			}
		}
	})
})
$userModel.on('click','#user-signout',function () {
	isSignin = false;
	greeting = "";
	$userModel.html(template.render(userInfoTpl,{
		isSignin,
		greeting
	}))
  })
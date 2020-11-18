// 引入其他模块
var homeTpl = require("./views/Home.html");
var positionTpl = require("./views/position.html");
var positionAddTpl = require("./views/position.add.html");
var positionUpdateTpl = require("./views/position.update.html");
var userTpl = require("./views/userInfo.html");

// 因为各个地方都要复用 所以封装成函数
function renderList() {
	// 发送ajax请求 获取数据
	$.ajax({
		url: "/api/position/list",
		type: "get",
		dataType:"json",
		success: data => {
			var html = template.render(positionTpl, {
				data: data.data.message
			});
			$contentHeader.html(html)
		}
	});
}

// 获取右侧的内容区域
var $contentHeader = $(".content-header");
$(".sidebar-menu li").click(function() {
	
	switch ($(this).attr("link")) {
		case "home.html" :
			$contentHeader.html(homeTpl);
		break;
		case "position.html":
			renderList()
		break;
	}
});
// 删除
$contentHeader.on("click", ".pos-remove", function() {
	var id = $(this).attr("posid");
	$.ajax({
		url: "/api/position/remove",
		type: "get",
		data: {
			id
		},
		dataType: "json",
		success: message => {
			console.log(message);
			if (message.flag) {
				renderList()
			} else {
				alert("删除失败")
			}
		}
	})
})


// 登录注册模块相关
var $userModel = $("#userModel");
var isSignin = false;
var greeting = "大帅哥";
function renderUserModel() {
	var userHTML = template.render(userTpl, {isSignin, greeting}); 
	$userModel.html(userHTML); 
}
renderUserModel();
// 点击登录按钮或者注册按钮时，确定发送标记
var url = "";
$userModel.on("click", "#btn-signin", function() {
	url = "/api/user/signin";
})

$userModel.on("click", "#btn-signup", function() {
	url = "/api/user/signup";
});

// 登录/注册按钮
$userModel.on("click", "#user-submit", function() {
	// 获取表单数据 发送ajax
	var username = $("#username").val();
	var password = $("#password").val();
	// 发送ajax
	$.ajax({
		url,
		data: {username, password},
		type: "post",
		dataType: "json",
		success: data => {
			if (data.flag) {
				if (url.indexOf("signin") !== -1) {
					localStorage.setItem("token", data.data.token);
				}
				isSignin = true;
				greeting = username;
				renderUserModel();
			}
		}
	})
})


// 注册

// 修改
$contentHeader.on("click", ".pos-edit", function() {
	// 获取id
	var id = $(this).attr("posid");
	// 发送ajax请求获取当前的信息
	$.ajax({
		url: "/api/position/findOne",
		type: "get",
		data: {
			id
		},
		dataType: "json",
		success: message => {
			console.log(message);
			var data = message.data.message;
			console.log(data);
			// 根据模板渲染html
			var html = template.render(positionUpdateTpl, {
				data
			})
			$contentHeader.html(html);
		}
	})

})
$contentHeader.on("click", "#addbtn", function() {
	$contentHeader.html(positionAddTpl);
});
$contentHeader.on("click", "#posback", function() {
	renderList();
});
$contentHeader.on("click", "#possubmit", function() {
	$("#possave").ajaxSubmit({
        dataType:"json",
        success:data=>{
            if(data.flag){
                renderList()
            }else{
                alert("添加操作失败")
            }
        }
    })
});
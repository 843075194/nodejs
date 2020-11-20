var homeTpl = require("./views/home.html");
var positionTpl = require("./views/position.html"); 
var positionAddTpl = require("./views/position.add.html");
var positionUpdateTpl = require("./views/position.update.html");
console.log(homeTpl)
// 这里写前端代码 因为用到了webpack  所以这里要使用commonjs规范
// 可以使用 $ 
var $home = $("#home");
var $position = $("#position");
var $content = $("#content");


$home.click(function() {
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
$position.click(function() {
	// 先发送请求 获取职位信息 
	// 当请求回来之后 我们可以将数据与模板结合生成html
	sendAjax();
	// $content.html(positionTpl);
})


$content.on("click", "#addbtn", function() {
	$content.html(positionAddTpl)
})

$content.on("click", "#posback", function() {
	sendAjax();
})

// 通过委托模式添加 添加职位表单的点击事件
$content.on("click", "#possubmit", function() {
	console.log(111)
	// 原生上传ajax的话需要FormData 这是一个构造函数 专门用于实例化一个表单数据对象
	// 获取表单元素
	var $possave = $("#possave");
	// console.log($possave.serialize());  // 表单序列化 获取文本信息
	var fm = new FormData($possave[0]);

	// 发送ajax请求
	$.ajax({
		url: "/api/position/add",
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
$content.on("click", ".pos-edit", function() {
	// 当点击修改的时候 
	// console.log(111)
	// 获取当前这个信息的id
	var id = $(this).data("posid");
	// console.log(id)
	// 发送 ajax 把id给服务器 让服务器返回这个id对应的数据
	$.ajax({
		
	})
})

$content.on("click", ".pos-edit", function() {
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
			console.log(html)
			//  使用html文件
			$content.html(html);

		}
	})
})
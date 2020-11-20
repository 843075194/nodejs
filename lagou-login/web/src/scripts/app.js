var homeTpl = require("./views/home.html");
var positionTpl = require("./views/position.html"); 
var positionAddTpl = require("./views/position.add.html");

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
			console.log(data);
			if (!data.error) {
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
	console.log(1);
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
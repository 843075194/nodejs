/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nvar homeTpl = __webpack_require__(/*! ./views/home.html */ \"./src/scripts/views/home.html\");\r\nvar positionTpl = __webpack_require__(/*! ./views/position.html */ \"./src/scripts/views/position.html\");\r\nvar positionAddTpl = __webpack_require__(/*! ./views/position.add.html */ \"./src/scripts/views/position.add.html\");\r\nvar positionUpdateTpl = __webpack_require__(/*! ./views/position.update.html */ \"./src/scripts/views/position.update.html\");\r\nconsole.log(homeTpl)\r\n\r\nvar userInfoTpl = __webpack_require__(/*! ./views/userInfo.html */ \"./src/scripts/views/userInfo.html\");\r\n\r\n//这部分是使页面在初始化的时候就加载上了登录和注册两个按钮\r\nvar isSignin = false;\r\nvar greeting = \"\";\r\nvar userHTML = template.render(userInfoTpl, {\r\n\tisSignin,\r\n\tgreeting\r\n})\r\nvar $userModel = $('#userModel');\r\n$userModel.html(userHTML);\r\n\r\n\r\n// 这里写前端代码 因为用到了webpack  所以这里要使用commonjs规范\r\n// 可以使用 $ \r\nvar $home = $(\"#home\");\r\nvar $position = $(\"#position\");\r\nvar $content = $(\"#content\");\r\n\r\n\r\n$home.click(function () {\r\n\t$content.html(homeTpl);\r\n})\r\nfunction sendAjax() {\r\n\t$.ajax({\r\n\t\turl: \"/api/position\",\r\n\t\ttype: \"get\",\r\n\t\tdata: {},\r\n\t\tdataType: \"json\",\r\n\t\tsuccess(data) {\r\n\t\t\tif (!data.error) {\r\n\t\t\t\tconsole.log(data.msg)\r\n\t\t\t\t// 成功的时候\r\n\t\t\t\t$content.html(template.render(positionTpl, {\r\n\t\t\t\t\tdata: data.msg\r\n\t\t\t\t}));\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t}\r\n\t})\r\n}\r\n//position是职位列表\r\n$position.click(function () {\r\n\t// 先发送请求 获取职位信息 \r\n\t// 当请求回来之后 我们可以将数据与模板结合生成html\r\n\tsendAjax();\r\n\t// $content.html(positionTpl);\r\n})\r\n\r\n//addbtn是内容区的添加按钮\r\n$content.on(\"click\", \"#addbtn\", function () {\r\n\t$content.html(positionAddTpl)\r\n})\r\n//posback这个是点击修改后的返回按钮\r\n$content.on(\"click\", \"#posback\", function () {\r\n\tsendAjax();\r\n})\r\n//possubmit这个是点击修改后的提交按钮\r\n// 通过委托模式添加 添加职位表单的点击事件\r\n//possubmit因为这个按钮有个link属性，这个属性是具体跳转哪个路由的\r\n$content.on(\"click\", \"#possubmit\", function () {\r\n\tconsole.log(111)\r\n\t// 原生上传ajax的话需要FormData 这是一个构造函数 专门用于实例化一个表单数据对象\r\n\tvar url = $(this).attr(\"link\")\r\n\t//这个地方的url，因为你点添加和你点修改弹出的html页面是不一样的\r\n\t//并且这两个页面都有提交这个按钮，所以我们绑定了不同的link属性\r\n\t//这样来区别到底该跳转到具体哪一个路由下面\r\n\t// 获取表单元素\r\n\tvar $possave = $(\"#possave\");\r\n\t// console.log($possave.serialize());  // 表单序列化 获取文本信息\r\n\tvar fm = new FormData($possave[0]);\r\n\t// 发送ajax请求\r\n\t$.ajax({\r\n\t\t// url: \"/api/position/add\",\r\n\t\turl,\r\n\t\tdata: fm,\r\n\t\tdataType: \"json\",\r\n\t\tmethod: \"post\",\r\n\t\t// 如果是文件上传 这里要额外配置两个配置项 \r\n\t\t// contentType   \r\n\t\tcontentType: false,\r\n\t\t// processData\r\n\t\tprocessData: false,\r\n\t\tsuccess(data) {\r\n\t\t\tsendAjax();\r\n\t\t}\r\n\t})\r\n})\r\n\r\n// //connect内容区域 的 修改  按钮\r\n\r\n$content.on(\"click\", \".pos-edit\", function () {\r\n\t// 当点击修改的时候 \r\n\tconsole.log(111)\r\n\t// 获取当前这个信息的id\r\n\tvar id = $(this).attr(\"posid\");\r\n\tconsole.log(id)\r\n\t// 发送 ajax 把id给服务器 让服务器返回这个id对应的数据\r\n\t$.ajax({\r\n\t\turl: \"/api/position/getOne\",\r\n\t\tdata: {\r\n\t\t\tid\r\n\t\t},\r\n\t\tdataType: \"json\",\r\n\t\tsuccess(data) {\r\n\t\t\tconsole.log(data);\r\n\t\t\t// 请求成功之后 根据模板与数据 渲染形成html文本\r\n\t\t\tvar html = template.render(positionUpdateTpl, {\r\n\t\t\t\tdata: data.msg.msg\r\n\t\t\t})\r\n\t\t\t// console.log(html)\r\n\t\t\t//  使用html文件\r\n\t\t\t$content.html(html);\r\n\t\t}\r\n\t})\r\n})\r\n\r\n//删除操作\r\n $content.on(\"click\", \".pos-remove\", function () { \r\n\t var id = $(this).attr(\"posid\");\r\n\t $.ajax({\r\n\t\turl:'/api/position/remove',\r\n\t\tdata: {\r\n\t\t\tid\r\n\t\t},\t\t\r\n\t\tdataType: \"json\",\r\n\t\tsuccess(data) {\r\n\t\t\tsendAjax();\r\n\t\t}\r\n\t})\r\n })\r\n\r\n\r\n/* data  =====>\r\n\t\t\t{error: 0, msg: {…}}\r\n\t\t\terror: 0\r\n\t\t\tmsg:\r\n\t\t\tmsg: {_id: \"5fb74c5f46ae272c5cb507a1\", companyName: \"桃子\", positionName: \"喝茶\", city: \"青岛\", salary: \"12K\", …}\r\n\t\t\t__proto__: Object\r\n\t\t\t__proto__: Object */\r\n\r\nvar url = \"\";\r\n\r\n$userModel.on('click', \"#btn-signin\", function () {\r\n\turl = \"/api/user/signin\";\r\n\tconsole.log(url);\r\n\t//  /api/user/signin\r\n})\r\n\r\n$userModel.on('click', \"#btn-signup\", function () {\r\n\turl = '/api/user/signup'\r\n\tconsole.log(url);\r\n\t//  /api/user/signup\r\n})\r\n\r\n//这个是点登录和注册弹出的提交的按钮\r\n$userModel.on('click', \"#user-submit\", function () {\r\n\t//获取用户填写的表单数据\r\n\tvar username = $(\"#username\").val();\r\n\tvar password = $(\"password\").val();\r\n\t//拿到输入的用户名和密码\r\n\tconsole.log(url);\r\n\t//发送ajax给后端\r\n\t$.ajax({\r\n\t\turl,\r\n\t\tdata: {\r\n\t\t\tusername, password\r\n\t\t},\r\n\t\ttype: \"post\",\r\n\t\tdataType: \"json\",\r\n\t\tsuccess(data) {\r\n\t\t\tif (!data.error) {\r\n\t\t\t\t//成功的时候error是0，所以!0就是true了\r\n\t\t\t\tisSignin = true;\r\n\t\t\t\tgreeting = data.msg.username;\r\n\t\t\t\t$userModel.html(template.render(userInfoTpl, {\r\n\t\t\t\t\tisSignin,\r\n\t\t\t\t\tgreeting\r\n\t\t\t\t}))\r\n\t\t\t}\r\n\t\t}\r\n\t})\r\n})\r\n$userModel.on('click','#user-signout',function () {\r\n\tisSignin = false;\r\n\tgreeting = \"\";\r\n\t$userModel.html(template.render(userInfoTpl,{\r\n\t\tisSignin,\r\n\t\tgreeting\r\n\t}))\r\n  })\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/views/home.html":
/*!*************************************!*\
  !*** ./src/scripts/views/home.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<h1>这是一个拉勾网的首页</h1>\"\n\n//# sourceURL=webpack:///./src/scripts/views/home.html?");

/***/ }),

/***/ "./src/scripts/views/position.add.html":
/*!*********************************************!*\
  !*** ./src/scripts/views/position.add.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"box box-info\\\">  <div class=\\\"box-header with-border\\\">    <h3 class=\\\"box-title\\\">职位添加</h3>  </div>  <!-- /.box-header -->  <!-- form start -->  <form class=\\\"form-horizontal\\\" id=\\\"possave\\\" action=\\\"/api/position/add\\\" method=\\\"post\\\" enctype=\\\"multipart/form-data\\\">    <div class=\\\"box-body\\\">      <div class=\\\"form-group\\\">        <label for=\\\"companyLogo\\\" class=\\\"col-sm-2 control-label\\\">公司Logo</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"file\\\" class=\\\"form-control\\\" name=\\\"companyLogo\\\" id=\\\"companyLogo\\\" placeholder=\\\"请选择公司logo图片\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"companyName\\\" class=\\\"col-sm-2 control-label\\\">公司名称</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\"  class=\\\"form-control\\\" name=\\\"companyName\\\" id=\\\"companyName\\\" placeholder=\\\"请输入公司名称\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"positionName\\\" class=\\\"col-sm-2 control-label\\\">职位名称</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"positionName\\\" id=\\\"positionName\\\" placeholder=\\\"请输入职位名称\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"city\\\" class=\\\"col-sm-2 control-label\\\">工作地点</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"city\\\" id=\\\"city\\\" placeholder=\\\"请输入工作地点\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"salary\\\" class=\\\"col-sm-2 control-label\\\">岗位薪资</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"salary\\\" id=\\\"salary\\\" placeholder=\\\"请输入岗位薪资\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"type\\\" class=\\\"col-sm-2 control-label\\\">工作性质</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"type\\\" id=\\\"type\\\" placeholder=\\\"请输入工作性质\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"experience\\\" class=\\\"col-sm-2 control-label\\\">工作经验</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"experience\\\" id=\\\"experience\\\" placeholder=\\\"请输入工作经验\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"degree\\\" class=\\\"col-sm-2 control-label\\\">学历要求</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"degree\\\" id=\\\"degree\\\" placeholder=\\\"请输入学历要求\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"description\\\" class=\\\"col-sm-2 control-label\\\">职位描述</label>        <div class=\\\"col-sm-10\\\">          <textarea rows=\\\"8\\\" cols=\\\"80\\\" name=\\\"description\\\" class=\\\"form-control\\\" id=\\\"description\\\" placeholder=\\\"请输入职位描述\\\"></textarea>        </div>      </div>    </div>    <!-- /.box-body -->    <div class=\\\"box-footer\\\">      <button type=\\\"button\\\" id=\\\"posback\\\" class=\\\"btn btn-default\\\">返回</button>      <button type=\\\"button\\\" id=\\\"possubmit\\\" link=\\\"/api/position/add\\\" class=\\\"btn btn-info pull-right\\\">提交</button>    </div>    <!-- /.box-footer -->  </form></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/position.add.html?");

/***/ }),

/***/ "./src/scripts/views/position.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/position.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"box\\\">    <div class=\\\"box-header with-border\\\">        <h3 class=\\\"box-title\\\">            <button id=\\\"addbtn\\\" class=\\\"btn btn-block btn-success\\\"><span class=\\\"fa fa-plus\\\"></span> 添加</button>        </h3>        <div class=\\\"box-tools\\\">            <div class=\\\"input-group input-group-sm\\\" style=\\\"width: 150px;\\\">                <input type=\\\"text\\\" value=\\\"\\\" name=\\\"pos_search\\\" class=\\\"form-control pull-right\\\" placeholder=\\\"搜索\\\">                <div class=\\\"input-group-btn\\\">                    <button type=\\\"button\\\" id=\\\"possearch\\\" class=\\\"btn btn-default\\\"><i class=\\\"fa fa-search\\\"></i></button>                </div>            </div>        </div>    </div>    <!-- /.box-header -->    <div class=\\\"box-body\\\">        <table class=\\\"table table-bordered\\\">            <tr>                <th style=\\\"width: 10px\\\">#</th>                <th>公司Logo</th>                <th>公司名称</th>                <th>职位名称</th>                <th>工作地点</th>                <th>发布时间</th>                <th>岗位薪资</th>                <th style=\\\"width: 140px\\\">操作</th>            </tr>            {{each data}}            <tr>                <td>{{$index+1}}</td>                <td><img width=\\\"50\\\" height=\\\"50\\\"                        src=\\\"{{$value.companyLogo? \\'http://localhost:3000/\\' + $value.companyLogo : \\'http://profile.csdnimg.cn/7/D/9/3_weixin_42881768\\'}}\\\" alt=\\\"\\\">                </td>                <td>{{$value.companyName}}</td>                <td>{{$value.positionName}}</td>                <td>{{$value.city}}</td>                <td>{{$value.createTime}}</td>                <td>{{$value.salary}}</td>                <td>                    <button class=\\\"btn btn-sm btn-primary pos-edit\\\" posid=\\\"{{$value._id}}\\\"><span                            class=\\\"fa fa-edit\\\"></span> 修改</button>                    <button class=\\\"btn btn-sm btn-danger pos-remove\\\" posid=\\\"{{$value._id}}\\\"                        filename=\\\"{{$value.companyLogo}}\\\"><span class=\\\"fa fa-remove\\\"></span> 删除</button>                </td>            </tr>            {{/each}}            <!-- <tr>          <td colspan=\\\"8\\\">暂无记录。</td>        </tr> -->        </table>    </div></div><!-- /.box -->\"\n\n//# sourceURL=webpack:///./src/scripts/views/position.html?");

/***/ }),

/***/ "./src/scripts/views/position.update.html":
/*!************************************************!*\
  !*** ./src/scripts/views/position.update.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"box box-info\\\">  <div class=\\\"box-header with-border\\\">    <h3 class=\\\"box-title\\\">职位添加</h3>  </div>  <!-- /.box-header -->  <!-- form start -->  <form class=\\\"form-horizontal\\\" id=\\\"possave\\\" action=\\\"/api/position/update\\\" method=\\\"post\\\" enctype=\\\"multipart/form-data\\\">    <div class=\\\"box-body\\\">      <div class=\\\"form-group\\\">        <label for=\\\"companyLogo\\\" class=\\\"col-sm-2 control-label\\\">公司Logo</label>        <div class=\\\"col-sm-10\\\">          <img src=http://localhost:3000/{{data.companyLogo}} />          <input type=\\\"file\\\" class=\\\"form-control\\\" name=\\\"companyLogo\\\" id=\\\"companyLogo\\\" placeholder=\\\"请选择公司logo图片\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"companyName\\\" class=\\\"col-sm-2 control-label\\\">公司名称</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" value={{data.companyName}} class=\\\"form-control\\\" name=\\\"companyName\\\" id=\\\"companyName\\\" placeholder=\\\"请输入公司名称\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"positionName\\\" class=\\\"col-sm-2 control-label\\\">职位名称</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" value={{data.positionName}} class=\\\"form-control\\\" name=\\\"positionName\\\" id=\\\"positionName\\\" placeholder=\\\"请输入职位名称\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"city\\\" class=\\\"col-sm-2 control-label\\\">工作地点</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" value={{data.city}} class=\\\"form-control\\\" name=\\\"city\\\" id=\\\"city\\\" placeholder=\\\"请输入工作地点\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"salary\\\" class=\\\"col-sm-2 control-label\\\">岗位薪资</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" value={{data.salary}} name=\\\"salary\\\" id=\\\"salary\\\" placeholder=\\\"请输入岗位薪资\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"type\\\" class=\\\"col-sm-2 control-label\\\">工作性质</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" value={{data.type}} name=\\\"type\\\" id=\\\"type\\\" placeholder=\\\"请输入工作性质\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"experience\\\" class=\\\"col-sm-2 control-label\\\">工作经验</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" value={{data.experience}} class=\\\"form-control\\\" name=\\\"experience\\\" id=\\\"experience\\\" placeholder=\\\"请输入工作经验\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"degree\\\" class=\\\"col-sm-2 control-label\\\">学历要求</label>        <div class=\\\"col-sm-10\\\">          <input type=\\\"text\\\" class=\\\"form-control\\\" value={{data.degree}} name=\\\"degree\\\" id=\\\"degree\\\" placeholder=\\\"请输入学历要求\\\">        </div>      </div>      <div class=\\\"form-group\\\">        <label for=\\\"description\\\" class=\\\"col-sm-2 control-label\\\">职位描述</label>        <div class=\\\"col-sm-10\\\">          <textarea rows=\\\"8\\\" cols=\\\"80\\\" name=\\\"description\\\" class=\\\"form-control\\\" id=\\\"description\\\" placeholder=\\\"请输入职位描述\\\">{{data.description}}</textarea>        </div>        <input type=\\\"hidden\\\" name=\\\"_id\\\" value={{data._id}}>      </div>    </div>    <!-- /.box-body -->    <div class=\\\"box-footer\\\">      <button type=\\\"button\\\" id=\\\"posback\\\" class=\\\"btn btn-default\\\">返回</button>      <button type=\\\"button\\\" id=\\\"possubmit\\\" link=\\\"/api/position/update\\\" class=\\\"btn btn-info pull-right\\\">提交</button>    </div>    <!-- /.box-footer -->  </form></div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/position.update.html?");

/***/ }),

/***/ "./src/scripts/views/userInfo.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/userInfo.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!-- User Account Menu -->    <!-- Menu Toggle Button -->    <a href=\\\"#\\\" class=\\\"dropdown-toggle\\\" data-toggle=\\\"dropdown\\\">        <!-- The user image in the navbar-->        {{if isSignin}}        <img src=\\\"/static/images/user2-160x160.jpg\\\" class=\\\"user-image\\\" alt=\\\"User Image\\\">        <!-- hidden-xs hides the username on small devices so only the image appears. -->        <span class=\\\"hidden-xs\\\">{{greeting}}</span>        {{else}}        <div id=\\\"click-btn\\\">            <span id=\\\"btn-signin\\\">登录</span>            <span id=\\\"btn-signup\\\">注册</span>        </div>        {{/if}}    </a>    <ul class=\\\"dropdown-menu\\\">        <!-- The user image in the menu -->        {{if !isSignin}}        <li class=\\\"user-header\\\" id=\\\"user-header\\\">            <form role=\\\"form\\\">                <div class=\\\"box-body\\\">                    <div class=\\\"form-group user\\\">                        <label for=\\\"exampleInputEmail1\\\">用户名：</label>                        <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"username\\\" placeholder=\\\"请输入用户名\\\">                    </div>                    <div class=\\\"form-group\\\">                        <label for=\\\"exampleInputPassword1\\\">密码：</label>                        <input type=\\\"password\\\" class=\\\"form-control\\\" id=\\\"password\\\" placeholder=\\\"请输入密码\\\">                    </div>                </div>            </form>        </li>        {{else}}        <li class=\\\"user-header\\\">            <img src=\\\"/static/images/user2-160x160.jpg\\\" class=\\\"img-circle\\\" alt=\\\"User Image\\\">        </li>        {{/if}}        <!-- Menu Footer-->        <li class=\\\"user-footer\\\">            <div class=\\\"pull-left\\\">                <a href=\\\"javascript:void(0)\\\" class=\\\"btn btn-default btn-flat\\\">关闭</a>            </div>            {{if !isSignin}}            <div class=\\\"pull-right\\\">                <a href=\\\"javascript:void(0)\\\" id=\\\"user-submit\\\" class=\\\"btn btn-default btn-flat\\\">提交</a>            </div>            {{else}}            <div class=\\\"pull-right\\\">                <a href=\\\"javascript:void(0)\\\" id=\\\"user-signout\\\" class=\\\"btn btn-default btn-flat\\\">退出</a>            </div>            {{/if}}        </li>    </ul>\"\n\n//# sourceURL=webpack:///./src/scripts/views/userInfo.html?");

/***/ })

/******/ });
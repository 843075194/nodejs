npm是一个Node的模块管理工具
可以帮助你安装模块（包），自动安装依赖，管理包（增，删，更新，项目所有包)
与它类似的还有yarn、bower

npm命令

	npm init  生成package.json
	
	安装模块到项目依赖
 	npm install 模块名 --save
 	npm install 模块名 -S
 	npm install 模块名@x.x.x -S

 	卸载模块
 	npm uninstall 模块名 

 	安装模块到开发依赖
 	npm install 模块名 --save-dev 
 	npm i 模块名 -D

	npm list  列出所有已经安装的模块

	npm outdated 版本对比

	npm info 模块名 查看模块信息

	npm view 模块 versions  查看模块历史版本信息


	npm install
	npm i
	安装所有依赖

	npm install nrm -g 
	安装nrm这个模块 
	nrm ls 查看所有可切换的源
	nrm use 源名   切换下载模块的来源


	如果安装不上
	ctrl + C 中断下载
	npm uninstall 模块  卸载模块
	npm cache clean --force  清除缓存
	切换网络 
	重新安装


Yarn 
	官网 https://classic.yarnpkg.com/	
安装：
	去官网下载


**初始化一个新项目**

```
yarn init
```

**添加依赖包**

```
yarn add [package]
yarn add [package]@[version]
```

**将依赖项添加到不同依赖项类别中**

分别添加到 ``dependencies``,`devDependencies`中：

```
yarn add [package] --save   | -S 
yarn add [package] --dev    | -D 
```

**升级依赖包**

```
yarn upgrade [package]@[version]
```

**移除依赖包**

```
yarn remove [package]
```

**安装项目的全部依赖**

```
yarn
```

或者

```
yarn install
```

**安装到全局**

```js
yarn global add [package]				//global的位置不能变
yarn global remove [package]
```


Express

基于 [Node.js](https://nodejs.org/en/) 平台，快速、开放、极简的 Web 开发框架


let express=require('express')
let server=express()
let server.listen(端口,地址,回调)


静态资源托管
server.use(express.static('./www'));


use方法

安装中间件、路由、接受一个函数


server.use([地址],中间件|路由|函数体)


中间件

middleware， 处理自定义业务，只处理请求到结束响应的中间部分

	解析post请求
	let bodyParser=require('body-parser')//引入中间件
	server.use(bodyParser())//安装中间件



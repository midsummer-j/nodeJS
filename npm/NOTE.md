* `npm` 是什么？
	* `Node.js`的包的管理工具

* 包 是什么？
	* 别人写的`Node.js`模块

1. 执行`npm init`，默认空格跳过
2. 安装`npm install glob`

3. `rm -rf node_modules/`   删除项目下的node_modules文件夹

4. 再次执行`npm install`会将之前的`globa`包一起安装

5. 再次删除`node_modules`文件夹

6. 安装`npm i gulp` `npm i extend`

7. 删除包 `npm uninstall extend`

* 为方便安装依赖：

	[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM?from=tnpm)
第一步，使用管理员命令`npm install -g cnpm --registry=https://registry.npm.taobao.org`从指定淘宝镜像安装全局cnpm

	第二步，`cnpm install gulp --save`加入到package.json


* [npm使用文档](https://docs.npmjs.com/)

* npm大神：
	TJ Holowaychunk https://www.npmjs.com/package/express 关于HTTP服务器
	Mafintosh
	Dominictarr

* npm event-stream事件


问题：`Remove-Item` : 找不到与参数名称“rf”匹配的参数？
答：`git commit` `git pull` 。


下载nodeJS源码 [source code](https://nodejs.org/en/download/)
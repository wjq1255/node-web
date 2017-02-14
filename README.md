# node-web
a website  build depends on express + ejs + bootstrap + mysql.
### 安装
npm install

npm start


#### 一步步来

##### Nodejs日志管理log4js
 日志对任何的应用来说都是至关重要的。在Nodejs中使用express框架并没有自带的日志模块，我们可以选择log4js来完成日志记录的功能。
- npm install log4js
- 在core文件夹下创建配置文件
	log4js.json
	logger.js
- 在启动文件app.js中，配置当页面出现404时记录错误信息assess级别
- 在业务文件中直接调用logger开放的接口进行记录日志信息

	
# node 接口开发

> 第一步：开发前准备
1. npm init
2. eslint --init
3. npm install eslint -dev
4. 添加`.eslintrc` rules
5. 添加`.editorconfig`
6. 添加公共函数文件夹 `common` 并添加跟踪模块 包括 `日志信息`和`错误信息`

> 第二步：添加路由层
1. 可支持多种路由模式 如 [restful](http://www.ruanyifeng.com/blog/2011/09/restful) 或者 [graphql](http://graphql.cn/) 等等
2. 添加路由逻辑

>第三步：添加代理层
1. 代理层负责访问数据，数据包括 `数据库数据`或`远程接口数据`
2. 添加代理层逻辑

> 第四步：添加测试

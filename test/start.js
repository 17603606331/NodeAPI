/**
 *  测试环境启动
 */
const restify = require('restify');
const { restfuRoute } = require('../route');
require('colors');

const app = restify.createServer();

app.get('/', (req, res, next) => {
    res.send({ message: '测试接口' });
});

/** 参数解析 */
app.use(restify.plugins.queryParser());
app.use(restify.plugins.bodyParser());
app.pre(restify.pre.context());

/** 加载路由 */
restfuRoute(app, true);

const server = app.listen(1234, () => {
    console.log('test at port 1234'.yellow);
});

module.exports = server;

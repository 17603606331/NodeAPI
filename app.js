const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const { buildError, buildLog } = require('./common/trace');
const { restfuRoute } = require('./route');

const server = restify.createServer();

/** 跨域 */
const cors = corsMiddleware({
    origins: ['*'],
    allowHeaders: ['authorization'],
});
server.pre(cors.preflight);
server.use(cors.actual);

/** 参数解析 */
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.pre(restify.pre.context());

/** 打印日志 */
server.on('after', buildLog);

/** 错误处理 */
server.on('restifyError', buildError);

/** 加载路由 */
restfuRoute(server, true);

/** 启动服务 */
server.listen(3000, () => {
    console.log('start at port 3000');
});

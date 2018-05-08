const errors = require('restify-errors');
const moment = require('moment');
// 控制台打印颜色
const colors = require('colors');
// moment 中文
moment.locale('zh-cn');

// 构建错误信息
const buildError = (req, res, err, next) => {
    const { message, name } = errors.bunyanSerializer(err);

    res.status(err.statusCode || 500);
    res.send({ message, name });
};

// 构建日志信息
const buildLog = (req, res, next) => {
    // 请求日志
    const log = `${moment().format('YYYY-MM-DD hh:mm:ss')}  <${req.connection.remoteAddress}> ${req.method}  ${req.url}`;
    if (res.err) {
        console.log(log.red);
    } else {
        console.log(log.green);
    }
};
module.exports = {
    buildError,
    buildLog,
};

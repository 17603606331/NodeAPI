/**
 * author:katte
 * ps    :慎重修改
 */
const { verifyToken } = require('../common/identity');
const apiList = require('./restful');

const verify = (req, res, next) => {
    const { headers } = req;
    try {
        const token = headers.authorization.split(' ')[1];
        const result = verifyToken(token);
        req.set('currentUser', result);
        return next();
    } catch (error) {
        const err = new Error('登录验证失败，请重新登录');
        err.name = error.name || '验证错误';
        return next(err);
    }
};

const restfuRoute = (server, auth) => {
    Object.keys(apiList).forEach((method) => {
        apiList[method].forEach(({ path, handler, identity }) => {
            if (auth && identity) {
                server[method](path, verify, handler);
            } else {
                server[method](path, handler);
            }
        });
    });
};

module.exports = {
    restfuRoute,
};

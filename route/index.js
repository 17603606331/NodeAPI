/**
 * author:katte
 * ps    :慎重修改
 */
const apiList = require('./restful');

const restfuRoute = (server) => {
    Object.keys(apiList).forEach((method) => {
        apiList[method].forEach((api) => {
            server[method](api.path, api.handler);
        });
    });
};

module.exports = {
    restfuRoute,
};

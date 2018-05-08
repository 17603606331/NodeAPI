/**
 * author:katte
 * ps    :慎重修改
 */
const fs = require('fs');
const path = require('path');

const basename = path.basename(module.filename);

// 所有接口
const apiList = {
    get: [],
    post: [],
    put: [],
    del: [],
};

const initMethod = (method) => {
    Object.keys(method).forEach((type) => {
        apiList[type].push(...method[type]);
    });
};

fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const modules = require(path.join(__dirname, file));
        initMethod(modules);
    });
module.exports = apiList;

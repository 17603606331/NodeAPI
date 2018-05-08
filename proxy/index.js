/**
 * author:katte
 * ps    :慎重修改
 */

const fs = require('fs');
const path = require('path');

const basename = path.basename(module.filename);

const Module = {};

fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        const name = file.slice(0, 1).toUpperCase() + file.slice(1, -3);
        const modules = require(path.join(__dirname, file));
        Module[name] = modules;
    });

module.exports = Module;

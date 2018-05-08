const { User } = require('../../proxy');

const getUsers = (req, res, next) => {
    const result = User.getUsers();
    res.send(result);
    return next();
};
const getUserById = (req, res, next) => {
    const result = { message: '用户信息' };
    res.send(result);
    return next();
};
const addUser = (req, res, next) => {
    const result = { message: '用户添加' };
    res.send(result);
    return next();
};
const updateUserById = (req, res, next) => {
    const result = { message: '用户修改' };
    res.send(result);
    return next();
};
const removeUserById = (req, res, next) => {
    const result = { message: '用户删除' };
    res.send(result);
    return next();
};

exports.get = [
    { path: '/users', handler: getUsers },
    { path: '/user/:id', handler: getUserById },
];

exports.post = [
    { path: '/user', handler: addUser },
];

exports.put = [
    { path: '/user/:id', handler: updateUserById },
];

exports.del = [
    { path: '/user/:id', handler: removeUserById },
];

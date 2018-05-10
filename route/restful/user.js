const { User } = require('../../proxy');
const { generateToken } = require('../../common/identity');

const getUsers = async (req, res, next) => {
    const result = await User.getList();
    res.send(result);
    return next();
};
const getUserById = async (req, res, next) => {
    const { id } = req.params;
    const result = await User.getById(id);
    res.send(result);
    return next();
};
const login = async (req, res, next) => {
    const { username, password } = req.body;
    let result;
    let token;
    try {
        result = await User.login({ username, password });
        if (result.id) {
            token = generateToken({ username: result.username });
        }
        res.send({ message: '登陆成功', data: result, token });
        return next();
    } catch (error) {
        return next(error);
    }
};
const addUser = async (req, res, next) => {
    let result;
    try {
        result = await User.add(req.body);
        res.send(result);
    } catch (error) {
        return next(error);
    }
    return next();
};
const updateUserById = async (req, res, next) => {
    const { body } = req;
    const { id } = req.params;
    let result;
    try {
        result = await User.update({ id, ...body });
        res.send(result);
    } catch (error) {
        return next(error);
    }
    return next();
};
const removeUserById = async (req, res, next) => {
    const { id } = req.params;
    let result;
    try {
        result = await User.remove(id);
        res.send(result);
    } catch (error) {
        return next(error);
    }
    return next();
};

exports.get = [
    { path: '/users', handler: getUsers },
    { path: '/user/:id', handler: getUserById },
];

exports.post = [
    { path: '/user', handler: addUser, identity: true },
    { path: '/login', handler: login },
];

exports.put = [
    { path: '/user/:id', handler: updateUserById, identity: true },
];

exports.del = [
    { path: '/user/:id', handler: removeUserById, identity: true },
];

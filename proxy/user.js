const md5 = require('md5');
const { User } = require('../model');

const getList = async () => {
    const result = await User.find();
    return result;
};

const getById = async (id) => {
    const result = await User.findById(id);
    return result;
};

const login = async ({ username, password }) => {
    let result;
    const model = await User.findOne({ username });
    if (model) {
        if (model.password === md5(password || '')) {
            result = { id: model.id, username: model.username };
        } else {
            result = {};
        }
    } else {
        result = {};
    }
    return result;
};

const add = async ({ username, password = '123456' }) => {
    const user = new User({ username, password: md5(password) });
    const result = await user.save();
    return result;
};

const update = async (model) => {
    const { id, ...body } = model;
    const result = await User.findByIdAndUpdate(id, body, { new: true });
    return result;
};

const remove = async (id) => {
    const result = await User.findByIdAndRemove(id);
    return result;
};

module.exports = {
    getList,
    getById,
    add,
    update,
    remove,
    login,
};

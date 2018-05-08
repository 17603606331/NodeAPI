
const getUsers = () => {
    const result = [
        { name: '小明', age: 14 },
        { name: '小红', age: 11 },
        { name: '小王', age: 16 },
    ];
    return result;
};

const getUser = ({ id }) => {
    const result = {
        name: '小明',
        age: 14,
    };
};

module.exports = {
    getUsers,
    getUser,
};

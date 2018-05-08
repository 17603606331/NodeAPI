const { Person } = require('../../proxy');

const getPersons = (req, res, next) => {
    const result = Person.getPersons();
    res.send(result);
    return next();
};
const getPersonById = (req, res, next) => {
    const result = { message: '人员信息' };
    res.send(result);
    return next();
};
const addPerson = (req, res, next) => {
    const result = { message: '人员添加' };
    res.send(result);
    return next();
};
const updatePersonById = (req, res, next) => {
    const result = { message: '人员修改' };
    res.send(result);
    return next();
};
const removePersonById = (req, res, next) => {
    const result = { message: '人员删除' };
    res.send(result);
    return next();
};

exports.get = [
    { path: '/persons', handler: getPersons },
    { path: '/person/:id', handler: getPersonById },
];

exports.post = [
    { path: '/person', handler: addPerson },
];

exports.put = [
    { path: '/person/:id', handler: updatePersonById },
];

exports.del = [
    { path: '/person/:id', handler: removePersonById },
];

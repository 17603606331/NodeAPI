const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ef_manage_test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('connect success');
});

// model
module.exports.User = require('./user');

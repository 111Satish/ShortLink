
require('../config');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : String,
    userId: String,
    userEmail: String,
    userPassword : String,
});

module.exports = mongoose.model('users', UserSchema);
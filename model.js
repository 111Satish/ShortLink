require('./config');
const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    Lurl:String,
    urlID: String,
    clicks: Number,
})
module.exports = mongoose.model('urls', UrlSchema);
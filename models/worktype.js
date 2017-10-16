var mongoose = require('mongoose');
var assert = require('assert');
var schema = mongoose.Schema;

var workSchema = new schema({
    Name: { type: String, default: "No Name" },
    Code: { type: String, default: "No UserName" },
});

var works = mongoose.model('Work', workSchema);
module.exports = works;
var mongoose = require('mongoose');
var assert = require('assert');
var schema = mongoose.Schema;

var daySchema = new schema({
    Name: { type: String, default:"No Name"},
    Code: { type: String, default: "000" },
});

var days = mongoose.model('Day', daySchema);
module.exports = days;
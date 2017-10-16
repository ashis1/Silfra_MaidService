var mongoose = require('mongoose');
var assert = require('assert');
var schema = mongoose.Schema;

var productSchema = new schema({
    name:String,
    description:String
}, {timestamps:true

});

var products = mongoose.model('Product', productSchema);
module.exports = products;
const mongoose = require('mongoose');
var assert = require('assert');
var schema = mongoose.Schema;

var userSchema = new schema({
    Name: { type: String, required: true,   },
    PhoneNo: { type: String, required: true, },
    UserName: { type: String, required: true,},
    City: { type: String, required: true, },
    Password: { type: String, required: true, },
    //RePassword: { type: String, required: true, },
    Locality: { type: String, default: "Not Mentioned", required: true, },
    FullAddress: { type: String, default: "Not Mentioned", required: true, },
    Landmark: { type: String, default: "Not Mentioned", required: true, }
});

const users = mongoose.model('Register', userSchema);
module.exports = users;
var mongoose = require('mongoose');
var assert = require('assert');
var schema = mongoose.Schema;

var postSchema = new schema({
    FullName: { type: String, default:"No Name"},
    WorkTypePreference:[{ type: String, enum: ["Cleaning", "Cooking", "Baby Sitter", "Elder / old age Care"] }],
    UserName: { type: String, default: "No UserName"},
    Gender: { type: String, default: "" },
    Age: { type: String, default: "" },
    Religion: { type: String, default: "" },
    AdharNo:{type:String, default:null},
    PANNo: { type: String, default: null },
    VoterCardNo: { type: String, default: null },
    Email: { type: String, default: "info@maidService.com" },
    PrimaryPhoneNo: { type: String, default: "No  Phone Number" },
    SecondaryPhoneNo: { type: String, default: "No Phone Number" },
    PermanmentAddress: { type: String, default: null },
    temporaryAddress: { type: String, default: null },
    ContactPersonName: { type: String, default: "" },
    ContactAddressProof: { type: String, default: "" },
    ContactAddress1: { type: String, default: "" },
    ContactAddress2: { type: String, default: "" },
    ContactAddress3: { type: String, default: "" },
    ContactLocation: { type: String, default: "" },
    ContactCity: { type: String, default: "" },
    ContactState: { type: String, default: "" },
    ContactCountry: { type: String, default: "" },
    ContactPincode: { type: String, default: "" },
    IsImmediateJoin: { type: Boolean, default: false },
    DaysUnavaialble: [{type:String, enum:["sun","mon","tue","wed","thur","fri","sat"]}],
    StartTime: { type: String, default: "" },
    MaximumHours: { type: String, default: "" },
    LocationPreference: { type: String, default: "" },
    Ondate: { type: String, default: "" },
    IsMonthly: { type: Boolean, default: false },
    IsWeekly: { type: Boolean, default: false },
    IsDaily: { type: Boolean, default: false },
    IsOneTime:{type: Boolean, default:false},
    SalaryExpected: { type: String, default: "0000" },
    IsActive: { type: Boolean, default: false },
    IsApproved: { type: Boolean, default: false },
    IsDeleted: { type: Boolean, default: false }

});

var posts = mongoose.model('Post', postSchema);
module.exports = posts;
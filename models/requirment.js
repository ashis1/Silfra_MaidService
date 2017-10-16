const mongoose = require('mongoose');
var assert = require('assert');
var schema = mongoose.Schema;

var requirementSchema = new schema({
   
    ClientId: { type: String, default: "59d25158b8e87c063cb468cd" },
    WorkTypePreference: [{ type: String, enum: ["Cleaning", "Cooking", "Baby Sitter", "Elder / old age Care"] }],
    UrgencyPreference: { type: String, default: "" },
    SessionPreference: { type: String, default: "" },
    Gender: { type: String, default: "" },
    Age: { type: String, default: "" },
    StartTime: { type: String, default: "" },
    StartDate: { type: String, default: "" },
    MaximumHours: { type: String, default: "" },
    TotalMember: { type: String, default: "" },
    HouseSize: { type: String, default: "" },
    
    IsCleaner: { type: Boolean, default: false },
    IsCleaner_BathroomCleaning: { type: Boolean, default: false },
    IsCleaner_Ironing: { type: Boolean, default: false },
    IsCleaner_MachineClothWashing: { type: Boolean, default: false },
    IsCleaner_NonMachineClothWashing: { type: Boolean, default: false },
    IsCleaner_Dusting: { type: Boolean, default: false },
    IsCleaner_FloorCleaning: { type: Boolean, default: false },
    IsCleaner_GroceryShopping: { type: Boolean, default: false },
    IsCleaner_UtensilCleaning: { type: Boolean, default: false },
    IsCleaner_OtherDescription: { type: String, default: "" },

    IsCook: { type: Boolean, default: false },
    IsCook_FoodType_IsVeg: { type: Boolean, default: false },
    IsCook_FoodType_IsNonVeg: { type: Boolean, default: false },
    IsCook_MealType_Breakfast: { type: Boolean, default: false },
    IsCook_MealType_Lunch: { type: Boolean, default: false },
    IsCook_MealType_Dinner: { type: Boolean, default: false },
    IsCook_OtherDescription: { type: String, default: "" },

    IsBabySitter: { type: Boolean, default: false },
    IsBabySitter_Age: { type: String, default: "" },
    IsBabySitter_Gender: { type: String, default: "" },
    IsBabySitter_ChangingDiaper: { type: Boolean, default: false },
    IsBabySitter_Feeding: { type: Boolean, default: false },
    IsBabySitter_Sleeping: { type: Boolean, default: false },
    IsBabySitter_CleaningUtensils: { type: Boolean, default: false },
    IsBabySitter_Massage: { type: Boolean, default: false },
    IsBabySitter_ForWalk: { type: Boolean, default: false },
    IsBabySitter_OtherDescription: { type: String, default: "" },

    IsElderCare: { type: Boolean, default: false },
    IsElderCare_Age: { type: String, default: "" },
    IsElderCare_BedRidden: { type: String, default: "" },
    IsElderCare_Gender: { type: String, default: "" },
    IsElderCare_Bathing: { type: Boolean, default: false },
    IsElderCare_Feeding: { type: Boolean, default: false },
    IsElderCare_Massage: { type: Boolean, default: false },
    IsElderCare_CleaningUtensils: { type: Boolean, default: false },
    IsElderCare_GivingMedicines: { type: Boolean, default: false },
    IsElderCare_ForWalk: { type: Boolean, default: false },
    IsElderCare_OtherDescription: { type: String, default: "" },

    Religion: { type: String, default: "" },
    Comment: { type: String, default: "" },
    ContactAddress2: { type: String, default: "" },
    ContactAddress3: { type: String, default: "" },
    ContactLocation: { type: String, default: "" },
    ContactCity: { type: String, default: "" },
    ContactState: { type: String, default: "" },
    ContactCountry: { type: String, default: "" },
    ContactPincode: { type: String, default: "" },
    IsImmediateJoin: { type: Boolean, default: false },
    DaysUnavaialble: [{ type: String, enum: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"] }],
   
    IsActive: { type: Boolean, default: false },
    IsApproved: { type: Boolean, default: true },
    IsDeleted: { type: Boolean, default: false }
});

const requirement = mongoose.model('Requirement', requirementSchema);
module.exports = requirement;
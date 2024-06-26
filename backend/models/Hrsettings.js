const mongoose = require('mongoose');

const HrsettingsSchema = new mongoose.Schema({
    employeeType:{
        type:String,
        required:true,
    },
    relatedUser:{
        type:String,
        required: true,
    },
    pinCode:{
        type: String,
        required: true,
    },
    badgeId:{
        type:String,
        required:true,
        unique:true,
    },
    jobId:{
        type:String,
        required:true,
        unique: true,
    },
    registrationNoEmployee:{
        type: String,
        required: true,
    },
    hourlyCost:{
        type:String,
        required:true,
    },
    fleetMobilityCard:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("Hr Settings", HrsettingsSchema);
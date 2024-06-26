const mongoose = require('mongoose');

const personalDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    privateCarPlate: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    studyField: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    visaNo: {
        type: String,
        required: true
    },
    visaExpireDate: {
        type: String,
        required: true
    },
    workPermitExpirationDate: {
        type: String,
        required: true
    },
    workPermit: {
        type: String,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    dependentChildrenNo: {
        type: Number,
        required: true
    },
    contactName: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    identificationNo: {
        type: String,
        required: true
    },
    passportNo: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    placeOfBirth: {
        type: String,
        required: true
    },
    countryOfBirth: {
        type: String,
        required: true
    },
    resident: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("PersonalDetails", personalDetailsSchema);

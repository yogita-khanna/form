const express = require('express');
const router = express.Router();
const multer = require('multer');
const PersonalDetails = require('../models/PersonalDetails');

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Uploads will be stored in the 'uploads/' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name
    }
});

const upload = multer({ storage: storage });

router.post('/personaldetails', upload.single('workPermit'), async (req, res) => {
    try {
        const {
            name, address, email, phone, language, distance, privateCarPlate, certificate,
            studyField, school, visaNo, visaExpireDate, workPermitExpirationDate, maritalStatus,
            dependentChildrenNo, contactName, contactPhone, nationality, identificationNo, passportNo,
            gender, dateOfBirth, placeOfBirth, countryOfBirth, resident
        } = req.body;

        const workPermit = req.file ? req.file.path : '';

        const personalDetails = new PersonalDetails({
            name, address, email, phone, language, distance, privateCarPlate, certificate,
            studyField, school, visaNo, visaExpireDate, workPermitExpirationDate, maritalStatus,
            dependentChildrenNo, contactName, contactPhone, nationality, identificationNo, passportNo,
            gender, dateOfBirth, placeOfBirth, countryOfBirth, resident, workPermit
        });

        await personalDetails.save();
        res.status(201).json({ message: 'Personal details saved successfully!' });
    } catch (error) {
        console.error('Error saving personal details:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;

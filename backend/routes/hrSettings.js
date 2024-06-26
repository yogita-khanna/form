// routes/hrSettings.js
const express = require('express');
const router = express.Router();
const HrSettings = require('../models/HrSettings');

// POST route to save HR settings
router.post('/hrsettings', async (req, res) => {
    try {
        const {
            employeeType, relatedUser, pinCode, badgeId, jobId, registrationNoEmployee,
            hourlyCost, fleetMobilityCard
        } = req.body;

        const hrSettings = new HrSettings({
            employeeType, relatedUser, pinCode, badgeId, jobId, registrationNoEmployee,
            hourlyCost, fleetMobilityCard
        });

        await hrSettings.save();
        res.status(201).json({ message: 'HR settings saved successfully!' });
    } catch (error) {
        console.error('Error saving HR settings:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;

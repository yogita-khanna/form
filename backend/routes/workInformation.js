const express = require('express');
const router = express.Router();
const Work = require('../models/workInformation');


router.post('/work', async (req, res) => {
  try {
    const {
      workAddress, workLocation, expense, offTime, workingHours, timezone, workMobile, workPhone, workEmail
    } = req.body;

    const workInfo = new Work({
      workAddress, workLocation, expense, offTime, workingHours, timezone, workMobile, workPhone, workEmail
    });

    await workInfo.save();
    res.status(201).json({ message: 'Work information saved successfully!' });
  } catch (error) {
    console.error('Error saving work information:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

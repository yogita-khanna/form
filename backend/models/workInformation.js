const mongoose = require('mongoose');

const workInformation = new mongoose.Schema({
  workAddress: {
    type: String,
    required: true,
  },
  workLocation: {
    type: String,
    required: true,
  },
  expense: {
    type: Number,
    required: true,
  },
  offTime: {
    type: String,
    required: true,
  },
  workingHours:{
    type: Number,
  },
  timezone: {
    type: String,
    required:true
  },
  workMobile: {
    type: Number,
    required: true,
  },
  workPhone:{
    type: Number,
    required: true,
  },
  workEmail: {
    type: String,
    required:true
  }
});

const work = mongoose.model('Work', workInformation);

module.exports = work;

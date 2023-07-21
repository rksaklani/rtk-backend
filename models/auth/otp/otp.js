const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentLogin', 
  },
  otp: {
    type: Number,
    default: null
  },
  expires_In: {
    type: Date,
    default: null
  },
  otpStatus:{
    type: Boolean,
    default: false
  }
});

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;

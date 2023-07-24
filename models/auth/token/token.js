const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StudentLogin',
  },
  token: {
    type: String,
    required: true,
  },
  // expiresIn: {
  //   type: Date,
  //   default: null
  // },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 120, // The token will automatically expire after 2 min (in seconds)
  },
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;

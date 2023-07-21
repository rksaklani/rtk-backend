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
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;

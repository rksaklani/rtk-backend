const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseLong = require('mongoose-long');

// Define mongoose-long as the Long type
mongooseLong(mongoose);

const studentSchema = new Schema({
  title: String,
  id: { type: mongoose.Schema.Types.Long, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
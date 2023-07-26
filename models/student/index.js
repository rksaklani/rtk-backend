const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const studentSchema = new Schema({
  title: String,
  timestamp: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
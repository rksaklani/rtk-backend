const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    title: String,
    timestamp: { type: Date, default: Date.now }
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  module.exports = Student;
var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({
   name: String,
   dob: Date,
   department: String,
   class: String,
   image: String,
   gpa: Number,
   studentYear: Number,
   gender: String
});

const StudentModel = mongoose.model('sinhvien', StudentSchema, 'student');
module.exports = StudentModel;
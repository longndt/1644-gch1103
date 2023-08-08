var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var students = await StudentModel.find();
   //res.send(students);
   res.render('student/studentList', { students : students });
});

module.exports = router;
var express = require('express');
const StudentModel = require('../models/StudentModel');
var router = express.Router();

router.get('/', async (req, res) => {
  //lấy dữ liệu từ collection "student"
  var students = await StudentModel.find();

  //trả về API
  res.send(students);
});

module.exports = router;

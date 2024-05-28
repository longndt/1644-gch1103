var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//cấu hình mongoose (để kết nối db)
var mongoose = require('mongoose');
var uri = "mongodb+srv://longndt:wxpY5GLB4We8hTDQ@cluster0.cc35aqx.mongodb.net/gch1103";
mongoose.connect(uri)
  .then(console.log('Connect succeed !'))
  .catch(err => console.log('Connect failed !'));

//IMPORTANT: cấu hình cors (để frontend gọi api)
var cors = require('cors');
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//đổi port
app.listen(process.env.PORT || 5000);

module.exports = app;

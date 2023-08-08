var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//khai báo router (1)
var studentRouter = require('./routes/student');

var app = express();

//khai báo body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//khai báo mongoose
var mongoose = require('mongoose'); 
var uri = "mongodb+srv://longndt:wxpY5GLB4We8hTDQ@cluster0.cc35aqx.mongodb.net/gch1103";
mongoose.connect(uri)
.then(() => console.log('connect to db succeed'))
.catch(err => console.log(err));

//khai báo dateFormat & equal của hbs
var hbs = require('hbs');
hbs.registerHelper('dateFormat', require('handlebars-dateformat')); 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//khai báo router (2)
app.use('/student', studentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//khai báo port
app.listen(process.env.PORT || 3001);

module.exports = app;

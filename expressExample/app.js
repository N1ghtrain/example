// require('dotenv').config();
const mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// const port = process.env.PORT;
// const database = process.env.deneme-db


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbRouter = require('./routes/showDB');
const user = require('./Model');

var app = express();

// global.db_user = mongoose.createConnection(process.env.deneme-db, dbOptions);

// const dbOptions = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// }



//dotenv ile port ve db name alamadım, gerekli parametreleri direkt çektim
mongoose.connect('mongodb://127.0.0.1/deneme-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB connection is set.')
});







// db_user.on('error', (err) => {
//   console.error("db_user Database Connection Error!");
//   console.error("verbose", err)
// });
// db_user.on('open', async () => {
//   console.info("success", "db_user Database Connection Success!");
// });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/showDB', dbRouter);

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

module.exports = app;





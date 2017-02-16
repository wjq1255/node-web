var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var single = require('./routes/single');
var users = require('./routes/users');
var spider = require('./routes/spider');

var loggerFactory = require('./js/core/logger');
var accessLogger = loggerFactory.getAccessLogger();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/single', single);
app.use('/users', users);
app.use('/spider', spider);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	console.log("traceId" + "|" + req.originalUrl + "|" + req.body);
	accessLogger.info("traceId" + "|" + req.originalUrl + "|" + req.body);
    var err = new Error('Not Found');
    err.status = 404;
    res.on('finish', function () {
        accessLogger.info("traceId" + "|" + res.statusCode + "|" + res.statusMessage);
    });
    res.setHeader("Content-Encoding", "UTF-8");
    next(err);
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

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// the next param is a callback function
app.use(function(req, res, next) {
  console.log('Hello SEI!');
  // add a time property to the res.locals object
  // the time property will then be accessible within templates
  res.locals.time = new Date().toLocaleTimeString(); // locals is how express provides data to templates
  // need to call the next function so the app doesn't stall
  next();
});

// mount middleware into request pipeline
//app.use([starts with path], <middleware fn>) (the starts with path is an optional arg)
// log in the terminal with the HTTP request info
app.use(logger('dev'));
// process the data sent in the body of the request if its a json 
app.use(express.json());
// processes data sent in 'form' body of the request
// will create property on req.body for each <input>, <select>, and/or <textarea>
// in the <form> 
app.use(express.urlencoded({ extended: false }));
// add a cookies property for each cookie sent in the request
app.use(cookieParser());
// If the request is for a static asset (CSS, HTML, JS), returns the file to the browser
app.use(express.static(path.join(__dirname, 'public')));

// wants to know the name of the query parameter (in the url)
// a query param is a way to pass extra info to the server from using
// the url but it does not change the path
app.use(methodOverride('_method'));

// the first arg is the 'starts with' path
// the paths within the route modules are appended to the starts with paths
app.use('/', indexRouter); // will only be checked if the route starts with the root (thats the '/')
app.use('/todos', todosRouter); // will only be checked if the route starts with /todos

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

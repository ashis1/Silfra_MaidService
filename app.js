var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var routes = require('./routes/index');
//var users = require('./routes/users');
var productRouter = require('./routes/productrouter');
var dayRouter = require('./routes/dayrouter');
var works = require('./routes/work');
var mongoose = require('mongoose');
var passport = require('passport');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
var config = require('./config/database');


mongoose.connect(config.database);
mongoose.Promise = global.Promise;
//mongoose.connect(url, { useMongoClient: true })

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'db connection error'));
    db.on('open', function(){
      console.log('database connected1..');
    });

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);
app.use('/products', productRouter);
app.use('/api/posts', routes);
app.use('/api/days', dayRouter);
//app.use('/works', works);
// catch 404 and forward to error handler
 app.use(function(req, res, next) {
     console.log(req);
     console.log(res);
   var err = new Error('Not Found');
   console.log(err);
   err.status = 404;
   next(err);
 });

 // session
 app.use(session({
     secret: "2239487dfkjsdafnkdfj9ui92rejno23jr982",
     resave: false,
     saveUninitialized: true
 }));

 // Express Messages Middleware
 app.use(require('connect-flash')());
 app.use(function (req, res, next) {
     res.locals.messages = require('express-messages')(req, res);
     next();
 });

 // Express Validator Middleware
 app.use(expressValidator({
     errorFormatter: function (param, msg, value) {
         var namespace = param.split('.')
             , root = namespace.shift()
             , formParam = root;

         while (namespace.length) {
             formParam += '[' + namespace.shift() + ']';
         }
         return {
             param: formParam,
             msg: msg,
             value: value
         };
     }
 }));

 //passport config
 require('./config/passport')(passport);
//passport middleware
 app.use(passport.initialize());
 app.use(passport.session());


 app.get('*', function (req, res, next) {
     res.locals.user = req.user || null;
     next();
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

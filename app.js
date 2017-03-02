const express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//routes
const index = require('./routes/index'),
    auth = require('./routes/auth'),
    todo = require('./routes/todo');

  //AUTHENTICATION
const passport = require('passport'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy,
    store = require('./session-store'),
    methodOverride = require('method-override'),
    restify = require('express-restify-mongoose');

    
//models
const Todo = require('./models/todos'),
    User = require('./models/user');

const uri = process.env.MONGOLAB_URI || 'mongodb://lanzosuarez:bobotngacla1234@ds143449.mlab.com:43449/todos';
mongoose.connect(uri, function(err){
    if(err){
        console.log("Error connection to DB!");
        return;
    }
    else{
        console.log("Successfully connected!");
    }
});

var app = express();
var router = express.Router();

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
app.use(methodOverride());
app.use(router);



 //SESSION SETUP
//require('./session-store');
app.use(session({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passport-init');


//restify
restify.serve(router, Todo);

app.use('/', index);
app.use('/auth', auth);
app.use('/todo', todo);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});

module.exports = app;

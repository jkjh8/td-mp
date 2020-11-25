var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var session = require('express-session')
var passport = require('passport')
var fileupload = require('express-fileupload')

var history = require('connect-history-api-fallback')
var db = require('./api/db')
var mongoose = require('mongoose');
var MongoStore = require("connect-mongo")(session)

require('./api/passport').config(passport)
require('dotenv').config()

var indexRouter = require('./routes/index')

var app = express()
app.use(cors())
app.use(history())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection, ttl: 60*60*24 })
  }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(fileupload())

app.use('/', indexRouter)

global.mainPageStatus = {
  playlist: '',
  playfile: '',
  duration: '',
  status: 'Waiting...'
}

module.exports = app;

// panggil depedency / library
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// panggil router / define
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/product');

// call express()
var app = express();

// config express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// defin routes root
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter)

module.exports = app;
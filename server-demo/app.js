var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var startRouter = require('./routes/start');
const rangeRouter = require('./routes/range');
const guessRouter = require('./routes/guess');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/startgame', startRouter);
app.use('/range', rangeRouter);
app.use('/guess', guessRouter);

module.exports = app;

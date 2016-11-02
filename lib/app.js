const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');

const bookChar = require('./routes/bookchar');

app.use(morgan('dev'));

app.use('/characters', bookChar);

app.use(errorHandler);

module.exports = app;
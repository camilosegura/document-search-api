const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

global.__basedir = __dirname;

const app = express();

app.use(cors());

const router = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'faxes')));

app.use('/', router);

module.exports = app;

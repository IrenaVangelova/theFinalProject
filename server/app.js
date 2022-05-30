const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const recipesRouter = require('./routes/recipes');
const usersRouter = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/recipes?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);

module.exports = app;

const express = require('express');
const morgan = require('morgan');

const shareRouter = require('./routes/shareRoutes');
const searchShareRouter = require('./routes/searchShareRoutes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/shareItems', shareRouter)
app.use('/api/searchShare', searchShareRouter)

module.exports = app;


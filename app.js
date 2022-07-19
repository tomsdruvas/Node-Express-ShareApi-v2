const express = require('express');
const morgan = require('morgan');

const shareRouter = require('./routes/shareRoutes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
})

app.use('/api/shareItems', shareRouter)

module.exports = app;


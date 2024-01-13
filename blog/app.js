const express = require('express');

const app = express();
const cors = require('cors');
const { unKnownEndpoint, errorHandler } = require('./middleware/errorhandler');
const middleware = require('./middleware/middleware');
app.use(cors());
require('express-async-errors');

app.use(express.json());
app.use(middleware.tokenExtractor);
app.use('/api/blogs', require('./controllers/blog'));
app.use('/api/users', require('./controllers/user'));
app.use('/api/login', require('./controllers/login'));
app.use(unKnownEndpoint);
app.use(errorHandler);

module.exports = app;

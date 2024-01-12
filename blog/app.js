const express = require('express');

const app = express();
const cors = require('cors');
const { unKnownEndpoint, errorHandler } = require('./middleware/errorhandler');

app.use(cors());

app.use(express.json());
app.use('/api/blogs', require('./controllers/blog'));
app.use(unKnownEndpoint);
app.use(errorHandler);

module.exports = app;

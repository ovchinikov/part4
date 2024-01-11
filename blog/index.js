const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./utils/config');

app.listen(config.port);
app.use(cors());
app.use(express.json());

app.use('/api/blogs', require('./controllers/blog'));

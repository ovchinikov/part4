const express = require('express');
const app = express();
const cors = require('cors');
const config = require('./utils/config');

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

app.use('/api/blogs', require('./controllers/blog'));

app.use(cors());
app.use(express.json());

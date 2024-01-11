require('dotenv').config();

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URI;

module.exports = {
  port,
  mongoUrl,
};

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const mongoUrl = process.env.MONGO_URI;
mongoose
  .connect(mongoUrl)
  .then()
  .catch((err) => console.error(err));

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

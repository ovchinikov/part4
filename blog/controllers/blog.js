const router = require('express').Router();

const Blog = require('../models/blog');

router.get('/', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

router.get('/:id', (req, res) => {
  Blog.findById(req.params.id).then((blog) => {
    res.json(blog);
  });
});

router.post('/', (req, res) => {
  const { title, author, url, likes } = req.body;
  Blog.create({ title, author, url, likes }).then((blog) => {
    res.json(blog);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params.id;
  Blog.findByIdAndDelete(id).then(() =>
    res.json({ message: 'Blog deleted successfully' }),
  );
});

module.exports = router;

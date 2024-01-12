const router = require('express').Router();

const Blog = require('../models/blog');

router.get('/', async (_req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(404).end();
  } else {
    res.json(blog);
  }
});

router.post('/', async (req, res) => {
  const { title, author, url, likes } = req.body;
  if (!title || !url) {
    res.status(400).end();
  } else {
    const blog = new Blog({
      title,
      author,
      url,
      likes: likes || 0,
    });
    const result = await blog.save();
    res.status(201).json(result);
  }
});

router.delete('/:id', async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  console.log(blog);
  res.status(204).end();
});

router.put('/:id', async (req, res) => {
  const { title, author, url, likes } = req.body;
  const blog = {
    title,
    author,
    url,
    likes,
  };
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, blog, {
    new: true,
  });
  res.json(updatedBlog);
});

module.exports = router;

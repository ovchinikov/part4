const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (err.name === 'ValidationError') {
    return res.status(400).send({ error: err.message });
  }
  next(err);
};

const unKnownEndpoint = (_req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

module.exports = {
  errorHandler,
  unKnownEndpoint,
};

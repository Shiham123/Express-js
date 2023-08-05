const express = require('express'),
  app = express(),
  morgan = require('morgan');

const port = 4000,
  address = '127.0.0.1';

app.use(morgan('dev'));

app.get('/products', (request, response) => {
  response.send('list all the product');
});

app.post('/products', (request, response) => {
  response.status(201).send('how to use morgan');
});

app.listen(port, () => {
  console.log(`Server running at http://${address}:${port}`);
});

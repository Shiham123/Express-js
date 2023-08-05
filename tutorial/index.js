const express = require('express');
const app = express();

const port = 3000;
const address = '127.0.0.1';

const middleWare = (request, response, next) => {
  request.currentTime = new Date(Date.now());
  next();
};

app.use(middleWare);

app.get('/', (request, response) => {
  response.send(`<h1>${request.currentTime}</h1>`);
});

app.get('/about', (request, response) => {
  response.send(`<h1>${request.currentTime}</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://${address}:${port}`);
});

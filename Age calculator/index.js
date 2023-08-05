const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/circle', (request, response) => {
  response.sendFile(__dirname + '/circle.html');
});

app.get('/triangle', (request, response) => {
  response.sendFile(__dirname + '/triangle.html');
});

app.post('/triangle', (request, response) => {
  const height = request.body.height;
  const base = request.body.base;
  const area = 0.5 * height * base;
  response.send(`<h2>Area of triangle is : ${area}</h2>`);
});

app.post('/circle', (request, response) => {
  const radius = request.body.radius;
  const area = Math.PI * radius * radius;
  response.send(`<h2>Area of radius : ${area}</h2>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const userRoutes = require('./routes/user');
const app = express();

const port = 5001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (request, response) => {
  response.status(200).send(`<h1>Home route</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

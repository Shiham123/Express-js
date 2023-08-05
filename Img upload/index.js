const express = require('express'),
  app = express(),
  multer = require('multer'),
  mongoose = require('mongoose');

const port = 5000,
  address = '127.0.0.1';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting to db

const connectingDb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/usersTestDB');
    console.log('DB is connected');
  } catch (error) {
    console.log('DB is not connected');
    console.log(error.message);
    process.exit(1);
  }
};

// creating schema and modal

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'user name is required'],
  },
  image: {
    type: String,
    require: [true, 'user img is uploaded'],
  },
});

const userModal = mongoose.model('users', usersSchema);

// multer code up here

const storage = multer.diskStorage({
  destination: function (request, file, callBack) {
    callBack(null, './uploads');
  },
  filename: function (request, file, callBack) {
    const fileName = Date.now() + '-' + file.originalname;
    callBack(null, fileName);
  },
});

const upload = multer({ storage: storage });

// multer code up here

app.get('/', (request, response) => {
  response.send(`<h1>home route</h1>`);
});

app.get('/register', (request, response) => {
  response.status(200).sendFile(__dirname + '/index.html');
});

app.post('/register', upload.single('image'), async (request, response) => {
  try {
    const newUser = new userModal({
      name: request.body.name,
      image: request.file.filename,
    });

    await newUser.save();
    response.status(201).send(newUser);
  } catch (error) {
    response.status(500).send({ message: 'error here' });
    console.log(error.message);
  }
});

app.use('*', (request, response) => {
  response.status(500).send(`<h1>this is error area</h1>`);
});

app.use((error, request, response, next) => {
  response.status(500).send(`<h1>this is server error</h1>`);
});

app.listen(port, async () => {
  console.log(`Server is running at http://${address}:${port}`);
  await connectingDb();
});

const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 7000;

const DB_URL = `mongodb://localhost:27017/contacts`;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => console.log(`Server works on Port: ${PORT}`));

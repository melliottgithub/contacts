const express = require('express');

const router = require('./routes');

const PORT = process.env.PORT || 7000;
const app = express();

app.use(express.json());

app.use('/api', router);




app.get('/', (req, res, next) => res.send('Hi'));

app.listen(PORT, () => console.log(`Server works on Port: ${PORT}`));

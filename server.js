const express = require('express');
const router = require('./routes');
const db = require('./database');
const pg = require('./database/pg');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use('/api/users', router.users);
app.use('/api/contacts', router.contacts);
app.use('/api/auth', router.auth);
// app.use('/api/interviews', router.interviews);

// app.get('/', (req, res, next) => res.send('Hi'));

db.connect().then(conn => console.log('Mongo Connected'));
pg.connect().then(conn => console.log('Postgres Connected'));
app.listen(PORT, () => console.log(`Server works on Port: ${PORT}`));

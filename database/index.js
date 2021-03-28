const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/contacts';

module.exports = mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
  console.log('We are connected on MongoDB');
});

const userSchema = new mongoose.Schema({ usertId: Number });
const contactSchema = new mongoose.Schema({ contactId: Number });
const authSchema = new mongoose.Schema({ authId: Number });

const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('User', userSchema);
const Auth = mongoose.model('User', userSchema);

module.exports = {
  User,
  Contact,
  Auth,
};

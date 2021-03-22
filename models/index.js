const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ contactId: Number });

const User = mongoose.model('User', userSchema);

module.exports = User;

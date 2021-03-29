const mongoose = require('mongoose');
const token = require('jsonwebtoken');
// const Joi = require('joi');

// const validator = Joi.object({
//   password: Joi.string().min(6)
// });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 13,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  async registerUser(data) {
    // const { error } = validator.validate(data);
    // error.isUserError = true;
    // if (error) throw error;

    try {
      const user = await User.create(data);
      return this.getDetails(user);
    } catch (err) {
      if (err.name == 'MongoError' && err.code === 11000) {
        // duplicated key
        if ('email' in err.keyPattern) {
          throw new Error('Email address is already registered');
        } else {
          throw new Error('Duplicated key');
        }
      }
      console.log(err);
      throw err;
    }
  },
  async encryptPassword (password) {

  },
  async authenticate (password) {

  },
  async getAllUsers(/* pasar la paginations eventualmente */) {
    try {
      const users = await User.find({});
      return users.map((user) => this.getDetails(user));
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  getDetails(user) {
    const { id, name } = user;
    return {
      id,
      name,
    };
  },
};

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');

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
    const { name, email, password } = data;
    try {
      let user = await User.findOne({ email });

      if (user) {
        return console.log({ message: 'User already exists' });
      }
      user = new User({ name, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // user = await User.create(data);
      const { id } = user;
      const payload = {
        user: {
          id,
        },
      };
      jwt.sign(
        payload,
        /* secret.key?? */ 'secret',
        { expiresIn: 36000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          console.log(token);
        }
      );

      // user = await user.save();
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
  async encryptPassword(password) {},
  async authenticate(password) {},
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

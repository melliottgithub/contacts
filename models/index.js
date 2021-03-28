const User = require('../database');

module.exports = {
  async createNewUser(params) {
    try {
      const data = await User.create(up);
    } catch (err) {
      console.log(err);
    }
  },
  async getAllUsers(callback) {
    try {
      const user = await User.find({});
      callback(user);
    } catch (err) {
      console.log(err);
    }
  },
};

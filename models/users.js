const User = require('../database');

module.exports = {
  async createNewUser() {
    try {
      const data = await User.create();
    } catch (err) {
      console.log(err);
    }
  },
  async getAllUsers() {
    try {
      const user = await User.find({});
      callback(user);
    } catch (err) {
      console.log(err);
    }
  },
};

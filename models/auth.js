const Auth = require('../database');

module.exports = {
  async createNewUser() {
    try {
      const data = await Auth.create();
    } catch (err) {
      console.log(err);
    }
  },
  async getAllUsers() {
    try {
      const user = await Auth.find({});
      callback(user);
    } catch (err) {
      console.log(err);
    }
  },
};

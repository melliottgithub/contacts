const { users } = require('../models');

//crud
module.exports = {
  async post(req, res, next) {
    try {
      const data = await users.registerUser(req.body);
      res.status(200).json({ status: 'Success', data });
    } catch (err) {
      if (err.isUserError) {
        res.status(400).json({ error: err });
      } else {
        res.status(500).json({ error: err });
      }
    }
  },
  async get(req, res, next) {
    try {
      const data = await users.getAllUsers();
      res.status(200).json({ status: 'success', data });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};

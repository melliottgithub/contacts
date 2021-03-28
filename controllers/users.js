const model = require('../models');

module.exports = {
  async post(req, res, next) {
    try {
      const data = await model.createNewUser(req.body);
      res.status(201).json({ status: 'success' });
    } catch (err) {
      res.status(500).json({ error: 'nothing in controller' });
    }
  },
  async get(req, res, next) {
    try {
      const data = await model.getAllUsers((users) => {
        res.status(200).json({ status: 'success', users });
      });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};

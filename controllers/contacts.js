const model = require('../models');

module.exports = {
  async post(req, res, next) {
    try {
      const data = await model.createNewContact(req.body);
      res.status(201).json({ status: 'success' });
    } catch (err) {
      res.status(500).json({ error: 'nothing in controller' });
    }
  },
  async put(req, res, next) {
    try {
      const data = await model.getAllUsers();
    } catch (err) {}
  },
  async delete(req, res, next) {
    try {
      const data = await model.getAllUsers();
    } catch (err) {}
  },
};

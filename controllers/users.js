const models = require('../models');

module.exports = {
  post(req, res, next) {
    res.status(200).json({ status: 'success' });
  },
};

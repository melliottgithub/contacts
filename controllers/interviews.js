const Interview = require('../models/interview');
const { secret } = require('../config');

//crud
module.exports = {
  async get(req, res, next) {
    Interview.find().then(list => {
        res.status(200).send({ status: "success", data: list });
    });
  },
  async post(req, res, next) {

  }
};

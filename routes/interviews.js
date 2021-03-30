const controller = require('../controllers');
const router = require('express').Router();

router.route('/').get(controller.interviews.get).post(controller.interviews.post);

module.exports = router;
const controller = require('../controllers');
const router = require('express').Router();

router.route('/users')
    .post(controller.users.post)
    .get(controller.users.get);

module.exports = router;

const controller = require('../controllers');
const router = require('express').Router();

router.post('/users', controller.users.post);

module.exports = router;

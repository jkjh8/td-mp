var express = require('express');
var router = express.Router();

const users = require('../api/users')

/* GET users listing. */
router.post('/api/users/register', users.register)
router.post('/api/users/login', users.login)
router.get('/api/users/login', users.user)
router.get('/api/users/logout', users.logout)

module.exports = router;

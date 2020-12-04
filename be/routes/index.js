var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const user = require('./users')
const playlist = require('./playlist')
const filelist = require('./filelist')
const setup = require('./setup')
const schedule = require('./schedule')

router.use(user)
router.use(playlist)
router.use(filelist)
router.use(setup)
router.use(schedule)

module.exports = router;

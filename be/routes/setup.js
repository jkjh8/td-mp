var express = require('express');
var router = express.Router();

const setup = require('../api/setup')

/* GET users listing. */
router.post('/api/setup', setup.setSetup)
router.get('/api/setup', setup.getSetup)
router.get('/api/playid/:list/:id', setup.playid)
router.get('/api/playli/:id', setup.playli)
router.get('/api/stop', setup.stop)

module.exports = router;

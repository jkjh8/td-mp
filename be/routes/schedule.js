var express = require('express');
var router = express.Router();

const schedule = require('../api/schedule')

/* GET users listing. */
router.post('/api/addSchedule', schedule.addSchedule)
router.put('/api/editSchedule', schedule.editSchedule)
router.post('/api/delSchedule', schedule.delSchedule)
router.get('/api/getSchedule', schedule.getSchedule)

module.exports = router;

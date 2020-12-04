const ip = require('ip')
const dgram = require('dgram');
const sock = dgram.createSocket('udp4')
const db_Schedule = require('../models/Schedule.js')

module.exports.getSchedule = async function(req, res) {
  const result = await db_Schedule.find({}).exec()
  return res.status(200).json(result)
}

module.exports.addSchedule = async function(req, res) {
  await db_Schedule.insertMany([req.body])
  const rtlist = await db_Schedule.find({}).exec() 
  const message = new Buffer.from('refrashSchedule')
  sock.send(message, 0, message.length, 12302, '127.0.0.1', (err) => {
    if (err) return res.status(500).json({ success: true, error: err })
  })
  res.status(200).json(rtlist)
}

module.exports.editSchedule = async function(req, res) {
  const currentEvent = await db_Schedule.findOne({ _id: req.body._id })
  for (let key in req.body) {
    currentEvent[key] = req.body[key]
  }
  await currentEvent.save()
  const result = await db_Schedule.find({}).exec()
  res.json(result)
}

module.exports.delSchedule = async function(req, res) {
  await db_Schedule.deleteOne(req.body)
  const result = await db_Schedule.find().exec()
  res.status(200).json(result)
}

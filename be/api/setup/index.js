const dgram = require('dgram');
const sock = dgram.createSocket('udp4')
const db_Setup = require('../models/Setup.js')

module.exports.setSetup = function(req, res) {
  db_Setup.updateOne({ _id: "1" }, { $set: req.body })
  const message = new Buffer.from('fullscreen')
  sock.send(message, 0, message.length, 12302, '127.0.0.1')
  return res.status(200)
}

module.exports.getSetup = function(req, res) {
  db_Setup.findOne({ _id: "1" }).then((rtdata) => {
    return res.status(200).json(rtdata)
  })
}

module.exports.playid = function(req, res) {
  const id = req.params.id
  const list = req.params.list
  const message = new Buffer.from(`pi,${list},${id}`)
  sock.send(message, 0, message.length, 12302, '127.0.0.1')
  return res.status(200)
}

module.exports.playli = function(req, res) {
  const id = req.params.id
  const message = new Buffer.from(`pl,${id}`)
  sock.send(message, 0, message.length, 12302, '127.0.0.1')
  return res.status(200)
}

module.exports.stop = function(req, res) {
  const message = new Buffer.from('stop')
  sock.send(message, 0, message.length, 12302, '127.0.0.1')
  return res.status(200)
}

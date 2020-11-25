const ip = require('ip')
const dgram = require('dgram');
const sock = dgram.createSocket('udp4')
const mcSock = dgram.createSocket('udp4')
const db_Setup = require('../models/Setup.js')

mcSock.on('listening', function () {
  const address = mcSock.address()
  console.log(`Multicast listening on ${address.address} : ${address.port}`)
  mcSock.setBroadcast(true)
  mcSock.setMulticastTTL(128)
  mcSock.addMembership('230.128.128.128')
})

mcSock.on('message', function(msg, remote) {
  const status = JSON.parse(msg)
  if (status.hasOwnProperty('playlist')) {
    mainPageStatus.playlist = `Playlist ${Number(status.playlist) + 1}`
    mainPageStatus.playfile = status.playfile
    mainPageStatus.status = 'Playing'
    io.emit('reconnectstatus', mainPageStatus)
  }
  if (status.hasOwnProperty('duration')) {
    mainPageStatus.duration = status.duration
    io.emit('reconnectstatus', mainPageStatus)
  }
  if (status.hasOwnProperty('stop')) {
    mainPageStatus.duration = ''
    mainPageStatus.status = 'Stop'
    io.emit('reconnectstatus', mainPageStatus)
  }
})

mcSock.bind(12345, ip.address())

module.exports.setSetup = async function(req, res) {
  const result = await db_Setup.updateOne({ _id: "1" }, { $set: req.body }).exec()
  console.log(result)
  const message = new Buffer.from('fullscreen')
  sock.send(message, 0, message.length, 12302, '127.0.0.1', (err) => {
    if (err) return res.status(500).json({ success: true, error: err })
  })
  return res.status(200).json({ success: true })
}

module.exports.getSetup = async function(req, res) {
  const rtdata = await db_Setup.findOne({ _id: "1" }).exec()
  return res.status(200).json(rtdata)
}

module.exports.playid = async function(req, res) {
  const id = req.params.id
  const list = req.params.list
  const message = new Buffer.from(`pi,${list},${id}`)
  await sock.send(message, 0, message.length, 12302, '127.0.0.1', (err) => {
    if (err) return res.status(500).json({ success: true, error: err })
  })
  io.emit('status', 'Playing')
  mainPageStatus.status = 'Playing'
  return res.status(200).json({ success: true })
}

module.exports.playli = async function(req, res) {
  const id = req.params.id
  const message = new Buffer.from(`pl,${id}`)
  await sock.send(message, 0, message.length, 12302, '127.0.0.1', (err) => {
    if (err) return res.status(500).json({ success: true, error: err })
  })
  io.emit('status', 'Playing')
  mainPageStatus.status = 'Playing'
  return res.status(200).json({ success: true })
}

module.exports.stop = function(req, res) {
  const message = new Buffer.from('stop')
  sock.send(message, 0, message.length, 12302, '127.0.0.1', (err) => {
    if (err) return res.status(500).json({ success: true, error: err })
  })
  io.emit('status', 'Stop')
  mainPageStatus.status = 'Stop'
  return res.status(200).json({ success: true })
}

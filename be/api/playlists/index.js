const express = require('express')
const router = express.Router();
const {
  Playlist_1,
  Playlist_2,
  Playlist_3,
  Playlist_4,
  Playlist_5,
  Playlist_6,
  Playlist_7,
  Playlist_8  
} = require('../models/Playlist.js')

const db_Playlist = [
  Playlist_1,
  Playlist_2,
  Playlist_3,
  Playlist_4,
  Playlist_5,
  Playlist_6,
  Playlist_7,
  Playlist_8
]

module.exports.getPlaylist = async function(req, res) {
  const id = req.params.id
  if (id < 8) {
    const playlist = await db_Playlist[id].find({}).select({ _id: 0 })
    return res.status(200).json(playlist)
  }
  return res.status(422).json({ message: 'Id is out of range' })
}

module.exports.postPlaylist = async function(req, res) {
  const id = req.body.id
  const list = req.body.list
    if (id < 8) {
    try {
      await db_Playlist[id].deleteMany()
      const rtlist = await db_Playlist[id].insertMany(list)
      return res.status(200).json(rtlist)
    } catch (err) {
      return res.status(500).json({ message: err })
    }
  }
  return res.status(422).json({ message: 'Id is out of range' })
}

module.exports.addPlaylist = async function(req, res) {
  const id = req.body.id
  const files = req.body.file
  const listLength = await db_Playlist[id].countDocuments({})
  for (let i = 0; i < files.length; i++) {
    files[i].playid = listLength + i
  }
  await db_Playlist[id].insertMany(files)
  const rtlist = await db_Playlist[id].find({}).select({ _id: 0 })
  return res.status(200).json(rtlist)
}

var express = require('express');
var router = express.Router();

const playlist = require('../api/playlists')

/* GET users listing. */
router.post('/api/playlist', playlist.postPlaylist)
router.get('/api/playlist/:id', playlist.getPlaylist)
router.post('/api/addPlaylist', playlist.addPlaylist)

module.exports = router;

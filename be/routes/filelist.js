var express = require('express');
var router = express.Router();
const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(301).redirect('/login')
  }
}


const Filelist = require('../api/filelist')

/* GET users listing. */
router.get('/api/filelist/refrash', isAuthenticated, Filelist.refrash)
router.get('/api/filelist/filelist', isAuthenticated, Filelist.getFilelist)
router.get('/api/filelist/preview/:file', isAuthenticated, Filelist.preview)
router.post('/api/filelist/del', isAuthenticated, Filelist.del)
router.post('/api/filelist/upload', isAuthenticated, Filelist.upload)

module.exports = router;

const passport = require('passport')
const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports.register = async function(req, res) {
  
  const currentEmail = await User.findOne({ email: req.body.data.email })
  if (currentEmail !== null) {
    return res.status(500).json({ message: 'This email is already use' })
  }
  const currentId = await User.findOne({ id: req.body.data.id })
  if (currentId !== null) {
    return res.status(500).json({ message: 'This id is already use' })
  }
  const user = new User({
    id: req.body.data.id,
    name: req.body.data.name,
    email: reqw.body.data.email,
    password: req.body.data.password
  })
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(user.password, salt)
  user.password = hash

  user.save((err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error on register' })
    }
    return res.status(200).json({
      message: 'user save complate', _id: user._id
    })
  })
}

module.exports.login = function(req, res, next) {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) { return res.status(403).json(info) }
    return req.login(user, (err) => {
      if (err) { return next(err) }
      return res.status(200).json({ user })
    })
  }) (req, res, next)
}

module.exports.user = function(req, res) {
  if (req.isAuthenticated() && req.user) {
    return res.status(200).json({ user: req.user });
  }
  return res.redirect('/')
}

module.exports.logout = function(req, res) {
  req.logout()
  return res.status(200).json({
    message: 'Logout complate',
    user: null
  })
}
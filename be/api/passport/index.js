const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User.js")
const bcrypt = require('bcrypt')

exports.config = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  });

  passport.deserializeUser((id, done) => {
    const result = User.findOne({ id: id },(err, user) => {
      if (err) return console.log(err)
      done(null, user);
    })
  });

  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, (id, password, done) => {
    const result = User.findOne({ id: id }, (err, user) => {
      if (err) return console.log(err)
      if (!user) {
        done(null, false, { message: "가입되지 않은 사용자"});
      } else {
        if (bcrypt.compareSync(password,user.password)) {
          done(null, user)
        } else {
          done(null, false, { message: "비밀번호를 확인하세요"});
        }
      }
    })
  }))
};

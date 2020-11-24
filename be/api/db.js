const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/MediaServer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  connectTimeoutMS: 1000
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'db Connection Error:'))

db.once('open', () => {
  console.log('MongoDB connected...')
})

module.exports = db

const mongoose = require('mongoose')

const ScheduleSchema = new mongoose.Schema({
  name: { type: String },
  start: { type: Number },
  end: { type: Number },
  color: { type: String },
  mode: { type: String },
  event: { type: String },
  playlist: { type: Number },
  file: { type: String },
  timed: { type: Boolean }
})

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = Schedule
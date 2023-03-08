const mongoose = require('mongoose');

const DutyScheduleSchema = new mongoose.Schema({

  nurse_id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  reservation: {type: String,
    default: null
  },
  capacity: {type: String,
    default: null
  },
  created_at:{
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updated_at:{
    type: Date,
    default: () => Date.now(),
  },
})

module.exports = mongoose.model('duty_schedule', DutyScheduleSchema)
const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({

  reservation_id: {
    type: String,
    required: true,
  },
  reservation_collection_index: {
    type: String,
    required: true,
  },
  resident_id: {type: String,
    default: null
  },
  nurse_id: {type: String,
    default: null
  },
  date: {type: String,
    default: null
  },
  time_slot:{
    type: String,
    default: null
  },
  center_id:{
    type: String,
    default: null
  },
  status:{
    type: String,
    default: "active"
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

module.exports = mongoose.model('reservation', ReservationSchema)
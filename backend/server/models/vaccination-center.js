const mongoose = require('mongoose');

const vaccinationCenterSchema = new mongoose.Schema({

  center_id: {
    type: String,
    required: true,
  },
  center_collection_index: {
    type: String,
    required: true,
  },
  center_name: {type: String,
    default: null
  },
 center_address: {type: String,
    default: null
  },
  reservation_capacity: {type: String,
    default: null
  },
  status: {type: String,
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

module.exports = mongoose.model('vaccination_center', vaccinationCenterSchema)
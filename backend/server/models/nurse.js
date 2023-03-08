const mongoose = require('mongoose');

const vaccinationCenterSchema = new mongoose.Schema({

  nurse_id: {
    type: String,
    required: true,
  },
  nurse_collection_index: {
    type: String,
    required: true,
  },
  nurse_name: {type: String,
    default: null
  },
  center_id: {type: String,
    default: null
  },
  available_dates: {type: String,
    default: null
  },
  occupied_dates: {type: String,
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

module.exports = mongoose.model('nurse', vaccinationCenterSchema)
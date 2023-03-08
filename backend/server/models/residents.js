const mongoose = require('mongoose');

const ResidentSchema = new mongoose.Schema({

  resident_id: {
    type: String,
    required: true,
  },
  resident_collection_index: {
    type: String,
    required: true,
  },
  resident_name: {type: String,
    default: null
  },
  resident_address: {type: String,
    default: null
  },
  resident_phone: {type: String,
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

module.exports = mongoose.model('resident', ResidentSchema)
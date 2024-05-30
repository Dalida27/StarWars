const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  place:{
    type: String,
    required: true
  },
  istring:{
    type: String,
    required: true
  },
  inumbers:{
    type: Number,
    required: true
  },
  imageurls: [],
  type:{
    type: String,
    required: true   
  },
  description : {
    type: String,
    required: true
  }

}, {
  timestamps: true,
})

const eventModel = mongoose.model('events', eventSchema)

module.exports = eventModel
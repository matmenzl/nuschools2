var mongoose = require("mongoose");

var requestSchema = mongoose.Schema({
  group:   { type: mongoose.Schema.ObjectId, ref: 'Group' },
  owner:   { type: mongoose.Schema.ObjectId, ref: 'User' },
  teacher: { type: mongoose.Schema.ObjectId, ref: 'User' },
  status:  { type: Boolean, default: false, required: true }
})

module.exports = mongoose.model("Request", requestSchema);
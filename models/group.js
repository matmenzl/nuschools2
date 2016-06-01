var mongoose = require("mongoose");

// To do: Add capacity-limit to group-schema

var statuses = ["pending", "accepted", "rejected"];
var roles    = ["teacher", "student"];

var requestSchema = mongoose.Schema({
  sender: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  type:   { type: String, enum: roles, default: "student", required: true },
  status: { type: String, enum: statuses, default: "pending", required: true }
})

var groupSchema = mongoose.Schema({
  title:       { type: String, unique: true, required: true },
  description: { type: String },
  image:       { type: String },
  owner:       { type: mongoose.Schema.ObjectId, ref: 'User' },
  teacher:     { type: mongoose.Schema.ObjectId, ref: 'User' },
  students:    [{ type: mongoose.Schema.ObjectId, ref: 'User' }], // Pokemon Trainers, $addToSet
  requests:    [requestSchema]
  }, {
  timestamps: true
});

module.exports = mongoose.model("Group", groupSchema);



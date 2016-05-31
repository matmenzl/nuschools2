var mongoose = require("mongoose");

// To do: Add capacity-limit to group-schema

var groupSchema = mongoose.Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String },
  image: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  teacher: { type: mongoose.Schema.ObjectId, ref: 'User' },
  students: [{ type: mongoose.Schema.ObjectId, ref: 'User' }], // Pokemon Trainers, $addToSet
  }, {
  timestamps: true
});

module.exports = mongoose.model("Group", groupSchema);



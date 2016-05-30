var mongoose = require("mongoose");

var groupSchema = mongoose.Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String },
  image: { type: String },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },
  teacher: { type: mongoose.Schema.ObjectId, ref: 'User' },
  students: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  }, {
  timestamps: true
});

module.exports = mongoose.model("Group", groupSchema);
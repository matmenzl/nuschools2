var mongoose = require("mongoose");

var groupSchema = mongoose.Schema(
  {
    title: { type: String, unique: true, required: true },
    description: { type: String },
    studentNumber: { type: Number },
    lookingForStudents: { type: Boolean },
    lookingForTeacher: { type: Boolean },
    image: { type: String }
  }, {
  user: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model("Group", groupSchema);
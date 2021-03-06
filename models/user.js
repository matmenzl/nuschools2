var mongoose = require("mongoose");
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  username: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  teacher: { type: Boolean },
  zip: { type: String },
  city: { type: String },
  image: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  groups: [{ type: mongoose.Schema.ObjectId, ref: 'Group' }]
});

// INCLUDE PASSWORD CONFIRMATION

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

userSchema.options.toJSON = {
  transform: function(doc, ret, options) {
    delete ret.password;
    delete ret.__v;
    return ret;
  }
};

module.exports = mongoose.model("User", userSchema);
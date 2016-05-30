var LocalStrategy = require("passport-local").Strategy;
var User          = require("../models/user");

module.exports = function(passport) {

  passport.use('local-signup', new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
  }, function(req, email, password, done) {

    // Find a user with this email
    User.findOne({ 'local.email' : email }, function(err, user) {
      // Error found
      if (err) return done(err, false, { message: "Something went wrong." });

      // No error but already an user registered
      if (user) return done(null, false, { message: "Please choose another email." });

      var newUser       = new User();
      newUser.email     = email;
      newUser.username  = req.body.username;
      newUser.firstname = req.body.firstname;
      newUser.lastname  = req.body.lastname;
      newUser.zip       = req.body.zip;
      newUser.city      = req.body.city;
      newUser.teacher   = req.body.teacher;

      newUser.image     = req.body.image;
      newUser.password  = User.encrypt(password);

      newUser.save(function(err, user) {
        // Error found
        console.log(err)
        if (err) return done(err, false, { message: "Something went wrong." });
        
        // New user created
        return done(null, user);
      });
    });
  }));
  
}
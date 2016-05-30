var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/angular-authentication');

var Group = require("../models/group");

var group1 = new Group({
  title: "Angular JS",
  description: "learn angular js",
  link: "https://www.angularjs.com",
  studentNumber: 1,
  lookingForStudents: true,
  lookingForTeacher: true,
  image: "http://fillmurray.com/320/320",
}, {
  user: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]

})

group1.save(function(err, thing){
  if (err) return console.log(err);
  console.log("group saved", thing);
})


// user-id:   573d9b54727feb2f1f018a0e

























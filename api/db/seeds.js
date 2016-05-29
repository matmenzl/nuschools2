var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/angular-authentication');

var Group = require("../models/group");

var group1 = new Group({
  title: "Angular JS",
  description: "learn angular js",
  link: "https://www.angularjs.com",
  studentNumber: 1,
  lookingForStudents: yes,
  lookingForTeacher: yes,
  image: "http://fillmurray.com/320/320",
})

group1.save(function(err, thing){
  if (err) return console.log(err);
  console.log("group saved", thing);
})

























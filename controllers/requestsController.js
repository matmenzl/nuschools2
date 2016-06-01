var Group = require("../models/group");

function requestsIndex(req, res, next){
  Group 
  .find({ owner: req.currentUser._id})
  .populate(["group", "requests.sender"])
  .exec(function(err, groups){
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    return res.status(200).json({groups: groups});
  })
}

/*
 * POST
 * group: group._id
 * owner: owner._id
 */
function requestsCreate(req, res, next){
  Group.findOneAndUpdate({
    _id: req.body.group_id,
    "requests.sender": { $ne: req.currentUser._id },
    owner: { $ne: req.currentUser._id },
  }, {
    $addToSet: { 
      "requests": {
        "sender": req.currentUser._id,
        "type": req.body.type
      }
    }
  }, function(err, group){
    console.log(err, group)
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (!group) return res.status(201).json({message: "Request already sent"});
    return res.status(201).json({message: "Request sent"});
  });
}

function requestsAccept(req, res, next){
  Group.findOne({
    "requests._id": req.params.id,
    owner: req.currentUser._id,
  }, function(err, group) {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    var request = group.requests.id(req.params.id);
    if (request.type === "teacher") {
      group.teacher = request.sender;
    } else if (request.type === "student") {
      group.students.push(request.sender)
    }
    request.status = "accepted";
    group.save(function(err, group){
      if (err) return res.status(500).json({message: 'Something went wrong.'});
      return res.status(201).json({message: "Request accepted"});
    })
  })
}

function requestsReject(req, res, next){
  
}

module.exports = {
  requestsIndex:  requestsIndex,
  requestsCreate: requestsCreate,
  requestsAccept: requestsAccept,
  requestsReject: requestsReject,
}
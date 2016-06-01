var Request = require("../models/request");

function requestsIndex(req, res, next){
  Request 
  .find({ owner: req.currentUser._id })
  .populate(["teacher", "group", "students"])
  .exec(function(err, requests){
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    return res.status(200).json({requests: requests});
  })
}

/*
 * POST
 * group: group._id
 * owner: owner._id
 */
function requestsCreate(req, res, next){
  Request.find({
    teacher: req.currentUser._id,
    group: req.body.group
  }, function(err, requests){
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (requests.length > 0) return res.status(201).json({message: 'There is already a pending request.'});
    var request = new Request(req.body)
    request.teacher = req.currentUser._id;

    request.save(function(err, request){
      if (err) return res.status(500).json({message: 'Something went wrong.'});
      return res.status(201).json({request: request});
    })
  })
}

function requestsAccept(req, res, next){

}

function requestsReject(req, res, next){
  
}

module.exports = {
  requestsIndex:  requestsIndex,
  requestsCreate: requestsCreate,
  requestsAccept: requestsAccept,
  requestsReject: requestsReject,
}
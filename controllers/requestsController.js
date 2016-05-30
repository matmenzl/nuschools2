var Request = require("../models/request");

function requestsIndex(req, res, next){
  Request 
  .find({ owner: req.user._id })
  .populate(["teacher", "group"])
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
  var request = new Request(req.body)
  request.teacher = req.user._id;

  request.save(function(err, request){
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    return res.status(201).json({request: request});
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
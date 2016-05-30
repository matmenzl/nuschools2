var Group   = require('../models/group');

function groupsIndex(req, res) {
  // Find a users' groups
  if (req.params.id) {
    Group.find({ user: req.params.id }, function(err, groups){
      if (err) return res.status(404).json({message: 'Something went wrong.'});
      return res.status(200).json({ groups: groups });
    });
  }

  // Find all groups
  Group.find(function(err, groups){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    return res.status(200).json({ groups: groups });
  });
}

function groupsCreate(req, res) {
  var group   = new Group(req.body);
  group.owner = req.user._id;

  // If you have selected to teach this class, you will be assigned as the teacher
  if (req.body.teach) {
    group.teacher = req.user._id;
  } 

  group.save(function(err, group) {
    if (err) return res.json({messsage: err});
    return res.status(200).json({group: group});
  });
}

function groupsShow(req, res){
  Group
  .findById(req.params.id)
  .populate(["owner", "teacher", "students"])
  .exec(function(err, group){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    return res.status(200).json({ group: group });
  });
}

function groupsUpdate(req, res){
  Group.findById(req.params.id,  function(err, user) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!user) return res.status(404).json({message: 'No group found.'});

    if (req.body.email) user.local.email = req.body.name;
    if (req.body.password) user.local.password = req.body.password;

    group.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'Group successfully updated.', group: group});
    });
  });
}

function groupsDelete(req, res){
  Group.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'Group has been successfully deleted'});
  });
}

module.exports = {
  groupsIndex:  groupsIndex,
  groupsCreate: groupsCreate,
  groupsShow:   groupsShow,
  groupsUpdate: groupsUpdate,
  groupsDelete: groupsDelete
};

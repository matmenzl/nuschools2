var Group   = require('../models/group');

function groupsIndex(req, res) {
  Group.find(function(err, groups){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ groups: groups });
  });
}

function groupsCreate(req, res) {
  console.log('hello');
  var group = new Group(request.body);
  group.save(function(error) {
    if(error) response.json({messsage: error});
    response.json({group: group});
  });
}


// function groupsCreate(req, res){
//   var group = new Group(req.body.group);
//   group.save(function(err){
//     if (err) return res.status(500).send(err);
//     var name = req.body.group.user;
//     User.findOne({ username: username }, function(err, user){
//       user.groups.push(group);
//       user.save(function(err, user) {
//         res.status(201).send(group);
//       });
//     });
//   });
// }

function groupsShow(req, res){
  Group.findById(req.params.id, function(err, user){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json({ group: group });
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

angular
  .module('nuschools')
  .controller('GroupsIndexController', GroupsIndexController);

GroupsIndexController.$inject = ['Group', '$state', 'Request'];
function GroupsIndexController(Group, $state, Request){

  var self = this;

  self.all            = [];
  self.requestToTeach = requestToTeach;
  self.requestToStudy = requestToStudy;

  Group.query(function(data){
    self.all = data.groups;
  });

  function requestToTeach(group_id, owner_id){
    Request.save({ group: group_id, owner: owner_id}).$promise.then(function(data){
      console.log(data);
    })
  }

  function requestToStudy(group_id, owner_id){
    Request.save({ group: group_id, owner: owner_id}).$promise.then(function(data){
      console.log(data);
    })
  }

  return self;
}

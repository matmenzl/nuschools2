angular
  .module('nuschools')
  .controller('GroupsIndexController', GroupsIndexController);

GroupsIndexController.$inject = ['Group', '$state', 'Request'];
function GroupsIndexController(Group, $state, Request){

  var self = this;

  self.all            = [];
  self.getGroups      = getGroups;
  self.requestToTeach = requestToTeach;
  self.requestToStudy = requestToStudy;


  function getGroups() {
    Group.query(function(data){
      self.all = data.groups;
    });
  }

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


  // Should only call when you are logged in
  getGroups();

  return self;
}

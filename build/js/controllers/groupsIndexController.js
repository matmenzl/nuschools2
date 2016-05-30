angular
  .module('nuschools')
  .controller('GroupsIndexController', GroupsIndexController);

GroupsIndexController.$inject = ['Group', '$state'];
function GroupsIndexController(Group, $state){

  var self = this;

  self.all            = [];
  self.getGroups      = getGroups;

  function getGroups() {
    Group.query(function(data){
      self.all = data.groups;
    });
  }

  // Should only call when you are logged in
  getGroups();

  return self;
}

angular
  .module('nuschools')
  .controller('GroupsController', GroupsController);

GroupsController.$inject = ['Group', '$state'];
function GroupsController(Group, $state){

  var self = this;

  self.all            = [];
  self.group          = null;
  self.error          = null;
  self.getGroups      = getGroups;

  function getGroups() {
    Group.query(function(data){
      self.all = data.groups;
    });
  }


  return self;
}

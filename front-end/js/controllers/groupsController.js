angular
  .module('nuschools')
  .controller('GroupsController', GroupsController);

GroupsController.$inject = ['Group', '$state', '$scope'];
function GroupsController(Group, $state, $scope){

  var self = this;

  self.group          = {};
  self.getGroups      = getGroups;
  self.createGroup    = createGroup;

  function getGroups() {
    Group.query(function(data){
      self.all = data.groups;
    });
  }

  function createGroup(){
    var user = $scope.$parent.groups.group;
    self.group.user = user.username;

    Group.save({ group: self.group }, function(group) {
      user.groups.push(group);
      self.group = {};
    });
  }

  return self;
}

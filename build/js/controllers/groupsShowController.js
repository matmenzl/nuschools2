angular
  .module('nuschools')
  .controller('GroupsShowController', GroupsShowController);

GroupsShowController.$inject = ['Group', '$stateParams'];
function GroupsShowController(Group, $stateParams){

  var self = this;

  function getGroup() {
    Group.get($stateParams, function(data){
      self.group = data.group;
    });
  }

  getGroup();

  return self;
}

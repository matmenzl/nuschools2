angular
  .module('nuschools')
  .controller('GroupsNewController', GroupsNewController);

GroupsNewController.$inject = ['Group', '$state', '$stateParams'];
function GroupsNewController(Group, $state, $stateParams){

  var self         = this;
  self.createGroup = createGroup;

  function createGroup(){
    Group.save(self.group).$promise.then(function(data) {
      $state.go("groupsIndex");
    }); 
  }

  return self;
}

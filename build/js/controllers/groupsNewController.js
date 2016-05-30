angular
  .module('nuschools')
  .controller('GroupsNewController', GroupsNewController);

GroupsNewController.$inject = ['Group', '$state', '$stateParams'];
function GroupsNewController(Group, $state, $stateParams){

  var self         = this;
  self.createGroup = createGroup;

  function createGroup(){
    console.log("Submitted")
    Group.save(self.group).$promise.then(function(data) {
      console.log(data)
      $state.go("groupsIndex");
    });
  }

  return self;
}

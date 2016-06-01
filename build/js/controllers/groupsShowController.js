angular
  .module('nuschools')
  .controller('GroupsShowController', GroupsShowController);

GroupsShowController.$inject = ['Group', '$stateParams', '$state'];
function GroupsShowController(Group, $stateParams, $state){

  var self         = this;
  self.deleteGroup = deleteGroup;

  Group.get($stateParams, function(data){
    self.group = data.group;
  });

  function deleteGroup(group) {
    Group.remove($stateParams, function(){
      $state.go("groupsIndex")
    });
  }


  function updateGroup(group) {
   if (self.group._id) {
      Group.update({ id: self.group._id }, { user: self.group }, function(){
      self.group = {};
      });
    }
  }

  return self;

}

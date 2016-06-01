angular
  .module('nuschools')
  .controller('GroupsShowController', GroupsShowController);

GroupsShowController.$inject = ['Group', '$stateParams'];
function GroupsShowController(Group, $stateParams){

  var self    = this;

  Group.get($stateParams, function(data){
    self.group = data.group;
  });

  function deleteGroup(group) {
     self.group = Group.get($stateParams);
     self.delete = function(){
     Group.remove($stateParams, function(){
     $state.go("groupsIndex")
     });
    }
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

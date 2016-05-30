angular
  .module('nuschools')
  .controller('GroupsIndexController', GroupsIndexController);

GroupsIndexController.$inject = ['Group', '$state'];
function GroupsIndexController(Group, $state){

  var self = this;

  self.all            = [];
  self.getGroups      = getGroups;
  self.createGroup    = createGroup;

  function getGroups() {
    Group.query(function(data){
      self.all = data.groups;
      console.log(data);
    });
  }

  function createGroup(){
    Group.save(self.group).$promise.then(function(data) {
      console.log(data);
      self.all.push(data.group);
      self.group = null;
    });
  }

  // Should only call when you are logged in
  getGroups();

  return self;
}

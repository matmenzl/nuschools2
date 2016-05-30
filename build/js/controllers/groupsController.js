angular
  .module('nuschools')
  .controller('GroupsController', GroupsController);

GroupsController.$inject = ['Group', '$state'];
function GroupsController(Group, $state){

  var self = this;

  self.all            = [];
  self.getGroups      = getGroups;
  self.createGroup    = createGroup;

  function getGroups() {
    console.log("0");
    Group.query(function(data){
      self.all = data.groups;
      console.log(data);
    });
  }

  function createGroup(){
    Group.save(function(data) {
      group.push(group);
      self.all = [];
    });
  }
  return self;
}

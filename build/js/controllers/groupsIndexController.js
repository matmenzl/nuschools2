angular
  .module('nuschools')
  .controller('GroupsIndexController', GroupsIndexController);

GroupsIndexController.$inject = ['Group', '$state', 'Request'];
function GroupsIndexController(Group, $state, Request){

  var self = this;

  self.all            = [];
  self.sendRequest    = sendRequest;

  Group.query(function(data){
    self.all = data.groups;
  });

  function sendRequest(group_id, type){
    Request.save({ group_id: group_id, type: type}).$promise.then(function(data){
      console.log(data);
    })
  }

  return self;
}

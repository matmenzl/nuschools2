angular
  .module('nuschools')
  .controller('TeachersShowController', TeachersShowController);

TeachersShowController.$inject = ['Group', 'Teachers', '$stateParams'];
function TeachersShowController(Group, 'Teachers', $stateParams){

  var self        = this;
  var getGroup    = getGroup;
  var getTeachers = getTeachers;

  function getTeachers() {
    Group.get($stateParams, function(data){
      self.group = data.group;
      // get the teachers within a group...
    });
  }

  getGroup();

  return self;

}
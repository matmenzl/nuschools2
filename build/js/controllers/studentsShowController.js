angular
  .module('nuschools')
  .controller('StudentsShowController', StudentsShowController);

StudentsShowController.$inject = ['Group', 'Students', '$stateParams'];
function StudentsShowController(Group, 'Students', $stateParams){

  var self        = this;
  var getGroup    = getGroup;
  var getStudents = getStudents;

  function getStudents() {
    Group.get($stateParams, function(data){
      self.group = data.group;
      //get the students within a group...
    });
  }

  getStudents();

  return self;

}
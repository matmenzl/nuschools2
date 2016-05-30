angular
.module('nuschools')
.controller('UsersShowController', UsersShowController);

UsersShowController.$inject = ['User', '$stateParams'];
function UsersShowController(User, $stateParams){

  var self = this;

  function getUser() {
    User.get($stateParams, function(data){
      self.user = data.user;
    });
  }

  getUser();
  
  return self;
}

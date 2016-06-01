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

  function deleteUser() {
     self.user = User.get($stateParams);
     self.delete = function(){
     User.remove($stateParams, function(){
     $state.go("usersIndex")
     });
    }
  }

}

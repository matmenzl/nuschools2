angular
.module('nuschools')
.controller('UsersShowController', UsersShowController);

UsersShowController.$inject = ['User', '$stateParams'];
function UsersShowController(User, $stateParams){

  var self = this;
  self.user = user; 


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

  function updateUser() {
   if (self.user._id) {
      User.update({ id: self.user._id }, { user: self.user }, function(){
      self.user = {};
      });
    }
  }
}

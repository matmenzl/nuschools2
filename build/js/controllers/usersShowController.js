angular
.module('nuschools')
.controller('UsersShowController', UsersShowController);

UsersShowController.$inject = ['User', '$stateParams', '$state'];
function UsersShowController(User, $stateParams, $state){

  var self   = this;
  self.deleteUser = deleteUser;


  User.get($stateParams, function(data){
    self.user = data.user;
  });

  function deleteUser(user){
    User.remove($stateParams, function(){
      $state.go("usersIndex")
    })
  }

  function updateUser(user) {
   if (self.user._id) {
      User.update({ id: self.user._id }, { user: self.user }, function(){
      self.user = {};
      });
    }
  }

  return self;
}

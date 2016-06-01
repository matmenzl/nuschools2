angular
.module('nuschools')
.controller('UsersShowController', UsersShowController);

UsersShowController.$inject = ['User', '$stateParams'];
function UsersShowController(User, $stateParams){

  var self   = this;

  User.get($stateParams, function(data){
    self.user = data.user;
  });

  function deleteUser(user){
    User.delete({id: user._id});
    var index = self.users.indexOf(user);
    self.users.splice(index, 1);
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

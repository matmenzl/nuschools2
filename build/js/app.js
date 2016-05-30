angular
  .module('nuschools', ['ngResource', 'angular-jwt', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    })

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/home.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "../views/authentications/login.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "../views/authentications/register.html"
    })
    .state('users', {
      url: "/users",
      templateUrl: "../views/users/index.html"
    })
    .state('user', {
      url: "/users/:id",
      templateUrl: "../views/users/show.html",
      controller: function($scope, $stateParams, User) {
        User.get({ id: $stateParams.id }, function(res){
          $scope.$parent.users.user = res.user;
        });
      }
    })
    .state('groups', {
      url: "/groups",
      templateUrl: "../views/groups/index.html"
    })
    .state('group', {
      url: "/groups/:id",
      templateUrl: "../views/groups/show.html",
      controller: function($scope, $stateParams, Group) {
        Group.get({ id: $stateParams.id}, function(res){
          $scope.$parent.groups.group = res.group;
        });
      }
    });

  $urlRouterProvider.otherwise("/");
}

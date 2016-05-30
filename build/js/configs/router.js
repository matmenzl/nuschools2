angular
  .module('nuschools')
  .config(MainRouter);

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
    .state('usersIndex', {
      url: "/users",
      templateUrl: "../views/users/index.html"
    })
    .state('usersShow', {
      url: "/users/:id",
      templateUrl: "../views/users/show.html",
      controller: "UsersShowController",
      controllerAs: "users"
    })
    .state('groupsIndex', {
      url: "/groups",
      templateUrl: "../views/groups/index.html",
      controller: "GroupsIndexController",
      controllerAs: "groups"
    })
    .state('groupsNew', {
      url: "/groups/new",
      templateUrl: "../views/groups/new.html",
      controller: "GroupsNewController",
      controllerAs: "groups"
    })
    .state('groupsShow', {
      url: "/groups/:id",
      templateUrl: "../views/groups/show.html",
      controller: "GroupsShowController",
      controllerAs: "groups"
    });

  $urlRouterProvider.otherwise("/");
}
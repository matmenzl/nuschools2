angular
  .module('nuschools', ['ngResource', 'angular-jwt', 'ui.router'])
  .config(function($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
    });
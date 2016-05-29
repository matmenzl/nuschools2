angular
  .module('nuschools')
  .factory('Group', Group);

Group.$inject = ['$resource', 'API'];
function Group($resource, API){

  return $resource(
    API+'/groups/:id', {id: '@id'},
    { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: false},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
    });
}

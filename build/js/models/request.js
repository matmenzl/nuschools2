angular
  .module('nuschools')
  .factory('Request', Request);

Request.$inject = ['$resource', 'API'];
function Request($resource, API){

  return $resource(
    API+'/requests/:id', {id: '@id'},
    { 
      'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: false},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
      'accept': {
        url: API + '/requests/:id/accept',
        method: "POST"
      },
      'reject':      {
        url: API +  '/requests/:id/reject',
        method: "POST"
      }
    });
}

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
        url: API + '/request/:id/accept',
        method: "POST"
      },
      'reject':      {
        url: API +  '/request/:id/reject',
        method: "POST"
      }
    });
}

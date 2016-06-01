angular
  .module('nuschools')
  .controller('RequestsIndexController', RequestsIndexController);

RequestsIndexController.$inject = ['Request'];
function RequestsIndexController(Request){

  var self    = this;
  self.accept = accept;

  Request.query(function(data){
    self.all = data.groups;
  });

  function accept(request){
    Request.accept({id: request._id, type: request.type }, function(data){
      console.log(data)
    })
  }

  return self;
}

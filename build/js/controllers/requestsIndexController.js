angular
  .module('nuschools')
  .controller('RequestsIndexController', RequestsIndexController);

RequestsIndexController.$inject = ['Request'];
function RequestsIndexController(Request){

  var self    = this;
  self.accept = accept;
  self.reject = reject;

  Request.query(function(data){
    self.all = data.groups;
  });

  function accept(request){
    Request.accept({id: request._id, type: request.type }, function(data){
      Request.query(function(data){
        self.all = data.groups;
      });
    })
  }

  function reject(request){
    console.log("Clicked")
    Request.reject({id: request._id }, function(data){
      Request.query(function(data){
        self.all = data.groups;
      });
    })
  }

  return self;
}

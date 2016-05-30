angular
  .module('nuschools')
  .controller('RequestsIndexController', RequestsIndexController);

RequestsIndexController.$inject = ['Request'];
function RequestsIndexController(Request){

  var self          = this;

  self.all          = [];
  self.getRequests  = getRequests;

  function getRequests() {
    Request.query(function(data){
      self.all = data.requests;
    });
  }

  // Should only call when you are logged in
  getRequests();

  return self;
}

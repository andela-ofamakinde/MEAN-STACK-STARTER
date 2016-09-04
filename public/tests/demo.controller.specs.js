describe("Angular Module should be defined", function() {
  var createController, $rootScope;

  beforeEach(function() {
    angular.mock.module("Demo.controllers");
  });

  beforeEach(inject(function($injector) {
    $rootScope = $injector.get("$rootScope");

    var $controller = $injector.get("$controller");


    createController = function() {
      return $controller('DemoCtrl', {'$scope': $rootScope })
    }

 }));

  it("should return current status", function() {
    var controller = createController();

    expect($rootScope.status).toEqual("pending");

    $rootScope.getDemo();

    expect($rootScope.status).toEqual("done");
  });

});
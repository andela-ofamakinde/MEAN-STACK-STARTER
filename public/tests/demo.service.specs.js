describe("DEMO service test", function() {
  var DemoFac, $httpBackend, demoRequestHAndler;
  
  beforeEach(function() {
    angular.mock.module("Demo.factories");
  });

  beforeEach(inject(function($injector){
    DemoFac = $injector.get("DemoFac");
    $httpBackend = $injector.get("$httpBackend");

  }));

  afterEach(function(){
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  })

  it("should exist", function(){
    expect(DemoFac).toBeDefined();
  });

  it("should return name", function(){
    expect(DemoFac.getName()).toEqual("olatoyosi");
  });


  it("should food search name", function(){
    var mockData = [{
      name: "demo1"
    },
    {
      name: "demo2"
    }];

    $httpBackend.expectGET('http://localhost:3000/api/demo').respond(mockData);

    var promise = DemoFac.getDemo();
    var result;

    promise.then(function(response){
      result = response;
    })

    $httpBackend.flush();

    expect(result).toEqual(mockData);

  });
})
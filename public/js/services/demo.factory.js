angular.module("Demo.factories", [])
  .constant('OPTIONS', "http://localhost:3000/api")
  .factory("DemoFac", function($http){

    return {
      getName: function() {
        var name = "olatoyosi";
        return name;
      },

      getDemo: function() {
        var url = OPTIONS + "/demo";
        return $http.get(url).then(function(res){
          return res.data;
        })
      }

    }

  });
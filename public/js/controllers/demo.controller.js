(function() {
  angular.module("Demo.controllers", [])
  .controller("DemoCtrl", ["$scope", function($scope){
    $scope.status = "pending";

    $scope.getDemo = function() {
      $scope.status = "done";
    }
  }])

})()
(function(){

  var app = angular.module('myCalculator', []);

  app.controller('CalculatorController', ['$scope', function($scope){

    $scope.lumen_options = [375, 600, 900, 1125, 1600];
    $scope.current_lumens = 600;
    $scope.current_cost = 12;
    $scope.current_hours = 3;
    $scope.total_days = 365;

  }]);



})();



var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name' : 'Ray Villalobos',
    'title' : 'Staff Author',
    'company' : 'Lynda.com'
  }
});


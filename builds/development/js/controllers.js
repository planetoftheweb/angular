var artistControllers = angular.module('artistControllers', ['ngAnimate', 'firebase']);

artistControllers.controller('ListController', ['$scope', '$firebase', function($scope, $firebase) {
    var ref = new Firebase("https://artistlist.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.artists = sync.$asObject();
    $scope.artistOrder = 'name';
}]);

artistControllers.controller('DetailsController', ['$scope', '$firebase', '$routeParams', function($scope, $firebase, $routeParams) {
    var ref = new Firebase("https://artistlist.firebaseio.com/");
    var sync = $firebase(ref);
    $scope.artists = sync.$asObject();

    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }
}]);


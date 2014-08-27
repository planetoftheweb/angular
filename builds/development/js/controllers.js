var artistControllers = angular.module('artistControllers', ['ngAnimate', 'firebase']);

artistControllers.controller('ListController', ['$scope', '$firebase', function($scope, $firebase) {
    var ref = new Firebase("https://artistlist.firebaseio.com/");
    var data = $firebase(ref);
    $scope.artists = data.$asArray();
    $scope.artistOrder = 'name';
}]);

artistControllers.controller('DetailsController', ['$scope', '$firebase', '$routeParams', function($scope, $firebase, $routeParams) {
    var ref = new Firebase("https://artistlist.firebaseio.com/");
    $scope.whichItem = $routeParams.itemId;
    $scope.artists = $firebase(ref).$asArray();
    $scope.artists.$loaded(function() {
      if (Number($routeParams.itemId) > 0) {
        $scope.prevItem = Number($routeParams.itemId)-1;
      } else {
        $scope.prevItem = Number($scope.artists.length)-1;
      }

      if (Number($routeParams.itemId) < Number($scope.artists.length)-1) {
        $scope.nextItem = Number($routeParams.itemId)+1;
      } else {
        $scope.nextItem = 0;
      }
    });
}]);


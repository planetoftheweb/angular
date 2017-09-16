03_03_Details_Partial

# Introduction
We have the basic structure so that our application can handle routing, but we're only using a single list partial, so all it does now is show a list view using the partial we created called list.

It would be good great to make the list elements click through to a more detailed view or the artist information. We'll do that by wiring up a second partial.


```
  when('/details/:itemId', {
  templateUrl: 'partials/details.html',
  controller: 'DetailsController'
  }).
```

Now that we have the route set up, we'll need to update our list controller so that it knows to send the right information to our details template.

```
  <a href="#/details/{{artists.indexOf(item)}}">
  </a>
```

Let's set up the controller that handles this

```
artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
  $scope.artists = data;
  $scope.whichItem = $routeParams.itemId;
  });
}]);
```
# Conclusion
We've got all of the basic wiring for our second partial, now all we have to do is build the template itself. We'll work on that in the next video.
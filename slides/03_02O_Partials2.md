03_02_Re-Configuring Your App
# Introduction
In the last movie, we talked about how we would go about organizing our application so that we could use Angular's Deep lining feature. That's going to allow us to pretend like our single page is an entire website.

In order to do that, we redefined our controllers.js file to handle only the controllers and not the entire application. We need to now configure a new module to take care of our application and define how the application handles navigating to different partials.

var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);
 
myApp.config(['$routeProvider', function($routeProvider) {
$routeProvider.
  when('/list', {
  templateUrl: 'partials/list.html',
  controller: 'ListController'
  }).
  otherwise({
  redirectTo: '/list'
  });
}]);

#Conclusion
Man, that was a lot of work for essentially getting our application to work just like before, but if you look at the URL of our application you'll notice a subtle difference. Creating partials is the best way of handling larger applications so what we learned here will be very useful to you as you create larger apps.